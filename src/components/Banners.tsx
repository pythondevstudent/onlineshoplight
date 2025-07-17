import React from 'react';

const Banners = () => {
  
  const banner1 = '/assets/banner1.jpg';
  const banner2 = '/assets/banner2.jpg';
  const banner3 = '/assets/banner3.jpg';

  return (
    <section className="relative bg-transparent py-16 mt-20 lg:mt-24">
      <div className="container mx-auto px-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 relative bg-black rounded-lg overflow-hidden min-h-[300px]">
            <div className="relative w-full h-full min-h-[300px]">
              <div
                className="absolute inset-0 bg-cover bg-center filter brightness-90 opacity-60 pointer-events-none"
                style={{ backgroundImage: `url(${banner1})` }}
              ></div>
              
              <div
                className="absolute z-10 flex flex-col items-end"
                style={{
                  top: '23%', 
                  right: '18%', 
                  minWidth: '20vw',
                  maxWidth: '40vw',
                  alignItems: 'flex-end',
                }}
              >
                <h1
                  className="font-bold mb-[0.5vw] leading-tight text-white text-left drop-shadow-lg"
                  style={{
                    fontSize: 'clamp(2.2vw, 5vw, 3.5vw)',
                    fontFamily: 'Montserrat, Arial, sans-serif',
                    fontWeight: 700,
                    textAlign: 'left',
                    lineHeight: '1.05',
                    marginBottom: '1.2vw',
                  }}
                >
                  РАСПРО<br />ДАЖА
                </h1>
                <button
                  className="text-white font-bold rounded-lg hover:bg-yellow-400 transition-colors text-left shadow-lg"
                  style={{
                    fontSize: 'clamp(0.8vw, 1.3vw, 1.1vw)',
                    fontFamily: 'Montserrat, Arial, sans-serif',
                    fontWeight: 700,
                    padding: '1vw 3vw',
                    marginTop: '0.5vw',
                    marginBottom: '1vw',
                    textAlign: 'left',
                  }}
                >
                  ПЕРЕЙТИ К ТОВАРАМ
                </button>
                <div
                  className="bg-green-600 text-white inline-block font-bold relative shadow-lg"
                  style={{
                    fontFamily: 'Montserrat, Arial, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(1vw, 2vw, 1.5vw)',
                    padding: '0.7vw 2.5vw 0.7vw 2vw',
                    marginTop: '1vw',
                    clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)',
                    minWidth: '12vw',
                    textAlign: 'center',
                  }}
                >
                  СКИДКА -50%
                  <span
                    className="absolute right-0 top-0 h-full"
                    style={{
                      width: '1.2vw',
                      background: '#166534',
                      clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>

          
          <div className="space-y-4">
            <div
              className="relative rounded-lg p-6 min-h-[140px] flex items-center justify-between overflow-hidden"
              style={{
                backgroundImage: `url(${banner2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              
              <div className="absolute inset-0 bg-white opacity-20 rounded-lg"></div>

              <div className="relative z-10 text-black">
                <h3 className="text-xl font-bold mb-2 leading-tight">
                  С НАМИ
                  <br />
                  БУДЕТ
                  <br />
                  СВЕТЛО
                </h3>
              </div>
            </div>

            <div
              className="relative rounded-lg p-6 min-h-[140px] text-black flex flex-col justify-center overflow-hidden"
              style={{
                backgroundImage: `url(${banner3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >

              <div className="absolute inset-0 bg-white opacity-20 rounded-lg"></div>

              <div className="relative z-10">
                <div className="bg-green-500 text-white px-3 py-1 rounded text-sm font-bold mb-2 inline-block">
                  АКЦИЯ
                </div>
                <h3 className="text-lg text-white leading-tight">
                  Лампочка для люстр
                  <br />
                  в подарок
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banners;
