import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import {
  one_v_one_1,
  one_v_one_longrange_spray,
  one_v_one_m4_short,
  one_v_one_m4_shortrange,
  one_v_one_ump_akm,
  one_v_one_apartment,
  one_v_one_m4,
  two_v_two_10round,
  two_v_two_11round,
  two_v_two_12round,
  two_v_two_compound,
  two_v_two_spray,
  two_v_two_ump_akm,
  three_v_three_6round,
  three_v_three_11round,
  three_v_three_14round,
  three_v_three_15round,
  three_v_three_shortgun,
  three_v_three_syro,
  four_v_four_11round,
  four_v_four_apartment,
  best_spray_1v1,
  intense_tdm_1v1,
  Hero_img,
} from '../assets/assets';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const navigate = useNavigate();

  const openModal = (game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGame(null);
    navigate("/"); // Navigate back to home when modal closes
  };

  const handleEntryFeeClick = (game) => {
    navigate("/payment", { state: { selectedGame: game } }); // Pass selected game data to Payment.jsx
  };

  const games1v1 = [
    { image: one_v_one_longrange_spray, title: "1v1 Game 1", map: "1v1 Longrange Spray" },
    { image: one_v_one_m4_short, title: "1v1 Game 2", map: "1v1 m4 short" },
    { image: one_v_one_m4_shortrange, title: "1v1 Game 3", map: "1v1 m4 shortrange" },
    { image: one_v_one_ump_akm, title: "1v1 Game 4", map: "1v1 ump akm" },
    { image: one_v_one_apartment, title: "1v1 Game 5", map: "1v1 Apartment" },
    { image: one_v_one_m4, title: "1v1 Game 6", map: "1v1 M4" },
  ].map(game => ({ ...game, players: 2, odds: "1.8", time: "3:00 PM", fee: "Rs 25" }));

  const games2v2 = [
    { image: two_v_two_10round, title: "2v2 Game 1", map: "2v2 10round" },
    { image: two_v_two_11round, title: "2v2 Game 2", map: "2v2 11round" },
    { image: two_v_two_12round, title: "2v2 Game 3", map: "2v2 12round" },
    { image: two_v_two_compound, title: "2v2 Game 4", map: "2v2 compound" },
    { image: two_v_two_spray, title: "2v2 Game 5", map: "2v2 spray" },
    { image: two_v_two_ump_akm, title: "2v2 Game 6", map: "2v2 ump akm" },
  ].map(game => ({ ...game, players: 4, odds: "1.9", time: "4:00 PM", fee: "Rs 50" }));

  const games3v3 = [
    { image: three_v_three_6round, title: "3v3 Game 1", map: "3v3 6round" },
    { image: three_v_three_11round, title: "3v3 Game 2", map: "3v3 11round" },
    { image: three_v_three_14round, title: "3v3 Game 3", map: "3v3 14round" },
    { image: three_v_three_15round, title: "3v3 Game 4", map: "3v3 15round" },
    { image: three_v_three_shortgun, title: "3v3 Game 5", map: "3v3 shortgun" },
    { image: three_v_three_syro, title: "3v3 Game 6", map: "3v3 syro" },
  ].map(game => ({ ...game, players: 6, odds: "1.8", time: "5:00 PM", fee: "Rs 75" }));

  const games4v4 = [
    { image: four_v_four_11round, title: "4v4 Game 1", map: "4v4 11round" },
    { image: four_v_four_apartment, title: "4v4 Game 2", map: "4v4 apartment" },
  ].map(game => ({ ...game, players: 8, odds: "1.9", time: "6:00 PM", fee: "Rs 100" }));

  const bestSprayGames = [
    { image: best_spray_1v1, title: "Best Spray 1", map: "Best Spray 1v1" },
    { image: best_spray_1v1, title: "Best Spray 2", map: "Best Spray 1v1" },
  ].map(game => ({ ...game, players: 2, odds: "1.9", time: "N/A", fee: "Rs 50" }));

  const intenseTdmGames = [
    { image: intense_tdm_1v1, title: "Intense TDM Solo", map: "Intense TDM 1v1", players: 2, fee: "Rs 25" },
    { image: intense_tdm_1v1, title: "Intense TDM Duo", map: "Intense TDM 1v1", players: 4, fee: "Rs 50" },
    { image: intense_tdm_1v1, title: "Intense TDM Trio", map: "Intense TDM 1v1", players: 6, fee: "Rs 75" },
    { image: intense_tdm_1v1, title: "Intense TDM Squad", map: "Intense TDM 1v1", players: 8, fee: "Rs 100" },
  ].map(game => ({
    ...game,
    odds: game.players === 2 || game.players === 4 ? "1.8" : "1.9",
    time: "N/A",
  }));

  const renderGames = (games) =>
    games.map((game, index) => (
      <div
        key={index}
        className="bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md p-6 hover:bg-gray-200 dark:hover:bg-gray-600 transform transition-all duration-300 hover:scale-105"
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-auto rounded-lg transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
              onClick={() => openModal(game)}
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 font-sans">
              {game.title}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 font-mono">
              Players: {game.players}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 font-mono">
              Map: {game.map.replace(/_/g, ' ')}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 font-mono">
              Odds for Winner: {game.odds}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 font-mono">
              Time: {game.time}
            </p>
            <button
              onClick={() => handleEntryFeeClick(game)}
              className="inline-block text-lg font-semibold text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-600 transition duration-300 ease-in-out font-sans"
            >
              Entry Fee: {game.fee}
            </button>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="relative top-20 md:top-10 md:mt-8">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 shadow-xl rounded-xl transform transition-all duration-300 hover:scale-105">
        <div className="w-full md:w-1/2 p-4 text-center md:text-left lg:text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white hover:text-yellow-200 transition duration-300 ease-in-out font-sans">
            Welcome to Gaming Hub
          </h1>
          <p className="text-lg md:text-xl text-white font-mono">
            Your ultimate destination for all things gaming. Join our community
            and stay updated with the latest news, reviews, and more. Discover
            exciting new games every day.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img
            src={Hero_img}
            alt="Gaming"
            className="w-full h-32 md:h-48 lg:h-64 rounded-lg transition duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>

      {/* Games List Sections */}
      <div className="p-6 mt-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-xl">
        {/* wow 1v1 Section */}
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-6 font-sans">
          wow 1v1 Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderGames(games1v1)}
        </div>

        {/* wow 2v2 Section */}
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-12 mb-6 font-sans">
          wow 2v2 Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderGames(games2v2)}
        </div>

        {/* wow 3v3 Section */}
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-12 mb-6 font-sans">
          wow 3v3 Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderGames(games3v3)}
        </div>

        {/* wow 4v4 Section */}
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-12 mb-6 font-sans">
          wow 4v4 Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {renderGames(games4v4)}
        </div>

        {/* Best Spray Section */}
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-12 mb-6 font-sans">
          Best Spray Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {renderGames(bestSprayGames)}
        </div>

        {/* Intense TDM Section */}
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-12 mb-6 font-sans">
          Intense TDM Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {renderGames(intenseTdmGames)}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{selectedGame.title}</h2>
              <button
                onClick={closeModal}
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
              >
                <AiOutlineClose size={24} />
              </button>
            </div>
            <img
              src={selectedGame.image}
              alt={selectedGame.title}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;