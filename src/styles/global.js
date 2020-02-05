import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    border: 0;
    outline: 0;
    box-sizing:border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor:pointer;
  }

  button:disabled {
    opacity: 0.7;
    cursor:not-allowed;
  }

  ul {
    list-style: none;
  }


`;
