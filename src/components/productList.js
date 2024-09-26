import React from 'react';
import ProductItem from '../components/productItem';

const ProductList = ({ products, addToBag }) => {

  const displayedProducts = products.slice(0, 6);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {displayedProducts.map((product) => (
        <ProductItem key={product.id} product={product} addToBag={addToBag} />
      ))}
    </div>
  );
};

export default ProductList;