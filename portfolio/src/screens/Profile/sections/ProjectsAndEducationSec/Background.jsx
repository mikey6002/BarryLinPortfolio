import React from "react";
import "./style.css";
// Projects and Education sections

import { projects } from "../../../../data/projects";
import { ProjectCard } from "../../../../components/ProjectCard/ProjectCard";
import cyberCert from "../../../../assets/cert.png";
import degree from "../../../../assets/degree.png";
import Scrum from "../../../../assets/Scrum.png";

export const Background = () => {
  return (
    <div className="background">
      <div className="project-button-wrapper"></div>
      <div className="heading-3">
        <div className="text-wrapper-9" id="projects">Projects</div>
      </div>

      <div className="projects-grid">
        <div className="projects-list">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>

      <div className="project-button-wrapper">
        <div className="heading-3">
          <div className="text-wrapper-9" id="education">Education and Certifications</div>
        </div>
      </div>

      <div className="education-list">
        <img className="preview-lg" alt="Preview lg" src={cyberCert} />
        <img className="img" alt="Preview lg" src={degree} />
        <img className="screenshot" alt="Screenshot" src={Scrum} />
      </div>
    </div>
  );
};

