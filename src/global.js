import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    color: ${({ theme }) => theme.primaryTextColor};
  }

  body {
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.text};

  }

  .App {
    background-color: ${({ theme }) => theme.appBgColor};
  }

  .randomNumber {
    background-color: ${({ theme }) => theme.randomNumberBgColor};
  }

  .randomNumber > div {
    color: ${({ theme }) => theme.randomNumberColor};
  }

  .switcher-ball{
    transform: ${({ theme }) => theme.switcherPosition};
    background-color: ${({ theme }) => theme.sBallColor};
  }

  input {
    background-color: ${({ theme }) => theme.inputBgColor};
    color: ${({ theme }) => theme.inputColor};
  }

  button {
    background-color: ${({ theme }) => theme.generateButtonColor};
  }

  button:hover {
    color: ${({ theme }) => theme.buttonHoverColor};
    background-color: ${({ theme }) => theme.buttonHoverBgColor};
  }

  .themeToggle {
    background-color:  ${({ theme }) => theme.toggleBgColor};
    border: solid ${({ theme }) => theme.toggleBorder} 2px;

  }
`;
