import styled from 'styled-components';
import {ReactComponent as LogoSVG} from './../../assets/logo.svg';

export const Logo = styled(LogoSVG)`
  display: block;
  height: 40px;
  width: 270px;

  @media (max-width: 800px) {
    height: 33px;
    width: 222px;
  }
`;

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: #ef86e9;
  border-bottom: 2px solid #222;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  position: fixed;
  width: 100vw;
  z-index: 3;

  @media (max-width: 800px) {
    padding: 20px;
  }
`;
