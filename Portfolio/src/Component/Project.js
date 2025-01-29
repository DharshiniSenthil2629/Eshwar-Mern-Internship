import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import "./Project.css"; // Importing the CSS file

const Project = () => {
  const projects = [
    {
      title: "Cyber Management System",
      description: "Secure and manage an organization's digital infrastructure.",
      tech: "C",
    },
    {
      title: "Event Management System",
      description: "Streamline event organization with registration and analytics.",
      tech: "C",
    },
    {
      title: "Food Management System",
      description: "Track inventory and reduce food waste in restaurants.",
      tech: "Java, DBMS",
    },
    {
      title: "Fitness Tracker System",
      description: "Log workouts and track fitness goals with report generation.",
      tech: "Java, DBMS",
    },
  ];

  return (
    <div className="project-container">
      <h1 className="projects-title">My Projects</h1>
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3 className="project-title">
            <FaProjectDiagram className="project-icon" />
            {project.title}
          </h3>
          <p className="project-description">{project.description}</p>
          <p className="project-tech"><strong>Technologies:</strong> {project.tech}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;
