import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";      
import Home from "./Component/Home";          
import AboutMe from "./Component/AboutMe";    
import Skills from "./Component/Skills";      
import Project from "./Component/Project";    
import Contact from "./Component/Contact";    
import Certificate from "./Component/Certificate";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
     

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutMe />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Certificate" element={<Certificate />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

       
      
      </div>
    </Router>
  );
}

export default App;
