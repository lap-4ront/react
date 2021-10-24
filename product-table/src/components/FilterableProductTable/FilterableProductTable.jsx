import React from 'react';
import classes from './FilterableProductTable.module.css';
import { ProductTable } from '../ProductTable/ProductTable';

const FilterableProductTable = ({ products }) => {
  return (
    <div className={classes.container}>
      <ProductTable products={products} />
    </div>
  );
};

export { FilterableProductTable };
