import React from "react";
import "./Skills.css"; // Assuming you have your CSS in this file

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    },
    
    {
      name: "Python",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
  ];

  return (
    <div className="skills-container">
      {skills.map((skill) => (
        <div className="skill" key={skill.name}>
          <img
            src={skill.logo}
            alt={`${skill.name} Logo`}  // Corrected line
            className="logo"
            style={{
              width: "100px",
              height: "100px",
              marginBottom: "10px",
              animation: "rotateLogo 3s infinite linear",
            }}
          />
          <div className="info">
            <h2>{skill.name}</h2>
            <p>Some details about {skill.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
