import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import { heroSlides } from '../data/heroSlides';

interface HeroSectionProps {
  onBookNow: () => void;
  onWatchVideo: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBookNow, onWatchVideo }) => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState<number>(0);

  const nextHero = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const goToHero = (index: number) => {
    setCurrentHeroIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextHero();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  h-[500px] md:h-[600px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentHeroIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 md:px-6 text-white">
              <div className="w-[45%] md:w-[31%] ml-2 md:ml-4 lg:ml-6">
                <p className="text-yellow-300 text-sm md:text-base uppercase tracking-wider mb-2">
                  WELCOME TO
                </p>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 leading-tight tracking-wide">
                  {slide.title}
                </h1>
                <div className="w-10 h-1 bg-yellow-300 mb-6"></div>
                <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-base mt-4">
                  {slide.description}
                </p>
                
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                  <button 
                    onClick={onBookNow}
                    className="bg-amber-300 text-white px-3 sm:px-3 md:px-3 py-2 rounded-md text-xs sm:text-sm md:text-base hover:bg-amber-700 transition font-semibold w-full sm:w-auto whitespace-nowrap"
                  >
                    BOOK NOW
                  </button>
                  <button 
                    onClick={onWatchVideo}
                    className="bg-transparent border-2 border-white text-white px-3 sm:px-3 md:px-3 py-2 rounded-md text-xs sm:text-sm md:text-base hover:bg-white hover:text-gray-900 transition inline-flex items-center justify-center gap-2 font-semibold w-full sm:w-auto whitespace-nowrap"
                  >
                    <div className="bg-white rounded-full p-0.5 sm:p-1">
                      <FaPlay className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-black" />
                    </div>
                    WATCH VIDEO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 z-10 pb-16 sm:pb-20 md:pb-4">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToHero(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentHeroIndex ? 'w-1.5 sm:w-1.5 md:w-1.5 bg-yellow-300' : 'w-1.5 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;