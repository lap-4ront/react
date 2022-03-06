import styled from 'styled-components';

export const Panel = styled.article`
  background-color: #ffe581;
  border: 2px solid #000;
  bottom: 0;
  height: calc(100vh - 82px);
  overflow-y: scroll;
  padding: 40px 120px 60px 40px;
  position: fixed;
  right: 0;
  width: 600px;
  z-index: 2;

  img {
    max-width: 100%;
  }

  @media (max-width: 800px) {
    border-left: none;
    bottom: 0;
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
