import React, { useState } from 'react';
import { Search, User, Phone, MapPin, Clock } from 'lucide-react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'КАТАЛОГ ТОВАРОВ',
    'БРЕНДЫ',
    'СТИЛИ',
    'О КОМПАНИИ',
    'ГАРАНТИЯ/ВОЗВРАТ',
    'ДОСТАВКА/ОПЛАТА',
    'ОТЗЫВЫ',
    'КОНТАКТЫ',
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="bg-transparent py-2">
        <div className="container mx-auto px-10 max-w-7xl">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <img
                  src="/assets/logo.jpg"
                  alt="Light Logo"
                  className="h-15 w-auto object-contain"
                />
              </div>

              <div className="hidden lg:flex relative">
                <input
                  type="search"
                  placeholder="Поиск товаров..."
                  className="w-96 px-4 py-1 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button className="px-3 py-1 bg-yellow-500 text-white rounded-r-md hover:bg-yellow-600 transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Москва</span>
              </div>

              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+7 (495) 128-11-38</span>
              </div>

              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Ежедневно с 9:00 до 22:00</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <span>RUB ₽</span>
              <User className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 max-w-7xl lg:hidden flex justify-between items-center">
        <button className="flex items-center space-x-2">
          <Search className="w-6 h-6" />
        </button>
        <button
          className="flex flex-col justify-center space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      <nav className="bg-yellow-500">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className="flex flex-col lg:flex-row lg:space-x-8 py-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`
                      block py-2 lg:py-0 text-sm font-medium transition-colors
                      ${index === 0
                        ? 'bg-white text-black rounded-md px-3'
                        : 'text-black hover:text-yellow-700'
                      }
                    `}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
