import React from 'react';
import { GlobalStyles, ImageContainer, Wrapper } from './styles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ImageBox } from './components/ImageBox';

const matrix = [0, 1, 2, 3];

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Footer />
      <Wrapper>
        <ImageContainer>
          {matrix.map((x, index) => {
            return <ImageBox key={index} x={x} />;
          })}
        </ImageContainer>
      </Wrapper>
    </>
  );
};

export default App;
