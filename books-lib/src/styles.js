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

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 24px;
  padding: 0;
  position: relative;
  width: 24px;

  &::before,
  &::after {
    background-color: #000;
    content: '';
    height: 24px;
    width: 2px;
    position: absolute;
    top: 0;
    left: 9px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
