import styled from 'styled-components';
import {Pill} from '../../styles';

export const Panel = styled.article`
  background-color: #ffe581;
  border: 2px solid #000;
  bottom: 0;
  height: calc(100vh - 82px);
  overflow-y: scroll;
  padding: 40px 120px 60px 40px;
  position: fixed;
  right: ${({$state}) => {
    return $state === 'entering' || $state === 'entered' ? 0 : '-600px';
  }};
  transition: 300ms;
  width: 600px;
  z-index: 2;

  img {
    max-width: 100%;
  }

  @media (max-width: 800px) {
    border-left: none;
    bottom: ${({$state}) => {
      return $state === 'entering' || $state === 'entered' ? 0 : '-100vh';
    }};
    height: calc(100vh - 75px);
    padding: 40px 85px 20px 20px;
    right: unset;
    width: 100vw;
  }
`;

export const P = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 30px 0 0;
`;

export const Em = styled.em`
  font-style: italic;
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

export const CloseWrapper = styled(Pill)`
  cursor: pointer;
  display: ${({$state}) => {
    return $state === 'entered' ? 'flex' : 'none';
  }};
  height: 40px;
  position: fixed;
  right: 40px;
  top: 120px;
  width: 40px;
  z-index: 4;

  @media (max-width: 800px) {
    bottom: 20px;
    right: 20px;
    top: unset;
  }
`;

export const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  height: 100vh;
  position: fixed;
  top: 0;
  transition: 300ms;
  width: 100vw;
  z-index: 1;

  opacity: ${({$state}) => {
    return $state === 'entering' || $state === 'entered' ? 1 : 0;
  }};
  pointer-events: ${({$state}) => {
    return $state === 'exited' ? 'none' : 'auto';
  }};
`;
