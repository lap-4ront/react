import styled from 'styled-components';

export const Container = styled.div`
  color: #000;
`;

export const H3 = styled.h3`
  color: #0519af;
  font-size: 3rem;
  margin: 0;
`;

export const H4 = styled.h4`
  color: #0519af;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1;
  margin: 20px 0 0;

  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

export const P = styled.p`
  font-size: 1.25rem;
  margin: 30px 0;

  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

export const SuccessContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50 auto;
  text-align: center;

  .smile {
    max-width: 100px;
  }

  @media (max-width: 700px) {
    .smile {
      max-width: 70px;
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;

  .social {
    margin: 0 0.75rem;
    max-width: 40px;
    width: 100%;
  }
`;
