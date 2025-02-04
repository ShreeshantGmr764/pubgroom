import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import { Helmet } from "react-helmet"; // Import react-helmet for meta tags
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
  tdm,
  Hero_img,
  eight_team_mini_scrim,
  eight_team_scrim,
  five_team_scrim,
  pmgc_severny,
  pmgc_yasnaya,
} from "../assets/assets";

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
    {
      image: one_v_one_longrange_spray,
      title: "1v1 Game 1",
      map: "1v1 Longrange Spray",
      time: "12:00 PM",
    },
    {
      image: one_v_one_m4_short,
      title: "1v1 Game 2",
      map: "1v1 m4 short",
      time: "12:30 PM",
    },
    {
      image: one_v_one_m4_shortrange,
      title: "1v1 Game 3",
      map: "1v1 m4 shortrange",
      time: "1:00 PM",
    },
    {
      image: one_v_one_ump_akm,
      title: "1v1 Game 4",
      map: "1v1 ump akm",
      time: "1:30 PM",
    },
    {
      image: one_v_one_apartment,
      title: "1v1 Game 5",
      map: "1v1 Apartment",
      time: "2:00 PM",
    },
    {
      image: one_v_one_m4,
      title: "1v1 Game 6",
      map: "1v1 M4",
      time: "2:30 PM",
    },
  ].map((game) => ({ ...game, players: 2, odds: "1.8", fee: "Rs 25" }));

  const games2v2 = [
    {
      image: two_v_two_10round,
      title: "2v2 Game 1",
      map: "2v2 10round",
      time: "3:00 PM",
    },
    {
      image: two_v_two_11round,
      title: "2v2 Game 2",
      map: "2v2 11round",
      time: "3:30 PM",
    },
    {
      image: two_v_two_12round,
      title: "2v2 Game 3",
      map: "2v2 12round",
      time: "4:00 PM",
    },
    {
      image: two_v_two_compound,
      title: "2v2 Game 4",
      map: "2v2 compound",
      time: "4:30 PM",
    },
    {
      image: two_v_two_spray,
      title: "2v2 Game 5",
      map: "2v2 spray",
      time: "5:00 PM",
    },
    {
      image: two_v_two_ump_akm,
      title: "2v2 Game 6",
      map: "2v2 ump akm",
      time: "5:30 PM",
    },
  ].map((game) => ({ ...game, players: 4, odds: "1.9", fee: "Rs 50" }));


  const games3v3 = [
    { image: three_v_three_6round, title: "3v3 Game 1", map: "3v3 6round" },
    { image: three_v_three_11round, title: "3v3 Game 2", map: "3v3 11round" },
    { image: three_v_three_14round, title: "3v3 Game 3", map: "3v3 14round" },
    { image: three_v_three_15round, title: "3v3 Game 4", map: "3v3 15round" },
    { image: three_v_three_shortgun, title: "3v3 Game 5", map: "3v3 shortgun" },
    { image: three_v_three_syro, title: "3v3 Game 6", map: "3v3 syro" },
  ].map((game) => ({
    ...game,
    players: 6,
    odds: "1.8",
    time: "5:00 PM",
    fee: "Rs 75",
  }));

  const games4v4 = [
    { image: four_v_four_11round, title: "4v4 Game 1", map: "4v4 11round" },
    { image: four_v_four_apartment, title: "4v4 Game 2", map: "4v4 apartment" },
  ].map((game) => ({
    ...game,
    players: 8,
    odds: "1.9",
    time: "6:00 PM",
    fee: "Rs 100",
  }));

  const bestSprayGames = [
    { image: best_spray_1v1, title: "Best Spray 1", map: "Best Spray 1v1" },
    { image: best_spray_1v1, title: "Best Spray 2", map: "Best Spray 1v1" },
  ].map((game) => ({
    ...game,
    players: 2,
    odds: "1.9",
    time: "7:30 pm",
    fee: "Rs 50",
  }));

  const intenseTdmGames = [
    {
      image: intense_tdm_1v1,
      title: "Intense TDM Solo",
      map: "Intense TDM 1v1",
      players: 2,
      fee: "Rs 25",
    },
    {
      image: intense_tdm_1v1,
      title: "Intense TDM Duo",
      map: "Intense TDM 1v1",
      players: 4,
      fee: "Rs 50",
    },
    {
      image: intense_tdm_1v1,
      title: "Intense TDM Trio",
      map: "Intense TDM 1v1",
      players: 6,
      fee: "Rs 75",
    },
    {
      image: intense_tdm_1v1,
      title: "Intense TDM Squad",
      map: "Intense TDM 1v1",
      players: 8,
      fee: "Rs 100",
    },
  ].map((game) => ({
    ...game,
    odds: game.players === 2 || game.players === 4 ? "1.8" : "1.9",
    time: "11:00 AM",
  }));

  const tdmGames = [
    {
      image: tdm,
      title: " TDM Solo",
      map: " Warehouse",
      players: 2,
      fee: "Rs 25",
    },
    {
      image: tdm,
      title: " TDM Duo",
      map: " Warehouse",
      players: 4,
      fee: "Rs 50",
    },
    {
      image: tdm,
      title: " TDM Trio",
      map: " Warehouse",
      players: 6,
      fee: "Rs 75",
    },
    {
      image: tdm,
      title: " TDM Squad",
      map: " Warehouse",
      players: 8,
      fee: "Rs 100",
    },
  ].map((game) => ({
    ...game,
    odds: game.players === 2 || game.players === 4 ? "1.8" : "1.9",
    time: "11:30 AM",
  }));

  const games5teams = [
    {
      image: five_team_scrim,
      title: "5 Team mini scrim",
      map: "5 Teams Scrim",
    },
  ].map((game) => ({
    ...game,
    players: 20,
    odds: "1.9",
    time: "6:00 PM",
    fee: "Rs 100",
  }));

  const games8teams = [
    {
      image: eight_team_scrim,
      title: "8 Team mini scrim",
      map: "8 Teams Scrim",
    },
    {
      image: eight_team_mini_scrim,
      title: "8 Team mini scrim",
      map: "8 Teams Mini Scrim",
    },
  ].map((game) => ({
    ...game,
    players: 20,
    odds: "1.9",
    time: "7:00 PM",
    fee: "Rs 100",
  }));


  const gamesPMGC = [
    { image: pmgc_severny, title: "PMGC Severny  ", map: "PMGC Severny" },
    { image: pmgc_yasnaya, title: "PMGC Yasnaya ", map: "PMGC Yasnaya" },
  ].map((game) => ({
    ...game,
    players: 20,
    odds: "1.9",
    time: "8:00 PM",
    fee: "Rs 100",
  }));

  // Repeat the above for all your game arrays (games3v3, games4v4, etc.)

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
              alt={`Game: ${game.title} - Map: ${game.map}`} // Improved alt text
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
              Map: {game.map.replace(/_/g, " ")}
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
    <div className="relative top-24 md:top-10 md:mt-8">
      <Helmet>
        {/* Add meta tags for SEO */}
        <title>Gaming Hub | Exciting 1v1, 2v2, 3v3, and More Games</title>
        <meta name="description" content="Join Gaming Hub and experience thrilling multiplayer games like 1v1, 2v2, 3v3, and more! Compete and win exciting rewards." />
        <meta name="keywords" content="gaming, multiplayer games, 1v1, 2v2, 3v3, gaming hub, esports" />
        <meta name="robots" content="index, follow" />
      </Helmet>

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
            alt="Gaming Hub Hero Image" // Improved alt text
            className="w-full h-32 md:h-48 lg:h-64 rounded-lg transition duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>

      {/* Games List Sections */}
      <div className="p-6 mt-6 bg-white dark:bg-black text-gray-900 dark:text-gray-100 rounded-xl shadow-xl">
        {/* WOW 1v1 Section */}
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-6 font-sans">
          WOW 1v1 Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderGames(games1v1)}
        </div>

        {/* WOW 2v2 Section */}
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-12 mb-6 font-sans">
          WOW 2v2 Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderGames(games2v2)}
        </div>

        {/* WOW 3v3 Section */}
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-12 mb-6 font-sans">
          WOW 3v3 Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderGames(games3v3)}
        </div>

        {/* WOW 4v4 Section */}
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-12 mb-6 font-sans">
          WOW 4v4 Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* 5 teams Scrim Section */}
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-12 mb-6 font-sans">
          5 Teams Scrim
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {renderGames(games5teams)}
        </div>
        {/* 8 teams Scrim Section */}
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-12 mb-6 font-sans">
          8 Teams Scrim
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {renderGames(games8teams)}
        </div>
        {/* PMGC  */}
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-12 mb-6 font-sans">
          PMGC Scrim
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {renderGames(gamesPMGC)}
        </div>
        {/* TDM games Section */}
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mt-12 mb-6 font-sans">
          TDM Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {renderGames(tdmGames)}
        </div>

        <div className="text-center mt-10  text-lg font-semibold text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-600 transition duration-300 ease-in-out font-sans p-6  bg-white dark:bg-black rounded-xl shadow-xl">
          <a href="https://discord.gg/dXWwe9jy">Map Suggestion</a>
        </div>
      </div>

        {/* Other game sections */}
        {/* Continue the rest of your game sections in the same manner */}
      

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {selectedGame.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
              >
                <AiOutlineClose size={24} />
              </button>
            </div>
            <img
              src={selectedGame.image}
              alt={`Game: ${selectedGame.title} - Map: ${selectedGame.map}`} // Improved alt text
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-6">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Map: {selectedGame.map}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Time: {selectedGame.time}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Entry Fee: {selectedGame.fee}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
