import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [minInput, setMinInput] = useState(1);
  const [maxInput, setMaxInput] = useState(999);
  const [randomNumber, setRandomNumber] = useState(0);
  const [themeLight, setThemeLight] = useState(false);

  const handleOnMinInputChange = e => {
    setMinInput(parseInt(e.target.value));
  };

  const handleOnMaxInputChange = e => {
    setMaxInput(parseInt(e.target.value));
  };

  const handleGenerateOnClick = e => {
    e.preventDefault();
    setRandomNumber(Math.floor(Math.random() * (maxInput - minInput + 1)) + minInput);
  };

  const handleToggleTheme = () => {
    if (themeLight) {
      setThemeLight(false);
      console.log("motyw czarny");
    } else {
      setThemeLight(true);
      console.log("motyw jasny");
    }
  };

  return (
    <>
      <button className="themeToggle" onClick={handleToggleTheme}>
        <div className="switcher-ball"></div>
      </button>
      <div className="App">
        <div className="randomNumber">
          Random number:
          <div>{randomNumber}</div>
        </div>
        <div className="form-container">
          <form className="input-container">
            <label htmlFor="min" className="min">
              Min:
            </label>
            <input
              placeholder="0"
              size="1"
              type="number"
              name="min"
              min="0"
              max="999"
              onChange={handleOnMinInputChange}
            ></input>
          </form>
          <form className="input-container">
            <label htmlFor="min" className="max">
              Max:
            </label>
            <input
              placeholder="999"
              size="1"
              type="number"
              name="max"
              min="1"
              max="999"
              onChange={handleOnMaxInputChange}
            ></input>
          </form>
        </div>
        <button type="submit" onClick={handleGenerateOnClick}>
          Generate random number
        </button>
        {/* <div className="error">Error type</div> */}
      </div>
    </>
  );
};

export default App;
