import React, { useEffect, useRef } from "react";
import "./formInput.styles.scss";
//COMPONENTS
import Input from "../Input/input.compnent";

const FormInput = () => {
  const firtsInput = useRef(null);
  const lastInput = useRef(null);
  const button = useRef(null);

  useEffect(() => {
    firtsInput.current.focus();
  }, []);

  const firstKey = (e) => {
    if (e.key === "Enter") lastInput.current.focus();
  };
  const secondKey = (e) => {
    if (e.key === "Enter") button.current.focus();
  };
  const submitKey = () => {
    alert("Button Clicked!");
  };

  return (
    <div className="formContainer">
      <Input
        ref={firtsInput}
        onKeyDown={firstKey}
        className="input"
        type="text"
        placeholder="Name"
      />
      <Input
        ref={lastInput}
        onKeyDown={secondKey}
        className="input"
        type="text"
        placeholder="Last Name"
      />
      <button ref={button} onKeyDown={submitKey} className="button">
        Submit
      </button>
    </div>
  );
};

export default FormInput;
