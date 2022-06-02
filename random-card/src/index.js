import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 24px;
  }

  body {
    background-color: #cecece;
    margin: auto;
  }

  button {
    background: #3a31d1;
    box-shadow: 2px 2px 4px 0px #621c5a;
    border: none;
    border-radius: 5px;
    color: #42d9fb;
    cursor: pointer;
    padding: 10px 20px;
  }

  button:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
