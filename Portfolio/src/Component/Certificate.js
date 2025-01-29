// src/components/Certificate.js
import React from 'react';
import './Certificate.css';  // Import the CSS file

const Certificate = () => {
  return (
    <div id="certificate">
      <h2>Certifications</h2>
      <ul>
        <li><strong>Learn C, C++</strong> - Codechef</li>
        <li><strong>Python Programming</strong> - Great Learning</li>
        <li><strong>Data Structures</strong> - Udemy</li>
        <li><strong>Basics of Machine Learning</strong> - Great Learning</li>
        <li><strong>C Programming</strong> - Hackerrank</li>
        <li><strong>Java Programming</strong> - Skillrack</li>
      </ul>
      <button>View More</button>
    </div>
  );
}

export default Certificate;
