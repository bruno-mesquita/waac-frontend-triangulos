import { createGlobalStyle } from 'styled-components';
import background from '../images/background.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-image: url(${background});
    -webkit-font-smoothing: antialiased !important;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
