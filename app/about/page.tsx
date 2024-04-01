import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="h-screen bg-black">
      <Navbar />
      <h1 className="mt-4 text-center text-[35px] text-yellow-500">Kto sme?</h1>
    </div>
  );
};

export default About;
