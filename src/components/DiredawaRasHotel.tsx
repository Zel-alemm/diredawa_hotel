import React, { useState, useRef, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
// Import the logo
import logo from '../assets/images/logo.png';

const DiredawaRasHotel: React.FC = () => {
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guests, setGuests] = useState<string>('2 Adults, 0 Children');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState<number>(0);
  
  // Rooms Slider State
  const [currentRoomIndex, setCurrentRoomIndex] = useState<number>(0);
  
  // Create refs for date inputs
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  // Hero Slides Array
  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Diredawa Ras Hotel",
      description: "Experience comfort, elegance and exceptional hospitality in the heart of Dire Dawa."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1582719508461-905c6737fd18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Luxury Accommodation",
      description: "Enjoy our spacious rooms with modern amenities and breathtaking views."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Fine Dining Experience",
      description: "Savor delicious local and international cuisine prepared by expert chefs."
    }
  ];

  // Rooms data for slider
  const rooms = [
    {
      id: 1,
      title: "Deluxe Room",
      price: "ETB 3,200",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Executive Suite",
      price: "ETB 5,500",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Standard Twin Room",
      price: "ETB 2,800",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Rooms navigation functions
  const nextRoom = () => {
    setCurrentRoomIndex((prev) => (prev + 1) % rooms.length);
  };

  const goToRoom = (index: number) => {
    setCurrentRoomIndex(index);
  };

  // Create icon components
  const FaBed = FaIcons.FaBed;
  const FaUtensils = FaIcons.FaUtensils;
  const FaWifi = FaIcons.FaWifi;
  const FaClock = FaIcons.FaClock;
  const FaPhone = FaIcons.FaPhoneAlt;
  const FaSearch = FaIcons.FaSearch;
  const FaPlay = FaIcons.FaPlay;
  const FaCalendarAlt = FaIcons.FaCalendarAlt;
  const FaUser = FaIcons.FaUser;

  const handleCheckAvailability = (): void => {
    if (!checkIn || !checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    alert(`Checking availability:\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}`);
  };

  const handleBookNow = (): void => {
    alert('Redirecting to booking page...');
  };

  const handleWatchVideo = (): void => {
    alert('Playing promotional video...');
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return 'Select Date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const openDatePicker = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      ref.current.showPicker();
    }
  };

  // Hero Slider Functions
  const nextHero = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHero = () => {
    setCurrentHeroIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToHero = (index: number) => {
    setCurrentHeroIndex(index);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextHero();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
    <header className="bg-[#1a3c2c] shadow-sm sticky top-0 z-50">
  <div className="container mx-auto px-4 py-2 md:py-3">
    {/* Desktop Layout */}
    <div className="hidden md:flex flex-row items-center justify-between gap-3 xl:gap-4">
      <div className="flex-shrink-0">
        <img 
          src={logo} 
          alt="Diredawa Ras Hotel Logo" 
          className="h-10 xl:h-12 2xl:h-16 w-auto object-contain"
        />
      </div>
      
      <nav className="flex space-x-1.5 md:space-x-2 lg:space-x-3 xl:space-x-5 2xl:space-x-6">
        <button className="text-white hover:text-yellow-300 font-medium transition relative group text-[10px] md:text-xs lg:text-sm xl:text-base whitespace-nowrap">
          HOME
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button className="text-white hover:text-yellow-300 font-medium transition relative group text-[10px] md:text-xs lg:text-sm xl:text-base whitespace-nowrap">
          ABOUT
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button className="text-white hover:text-yellow-300 font-medium transition relative group text-[10px] md:text-xs lg:text-sm xl:text-base whitespace-nowrap">
          ROOMS
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button className="text-white hover:text-yellow-300 font-medium transition relative group text-[10px] md:text-xs lg:text-sm xl:text-base whitespace-nowrap">
          SERVICES
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button className="text-white hover:text-yellow-300 font-medium transition relative group text-[10px] md:text-xs lg:text-sm xl:text-base whitespace-nowrap">
          GALLERY
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button className="text-white hover:text-yellow-300 font-medium transition relative group text-[10px] md:text-xs lg:text-sm xl:text-base whitespace-nowrap">
          OFFERS
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button className="text-white hover:text-yellow-300 font-medium transition relative group text-[10px] md:text-xs lg:text-sm xl:text-base whitespace-nowrap">
          CONTACT
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
        </button>
      </nav>
      
      <div className="flex items-center gap-2 xl:gap-3 2xl:gap-4 flex-shrink-0">
        <div className="flex items-center gap-1 xl:gap-2 text-white font-semibold hover:text-yellow-300 transition group relative">
          <FaPhone className="w-3 h-3 xl:w-4 xl:h-4 text-yellow-200 flex-shrink-0" />
          <span className="text-[10px] md:text-xs lg:text-sm whitespace-nowrap">+251 251 111 223</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
        </div>
        <button 
          onClick={handleBookNow}
          className="text-yellow-300 px-2 md:px-2.5 lg:px-3 xl:px-4 py-1 md:py-1.5 lg:py-1.5 xl:py-2 rounded-md hover:text-yellow-200 transition font-semibold text-[10px] md:text-xs lg:text-sm border border-yellow-300 hover:border-yellow-200 whitespace-nowrap flex-shrink-0"
        >
          BOOK NOW
        </button>
      </div>
    </div>

    {/* Mobile Layout */}
    <div className="flex md:hidden items-center justify-between">
      <div>
        <img 
          src={logo} 
          alt="Diredawa Ras Hotel Logo" 
          className="h-8 w-auto object-contain"
        />
      </div>
      
      <div className="flex items-center gap-3">
        <div className="text-white hover:text-yellow-300 transition">
          <FaPhone className="w-4 h-4 text-yellow-200" />
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

    {/* Mobile Menu Overlay */}
    {isMenuOpen && (
      <>
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div className="fixed right-0 top-0 h-full w-64 bg-[#1a3c2c] z-50 md:hidden shadow-xl">
          <div className="flex justify-between items-center p-4 border-b border-yellow-300/20">
            <span className="text-white font-semibold text-sm">MENU</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-3 p-4">
            <button className="text-white hover:text-yellow-300 font-medium py-2 border-b border-yellow-300/10 text-left text-sm">HOME</button>
            <button className="text-white hover:text-yellow-300 font-medium py-2 border-b border-yellow-300/10 text-left text-sm">ABOUT US</button>
            <button className="text-white hover:text-yellow-300 font-medium py-2 border-b border-yellow-300/10 text-left text-sm">ROOMS</button>
            <button className="text-white hover:text-yellow-300 font-medium py-2 border-b border-yellow-300/10 text-left text-sm">SERVICES</button>
            <button className="text-white hover:text-yellow-300 font-medium py-2 border-b border-yellow-300/10 text-left text-sm">GALLERY</button>
            <button className="text-white hover:text-yellow-300 font-medium py-2 border-b border-yellow-300/10 text-left text-sm">OFFERS</button>
            <button className="text-white hover:text-yellow-300 font-medium py-2 border-b border-yellow-300/10 text-left text-sm">CONTACT</button>
            <button 
              onClick={handleBookNow}
              className="text-yellow-300 px-4 py-2 rounded-md font-semibold text-sm border border-yellow-300 mt-3"
            >
              BOOK NOW
            </button>
          </nav>
        </div>
      </>
    )}
  </div>
</header>

{/* Hero Section with Slider - LEFT ALIGNED for both mobile and desktop */}
<div className="relative h-[500px] md:h-[600px] overflow-hidden">
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
          {/* Text width: 45% on mobile, 39% on desktop */}
          <div className="w-[45%] md:w-[31%] ml-2 md:ml-4 lg:ml-6">
            <p className="text-yellow-300 text-sm md:text-base uppercase tracking-wider mb-2">
              WELCOME TO
            </p>
            {/* Title font same size on all devices - matching large screens */}
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 leading-tight tracking-wide">
              {slide.title}
            </h1>
            <div className="w-10 h-1 bg-yellow-300 mb-6"></div>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-base mt-4">
              {slide.description}
            </p>
            
            {/* Buttons - Same vertical padding on all devices */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
              <button 
                onClick={handleBookNow}
                className="bg-amber-300 text-white px-3 sm:px-3 md:px-3 py-2 rounded-md text-xs sm:text-sm md:text-base hover:bg-amber-700 transition font-semibold w-full sm:w-auto whitespace-nowrap"
              >
                BOOK NOW
              </button>
              <button 
                onClick={handleWatchVideo}
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
  
  {/* Navigation Dots */}
  <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 z-10 pb-16 sm:pb-20 md:pb-4">
    {heroSlides.map((_, index) => (
      <button
        key={index}
        onClick={() => goToHero(index)}
        className={`h-1.5 rounded-full transition-all ${
          index === currentHeroIndex ? 'w-4 sm:w-5 md:w-6 bg-yellow-300' : 'w-1.5 bg-white/50'
        }`}
      />
    ))}
  </div>
</div>

      {/* Booking Form - With shorter vertical lines */}
      <div className="container mx-auto px-4 md:px-6 -mt-12 relative z-10">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4">
            
            {/* CHECK-IN - with shorter right border */}
            <div className="p-4 md:p-5 border-b md:border-b-0 border-gray-200 relative">
              <div className="flex gap-3">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-black w-6 h-6" />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    CHECK-IN
                  </label>
                  <div className="relative">
                    <input
                      ref={checkInRef}
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="absolute opacity-0 pointer-events-none"
                      style={{ width: 0, height: 0 }}
                    />
                    <div 
                      onClick={() => openDatePicker(checkInRef)}
                      className="text-gray-800 text-sm font-medium cursor-pointer flex items-center justify-between"
                    >
                      {!checkIn ? (
                        <span className="text-black font-bold">Select Date</span>
                      ) : (
                        <span className="text-gray-800 font-medium">{formatDate(checkIn)}</span>
                      )}
                      <svg className="w-3 h-3 text-black -mt-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-10 bg-gray-200"></div>
            </div>
            
            {/* CHECK-OUT - with shorter right border */}
            <div className="p-4 md:p-5 border-b md:border-b-0 border-gray-200 relative">
              <div className="flex gap-3">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-black w-6 h-6" />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    CHECK-OUT
                  </label>
                  <div className="relative">
                    <input
                      ref={checkOutRef}
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="absolute opacity-0 pointer-events-none"
                      style={{ width: 0, height: 0 }}
                    />
                    <div 
                      onClick={() => openDatePicker(checkOutRef)}
                      className="text-gray-800 text-sm font-medium cursor-pointer flex items-center justify-between"
                    >
                      {!checkOut ? (
                        <span className="text-black font-bold">Select Date</span>
                      ) : (
                        <span className="text-gray-800 font-medium">{formatDate(checkOut)}</span>
                      )}
                      <svg className="w-3 h-3 text-black -mt-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-10 bg-gray-200"></div>
            </div>
            
            {/* GUESTS */}
            <div className="p-4 md:p-5 border-b md:border-b-0 border-gray-200 relative">
              <div className="flex gap-3">
                <div className="flex items-center">
                  <FaUser className="text-black w-6 h-6" />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    GUESTS
                  </label>
                  <div className="relative">
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full text-gray-800 text-sm font-medium focus:ring-0 focus:outline-none appearance-none bg-transparent cursor-pointer border-0 p-0 pr-5"
                    >
                      <option>1 Adult, 0 Children</option>
                      <option selected>2 Adults, 0 Children</option>
                      <option>2 Adults, 1 Child</option>
                      <option>2 Adults, 2 Children</option>
                      <option>3 Adults, 0 Children</option>
                      <option>3 Adults, 1 Child</option>
                      <option>4 Adults, 0 Children</option>
                    </select>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-3 h-3 text-black -mt-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-10 bg-gray-200"></div>
            </div>
            
            {/* CHECK AVAILABILITY Button */}
            <div className="flex items-center justify-center p-3 md:p-4">
              <button
                onClick={handleCheckAvailability}
                className="bg-[#1a3c2c] text-white px-4 py-3 rounded-md hover:bg-[#0f2c1f] transition font-semibold text-sm flex items-center justify-center gap-2 w-full"
              >
                <FaSearch className="w-3.5 h-3.5" /> CHECK AVAILABILITY
              </button>
            </div>
            
          </div>
        </div>
      </div>
      
{/* Features Section */}
<div className="container mx-auto px-2 md:px-6 py-12 md:py-16">
  <div className="grid grid-cols-4 lg:grid-cols-5 gap-2 md:gap-6 lg:gap-8">
    
    {/* Item 1 */}
    <div className="relative text-center md:text-left">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-1 md:gap-2 lg:gap-3">
        <FaBed className="w-7 h-7 md:w-11 md:h-7 lg:w-10 lg:h-10 text-black lg:mt-1" />
        <div>
          <h3 className="font-semibold text-gray-800 text-[13px] sm:text-[14px] md:text-[15px] lg:text-base">Comfortable Rooms</h3>
          <p className="text-gray-500 text-[11px] sm:text-[12px] md:text-[13px] lg:text-sm mt-0.5 md:mt-1">Relax in our stylish and spacious rooms</p>
        </div>
      </div>
      {/* Vertical line - full height on mobile */}
      <div className="absolute -right-1 sm:-right-2 md:-right-3 lg:-right-4 top-0 transform translate-y-0 w-px h-full bg-gray-300"></div>
    </div>

    {/* Item 2 */}
    <div className="relative text-center md:text-left">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-1 md:gap-2 lg:gap-3">
        <FaUtensils className="w-7 h-7 md:w-11 md:h-7 lg:w-10 lg:h-10 text-black lg:mt-1" />
        <div>
          <h3 className="font-semibold text-gray-800 text-[13px] sm:text-[14px] md:text-[15px] lg:text-base">Fine Dining</h3>
          <p className="text-gray-500 text-[11px] sm:text-[12px] md:text-[13px] lg:text-sm mt-0.5 md:mt-1">Enjoy delicious local and international cuisine</p>
        </div>
      </div>
      {/* Vertical line - full height on mobile */}
      <div className="absolute -right-1 sm:-right-2 md:-right-3 lg:-right-4 top-0 transform translate-y-0 w-px h-full bg-gray-300"></div>
    </div>

    {/* Item 3 */}
    <div className="relative text-center md:text-left">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-1 md:gap-2 lg:gap-3">
        <FaWifi className="w-7 h-7 md:w-11 md:h-7 lg:w-10 lg:h-10 text-black lg:mt-1" />
        <div>
          <h3 className="font-semibold text-gray-800 text-[13px] sm:text-[14px] md:text-[15px] lg:text-base">Free Wi-Fi</h3>
          <p className="text-gray-500 text-[11px] sm:text-[12px] md:text-[13px] lg:text-sm mt-0.5 md:mt-1">Stay connected with high speed internet</p>
        </div>
      </div>
      {/* Vertical line - full height on mobile */}
      <div className="absolute -right-1 sm:-right-2 md:-right-3 lg:-right-4 top-0 transform translate-y-0 w-px h-full bg-gray-300"></div>
    </div>

    {/* Item 4 */}
    <div className="relative text-center md:text-left">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-1 md:gap-2 lg:gap-3">
        <FaCalendarAlt className="w-7 h-7 md:w-11 md:h-7 lg:w-10 lg:h-10 text-black lg:mt-1" />
        <div>
          <h3 className="font-semibold text-gray-800 text-[13px] sm:text-[14px] md:text-[15px] lg:text-base">Meeting & Events</h3>
          <p className="text-gray-500 text-[11px] sm:text-[12px] md:text-[13px] lg:text-sm mt-0.5 md:mt-1">Perfect space for your meetings and events</p>
        </div>
      </div>
      {/* Vertical line - visible only on desktop (since it's the 4th item on mobile/tablet) */}
      <div className="hidden lg:block absolute -right-1 sm:-right-2 md:-right-3 lg:-right-4 top-0 transform translate-y-0 w-px h-full bg-gray-300"></div>
    </div>

    {/* Item 5 - ONLY VISIBLE ON LARGE SCREENS (lg and above) */}
    <div className="hidden lg:block relative text-center md:text-left">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-1 md:gap-2 lg:gap-3">
        <FaClock className="w-7 h-7 md:w-11 md:h-7 lg:w-10 lg:h-10 text-black lg:mt-1" />
        <div>
          <h3 className="font-semibold text-gray-800 text-[13px] sm:text-[14px] md:text-[15px] lg:text-base">24/7 Service</h3>
          <p className="text-gray-500 text-[11px] sm:text-[12px] md:text-[13px] lg:text-sm mt-0.5 md:mt-1">We are here for you around the clock</p>
        </div>
      </div>
      {/* No vertical line after the last item */}
    </div>

  </div>
</div>

                 {/* Our Rooms Section */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-yellow-600 text-sm md:text-base uppercase tracking-wider mb-2 font-semibold">OUR ROOMS</h2>
            <p className="text-[#1a3c2c] text-2xl md:text-3xl lg:text-4xl font-serif font-bold">Find Your Perfect Stay</p>
          </div>
          
          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {/* Deluxe Room */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Deluxe Room" 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">Deluxe Room</h3>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-amber-400 font-bold text-[1.1rem]">
                      <span className="text-sm font-normal text-gray-400">from </span>
                      ETB 3,200 <span className="text-sm font-normal text-gray-400">/ Night</span>
                    </p>
                  </div>
                  <div 
                    onClick={() => console.log('View details for Deluxe Room')}
                    className="bg-[#1a3c2c] p-2 rounded-full cursor-pointer hover:bg-[#0f2c1f] transition"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Suite */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Executive Suite" 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">Executive Suite</h3>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-amber-400 font-bold text-[1.1rem]">
                      <span className="text-sm font-normal text-gray-400">from </span>
                      ETB 5,500 <span className="text-sm font-normal text-gray-400">/ Night</span>
                    </p>
                  </div>
                  <div 
                    onClick={() => console.log('View details for Executive Suite')}
                    className="bg-[#1a3c2c] p-2 rounded-full cursor-pointer hover:bg-[#0f2c1f] transition"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Standard Twin Room */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Standard Twin Room" 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">Standard Twin Room</h3>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-amber-400 font-bold text-[1.1rem]">
                      <span className="text-sm font-normal text-gray-400">from </span>
                      ETB 2,800 <span className="text-sm font-normal text-gray-400">/ Night</span>
                    </p>
                  </div>
                  <div 
                    onClick={() => console.log('View details for Standard Twin Room')}
                    className="bg-[#1a3c2c] p-2 rounded-full cursor-pointer hover:bg-[#0f2c1f] transition"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Slider - Only active slide visible */}
          <div className="block md:hidden relative px-2">
            {/* Active Slide */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="flex flex-row">
                {/* Image on the left */}
                <div className="w-1/2">
                  <img 
                    src={rooms[currentRoomIndex].image} 
                    alt={rooms[currentRoomIndex].title} 
                    className="w-full h-full object-cover"
                    style={{ height: '140px' }}
                  />
                </div>
                
                {/* Content on the right */}
                <div className="w-1/2 p-3 flex flex-col justify-center">
                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-800 leading-tight">{rooms[currentRoomIndex].title}</h3>
                  
                  {/* "from" text - with space above */}
                  <p className="text-[10px] font-normal text-gray-400 mt-3">from</p>
                  
                  {/* Price and Arrow on same line */}
                  <div className="flex items-center justify-between mt-0.5">
                    <p className="text-amber-400 font-bold text-base">
                      {rooms[currentRoomIndex].price} <span className="text-[10px] font-normal text-gray-400">/ Night</span>
                    </p>
                    <div 
                      onClick={() => console.log(`View details for ${rooms[currentRoomIndex].title}`)}
                      className="bg-[#1a3c2c] p-1.5 rounded-full cursor-pointer hover:bg-[#0f2c1f] transition"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots - For changing slides */}
            <div className="flex justify-center gap-2 mt-3">
              {rooms.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentRoomIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentRoomIndex ? 'w-5 bg-[#1a3c2c]' : 'w-1.5 bg-[#1a3c2c] opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiredawaRasHotel;