import React, { useRef } from 'react';
import { SearchContainer, Input, Icon } from './styles';
import { Close } from './../../styles';

const Search = ({ filterBooks }) => {
  const inputEl = useRef(null);

  const handleChange = (event) => {
    return filterBooks(event.target.value);
  };

  const clearSearch = () => {
    filterBooks('');
    inputEl.current.value = '';
  };

  return (
    <SearchContainer>
      <Icon />
      <Input
        type="text"
        name="search"
        autoComplete="off"
        ref={inputEl}
        onChange={handleChange}
      />
      <Close onClick={clearSearch} />
    </SearchContainer>
  );
};

export { Search };
