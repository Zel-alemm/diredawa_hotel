import React, { useState } from 'react';
import { rooms } from '../data/rooms';

interface RoomsSectionProps {
  onViewDetails: (roomTitle: string) => void;
}

const RoomsSection: React.FC<RoomsSectionProps> = ({ onViewDetails }) => {
  const [currentRoomIndex, setCurrentRoomIndex] = useState<number>(0);

  const goToRoom = (index: number) => {
    setCurrentRoomIndex(index);
  };

  return (
    <div className="py-1 md:py-1 style={{ backgroundColor: '#edeadf' }}">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-4 md:mb-4">
          <h2 className="text-yellow-600 text-sm md:text-base uppercase tracking-wider mb-2 font-semibold">OUR ROOMS</h2>
          <p className="text-[#1a3c2c] text-2xl md:text-3xl lg:text-4xl font-serif font-bold">Find Your Perfect Stay</p>
        </div>
        
        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img 
                src={room.image} 
                alt={room.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">{room.title}</h3>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-amber-400 font-bold text-[1.1rem]">
                      <span className="text-sm font-normal text-gray-400">from </span>
                      {room.price} <span className="text-sm font-normal text-gray-400">/ Night</span>
                    </p>
                  </div>
                  <div 
                    onClick={() => onViewDetails(room.title)}
                    className="bg-[#1a3c2c] p-2 rounded-full cursor-pointer hover:bg-[#0f2c1f] transition"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="block md:hidden relative px-2">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="flex flex-row">
              <div className="w-1/2">
                <img 
                  src={rooms[currentRoomIndex].image} 
                  alt={rooms[currentRoomIndex].title} 
                  className="w-full h-full object-cover"
                  style={{ height: '140px' }}
                />
              </div>
              
              <div className="w-1/2 p-3 flex flex-col justify-center">
                <h3 className="text-base font-bold text-gray-800 leading-tight">{rooms[currentRoomIndex].title}</h3>
                <p className="text-[10px] font-normal text-gray-400 mt-5">from</p>
                
                <div className="flex items-center justify-between mt-0.5">
                  <p className="text-amber-400 font-bold text-base">
                    {rooms[currentRoomIndex].price} <span className="text-[10px] font-normal text-gray-400">/ Night</span>
                  </p>
                  <div 
                    onClick={() => onViewDetails(rooms[currentRoomIndex].title)}
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

          <div className="flex justify-center gap-2 mt-3">
            {rooms.map((_, index) => (
              <button
                key={index}
                onClick={() => goToRoom(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentRoomIndex ? 'w-1.5 bg-[#1a3c2c]' : 'w-1.5 bg-[#1a3c2c] opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsSection;