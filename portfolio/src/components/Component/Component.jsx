import React from "react";

export const Component = ({
  onClick,
  className,
  text,
  textClassName,
  variant,
  ...props
}) => (
  <div
    className={className}
    onClick={onClick}
    style={{ cursor: onClick ? "pointer" : "default" }}
    {...props}
  >
    <span className={textClassName}>{text}</span>
    {}
  </div>
);
