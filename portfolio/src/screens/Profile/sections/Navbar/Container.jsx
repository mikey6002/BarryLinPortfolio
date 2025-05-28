import React from "react";
import { Component } from "../../../../components/Component";
import "./style.css";

//scrolling
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

const navItems = [
  { text: "About me", id: "About me" },
  { text: "Skills", id: "Skills" },
  { text: "Projects", id: "projects" },
  { text: "Education", id: "Education" },
  { text: "Get in touch", id: "lets get to know" },
  
];

export const Container = () => {
  return (
    <div className="container">
      <div className="nav">
        <div className="div">
          <div className="container-wrapper-2">
            <div className="div-wrapper-2">
              <div className="div-2" />
            </div>
          </div>
        </div>

        <div className="div-3">
          {navItems.map(({ text, id }) => (
            <div className="container-wrapper-3" key={id}>
              <div className="component-wrapper">
                <Component
                  className="component-1"
                  text={text}
                  textClassName="component-instance"
                  variant="two"
                  onClick={() => scrollToSection(id)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="horizontal-divider" />
      </div>
    </div>
  );
};
