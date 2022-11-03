import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  SignedInRoute,
  UserRequiredRoute,
  ProtectedNode,
  AdminRoute,
} from './components/middlewares';
import {
  Register, Signin, Logout,
} from './components/pages/authentication';
import AddRoom from './components/pages/addroom/AddRoom';
import ReserveForm from './components/pages/add-reservation';
import RoomDetail from './components/pages/Room/roomDetail';
import Rooms from './components/pages/Room/Rooms';
import MyReserves from './components/pages/reservation';
import SideNav from './components/navigation/SideNav';
import SessionProvider from './contexts/session';

const App = () => (
  <SessionProvider>
    <Router>
      <ProtectedNode>
        <SideNav />
      </ProtectedNode>
      <section className="w-full">
        <Routes>
          <Route element={<SignedInRoute />}>
            <Route exact path="login" element={<Signin />} />
            <Route exact path="register" element={<Register />} />
          </Route>
          <Route element={<UserRequiredRoute />}>
            <Route exact path="rooms" element={<Rooms />} />
            <Route exact path="reserve" element={<ReserveForm />} />
            <Route exact path="rooms/:id" element={<RoomDetail />} />
            <Route exact path="logout" element={<Logout />} />
            <Route exact path="my-reservations" element={<MyReserves />} />
          </Route>

          <Route element={<AdminRoute />}>
            <Route exact path="add-room" element={<AddRoom />} />
            <Route exact path="delete-room" element={<></>} />
          </Route>
          <Route exact path="my-reservations" element={<MyReserves />} />
        </Routes>
      </section>
    </Router>
  </SessionProvider>
);

export default App;
