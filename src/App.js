import "./App.css";
//AXIOS
import axios from "axios";
//Hooks
import React, { useState, useEffect } from "react";
//COMPONENTS
import FormIput from "./components/FormInput/formInput.component.jsx";

function App() {
  return (
    <div className="App">
      <FormIput />
    </div>
  );
}

export default App;
