import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact"> {/* Added the id to match the CSS */}
      <h2>Contact Me</h2>

      <a
        href="https://github.com/your-github-username"
        target="_blank"
        rel="noreferrer"
        style={{ display: 'block', margin: '10px', textDecoration: 'none', fontSize: '1.2rem' }}
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/your-linkedin-profile"
        target="_blank"
        rel="noreferrer"
        style={{ display: 'block', margin: '10px', textDecoration: 'none', fontSize: '1.2rem' }}
      >
        LinkedIn
      </a>

      <a
        href="mailto:your-email@example.com"
        style={{ display: 'block', margin: '10px', textDecoration: 'none', fontSize: '1.2rem' }}
      >
        Email: your-email@example.com
      </a>

      <p style={{ fontSize: '1.2rem', margin: '10px' }}>
        Phone: +123 456 7890
      </p>
    </div>
  );
};

export default Contact;
