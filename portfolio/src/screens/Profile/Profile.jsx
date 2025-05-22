import React from "react";
import { Element } from "../../components/Element";
import { Background } from "./sections/Background";
import { BackgroundWrapper } from "./sections/BackgroundWrapper";
import { Container } from "./sections/Container";
import { ContainerWrapper } from "./sections/ContainerWrapper";
import { DivWrapper } from "./sections/DivWrapper";
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

export const Profile = () => {
  return (
    <div className="profile" data-model-id="2:87">
      <div className="background-3">
        <Container />
        <ContainerWrapper />
        <Element className="youtube"/>
        <a
          href="https://github.com/mikey6002"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="github"
            alt="Github"
            src={githubLogo}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/lin-barry/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="linkedin-logo"
            alt="Linkedin logo"
            src={linkedinLogo}
          />
        </a>

        <div className="SkillsSection">
          <div className="container-27">
            <div className="heading-5">
              <div className="text-wrapper-15" id = "Skills">My Skills</div>
            </div>
          </div>
        </div>

        <div className="ListSkills">
          <div className="scikit-learn-logo-wrapper">
            <img
              className="scikit-learn-logo"
              alt="Scikit learn logo"
              src={scikitlearnLogo}
            />
          </div>

          <div className="overlap">
            <div className="images-wrapper">
              <img
                className="images"
                alt="Images"
                src={htmllogo}
              />
            </div>

            <img
              className="c-logo"
              alt="C logo"
              src={Clogo}
            />

            <div className="overlap-group">
              <img
                className="images-2"
                alt="Images"
                src={auto}
              />

              <div className="overlap-group-2">
                <img
                  className="nodejs-logo"
                  alt="Nodejs logo"
                  src={node}
                />

                <img
                  className="element-2"
                  alt="Element"
                  src={java}
                />
              </div>

              <img
                className="python-logo-notext"
                alt="Python logo notext"
                src={python}
              />

              <img
                className="react-original"
                alt="React original"
                src={react}
              />
            </div>

            <img
              className="element-3"
              alt="Element"
              src={pandas}
            />
          </div>

          <img
            className="figma-logo"
            alt="Figma logo"
            src={figma}
          />

          <img
            className="wireshark"
            alt="Wireshark"
            src={wireshark}
          />

          <img
            className="mysql-logo-png"
            alt="Mysql logo png"
            src={sql}
          />

          <div className="layer" />
        </div>

        <Background />
        <DivWrapper />
        <BackgroundWrapper />
        <a
          href="https://drive.google.com/file/d/1EmI8i08f9EP7mnWGN4K0RL3d0fgelo4U/view?usp=sharing"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="resume-2"
            alt="Resume"
            src={resume}
          />
        </a>
      </div>
    </div>
  );
};
