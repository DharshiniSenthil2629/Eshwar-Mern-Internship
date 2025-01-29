import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import { Emp1 } from './emp1';
import Users from './User';

import Updateusers from './Updateusers';
import Createuser from './Createuser';
function App() {
  const[count,setCount]=useState(0)
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Users</Link>
            </li>
            <li>
              <Link to="/Createuser">Createuser</Link>
            </li>
            <li>
              <Link to="/Updateusers">Updateuser</Link>
            </li>
            <li>
              <Link to="/Emp1">Emp1</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Users/>} />
          <Route path="/Createuser" element={<Createuser/>} />
          <Route path="/Updateusers" element={<Updateusers/> } />
          <Route path="/emp1" element={<Emp1/> } />
        </Routes>
      </div>
      </Router>
  );
}

export default App;