import React from 'react';
import { FaDiscord, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactComponent = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800 mt-10 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-gray-900 dark:text-white">Follow Us</h2>
          <div className="flex justify-center space-x-6 sm:space-x-8">
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl hover:text-yellow-500 transition duration-300">
              <FaDiscord />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl hover:text-yellow-500 transition duration-300">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl hover:text-yellow-500 transition duration-300">
              <FaTiktok />
            </a>
          </div>
          <div className="mt-6">
            <p className="text-lg text-gray-900 dark:text-white">Contact us at: <a href="mailto:ghimiresrishant764@gmail.com" className="text-blue-500 hover:underline">ghimiresrishant764@gmail.com</a></p>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-center mt-6">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 Shreeshant Ghimire. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
          </li>
          <li>
            <a href="/terms" className="hover:underline me-4 md:me-6">Terms of Service</a>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default ContactComponent;