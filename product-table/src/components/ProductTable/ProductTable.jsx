import React from 'react';
import './ProductTable.module.css';
import { ProductCategory } from '../ProductCategory/ProductCategory';
import { ProductRow } from '../ProductRow/ProductRow';

const ProductTable = ({ products }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategory
          category={product.category}
          key={product.category}
        />
      );
    }

    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    );

    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export { ProductTable };
