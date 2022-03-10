import React from 'react';
import { Logo, HeaderContainer } from './styles';


const Header = ({ children }) => {
  return (
    <HeaderContainer>
      <a href="/">
        <Logo title="Books lib logotype" />
      </a>
      {children}
    </HeaderContainer>
  );
};

export { Header };
