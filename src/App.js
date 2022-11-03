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
            <Route path="my-reservations" element={<MyReserves />} />
          </Route>
        </Routes>
      </section>
    </Router>
  </SessionCtxProvider>
);

export default App;
