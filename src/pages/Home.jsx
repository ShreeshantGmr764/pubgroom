import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Analytics } from "@vercel/analytics/react";

const Home = ({ uploadedImages }) => {
  return (
    <div className='bg-white dark:bg-black'>
      <Navbar />
      <Hero uploadedImages={uploadedImages} />
      <Footer />
      <Analytics />
    </div>
  );
};

export default Home;