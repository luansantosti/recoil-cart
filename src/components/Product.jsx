import React from 'react';
import { useAddProduct } from '../recoil/hooks';

const Product = ({ product }) => {
  const addProduct = useAddProduct();
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <button onClick={() => addProduct(product)}>Add to cart</button>
    </div>
  )
}

export default Product;