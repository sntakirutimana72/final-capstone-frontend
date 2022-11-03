import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
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
            <Route path="login" element={<Signin />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route element={<UserRequiredRoute />}>
            <Route path="rooms" element={<Rooms />} />
            <Route path="reserve" element={<ReserveForm />} />
            <Route path="rooms/:id" element={<RoomDetail />} />
            <Route path="logout" element={<Logout />} />
            <Route path="my-reservations" element={<MyReserves />} />
            {/* All routes that require login go in here */}
          </Route>

          <Route element={<AdminRoute />}>
            <Route path="add-room" element={<AddRoom />} />
            <Route path="delete-room" element={<></>} />
          </Route>
          <Route path="my-reservations" element={<MyReserves />} />

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </section>
    </Router>
  </SessionProvider>
);

export default App;
