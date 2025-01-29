import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation to track active route

const Navbar = () => {
  const location = useLocation(); // Get the current location (path)
  
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
        <li><Link to="/About" className={location.pathname === "/About" ? "active" : ""}>About Me</Link></li>
        <li><Link to="/Skills" className={location.pathname === "/Skills" ? "active" : ""}>Skills</Link></li>
        <li><Link to="/Certificate" className={location.pathname === "/Certificate" ? "active" : ""}>Certificate</Link></li>
        <li><Link to="/Projects" className={location.pathname === "/Projects" ? "active" : ""}>Projects</Link></li>
        <li><Link to="/Contact" className={location.pathname === "/Contact" ? "active" : ""}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
