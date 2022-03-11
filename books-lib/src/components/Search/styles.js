import styled from 'styled-components';
import {Pill} from '../../styles';
import {ReactComponent as Magnifier} from './../../assets/search.svg';

export const SearchContainer = styled(Pill)`
  height: 35px;
  width: 420px;
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
