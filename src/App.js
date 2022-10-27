import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SideNav from './Components/SideNav/SideNav';

function App() {
  return (
    <div className="App">
      <Router>
        <main className="">
          <SideNav />
          <Routes>
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
