import React from 'react';
import classes from './FilterableProductTable.module.css';
import { ProductTable } from '../ProductTable/ProductTable';
import { SearchBar } from '../SearchBar/SearchBar';

const FilterableProductTable = ({ products }) => {
  return (
    <div className={classes.container}>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
};

export { FilterableProductTable };
