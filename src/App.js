import "./App.css";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";

const App = () => {
  const [minInput, setMinInput] = useState(1);
  const [maxInput, setMaxInput] = useState(999);
  const [randomNumber, setRandomNumber] = useState(0);
  const [theme, setTheme] = useState("light");

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
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
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
              />
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
              />
            </form>
          </div>
          <button type="submit" onClick={handleGenerateOnClick}>
            Generate random number
          </button>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
