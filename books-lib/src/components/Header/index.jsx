import React from 'react';
import { Logo, HeaderContainer } from './styles';


const Header = () => {
  return (
    <HeaderContainer>
      <a href="/">
        <Logo title="Books lib logotype" />
      </a>
    </HeaderContainer>
  );
};

export { Header };
