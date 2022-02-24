import styled, { createGlobalStyle, css } from 'styled-components';

export const Marginals = css`
  box-sizing: border-box;
  display: flex;
  pointer-events: none;
  position: fixed;
  width: 100vw;
  z-index: 1;
`;

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #29ff44;
    color: #456;
    font-family: 'Work Sans', sans-serif;
    height: 100px;
    margin: 0;
    overflow: hidden;
    padding: 0;
    text-rendering: optimizeLegibility;
    width: 100vw;
    -webkit-font-smoothing: antialiased;
  }
`;
