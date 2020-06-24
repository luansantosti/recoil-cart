import React from 'react';
import { useRecoilValue} from 'recoil';

import { cartStatus } from '../recoil/Selectors';
import { cartState as _cartState } from '../recoil/Atoms';

const Product = () => {
  const cart = useRecoilValue(cartStatus);
  const cartState = useRecoilValue(_cartState);

  return (
    <div>
      {cartState.map(product => {
        return (
          <div style={{ display: 'flex' }}>
            <p>
              {product.title}
            </p>
            <p style={{ marginLeft: '10px'}}>
              Price: {product.price}
            </p>
            <p style={{ marginLeft: '10px'}}>
              Quantity: {product.qty}
            </p>
          </div>
        )
      })}
      {cart.totalItems ? <div>Total items: {cart.totalItems}</div> : <div>Carrinho vazio</div>}
      Total price: {cart.totalPrice}
    </div>
  )
}

export default Product;