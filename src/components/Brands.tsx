import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Brands = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const brandsPerSlide = 5;

  const brands = [
    { name: 'ARTE', image: '/assets/brand_arte.jpg' },
    { name: 'CITILUX', image: '/assets/brand_citilux.jpg' },
    { name: 'EGLO', image: '/assets/brand_eglo.jpg' },
    { name: 'EUROSVET', image: '/assets/brand_eurosvet.jpg' },
    { name: 'FAVOURITE', image: '/assets/brand_favourite.jpg' },
    { name: 'ARTE', image: '/assets/brand_arte.jpg' },
    { name: 'CITILUX', image: '/assets/brand_citilux.jpg' },
  ];

  const maxSlides = Math.ceil(brands.length / brandsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const getCurrentBrands = () => {
    const start = currentSlide * brandsPerSlide;
    return brands.slice(start, start + brandsPerSlide);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12">БРЕНДЫ</h2>

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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-12">
            {getCurrentBrands().map((brand, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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

export default Brands;
