import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// Page components (create these files)
const About: React.FC = () => <div className="min-h-screen bg-white p-8">About Us Page - Coming Soon</div>;
const Rooms: React.FC = () => <div className="min-h-screen bg-white p-8">Rooms Page - Coming Soon</div>;
const Services: React.FC = () => <div className="min-h-screen bg-white p-8">Services Page - Coming Soon</div>;
const Gallery: React.FC = () => <div className="min-h-screen bg-white p-8">Gallery Page - Coming Soon</div>;
const Offers: React.FC = () => <div className="min-h-screen bg-white p-8">Offers Page - Coming Soon</div>;
const Contact: React.FC = () => <div className="min-h-screen bg-white p-8">Contact Page - Coming Soon</div>;
const Booking: React.FC = () => <div className="min-h-screen bg-white p-8">Booking Page - Coming Soon</div>;
const RoomDetail: React.FC = () => <div className="min-h-screen bg-white p-8">Room Details - Coming Soon</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:roomId" element={<RoomDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;