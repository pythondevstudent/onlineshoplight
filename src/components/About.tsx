import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-yellow-500 relative overflow-hidden">
      {/* Фоновое изображение на всю ширину экрана */}
      <div className="absolute inset-0 w-full h-full bg-yellow-500 bg-[url('/assets/lyustry.jpg')] bg-no-repeat bg-right bg-cover opacity-20 pointer-events-none"></div>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 w-full relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          ОБ ИНТЕРНЕТ-МАГАЗИНЕ
        </h2>

        <div className="max-w-4xl mx-auto text-black">
          <p className="mb-6 leading-relaxed">
            В нашем магазине представлено свыше 100 000 светильников из России, Китая и таких европейских стран, как Австрия, Бельгия, Великобритания, Германия, Испания, Италия, Чехия. У нас можно купить освещение для спальни, гостиной, кухни, коридора, ванной и детской комнат.
          </p>

          <p className="mb-6 leading-relaxed">
            Мы регулярно обновляем наш ассортимент и делаем так, чтобы светильники у нас могли купить все, вне зависимости от покупательской способности. Поэтому у нас есть как продукция эконом-класса по демократичным ценам, так и товар премиум-класса по более высокой стоимости.
          </p>

          <p className="mb-8 leading-relaxed">
            Доставку заказов мы выполняем в Тулу и в другие города Тульской области – Новомосковск, Донской, Алексин, Щекино, Ефремов, Богородицк, Плавск и прочие населенные пункты. Отправку производим любой транспортной или курьерской компанией на Ваш выбор (Деловые линии, ПЭК, СДЭК, Boxberry). Обращаем ваше внимание, что ограничений на минимальную стоимость заказа для доставки в регионы у нас нет.
          </p>

          <div className="text-center">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Подробнее о нашей компании
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
