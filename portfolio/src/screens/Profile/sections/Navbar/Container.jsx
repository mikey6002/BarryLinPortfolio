import React, { useState } from "react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false); // Close menu after clicking
  };

  return (
    <div className="container">
      <div className="nav">
        <div className="div">
          <div className="spacing-container">
            <div className="navbar-wrapper">
              <div className="nav-logo" />
            </div>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <div
          className="hamburger-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`div-3 ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map(({ text, id }) => (
            <div className="container-wrapper-3" key={id}>
              <div className="component-wrapper">
                <Component
                  className="component-1"
                  text={text}
                  textClassName="component-instance"
                  variant="two"
                  onClick={() => handleNavClick(id)}
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
