import React from "react";
import { Element } from "../../components/YoutubeIcon";
import { Background } from "./sections/ProjectsAndEducationSec";
import { BackgroundWrapper } from "./sections/ContactForm";
import { Container } from "./sections/Navbar";
import { ContainerWrapper } from "./sections/AboutMeSec";
import { DivWrapper } from "./sections/ContactSec";
import "./style.css";

// Importing images
import githubLogo from "../../assets/github.png";
import linkedinLogo from "../../assets/linkedin.png";
import scikitlearnLogo from "../../assets/scikitlearn.png";
import htmllogo from "../../assets/html.png";
import Clogo from "../../assets/Clogo.png";
import auto from "../../assets/autopsy.png";
import node from "../../assets/node.png";
import java from "../../assets/java.png";
import python from "../../assets/python.png";
import react from "../../assets/ract.png";
import pandas from "../../assets/pandas.png";
import figma from "../../assets/figma.png";
import wireshark from "../../assets/wireshark.png";
import sql from "../../assets/sql.png";
import resume from "../../assets/resume.png";
import css from "../../assets/css.png";
import js from "../../assets/Js.png";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="page-wrapper">
        <div className="content-container">
          <Container />
          <ContainerWrapper />

          <div className="social-icons">
            <Element /> {/* YouTube icon component */}
            <a href="https://github.com/mikey6002" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className="social-icon github-icon" />
            </a>
            <a href="https://www.linkedin.com/in/lin-barry/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="social-icon linkedin-icon" />
            </a>
            <a href="https://drive.google.com/file/d/1EmI8i08f9EP7mnWGN4K0RL3d0fgelo4U/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <img src={resume} alt="Resume" className="social-icon resume-icon" />
            </a>
          </div>


          {/* Skills Section */}
          <div className="skills-section">
            <h2 id="Skills">My Skills</h2>
            <div className="skills-logos">
              <img src={scikitlearnLogo} alt="Scikit Learn" />
              <img src={htmllogo} alt="HTML" />
              <img src={Clogo} alt="C" />
              <img src={auto} alt="Autopsy" />
              <img src={node} alt="Node.js" />
              <img src={java} alt="Java" />
              <img src={python} alt="Python" />
              <img src={react} alt="React" />
              <img src={pandas} alt="Pandas" />
              <img src={figma} alt="Figma" />
              <img src={wireshark} alt="Wireshark" />
              <img src={sql} alt="MySQL" />
              <img src={css} alt="CSS" />
              <img src={js} alt="JavaScript" />
            </div>
          </div>

          <Background />
          <DivWrapper />
          <BackgroundWrapper />
        </div>
      </div>
    </div>
  );
};
