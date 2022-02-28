import styled from 'styled-components';
import { AbsoluteCenter } from '../../styles';

export const Modal = styled.div`
  ${AbsoluteCenter}
  animation: glow 1s forwards;
  background: #efefef;
  box-sizing: border-box;
  padding: 60px;
  max-width: 800px;
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

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 30px;
  padding: 0;
  position: absolute;
  right: 60px;
  top: 60px;
  width: 30px;

  &::before,
  &::after {
    background: #0519ce;
    content: '';
    height: 33px;
    left: 15px;
    position: absolute;
    top: 0;
    width: 2px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  @media (max-width: 7000px) {
    right: 30px;
    top: 30px;
  }
`;
