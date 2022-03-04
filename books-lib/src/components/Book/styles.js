import styled from 'styled-components';

export const Container = styled.figure`
  cursor: pointer;
  margin: 0;
`;

export const Cover = styled.img`
  aspect-ratio: 2 / 3;
  border: 2px solid #000;
  filter: grayscale(100%);
  margin-block-end: 1rem;
  object-fit: cover;
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 28px;
  line-height: 1.3;
  margin: 0 0 10px 0;
`;

export const Author = styled.h4`
  font-family: 'Libre Baskerville', serif;
  font-style: italic;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;
