import React from 'react';
import { FaBed, FaUtensils, FaWifi, FaCalendarAlt, FaClock } from 'react-icons/fa';

const FeaturesSection: React.FC = () => {
  const features = [
    { id: 1, icon: FaBed, title: "Comfortable Rooms", description: "Relax in our stylish and spacious rooms" },
    { id: 2, icon: FaUtensils, title: "Fine Dining", description: "Enjoy delicious local and international cuisine" },
    { id: 3, icon: FaWifi, title: "Free Wi-Fi", description: "Stay connected with high speed internet" },
    { id: 4, icon: FaCalendarAlt, title: "Meeting & Events", description: "Perfect space for your meetings and events", isHiddenOnMobile: true },
    { id: 5, icon: FaClock, title: "24/7 Service", description: "We are here for you around the clock" }
  ];

  return (
    <div className="container mx-auto px-2 md:px-6 py-5 md:py-5">
      <div className="grid grid-cols-4 lg:grid-cols-5 gap-2 md:gap-6 lg:gap-8">
        
        {features.map((feature) => (
          <div 
            key={feature.id}
            className={`relative text-center md:text-left ${feature.isHiddenOnMobile ? 'hidden lg:block' : ''} ${feature.id === 5 ? 'pl-2 md:pl-4 lg:pl-6' : ''}`}
          >
            <div className="flex flex-col items-center md:flex-row md:items-start gap-1 md:gap-2 lg:gap-3">
              <feature.icon className="w-7 h-7 md:w-11 md:h-7 lg:w-10 lg:h-10 text-black lg:mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 text-[13px] sm:text-[14px] md:text-[15px] lg:text-base">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-[11px] sm:text-[12px] md:text-[13px] lg:text-sm mt-0.5 md:mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
            {/* Vertical lines between items */}
            {feature.id < 4 && (
              <div className="absolute -right-1 sm:-right-2 md:-right-3 lg:-right-4 top-0 transform translate-y-0 w-px h-full bg-gray-300"></div>
            )}
            {/* Show vertical line after 4th item only on desktop */}
            {feature.id === 4 && (
              <div className="hidden lg:block absolute -right-1 sm:-right-2 md:-right-3 lg:-right-4 top-0 transform translate-y-0 w-px h-full bg-gray-300"></div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
};

export default FeaturesSection;