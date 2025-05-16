
export type Product = {
  name: string
  count: number
  img: string
  id: number
}

export type Service = {
  title: string
  desc1: string
  desc2: string
  img: string
  imgMobile: string
}

export const products: Array<Product> = [
  {
    name: '戶外大型管束商品',
    count: 12,
    img: '/image/product1.png',
    id: 0,
  },
  {
    name: '管束商品',
    count: 9,
    img: '/image/product2.png',
    id: 1,
  },
  {
    name: '汽機車零件商品',
    count: 6,
    img: '/image/product3.png',
    id: 2,
  },
];

export const services: Array<Service> = [
  {
    title: 'word1',
    desc1: 'word2',
    desc2: 'word3',
    img: '/image/icon1.svg',
    imgMobile: '/image/mobile-icon1.png',
  },
  {
    title: 'word4',
    desc1: 'word5',
    desc2: 'word6',
    img: '/image/icon2.svg',
    imgMobile: '/image/mobile-icon2.png',
  },
  {
    title: 'word7',
    desc1: 'word8',
    desc2: 'word9',
    img: '/image/icon3.svg',
    imgMobile: '/image/mobile-icon3.png',
  },
];
