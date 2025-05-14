import React from "react";
import { Resume } from "../../../../components/Resume";
import "./style.css";

export const ContainerWrapper = () => {
  return (
    <div className="container-wrapper">
      <div className="container-2">
        <div className="heading">
          <p className="text-wrapper">Hi, my name is Barry Lin</p>
        </div>

        <div className="container-3">
          <div className="heading-2">
            <p className="p">
              I’m a software engineer and IT enthusiast who thrives on <br />
              problem-solving, programming, and building impactful <br />
              solutions. My journey started with robotics, where I learned{" "}
              <br />
              to design, program, and troubleshoot autonomous systems
              <br />
              —an experience that cemented my passion for technology.
            </p>
          </div>

          <div className="heading-margin">
            <div className="heading-2">
              <p className="from-programming">
                <span className="span">
                  From programming precise motor movements in <br />
                  competitions to leading tech workshops as part of the <br />
                </span>

                <span className="text-wrapper-2">
                  Google Developer Student Club
                </span>

                <span className="span">
                  , I enjoy both the technical <br />
                  and collaborative aspects of software engineering. Whether{" "}
                  <br />
                  it&#39;s developing machine learning models, optimizing <br />
                  systems, or debugging complex code, I love the challenge of{" "}
                  <br />
                  making technology work seamlessly.
                </span>
              </p>
            </div>
          </div>

          <div className="heading-margin">
            <div className="heading-2">
              <p className="p">
                I’m always eager to learn, build, and contribute to innovative{" "}
                <br />
                solutions that make a real-world impact.
              </p>
            </div>
          </div>
        </div>

        <div className="i-believe-that-the-wrapper">
          <p className="i-believe-that-the">
            I believe that the success of a project is based on good <br />
            collaboration and being kind.
          </p>
        </div>

        <Resume className="resume-instance" />
      </div>

      <div className="mypic-wrapper">
        <img
          className="mypic"
          alt="Mypic"
          src="https://c.animaapp.com/EX6GyRHq/img/mypic.png"
        />
      </div>
    </div>
  );
};
