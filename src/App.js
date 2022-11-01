import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignedInRoute } from './Components/middlewares';
import {
  Signin, Register, PasswordReset, NewPassword,
} from './Components/authentication';
import SideNav from './Components/SideNav/SideNav';
import RoomDetail from './Pages/Room/RoomDetail';
import Room from './Pages/Room/Room';

function App() {
  return (
    <div className="App">
      <Router>
        <main className="flex h-screen">
          <SideNav />
          <Routes>
            <Route element={<SignedInRoute />}>
              <Route path="login" element={<Signin />} />
              <Route path="register" element={<Register />} />
              <Route path="set-new-password" element={<NewPassword />} />
              <Route path="reset-password" element={<PasswordReset />} />
            </Route>
            <Route exact path="/" />
            <Route exact path="/rooms" element={<Room />} />
            <Route path="/rooms/:id" element={<RoomDetail />} />
            <Route exact path="/reserve" />
            <Route exact path="/my-reservations" />
            <Route exact path="/add-room" />
            <Route exact path="/delete-room" />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
