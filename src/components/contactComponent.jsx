import React from 'react';
import { FaDiscord, FaInstagram, FaTiktok } from 'react-icons/fa';

const ContactComponent = () => {
  return (
    <footer className="bg-white text-gray-900 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">Follow Us</h2>
          <div className="flex justify-center space-x-6 sm:space-x-8">
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl hover:text-gray-600 transition duration-300">
              <FaDiscord />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl hover:text-gray-600 transition duration-300">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl hover:text-gray-600 transition duration-300">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactComponent;