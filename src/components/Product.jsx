import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product ID: Red Apple{1}</h1>
      <h1>Product ID: Yellow Banana {2}</h1>
      <h1>Product ID: Orange Orange{3}</h1>
      <h1>Product ID: {4}</h1>
      <h1>Product ID: {5}</h1>
    </div>
  );
}

export default Product;
