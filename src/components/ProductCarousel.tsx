import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  isHit?: boolean;
  isNew?: boolean;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const productsPerSlide = 4;
  const maxSlides = Math.ceil(products.length / productsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const getCurrentProducts = () => {
    const start = currentSlide * productsPerSlide;
    return products.slice(start, start + productsPerSlide);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        
        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-12">
            {getCurrentProducts().map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  {product.isHit && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold z-10">
                      ХИТ
                    </div>
                  )}
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold z-10">
                      NEW
                    </div>
                  )}
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="text-xl font-bold text-gray-900 mb-3">
                    {product.price}
                  </div>
                  <button className="w-full bg-yellow-500 text-black py-2 px-4 rounded font-semibold hover:bg-yellow-400 transition-colors">
                    В корзину
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-yellow-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;