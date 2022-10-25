import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignedInRoute } from './components/middlewares';
import {
  Signin, Register, PasswordReset, NewPassword,
} from './components/authentication';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<SignedInRoute />}>
        <Route path="login" element={<Signin />} />
        <Route path="register" element={<Register />} />
        <Route path="set-new-password" element={<NewPassword />} />
        <Route path="reset-password" element={<PasswordReset />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
