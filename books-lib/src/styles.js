import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    font-family: "Work Sans", serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
`;

export const Pill = styled.div`
  align-items: center;
  background: #64bcdf;
  border: 2px solid #000;
  border-radius: 30px;
  display: flex;
  height: 20px;
  justify-content: center;
  overflow: hidden;
  padding: 8px;
  width: 20px;
`;
