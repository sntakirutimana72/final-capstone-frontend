import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SideNav from './Components/SideNav/SideNav';
import Rooms from './Components/Rooms/Rooms';

function App() {
  return (
    <div className="App">
      <Router>
        <main className="flex">
          <SideNav />
          <Routes>
            <Route exact path="/" element={<Rooms />} />
            <Route exact path="/rooms" element={<Rooms />} />
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
