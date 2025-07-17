import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Styles = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const stylesPerSlide = 4;

  const styles = [
    {
      name: 'СКАНДИНАВСКИЙ',
      image: '/assets/style_scandinavian.jpg',
    },
    {
      name: 'ЛОФТ',
      image: '/assets/style_loft.jpg',
    },
    {
      name: 'ПРОВАНС',
      image: '/assets/style_provence.jpg',
    },
    {
      name: 'СОВРЕМЕННЫЙ',
      image: '/assets/style_modern.jpg',
    },
    {
      name: 'КЛАССИЧЕСКИЙ',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'ХАЙТЕК',
      image: 'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const maxSlides = Math.ceil(styles.length / stylesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const getCurrentStyles = () => {
    const start = currentSlide * stylesPerSlide;
    return styles.slice(start, start + stylesPerSlide);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12">СТИЛИ</h2>

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
            {getCurrentStyles().map((style, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden cursor-pointer group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center">
                    {style.name}
                  </h3>
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

export default Styles;
