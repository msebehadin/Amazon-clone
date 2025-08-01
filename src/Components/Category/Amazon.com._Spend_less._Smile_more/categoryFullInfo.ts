import cat1 from './10004.jpg';
import cat3 from './10003.jpg';
import cat6 from './10006.webp';
import cat7 from './10007.webp';

export interface CategoryData {
  title: string;
  name: string;
  img: string;
  product: unknown;
}

export const categoryImg: CategoryData[] = [
  {
    title: 'Electronics',
    name: 'electronics',
    img: cat1,
    product: undefined
  },
  {
    title: 'Discover fashion trends',
    name: "women's clothing",
    img: cat6,
    product: undefined
  },
  {
    title: "Men's Clothing",
    name: "men's clothing",
    img: cat7,
    product: undefined
  },
  {
    title: 'For your home',
    name: "jewelry",
    img: cat3,
    product: undefined
  },
];
