import React from "react";
import "./style.css";
// Projects and Education sections

import bash from "../../../../assets/bash.png";
import CanvasQuest from "../../../../assets/wizard.png";
import finance from "../../../../assets/finance.png";
import cityview from "../../../../assets/cityview.png";
import cyberCert from "../../../../assets/cert.png";
import degree from "../../../../assets/degree.png";
import Scrum from "../../../../assets/Scrum.png";


export const Background = () => {
  return (
    <div className="background">
      <div className="project-button-wrapper"></div>
      <div className="heading-3">
        <div className="text-wrapper-9" id = "projects">Projects</div>
      </div>
      <div className="projects-grid">
        <div className="projects-list">
          <div className="project-card project-card--braizen">
            <div className="project-media">
              <div className="project-image" />
            </div>

            <div className="project-content">

              <div className="project-block">
                <div className="project-block">
                  <div className="project-title">Braizen</div>
                </div>
              </div>
            
              <div className="project-description">
                <div className="developed-using-wrapper">
                  <p className="project-text">
                    Developed using Python,Streamlit <br />
                    <br />
                  </p>
                </div>

                <div className="project-box">
                  <p className="project-text">
                    A web application designed to <br />
                    assist in the early detection of <br />
                    brain tumors by classifying MRI <br />
                    scans and providing users with <br />
                    detailed information about <br />
                    detected tumor types. Users can <br />
                    upload MRI scans for real-time <br />
                    classification and includes a <br />
                    chatbot feature that offers <br />
                    comprehensive insights into each <br />
                    tumor type.
                  </p>
                </div>
              </div>

              <a
                className="braizen-details"
                href="https://devpost.com/software/braizen"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="project">
                  <div className="project-text-wrapper">
                    <span className="text-wrapper-6">
                      Learn More
                    </span>
                  </div>
                </div>
              </a>

              <a
                className="braizen-live-demo"
                href="https://www.youtube.com/watch?v=JSGOsNMHmwA"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="project-button-wrapper">
                  <div className="project-text-wrapper">
                    <span className="text-wrapper-6">
                      Live Demo
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="project-card project-card--powershell">
            <div className="project-media">
              <div className="element-wrapper">
                <img
                  className="element-ztdltzpjvu"
                  alt="Element"
                  src={bash}
                />
              </div>
            </div>

            <div className="power-shell-wrapper">
              <div className="project-block">
                <div className="project-block">
                  <div className="project-title">Mock PowerShell</div>
                </div>
              </div>

              <div className="project-description">
                <div className="project-description">
                  <p className="project-text">
                    Developed a Unix-like shell in C, <br />
                    emulating functionalities of <br />
                    standard shells like &#39;tcsh&#39;. The <br />
                    shell provides an interface for <br />
                    users to access operating system <br />
                    services, including file and <br />
                    process management.
                  </p>
                </div>
              </div>

              <a
                className="powershell-learn"
                href="https://github.com/mikey6002/OperatingSystems_Project2_Shell"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="project-button-wrapper">
                  <div className="project-text-wrapper">
                    <span className="text-wrapper-6">
                      Learn More
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="project-card project-card--canvas">
            <div className="project-media">
              <img
                className="element-efd"
                alt="Element"
                src={CanvasQuest}
              />
            </div>

            <div className="project-content">
              <div className="project-block">
                <div className="project-block">
                  <div className="project-title">Canvas Quest</div>
                </div>
              </div>

              <div className="project-description">
                <div className="developed-using-wrapper">
                  <p className="project-text">
                    Developed using JavaScript, <br />
                    HTML, CSS, Python, Flask, and <br />
                    SQL.
                  </p>
                </div>

                <div className="project-box">
                  <p className="project-text">
                    Canvas Quest is a web <br />
                    application that gamifies the <br />
                    academic experience by <br />
                    transforming coursework into an <br />
                    interactive role-playing game <br />
                    (RPG).It integrates with <br />
                    educational platforms like Canvas <br />
                    to convert assignments and study <br />
                    materials into engaging quests <br />
                    and challenges.
                  </p>
                </div>
              </div>

              <a
                className="canvas-learn-more"
                href="https://capstone-projects-2024-fall.github.io/project-ai-study-rpg-game/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="project-button-wrapper">
                  <div className="project-text-wrapper">
                    <span className="text-wrapper-6">
                      Learn More
                    </span>
                  </div>
                </div>
              </a>

              <a
                className="canvas-live-demo"
                href="https://www.youtube.com/watch?v=8Rgt0mLH1pk"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="project-button-wrapper">
                  <div className="project-text-wrapper">
                    <span className="text-wrapper-6">
                      Live Demo
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="project-card project-card--finance">
            <div className="project-media">
              <div className="finance-wrapper">
                <img
                  className="finance"
                  alt="Finance"
                  src={finance}
                />
              </div>
            </div>

            <div className="project-content">
              <div className="project-block">
                <div className="project-block">
                  <div className="project-title">Personal Finance Tracker</div>
                </div>
              </div>

              <div className="project-description">
                <div className="developed-using-wrapper">
                  <p className="project-text">
                    Developed with Python and Kivymd <br />
                    <br />
                  </p>
                </div>

                <div className="project-box">
                  <p className="designed-to-help">
                    Designed to help users manage <br />
                    their finance effectively by having <br />a snapshot of
                    their day-to-day <br />
                    expenses. This application allows <br />
                    users to track their income, <br />
                    expenses, savings and <br />
                    investments all in one place. The <br />
                    app is super user-friendly, <br />
                    providing clear insights into <br />
                    financial heath through detailed <br />
                    charts and summaries.
                  </p>
                </div>
              </div>

              <a
                className="braizen-details"
                href="https://github.com/mikey6002/Personal-Finance-Tracker"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="project-button-wrapper">
                  <div className="project-text-wrapper">
                    <span className="text-wrapper-6">
                      Learn More
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="project-card project-card--crime">
            <div className="project-media">
              <div className="project-image" />
            </div>

            <div className="project-content">
              <div className="project-block">
                <div className="project-block">
                  <div className="project-title">Los Angeles Crime <br />Prediction</div>
                </div>
              </div>

              <div className="project-description">
                <div className="developed-using-wrapper">
                  <p className="project-text">
                    Built with Python, Pandas, Scikit <br />
                    learn
                  </p>
                </div>

                <div className="project-box">
                  <p className="project-text">
                    This project explores the use of <br />
                    machine learning to predict crime <br />
                    patterns and identify hotspot <br />
                    areas in the Los Angeles region. <br />
                    Our primary goal was to generate <br />
                    data-driven insights that could <br />
                    help inform crime prevention <br />
                    strategies and more effectively <br />
                    allocate law enforcement <br />
                    resources, while also addressing <br />
                    ethical concerns around data <br />
                    bias.
                  </p>
                </div>
              </div>

              <a
                className="braizen-details"
                href="https://github.com/mikey6002/Techwise_AI_ML"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="project-button-wrapper">
                  <div className="project-text-wrapper">
                    <span className="text-wrapper-6">
                      Learn More
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="project-card project-card--cityview">
            <div className="project-media">
              <div className="cvp-logo-wrapper">
                <img
                  className="cvp-logo"
                  alt="Cvp logo"
                  src={cityview}
                />
              </div>
            </div>

            <div className="project-content">
              <div className="project-block">
                <div className="project-block">
                  <div className="project-title">
                    City View Pizza <br />
                    Prototype
                  </div>
                </div>
              </div>

                <div className="project-box">
                  <p className="project-text">
                    Figma prototype to reimagine the <br />
                    digital experience for City View <br />
                    Pizza, enhancing online ordering, <br />
                    menu navigation, and customer <br />
                    engagement. The design focuses <br />
                    on an intuitive user interface, <br />
                    seamless ordering process, and a <br />
                    modern aesthetic that reflects the <br />
                    brand’s identity
                  </p>
                </div>
             

              <a
                className="city-view-learn-m"
                href="https://www.figma.com/design/7W8SL2JKKzEuoJJEgwR71n/Design-Workshop"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="project-button-wrapper">
                  <div className="project-text-wrapper">
                    <span className="text-wrapper-6">
                      Learn More
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
      <div className="project-button-wrapper">
        <div className="heading-3">
          <div className="text-wrapper-9" id = "Education">Education and Certifications</div>
        </div>
      </div>

      <div className="education-list">
        <img
          className="preview-lg"
          alt="Preview lg"
          src={cyberCert}
        />

        <img
          className="img"
          alt="Preview lg"
          src={degree}
        />

        <img
          className="screenshot"
          alt="Screenshot"
          src={Scrum}
        />
      </div>
    </div>
  );
};
