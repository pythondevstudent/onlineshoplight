import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">КАТАЛОГ</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Люстры</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Потолочные и подвесные светильники</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Встраиваемые светильники</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Настольные лампы</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Торшеры напольные</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Бра настенные</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Уличные светильники</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Лампочки</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">ПОКУПАТЕЛЯМ</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">О компании</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Склад и выставка</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Гарантийное и гарантийное обслуживание</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Отзывы</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Распродажа</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Акции</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Карта сайта</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">КОНТАКТЫ</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>8 (800) 551-39-31</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@lstr-shop.ru</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div>
                  <div>Адреса пунктов самовывоза:</div>
                  <div>г. Тула, ул. Чмутова, д. 158 В</div>
                  <div>д. Нижнее Елькина, 77 офис 7</div>
                  <div>г. Тула, пр. Ленина, д.85, 1эт., оф.5</div>
                  <div>Просмотреть все адреса в Туле</div>
                </div>
              </div>
              <div className="pt-2">
                <div className="text-gray-300">Время работы:</div>
                <div>с 9 до 23 часов без выходных</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-xs text-gray-400 text-center">
          <p className="mb-1">
            &copy; 2022 «Свет, Тула» Интернет-магазин люстр. Все права защищены. При копировании материалов ссылка на сайт — обязательна.
          </p>
          <p className="mb-1">
            Вся информация на сайте относительно размеров, параметров, комплектаций, технических характеристик, комплектующих и стоимости светильников (продукции/товаров) носит информационный характер и не
          </p>
          <p>
            является публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса Российской Федерации. Для получения подробной информации звоните по телефонам: 8-800-551-39-31
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
