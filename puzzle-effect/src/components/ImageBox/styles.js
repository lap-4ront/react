import styled from 'styled-components';

export const Image = styled.div.attrs(({ $movedX, $movedY }) => {
  return {
    style: {
      transform: `translate(${$movedX}px, ${$movedY}px)`,
    },
  };
})`
  background-image: url('/images/her.jpg');
  background-position: ${({ $initialX, $initialY }) => {
    return `-${$initialX * 100}px -${$initialY * 100}px`;
  }};
  background-size: 400px 600px;
  height: 100px;
  position: relative;
  width: 100px;
`;
