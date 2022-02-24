import React from 'react';
import { GlobalStyles } from './styles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Footer />
    </>
  );
};

export default App;
