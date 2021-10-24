import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={classes.searchContainer}>
      <form>
        <input type="text" placeholder="Search..." className={classes.searchInput} />
        <div className={classes.searchCheckContainer}>
          <input type="checkbox" id="searchCheck" />
          <label htmlFor="searchCheck">Show product that stocked</label>
        </div>
      </form>
    </div>
  );
};

export { SearchBar };
