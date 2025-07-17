export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  isHit?: boolean;
  isNew?: boolean;
}

export const hitProducts: Product[] = [
  {
    id: 1,
    name: "Подвесная люстра Mytony Grazia MOD046PL-08CH",
    price: "19 677 ₽",
    image: "/assets/product1.jpg",
    isHit: true
  },
  {
    id: 2,
    name: "Подвесная люстра Mytony Grazia MOD046PL-08CH",
    price: "9 677 ₽",
    image: "/assets/product2.jpg",
    isHit: true
  },
  {
    id: 3,
    name: "Подвесная люстра Mytony Grazia MOD046PL-08CH",
    price: "9 677 ₽",
    image: "/assets/product3.jpg",
    isHit: true
  },
  {
    id: 4,
    name: "Подвесная люстра Mytony Grazia MOD046PL-08CH",
    price: "119 677 ₽",
    image: "/assets/product4.jpg",
    isHit: true
  },
  {
    id: 5,
    name: "Бра настенное Eurosvet EV-7890",
    price: "6 780 ₽",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400",
    isHit: true
  },
  {
    id: 6,
    name: "Встраиваемый светильник LED Pro LP-1122",
    price: "3 450 ₽",
    image: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=400",
    isHit: true
  }
];

export const newProducts: Product[] = [
  {
    id: 7,
    name: "Подвесная люстра Mytony Grazia MOD046PL-08CH",
    price: "19 677 ₽",
    image: "/assets/product1.jpg",
    isNew: true
  },
  {
    id: 8,
    name: "Подвесная люстра Mytony Grazia MOD046PL-08CH",
    price: "9 677 ₽",
    image: "/assets/product2.jpg",
    isNew: true
  },
  {
    id: 9,
    name: "Подвесная люстра Mytony Grazia MOD046PL-08CH",
    price: "9 677 ₽",
    image: "/assets/product3.jpg",
    isNew: true
  },
  {
    id: 10,
    name: "Подвесная люстра Mytony Grazia MOD046PL-08CH",
    price: "119 677 ₽",
    image: "/assets/product4.jpg",
    isNew: true
  }
];
