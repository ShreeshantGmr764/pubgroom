import React from 'react';
import { useNavigate } from 'react-router-dom';
import qr from '../assets/Qr.jpg';
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate();

    return (
        <>
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Back to Home Button */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-5 left-5 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition flex gap-1 "
            >
                <IoArrowBack className='text-2xl' /> Back to Home
            </button>

            <div className="flex flex-col items-center justify-center w-full max-w-5xl mt-12">
                {/* Important Notice Section */}
                <div className="w-full max-w-lg bg-red-500 dark:bg-red-700 shadow-lg rounded-2xl p-6 mb-8 text-white animate-fadeIn">
                    <h2 className="text-2xl font-semibold mb-4 font-sans">Important Notice</h2>
                    <p className="text-lg font-mono">
                        You must screenshot the payment and send it to our Discord. If not, the team will not be qualified to play. You must also send the UID of the players.
                    </p>
                </div>

                {/* Title Section */}
                <h1 className="text-4xl font-extrabold mb-8 text-black font-sans">Payment Options</h1>

                {/* Payment Options Container */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* FonePay Section */}
                    <div className="w-full bg-white text-black shadow-lg rounded-2xl p-6 aspect-square flex flex-col items-center justify-center animate-fadeIn">
                        <h2 className="text-2xl font-semibold mb-4 font-sans">Payment Method</h2>
                        <p className="text-lg font-mono">FonePay</p>
                        <img
                            src={qr}
                            alt="FonePay QR Code"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Khalti Section */}
                    <div className="w-full bg-white text-black shadow-lg rounded-2xl p-6 aspect-square flex flex-col items-center justify-center animate-fadeIn">
                        <h2 className="text-2xl font-semibold mb-4 font-sans">Payment Method</h2>
                        <p className="text-lg font-mono">Khalti</p>
                        <p className="text-lg font-mono">Number: 9807440777</p>
                    </div>

                    {/* eSewa Section */}
                    <div className="w-full bg-white text-black shadow-lg rounded-2xl p-6 aspect-square flex flex-col items-center justify-center animate-fadeIn">
                        <h2 className="text-2xl font-semibold mb-4 font-sans">Payment Method</h2>
                        <p className="text-lg font-mono">eSewa</p>
                        <p className="text-lg font-mono">Number: 9807440777</p>
                    </div>
                </div>

                {/* Payment Confirmation Section */}
                <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 mt-8 animate-fadeIn">
                    <h2 className="text-2xl font-semibold mb-4 font-sans">Confirm Payment and Send it to My Discord</h2>
                    {/* Button for Payment Confirmation */}
                    <a
                        href="https://discord.gg/JWRgbt8p"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full max-w-xs py-3 bg-blue-600 text-white text-lg font-semibold text-center rounded-xl shadow-md hover:bg-white hover:shadow-2xl hover:text-black transition duration-300 ease-in-out left-32 relative font-sans"
                    >
                        Confirm Payment
                    </a>
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
        </>
    );
};

export default Payment;