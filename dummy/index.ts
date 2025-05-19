export type Product = {
  name: string
  count: number
  img: string
  desc?: string
  origin?: string
  sales?: string[]
  id: number
}

export type Service = {
  title: string
  desc1: string
  desc2: string
  img: string
  imgMobile: string
}

export const subProducts: Array<Product> = Array.from({ length: 40 }).map(
  (_, index) => ({
    id: index,
    count: Math.floor(Math.random() * 100),
    img: `/image/icon${(index % 8) + 1}.png`,
    name: `YF-${`00${index + 1}`.substring(-3)}`,
  })
);

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

export type Item = {
  free: string
  max: string
  spec: string
}

export const items: Item[] = [
  { free: 'Ø4.8', max: 'Ø6.0', spec: '0.4*4.7' },
  { free: 'Ø5.5', max: 'Ø6.2', spec: '0.6*6' },
  { free: 'Ø6.0', max: 'Ø7.3', spec: '0.6*6' },
  { free: 'Ø6.5', max: 'Ø8.0', spec: '0.5*6' },
  { free: 'Ø6.7', max: 'Ø8.0', spec: '0.4*6' },
  { free: 'Ø7.0', max: 'Ø8.5', spec: '0.6*6' },
  { free: 'Ø7.5', max: 'Ø9.2', spec: '0.6*6' },
  { free: 'Ø8.0', max: 'Ø10', spec: '0.6*6' },
  { free: 'Ø8.5', max: 'Ø10.5', spec: '0.6*8' },
  { free: 'Ø9.2', max: 'Ø11.5', spec: '0.6*8' },
  { free: 'Ø10', max: 'Ø12.3', spec: '0.8*8' },
  { free: 'Ø10.5', max: 'Ø13', spec: '0.8*8' },
  { free: 'Ø11', max: 'Ø14', spec: '0.8*8' },
  { free: 'Ø11.5', max: 'Ø14.2', spec: '0.8*8' },
  { free: 'Ø12', max: 'Ø14.5', spec: '0.8*8' },
  { free: 'Ø12.5', max: 'Ø16', spec: '0.8*8' },
  { free: 'Ø13', max: 'Ø15.5', spec: '0.8*10' },
  { free: 'Ø14', max: 'Ø16.8', spec: '0.8*10' },
  { free: 'Ø14.5', max: 'Ø17.5', spec: '0.9*10' },
  { free: 'Ø15', max: 'Ø18.3', spec: '1.0*10' },
  { free: 'Ø15.4', max: 'Ø18.7', spec: '1.0*12' },
  { free: 'Ø16', max: 'Ø19.2', spec: '1.0*10' },
  { free: 'Ø16', max: 'Ø19.9', spec: '1.0*12' },
  { free: 'Ø16.5', max: 'Ø19.8', spec: '1.0*12' },
  { free: 'Ø17', max: 'Ø20', spec: '1.0*12' },
  { free: 'Ø18', max: 'Ø21.5', spec: '1.0*10' },
  { free: 'Ø18', max: 'Ø21', spec: '1.0*12' },
  { free: 'Ø19', max: 'Ø24', spec: '1.0*10' },
  { free: 'Ø20', max: 'Ø25.5', spec: '1.2*15' },
  { free: 'Ø20.8', max: 'Ø26.5', spec: '1.0*12' },
  { free: 'Ø21', max: 'Ø25.8', spec: '1.2*15' },
  { free: 'Ø22', max: 'Ø27', spec: '1.4*15' },
  { free: 'Ø23', max: 'Ø28.2', spec: '1.4*15' },
  { free: 'Ø24', max: 'Ø29.2', spec: '1.4*15' },
  { free: 'Ø25.4', max: 'Ø30', spec: '1.2*10' },
  { free: 'Ø26', max: 'Ø32', spec: '1.2*12' },
  { free: 'Ø28', max: 'Ø35', spec: '1.2*10' },
  { free: 'Ø30', max: 'Ø37', spec: '1.4*15' },
  { free: 'Ø32.5', max: 'Ø39.5', spec: '1.4*15' },
  { free: 'Ø33.5', max: 'Ø40', spec: '1.2*10' },
  { free: 'Ø37', max: 'Ø46', spec: '1.2*10' },
  { free: 'Ø37', max: 'Ø45', spec: '1.4*15' },
];
