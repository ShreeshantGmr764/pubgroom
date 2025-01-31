import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='bg-white dark:bg-black'>
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-white p-4">
            <div className="w-full max-w-lg md:max-w-4xl p-4 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 font-sans text-center">
                    About Our PUBG Custom Gaming Rooms
                </h1>
                <p className="text-lg md:text-xl mb-4 md:mb-6 font-serif text-center">
                    Experience Competitive Gaming Like Never Before!
                </p>
                <p className="mb-4 font-mono text-justify text-sm md:text-base">
                    Are you ready to dive into the ultimate gaming experience? We’re hosting custom gaming rooms with a 
                    minimal entry fee and offering huge rewards to players who rise to the challenge.
                </p>
                <hr className="my-4 md:my-6 border-gray-300 dark:border-gray-700" />
                <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 font-sans text-blue-600">
                    Why Join Our Custom Gaming Rooms?
                </h2>
                <ul className="list-disc list-inside mb-4 md:mb-6 font-mono space-y-1 md:space-y-2 text-sm md:text-base">
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
                <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 font-sans text-blue-600">
                    How to Participate
                </h2>
                <ul className="list-disc list-inside mb-4 md:mb-6 font-mono space-y-1 md:space-y-2 text-sm md:text-base">
                    <li>Register for your spot in the custom room.</li>
                    <li>Compete against players from around the world.</li>
                    <li>Claim your rewards and enjoy the glory of victory!</li>
                </ul>
                <p className="text-lg md:text-xl font-serif text-center">
                    Join us now and experience the excitement of competitive gaming like never before. Don’t miss out 
                    on the chance to showcase your skills and win amazing rewards!
                </p>
                <div className="mt-6 md:mt-8 text-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg w-full md:w-auto">
                        Join Now
                    </button>
                </div>
            </div>
        </div>
        
        <div className="w-full mx-auto max-w-screen-lg p-4 flex flex-col items-center justify-center text-center">
            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">© 2025 Shreeshant Ghimire. All Rights Reserved.</span>
            <ul className="flex flex-wrap justify-center mt-2 md:mt-3 text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
                <li className="px-2">
                    <Link to="/about" className="hover:underline">About</Link>
                </li>
                <li className="px-2">
                    <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
                </li>
                <li className="px-2">
                    <a href="https://discord.gg/M37AtvS2" className="hover:underline">Feedback</a>
                </li>
                <li className="px-2">
                    <Link to="/contact" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        </div>
    );
};

export default About;
