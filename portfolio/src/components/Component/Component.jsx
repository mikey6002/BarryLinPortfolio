import React from "react";
import "./style.css";

export const Component = ({
  text = "About Me",
  variant,
  className,
  textClassName,
}) => {
  return (
    <div className={`component ${className}`}>
      <div className={`text ${textClassName}`}>{text}</div>
    </div>
  );
};
