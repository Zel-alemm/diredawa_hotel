import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BookingForm from '../components/BookingForm';
import FeaturesSection from '../components/FeaturesSection';
import RoomsSection from '../components/RoomsSection';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guests, setGuests] = useState<string>('2 Adults, 0 Children');

  const handleBookNow = (): void => {
    navigate('/booking');
  };

  const handleWatchVideo = (): void => {
    alert('Playing promotional video...');
  };

  const handleCheckAvailability = (): void => {
    if (!checkIn || !checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    navigate('/booking', { state: { checkIn, checkOut, guests } });
  };

  const handleViewDetails = (roomTitle: string): void => {
    const roomId = roomTitle.toLowerCase().replace(/\s+/g, '-');
    navigate(`/rooms/${roomId}`);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#edeadf' }}>
      <Header onBookNow={handleBookNow} />
      <HeroSection onBookNow={handleBookNow} onWatchVideo={handleWatchVideo} />
      <BookingForm
        checkIn={checkIn}
        checkOut={checkOut}
        guests={guests}
        onCheckInChange={setCheckIn}
        onCheckOutChange={setCheckOut}
        onGuestsChange={setGuests}
        onCheckAvailability={handleCheckAvailability}
      />
      <FeaturesSection />
      <RoomsSection onViewDetails={handleViewDetails} />
    </div>
  );
};

export default Home;