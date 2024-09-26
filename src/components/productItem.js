import React from 'react';

const ProductItem = ({ product, addToBag }) => {
  return (
    <div className="border py-4 rounded-lg shadow-md flex flex-col items-center justify-center pb-5">
      <img src={product.Image} alt='image of product' className='w-[300px] h-[250px] object-cover'/>
      <h3 className="text-lg font-bold text-center mt-4">{product.name}</h3>
      <p className="text-gray-700  text-red-700 text-center">{product.price}/-</p>
    
      <button
        onClick={() => addToBag(product)}
        className="mt-4 bg-blue-900 text-white py-2 px-4 rounded hover:cursor-pointer hover:bg-blue-600"
      >
        Add to Bag
      </button>
    </div>
  )
};

export default ProductItem;
