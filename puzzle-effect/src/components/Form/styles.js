import styled from 'styled-components';

export const Input = styled.input`
  border: 2px solid #000;
  box-sizing: border-box;
  font-size: 1.25rem;
  margin: 8px 0 24px;
  padding: 12px;
  width: 100%;

  &:focus-visible {
    border: 2px solid #0519af;
  }

  @media (max-width: 700px) {
    font-size: 0.75rem;
  }
`;

export const Label = styled.label`
  font-weight: 600;
`;

export const Error = styled.span`
  color: #954215;
`;

export const Submit = styled.button`
  background: none;
  border: 2px solid #0519af;
  color: #0519af;
  cursor: pointer;
  float: right;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 12px;
  text-transform: uppercase;

  @media (max-width: 700px) {
    font-size: 0.75rem;
  }
`;
