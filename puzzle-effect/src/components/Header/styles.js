import styled from 'styled-components';
import { ReactComponent as LogoSVG } from './logo.svg';

export const Logo = styled(LogoSVG)`
  height: auto;
  max-width: 760px;
  width: 100%;
`;

export const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 30px;
  pointer-events: none;
  pozition: fixed;
  width: 100vw;
  z-index: 1;
`;
