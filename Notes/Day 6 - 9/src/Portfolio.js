import React from 'react';
import './App.css';

const Portfolio = () => {
  return (
    <div className="container">
      {/* Profile header section */}
      <header className="profile-header">
        <img src="/IMG-20241107-WA0031 (1).jpg" alt="Dharshini" className="profile-img" />
        <h1>Dharshini S</h1>
        <p>Portfolio</p>
      </header>

      {/* About Me section */}
      <section>
        <h2>About Me</h2>
        <p><strong>Name:</strong> Dharshini S</p>
        <p><strong>Phone:</strong> 7708479319</p>
        <p><strong>Email:</strong> <a href="mailto:dharshini.s2023aiml@sece.ac.in">dharshini.s2023aiml@sece.ac.in</a></p>
        <p>
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">GitHub</a> |
          <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </p>
        <p>
          I am an aspiring AI & ML enthusiast with a passion for solving real-world problems through technology. My goal is to contribute to groundbreaking innovations in AI while continuously learning and growing in the tech industry.
        </p>
      </section>

      {/* Education section */}
      <section>
        <h2>Education</h2>
        <ul>
          <li>B.E AIML - Sri Eshwar College of Engineering (2023-2027)</li>
          <li>HSC - Adharsh Vidhalaya Matric Higher Secondary School (84.83%)</li>
          <li>SSLC - Venkitaraj Matric Higher Secondary School</li>
        </ul>
      </section>

      {/* Projects section */}
      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Cyber Management System:</strong> A system for managing digital security (C Programming).
          </li>
          <li>
            <strong>Event Management System:</strong> A platform for event management (C Programming).
          </li>
          <li>
            <strong>Food Waste Management System:</strong> A system to manage food waste in a restaurant, track quantities, and optimize usage (Java, MySQL).
          </li>
          <li>
            <strong>Fitness Tracker:</strong> A fitness tracking system to log workouts and monitor progress (Java, MySQL).
          </li>
        </ul>
      </section>

      {/* Certifications section */}
      <section>
        <h2>Certifications</h2>
        <ul>
          <li>Learn C, C++, Python - Codechef</li>
          <li>Basics of Machine Learning - Great Learning</li>
          <li>Data Structures - Udemy</li>
          <li>Java Programming - Skillrack</li>
        </ul>
      </section>

      {/* Achievements section */}
      <section>
        <h2>Achievements</h2>
        <ul>
          <li>Codechef Rating: 1580</li>
          <li>CodeFiesta - 3rd Prize</li>
          <li>Hackerrank - 5* in C</li>
          <li>Top 10 in College-level Coding Hackathon</li>
        </ul>
      </section>

      {/* Skills section */}
      <section>
        <h2>Skills</h2>
        <ul>
          <li><strong>Languages:</strong> C, Python, HTML, CSS, JavaScript, Java, MySQL</li>
          <li><strong>Core Skills:</strong> Data Structures, OOP, Web Development, AI/ML Algorithms</li>
          <li><strong>Tools & Frameworks:</strong> React, Node.js, Flask, TensorFlow, OpenCV</li>
        </ul>
      </section>

      {/* Internships & Experience section */}
      <section>
        <h2>Internships & Experience</h2>
        <ul>
          <li><strong>Technical Consultant Intern:</strong> Worked on analyzing and optimizing system performance.</li>
          <li><strong>Data Science Intern:</strong> Assisted in building machine learning models and data analysis pipelines.</li>
          <li><strong>System Engineer:</strong> Provided technical support for client projects and helped with system implementation.</li>
        </ul>
      </section>

      {/* Volunteer Work section */}
      <section>
        <h2>Volunteer Work</h2>
        <ul>
          <li><strong>Tech Talk Speaker:</strong> Conducted sessions on AI and Machine Learning for college students.</li>
          <li><strong>Hackathon Mentor:</strong> Guided participants in coding competitions and hackathons.</li>
        </ul>
      </section>

      {/* Contact section */}
      <section>
        <h2>Contact</h2>
        <a href="mailto:dharshini.s2023aiml@sece.ac.in" className="contact-btn">Contact Me</a>
      </section>
    </div>
  );
};

export default Portfolio;
