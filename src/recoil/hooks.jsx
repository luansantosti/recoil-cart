import { useRecoilState } from 'recoil';

import { cartState } from './Atoms';

export const useAddProduct = () => {
  const [cart, setCart] = useRecoilState(cartState);
  
  return (product) => {
    const index = cart.findIndex(item => item.id === product.id);

    if (index === -1) {
      return setCart([...cart, { ...product, qty: 1 }]);
    }

    const newCart = cart.map((item, i) => {
      if(i === index) {
        return {
          ...item,
          qty: item.qty + 1,
        }
      }

      return item;
    })
    
    setCart(newCart)
  }
}

