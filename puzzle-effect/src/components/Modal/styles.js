import styled from 'styled-components';

export const Modal = styled.div`
  animation: glow 1s forwards;
  background: #efefef;
  box-sizing: border-box;
  left: 50%;
  padding: 60px;
  position: absolute;
  max-width: 800px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100vw - 60px);
  z-index: 3;

  @media (max-width: 700px) {
    padding: 40px;
    width: calc(100vw - 30px);
  }
`;

export const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  height: 100vh;
  position: fixed;
  width: 100vw;
  z-index: 2;
`;
