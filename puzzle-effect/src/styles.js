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
    background-color: #09971b;
    color: #7fb9f3;
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

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 600px;
  width: 400px;
`;

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
