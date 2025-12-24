import React from "react";
import { Component } from "../../../../components/Component";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="contact-section">
        <div className="contacts-heading">
          <p className="let-s-get-to-know" id="contact">Let's get to know each other.</p>
        </div>
      </div>
    
      <div className="contact-section">
        <div className="contacts-heading">
           <p className="let-s-get-to-know">Get in Touch.</p>
        </div>
      </div> 
    </div>
  );
};
