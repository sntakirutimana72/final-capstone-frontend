import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignedInRoute, UserRequiredRoute } from './components/middlewares';
import {
  Register,
  Signin,
  PasswordReset,
  NewPassword,
} from './components/pages/authentication';
import MyReserves from './components/pages/reservation';
import SideNav from './components/navigation/SideNav';
import SessionCtxProvider from './contexts/session';

const App = () => (
  <SessionCtxProvider>
    <Router>
      <SideNav />
      <section className="w-full">
        <Routes>
          <Route element={<SignedInRoute />}>
            <Route path="login" element={<Signin />} />
            <Route path="register" element={<Register />} />
            <Route path="set-new-password" element={<NewPassword />} />
            <Route path="reset-password" element={<PasswordReset />} />
          </Route>

          <Route element={<UserRequiredRoute />}>
            <Route exact path="/reservations/mine" element={<MyReserves />} />
          </Route>

          <Route exact path="/my-reservations" element={<MyReserves />} />
          {/* <Route exact path="/" />
          <Route exact path="/rooms" />
          <Route exact path="/reserve" />

          <Route exact path="/add-room" />
          <Route exact path="/delete-room" /> */}
        </Routes>
      </section>
    </Router>
  </SessionCtxProvider>
);

export default App;
