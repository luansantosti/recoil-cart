import React from 'react';
import { useRecoilValue } from 'recoil';

import { productsState } from '../recoil/Atoms';
import Product from './Product';

const Products = () => {
  const products = useRecoilValue(productsState);

  return (
    <div style={{ marginLeft: '30px', display: 'grid', gridGap: '30px', gridTemplateColumns: 'repeat(3, 1fr)'}}>
      {
        products?.map((product) => {
          return (
            <Product key={product.id} product={product} />
          )
        })
      }
    </div>
  )
}

export default Products;