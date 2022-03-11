import React, { useRef, useState } from 'react';
import { Close } from './../../styles';
import { Icon, Input, SearchContainer, Wrapper } from './styles';

const Search = ({ filterBooks }) => {
  const inputEl = useRef(null);
  const [showOnDesktop, setShowOnDesktop] = useState(false);

  const handleChange = (event) => {
    return filterBooks(event.target.value);
  };

  const clearSearch = () => {
    filterBooks('');
    inputEl.current.value = '';
    setShowOnDesktop(false);
  };

  const showSearch = () => {
    setShowOnDesktop(true);
  };

  return (
    <Wrapper>
      <SearchContainer $showOnDesktop={showOnDesktop}>
        <Icon onClick={showSearch} />
        <Input
          type="text"
          name="search"
          autoComplete="off"
          ref={inputEl}
          onChange={handleChange}
        />
        <Close onClick={clearSearch} />
      </SearchContainer>
    </Wrapper>
  );
};

export { Search };
