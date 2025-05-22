import React from "react";
import "./style.css";

export const Element = ({ className }) => {
  return (
    <a
      className={`element ${className}`}
      href="https://www.youtube.com/@barrylin6543"
      rel="noopener noreferrer"
      target="_blank"
    />
  );
};
