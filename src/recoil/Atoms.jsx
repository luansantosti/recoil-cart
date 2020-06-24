import { atom } from 'recoil';

export const products = [
  {
    id: 1,
    title: 'Tv',
    price: 240,
  },
  {
    id: 2,
    title: 'Ps4',
    price: 500,
  },
  {
    id: 3,
    title: 'The last of us II',
    price: 250,
  },{
    id: 4,
    title: 'Monitor',
    price: 990,
  },
  {
    id: 5,
    title: 'Mac pro',
    price: 1400,
  },{
    id: 6,
    title: 'Fone',
    price: 150,
  }
]

export const productsState = atom({
  key: `productsState`,
  default: products,
})

export const cartState = atom({
  key: 'cartState',
  default: [],
})