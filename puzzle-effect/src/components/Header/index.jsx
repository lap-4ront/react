import React from 'react';
import { Logo, Header } from './styles';

const HeaderComponent = () => {
  return (
    <Header>
      <Logo title="Puzzle Logo" />
    </Header>
  );
};

export { HeaderComponent as Header };
