import React from "react";
import { Element } from "../../components/Element";
import { Background } from "./sections/Background";
import { BackgroundWrapper } from "./sections/BackgroundWrapper";
import { Container } from "./sections/Container";
import { ContainerWrapper } from "./sections/ContainerWrapper";
import { DivWrapper } from "./sections/DivWrapper";
import "./style.css";

export const Profile = () => {
  return (
    <div className="profile" data-model-id="2:87">
      <div className="background-3">
        <Container />
        <ContainerWrapper />
        <Element className="one-million-seven-hundred-and-twenty-thousand-and-eighty-nine" />
        <a
          href="https://github.com/mikey6002"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="github"
            alt="Github"
            src="https://c.animaapp.com/EX6GyRHq/img/github@2x.png"
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
            src="https://c.animaapp.com/EX6GyRHq/img/linkedin-logo-initials-1@2x.png"
          />
        </a>

        <div className="background-4">
          <div className="container-27">
            <div className="heading-5">
              <div className="text-wrapper-15" id = "Skills">My Skills</div>
            </div>
          </div>
        </div>

        <div className="background-5">
          <div className="scikit-learn-logo-wrapper">
            <img
              className="scikit-learn-logo"
              alt="Scikit learn logo"
              src="https://c.animaapp.com/EX6GyRHq/img/scikit-learn-logo-small-svg-1@2x.png"
            />
          </div>

          <div className="overlap">
            <div className="images-wrapper">
              <img
                className="images"
                alt="Images"
                src="https://c.animaapp.com/EX6GyRHq/img/images-2-1@2x.png"
              />
            </div>

            <img
              className="c-logo"
              alt="C logo"
              src="https://c.animaapp.com/EX6GyRHq/img/c-logo-1@2x.png"
            />

            <div className="overlap-group">
              <img
                className="images-2"
                alt="Images"
                src="https://c.animaapp.com/EX6GyRHq/img/images-1@2x.png"
              />

              <div className="overlap-group-2">
                <img
                  className="nodejs-logo"
                  alt="Nodejs logo"
                  src="https://c.animaapp.com/EX6GyRHq/img/nodejs-1-logo-1@2x.png"
                />

                <img
                  className="element-2"
                  alt="Element"
                  src="https://c.animaapp.com/EX6GyRHq/img/1720088-1@2x.png"
                />
              </div>

              <img
                className="python-logo-notext"
                alt="Python logo notext"
                src="https://c.animaapp.com/EX6GyRHq/img/python-logo-notext-svg-1@2x.png"
              />

              <img
                className="react-original"
                alt="React original"
                src="https://c.animaapp.com/EX6GyRHq/img/react-original-wordmark-icon-1679x2048-hjal07w8-1@2x.png"
              />
            </div>

            <img
              className="element-3"
              alt="Element"
              src="https://c.animaapp.com/EX6GyRHq/img/-27@2x.png"
            />
          </div>

          <img
            className="figma-logo"
            alt="Figma logo"
            src="https://c.animaapp.com/EX6GyRHq/img/figma-logo-1@2x.png"
          />

          <img
            className="wireshark"
            alt="Wireshark"
            src="https://c.animaapp.com/EX6GyRHq/img/wireshark@2x.png"
          />

          <img
            className="mysql-logo-png"
            alt="Mysql logo png"
            src="https://c.animaapp.com/EX6GyRHq/img/mysql-1-logo-png-transparent-1@2x.png"
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
            src="https://c.animaapp.com/EX6GyRHq/img/resume@2x.png"
          />
        </a>
      </div>
    </div>
  );
};
