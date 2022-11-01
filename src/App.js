import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './Components/SideNav/SideNav';
import AddReservatons from './Components/Reservation/AddReservations';
import { SignedInRoute, UserRequiredRoute } from './Components/middlewares';
import {
  Register,
  Signin,
  PasswordReset,
  NewPassword,
} from './Components/pages/authentication';
import MyReserves from './Components/pages/reservation';
import SideNav from './Components/navigation/SideNav';
import SessionCtxProvider from './contexts/session';

const App = () => {
  return (
    <SessionCtxProvider>
      <Router>
        <SideNav />
        <section className="w-full flex h-scree">
          <Routes>
            <Route element={<SignedInRoute />}>
              <Route path="login" element={<Signin />} />
              <Route path="register" element={<Register />} />
              <Route path="set-new-password" element={<NewPassword />} />
              <Route path="reset-password" element={<PasswordReset />} />
            </Route>
          </Routes>

          <Route element={<UserRequiredRoute />}>
            <Route exact path="/reservations/mine" element={<MyReserves />} />
            <Route exact path="/reserve" element={<AddReservatons />} />
          </Route>
          <Route exact path="/my-reservations" element={<MyReserves />} />
        </section>
      </Router>
    </SessionCtxProvider>
  )
};

export default App;
