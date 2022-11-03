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
            <Route exact path="" element={<h1>Homepage</h1>} />
            <Route path="logout" element={<Logout />} />
            <Route path="my-reservations" element={<MyReserves />} />
            {/* All routes that require login go in here */}
          </Route>

          <Route element={<AdminRoute />}>
            <Route path="add-room" element={<></>} />
            <Route path="delete-room" element={<></>} />
          </Route>
        </Routes>
      </section>
    </Router>
  </SessionProvider>
);

export default App;
