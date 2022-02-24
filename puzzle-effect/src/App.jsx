import React from 'react';
import { GlobalStyle } from './styles';

const App = () => {
  const message = (nickname) => {
    return `${nickname} is a frontend developer`;
  };
  return (
    <div className="App">
      <GlobalStyle />
      <h2>{message`4rontender`}</h2>
    </div>);
};

export default App;
