import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SignedInRoute } from './Components/middlewares';
import {
  Signin, Register, PasswordReset, NewPassword,
} from './Components/authentication';
import SideNav from './Components/SideNav/SideNav';
import Room from './Pages/Room/Room';
import AddReservatons from './Components/Reservation/AddReservations';

function App() {
  const { signedIn } = useSelector((state) => state.user);
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route element={<SignedInRoute auth={signedIn} />}>
            <Route path="login" element={<Signin />} />
            <Route path="register" element={<Register />} />
            <Route path="set-new-password" element={<NewPassword />} />
            <Route path="reset-password" element={<PasswordReset />} />
          </Route>
        </Routes>
        <main className="flex h-scree">
          {signedIn ? <SideNav /> : null}
          <Routes>
            <Route exact path="/" />
            <Route exact path="/rooms" element={<Room />} />
            <Route exact path="/reserve" element={<AddReservatons />} />
            {/* <Route exact path="/my-reservations" />
            <Route exact path="/add-room" />
            <Route exact path="/delete-room" /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
