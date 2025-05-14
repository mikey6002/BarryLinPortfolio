import React from "react";
import { Component } from "../../../../components/Component";
import "./style.css";

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
          <div className="container-wrapper-3">
            <div className="component-wrapper">
              <Component
                className="component-1"
                text="About Me"
                variant="one"
              />
            </div>
          </div>

          <div className="container-wrapper-3">
            <div className="component-wrapper">
              <Component className="component-1" text="Skills" variant="two" />
            </div>
          </div>

          <div className="container-wrapper-3">
            <div className="component-wrapper">
              <Component
                className="component-1"
                text="Projects"
                textClassName="component-instance"
                variant="two"
              />
            </div>
          </div>

          <div className="container-wrapper-3">
            <div className="component-wrapper">
              <Component
                className="component-1"
                text="Education &amp; Certifications"
                variant="two"
              />
            </div>
          </div>

          <div className="container-wrapper-3">
            <div className="component-wrapper">
              <Component
                className="component-1"
                text="Get in Touch"
                variant="two"
              />
            </div>
          </div>
        </div>

        <div className="horizontal-divider" />
      </div>
    </div>
  );
};
