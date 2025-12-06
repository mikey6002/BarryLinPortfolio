import React from "react";
import { Resume } from "../../../../components/Resume";
import pic from "../../../../assets/mypic.png";
import "./style.css";

export const ContainerWrapper = () => {
  return (
    <div className="container-wrapper">
      <div className="container-2">
        <div className="heading">
          <p className="text-wrapper">Hi, my name is Barry Lin</p>
        </div>

        <div className="About_me_Section">
          <SectionText className="About_Headings">
            I’m a AV engineer and software engineering enthusiast who thrives on
            problem-solving, programming, and building impactful solutions.
            My journey started with robotics, where I learned to design,
            program, and troubleshoot autonomous systems — an experience
            that cemented my passion for technology.
          </SectionText>

          <SectionText className="About_Headings">
            <span className="span">
              From programming precise motor movements in competitions to
              leading tech workshops as part of the{" "}
            </span>
            <span className="text-wrapper-2">
              Google Developer Student Club
            </span>
            <span className="span">
              , I enjoy both the technical and collaborative aspects of
              software engineering. 
              <br />
              <br />
              Whether it's developing machine
              learning models, optimizing systems, or debugging complex
              code, I love the challenge of making technology work
              seamlessly.
            </span>
          </SectionText>

          <SectionText className="About_Headings">
            I’m always eager to learn, build, and contribute to innovative
            solutions that make a real-world impact.
          </SectionText>
        </div>

        <div className="statement_wrapper">
          <p className="about-values-class">
            I believe that the success of a project is based on good
            collaboration and being kind.
          </p>
        </div>

        <Resume className="resume-instance" />
      </div>

      <div className="mypic-wrapper">
        <img className="mypic" src={pic} alt="Portrait of Barry Lin" />
      </div>
    </div>
  );
};

//  text block
const SectionText = ({ children, className }) => (
  <div className="heading-margin">
    <div className={className}>
      <p className="p">{children}</p>
    </div>
  </div>
);
