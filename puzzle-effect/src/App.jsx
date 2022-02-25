import React from 'react';
import { GlobalStyles, ImageContainer, Wrapper } from './styles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ImageBox } from './components/ImageBox';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Footer />
      <Wrapper>
        <ImageContainer>
          <ImageBox />
        </ImageContainer>
      </Wrapper>
    </>
  );
};

export default App;
