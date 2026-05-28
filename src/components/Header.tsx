import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { navItems } from '../data/navItems';
import MobileMenu from './MobileMenu';
import logo from '../assets/images/logo.png';

interface HeaderProps {
  onBookNow: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookNow }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+251251111223';
  };

  return (
    <header className="bg-[#1a3c2c] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 md:py-3">
        <div className="hidden md:flex flex-row items-center justify-between gap-3 xl:gap-4">
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <img 
              src={logo} 
              alt="Diredawa Ras Hotel Logo" 
              className="h-10 xl:h-12 2xl:h-16 w-auto object-contain"
            />
          </div>
          
          <nav className="flex space-x-1.5 md:space-x-2 lg:space-x-3 xl:space-x-5 2xl:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="text-white hover:text-yellow-300 font-medium transition relative group text-[10px] md:text-xs lg:text-sm xl:text-base whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          
          <div className="flex items-center gap-2 xl:gap-3 2xl:gap-4 flex-shrink-0">
            <div 
              onClick={handlePhoneCall}
              className="flex items-center gap-1 xl:gap-2 text-white font-semibold hover:text-yellow-300 transition group relative cursor-pointer"
            >
              <FaPhoneAlt className="w-3 h-3 xl:w-4 xl:h-4 text-yellow-200 flex-shrink-0" />
              <span className="text-[10px] md:text-xs lg:text-sm whitespace-nowrap">+251 251 111 223</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </div>
            <button 
              onClick={onBookNow}
              className="text-yellow-300 px-2 md:px-2.5 lg:px-3 xl:px-4 py-1 md:py-1.5 lg:py-1.5 xl:py-2 rounded-md hover:text-yellow-200 transition font-semibold text-[10px] md:text-xs lg:text-sm border border-yellow-300 hover:border-yellow-200 whitespace-nowrap flex-shrink-0"
            >
              BOOK NOW
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between">
          <div 
            className="cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <img 
              src={logo} 
              alt="Diredawa Ras Hotel Logo" 
              className="h-8 w-auto object-contain"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <div 
              onClick={handlePhoneCall}
              className="text-white hover:text-yellow-300 transition cursor-pointer"
            >
              <FaPhoneAlt className="w-4 h-4 text-yellow-200" />
            </div>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="text-white focus:outline-none"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <MobileMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
          onBookNow={onBookNow}
          onNavigate={handleNavigation}
          onPhoneCall={handlePhoneCall}
        />
      </div>
    </header>
  );
};

export default Header;