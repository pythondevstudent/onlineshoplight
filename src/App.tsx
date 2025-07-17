import React from 'react';
import Header from './components/Header';
import Banners from './components/Banners';
import Categories from './components/Categories';
import ProductCarousel from './components/ProductCarousel';
import Styles from './components/Styles';
import Brands from './components/Brands';
import About from './components/About';
import Footer from './components/Footer';
import { hitProducts, newProducts } from './data/products';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <Header />
        <Banners />
        <Categories />
        <ProductCarousel title="ХИТЫ ПРОДАЖ" products={hitProducts} />
        <ProductCarousel title="НОВИНКИ" products={newProducts} />
        <Styles />
        <Brands />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;