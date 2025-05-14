import React from "react";
import { Component } from "../../../../components/Component";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="container-20">
        <div className="heading-4">
          <p className="let-s-get-to-know">Let&#39;s get to know each other.</p>
        </div>
      </div>

      <div className="container-21">
        <div className="heading-4">
          <Component
            className="component-1-instance"
            text="Get in touch."
            variant="three"
          />
        </div>
      </div>
    </div>
  );
};
