import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignedInRoute } from './components/middlewares';
import {
  Signin, Register, PasswordReset, NewPassword,
} from './components/authentication';
import SideNav from './components/SideNav/SideNav';

function App() {
  return (
    <div className="App">
      <Router>
        <main className="">
          <SideNav />
          <Routes>
            <Route element={<SignedInRoute />}>
              <Route path="login" element={<Signin />} />
              <Route path="register" element={<Register />} />
              <Route path="set-new-password" element={<NewPassword />} />
              <Route path="reset-password" element={<PasswordReset />} />
            </Route>
            <Route exact path="/" />
            <Route exact path="/rooms" />
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
