import React from "react";
import "./input.styles.scss";

const Input = ({ placeholder, onKeyDown, type }, ref) => {
  return (
    <input
      ref={ref}
      onKeyDown={onKeyDown}
      className="input"
      placeholder={placeholder}
      type={type}
    />
  );
};

const fowaredInput = React.forwardRef(Input);

export default fowaredInput;
