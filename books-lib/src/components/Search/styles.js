import styled from 'styled-components';
import {Pill} from '../../styles';
import {ReactComponent as Magnifier} from './../../assets/search.svg';

export const SearchContainer = styled(Pill)`
  height: 35px;
  width: ${({$showOnDesktop}) => {
    return $showOnDesktop ? '420px' : '35px';
  }};
  transition: 0.3s;

  @media (max-width: 800px) {
    width: 85%;
  }

  input,
  button {
    display: ${({$showOnDesktop}) => {
      return $showOnDesktop ? 'block' : 'none';
    }};

    @media (max-width: 800px) {
      display: block;
      min-width: 24px;
    }
  }
`;

export const Input = styled.input`
  background-color: inherit;
  border: none;
  font-family: 'Work Sans', sans-serif;
  flex-grow: 1;
  font-size: 18px;
  font-weight: 700;
  padding: 6px;

  &:focus-visible {
    outline: none;
  }
`;

export const Icon = styled(Magnifier)`
  cursor: pointer;
  width: 20px;
`;

export const Wrapper = styled.div`
  @media (max-width: 800px) {
    align-items: center;
    background-color: #ffbccc;
    border-top: 2px solid #000;
    bottom: 0;
    display: flex;
    height: 64px;
    justify-content: center;
    left: 0;
    position: fixed;
    width: 100vw;
    z-index: 1;
  }
`;
