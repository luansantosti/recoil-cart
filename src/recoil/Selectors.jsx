import { selector } from 'recoil';

import { cartState } from './Atoms';

export const cartStatus = selector({
  key: 'cartStatus',
  get: ({ get }) => {
    const cart = get(cartState);
    const totalItems = cart.length;
    const totalPrice = cart.reduce((total, { qty, price }) => total + (qty * price), 0);

    return {
      totalItems,
      totalPrice,
    }
  }
})