import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
  return (
    <div className={classes.searchContainer}>
      <form>
        <input
          type="text"
          placeholder="Search..."
          className={classes.searchInput}
          value={filterText}
          onChange={event => onFilterTextChange(event.target.value)}
        />
        <div className={classes.searchCheckContainer}>
          <input
            type="checkbox"
            id="searchCheck"
            checked={inStockOnly}
            onChange={event => onInStockOnlyChange(event.target.checked)}
          />
          <label htmlFor="searchCheck">Show product that stocked</label>
        </div>
      </form>
    </div>
  );
};

export { SearchBar };
