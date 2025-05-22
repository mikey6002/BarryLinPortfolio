import React from "react";
import { Component } from "../../../../components/Component";
import "./style.css";
//Navigation Logic
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
            text="About me"
            textClassName="component-instance"
            variant="two"
            onClick={() => {
              const el = document.getElementById("About me");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
            </div>
          </div>

          <div className="container-wrapper-3">
            <div className="component-wrapper">
          <Component
            className="component-1"
            text="Skills"
            textClassName="component-instance"
            variant="two"
            onClick={() => {
              const el = document.getElementById("Skills");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
            </div>
          </div>

          <div className="container-wrapper-3">
            <div className="component-wrapper">
          <Component
            className="component-1"
            text="Projects"
            textClassName="component-instance"
            variant="two"
            onClick={() => {
              const el = document.getElementById("projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
            </div>
          </div>

          <div className="container-wrapper-3">
            <div className="component-wrapper">
          <Component
            className="component-1"
            text="Education"
            textClassName="component-instance"
            variant="two"
            onClick={() => {
              const el = document.getElementById("Education");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
            </div>
          </div>

          <div className="container-wrapper-3">
            <div className="component-wrapper">
          <Component
            className="component-1"
            text="Get in touch"
            textClassName="component-instance"
            variant="two"
            onClick={() => {
              const el = document.getElementById("lets get to know");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
            </div>
          </div>
        </div>

        <div className="horizontal-divider" />
      </div>
    </div>
  );
};
