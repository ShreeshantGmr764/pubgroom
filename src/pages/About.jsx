import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
        <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-4xl font-extrabold mb-4 font-sans text-center">
                    About Our PUBG Custom Gaming Rooms
                </h1>
                <p className="text-xl mb-6 font-serif text-center">
                    Experience Competitive Gaming Like Never Before!
                </p>
                <p className="mb-4 font-mono text-justify">
                    Are you ready to dive into the ultimate gaming experience? We’re hosting custom gaming rooms with a 
                    minimal entry fee and offering huge rewards to players who rise to the challenge.
                </p>
                <hr className="my-6 border-gray-300 dark:border-gray-700" />
                <h2 className="text-2xl font-semibold mb-4 font-sans text-blue-600">
                    Why Join Our Custom Gaming Rooms?
                </h2>
                <ul className="list-disc list-inside mb-6 font-mono space-y-2">
                    <li>
                        <strong>Thrilling Competition:</strong> Battle it out with skilled players in a dynamic and 
                        competitive environment.
                    </li>
                    <li>
                        <strong>Big Rewards:</strong> Win exciting prizes and claim your spot as a top gamer.
                    </li>
                    <li>
                        <strong>Affordable Entry:</strong> Join the action with a minimal entry fee, making it accessible to everyone.
                    </li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4 font-sans text-blue-600">
                    How to Participate
                </h2>
                <ul className="list-disc list-inside mb-6 font-mono space-y-2">
                    <li>Register for your spot in the custom room.</li>
                    <li>Compete against players from around the world.</li>
                    <li>Claim your rewards and enjoy the glory of victory!</li>
                </ul>
                <p className="text-xl font-serif text-center">
                    Join us now and experience the excitement of competitive gaming like never before. Don’t miss out 
                    on the chance to showcase your skills and win amazing rewards!
                </p>
                <div className="mt-8 text-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg">
                        Join Now
                    </button>
                </div>
            </div>
        </div>
        
        <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-center relative top-14">
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
        </>
    );
};

export default About;
