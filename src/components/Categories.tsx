import React from 'react';

const Categories = () => {
  const categories = [
    { image: '/assets/lyustry.jpg', title: 'ЛЮСТРЫ' },
    { image: '/assets/bra.jpg', title: 'БРА' },
    { image: '/assets/torshery.jpg', title: 'ТОРШЕРЫ' },
    { image: '/assets/potolochnye_svetilniki.jpg', title: 'ПОТОЛОЧНЫЕ СВЕТИЛЬНИКИ' },
    { image: '/assets/nastolnye_lampy.jpg', title: 'НАСТОЛЬНЫЕ ЛАМПЫ' },
    { image: '/assets/vstraivaemye_svetilniki.jpg', title: 'ВСТРАИВАЕМЫЕ СВЕТИЛЬНИКИ' },
    { image: '/assets/ulichnye_svetilniki.jpg', title: 'УЛИЧНЫЕ СВЕТИЛЬНИКИ' },
    { image: '/assets/lampochki.jpg', title: 'ЛАМПОЧКИ' },
  ];

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-10 max-w-7xl">
        <h1 className="text-3xl font-bold text-center mb-12">
          ИНТЕРНЕТ-МАГАЗИН СВЕТИЛЬНИКОВ LIGHT
        </h1>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" role="list">
          {categories.map((category, index) => (
            <li key={index} className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow group bg-white">
              <a href={`#category-${index}`} className="block focus:outline-yellow-500">
                <div className="aspect-square overflow-hidden flex items-center justify-center relative">
                  <div className="w-3/4 h-3/4 flex items-center justify-center relative">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      className="absolute bottom-0 left-0 w-full h-full flex justify-center items-end pointer-events-none"
                      style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 200, fontStyle: 'normal', fontSize: 'clamp(0.7em, 2vw, 1.2em)', lineHeight: 1 }}
                    >
                      <span className="px-2 py-1 rounded drop-shadow-lg text-black text-center w-fit">
                        {category.title}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
