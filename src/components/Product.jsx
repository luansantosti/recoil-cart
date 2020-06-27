import React from 'react';
import { useAddProduct, useRemoveProduct } from '../recoil/hooks';

const Product = ({ product }) => {
  const addProduct = useAddProduct();
  const removeProduct = useRemoveProduct();
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <button onClick={() => addProduct(product)}>Add to cart</button>
      <button onClick={() => removeProduct(product)}>Remove from cart</button>
    </div>
  )
}

export default Product;