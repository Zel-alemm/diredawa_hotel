import React, { useRef } from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

interface BookingFormProps {
  checkIn: string;
  checkOut: string;
  guests: string;
  onCheckInChange: (value: string) => void;
  onCheckOutChange: (value: string) => void;
  onGuestsChange: (value: string) => void;
  onCheckAvailability: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
  checkIn,
  checkOut,
  guests,
  onCheckInChange,
  onCheckOutChange,
  onGuestsChange,
  onCheckAvailability
}) => {
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

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

  const guestOptions = [
    "1 Adult, 0 Children",
    "2 Adults, 0 Children",
    "2 Adults, 1 Child",
    "2 Adults, 2 Children",
    "3 Adults, 0 Children",
    "3 Adults, 1 Child",
    "4 Adults, 0 Children"
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 -mt-12 relative z-10">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4">
          
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
                    onChange={(e) => onCheckInChange(e.target.value)}
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
                    onChange={(e) => onCheckOutChange(e.target.value)}
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
                    onChange={(e) => onGuestsChange(e.target.value)}
                    className="w-full text-gray-800 text-sm font-medium focus:ring-0 focus:outline-none appearance-none bg-transparent cursor-pointer border-0 p-0 pr-5"
                  >
                    {guestOptions.map(option => (
                      <option key={option}>{option}</option>
                    ))}
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
          
          <div className="flex items-center justify-center p-3 md:p-4">
            <button
              onClick={onCheckAvailability}
              className="bg-[#1a3c2c] text-white px-4 py-3 rounded-md hover:bg-[#0f2c1f] transition font-semibold text-sm flex items-center justify-center gap-2 w-full"
            >
              <p className="w-3.5 h-3.5" /> CHECK AVAILABILITY
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BookingForm;