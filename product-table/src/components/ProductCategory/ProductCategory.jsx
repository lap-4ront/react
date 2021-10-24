import React from 'react';
import classes from './ProductCategory.module.css';

const ProductCategory = ({ category }) => {
  return (
    <tr colSpan="2" className={classes.categoryTitle}>
      <td>{category}</td>
    </tr>
  );
};

export { ProductCategory };
