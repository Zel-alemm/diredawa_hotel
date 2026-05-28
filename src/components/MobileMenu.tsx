import React from 'react';
import { navItems } from '../data/navItems';
// import { FaPhoneAlt } from 'react-icons/fa';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow: () => void;
  onNavigate: (path: string) => void;
  onPhoneCall: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onBookNow, onNavigate, onPhoneCall }) => {
  if (!isOpen) return null;

  const handleNavigation = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={onClose}
      ></div>
      <div className="fixed right-0 top-0 h-full w-64 bg-[#1a3c2c] z-50 md:hidden shadow-xl">
        <div className="flex justify-between items-center p-4 border-b border-yellow-300/20">
          <button onClick={onClose} className="text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-3 p-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className="text-white hover:text-yellow-300 font-medium py-2 border-b border-yellow-300/10 text-left text-sm"
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => {
              onBookNow();
              onClose();
            }}
            className="text-yellow-300 px-4 py-2 rounded-md font-semibold text-sm border border-yellow-300 mt-3"
          >
            BOOK NOW
          </button>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;