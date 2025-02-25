import React from 'react';
import { FaDiscord, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm  dark:bg-black mt-10 sm:mt-20 h-full">	  
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-gray-900 dark:text-white">Follow Us</h2>
          <div className="flex justify-center space-x-6 sm:space-x-8 dark:text-white">
            <a href="https://discord.gg/HdjrbhVm" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl hover:text-yellow-500 transition duration-300">
              <FaDiscord />
            </a>
            <a href="https://www.instagram.com/tournamenthub.nepal/" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl hover:text-yellow-500 transition duration-300">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@tournament.hub.nepal" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl hover:text-yellow-500 transition duration-300">
              <FaTiktok />
            </a>
          </div>
          <div className="mt-6">
            <p className="text-lg text-gray-900 dark:text-white">Contact us at: <a href="mailto:tournamenthubnepal@gmail.com" className="text-blue-500 hover:underline">tournamenthubnepal@gmail.com</a></p>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-center mt-6">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 Shreeshant Ghimire. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-white sm:mt-0 dark:bg-black">
          <li>
            <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:underline me-4 md:me-6">Blogs</Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
          </li>
          <li>
            <a href="https://discord.gg/M37AtvS2" className="hover:underline me-4 md:me-6">Feedback</a>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;