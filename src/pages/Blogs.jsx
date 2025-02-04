import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";

const Blogs = () => {
  const blogs = [
    {
      title: "WOW Rooms Nepal: The Ultimate Gaming Experience",
      description: "Explore the best gaming rooms in Nepal, offering high-end setups...",
      keyword: "WOW Rooms Nepal",
      link: "wow-rooms-nepal",
    },
    {
      title: "Tournament Hub Nepal: Your Gateway to Esports Competitions",
      description: "Discover a central hub for all major esports tournaments...",
      keyword: "Tournament Hub Nepal",
      link: "tournament-hub-nepal",
    },
    {
      title: "PUBG Tournament in Nepal: Compete with the Best",
      description: "Join the most thrilling PUBG tournaments in Nepal...",
      keyword: "PUBG Tournament Nepal",
      link: "pubg-tournament-nepal",
    },
    {
      title: "Esports Tournaments in Nepal: The Rise of Competitive Gaming",
      description: "An in-depth look at the growing esports scene in Nepal...",
      keyword: "Esports Tournament Nepal",
      link: "esports-tournament-nepal",
    },
  ];

  console.log(blogs); // ✅ Debugging: Check if data exists

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Helmet>
        <title>Blogs | Esports Nepal</title>
        <meta name="description" content="Discover the latest esports and gaming news in Nepal." />
        <meta name="keywords" content="Esports Nepal, Gaming Nepal, Tournaments Nepal" />
      </Helmet>

      <Navbar />
      
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 text-center mt-32 md:mt-20">
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-2xl border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {blog.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.description}</p>
              <Link
                to={`/blog/${blog.link}`}
                className="text-blue-600 font-semibold underline dark:text-blue-400"
              >
                Read More
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300">
            No blogs available.
          </p>
        )}
      </div>

      <button
        onClick={() => window.history.back()}
        className="mt-6 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-teal-400 dark:from-teal-700 dark:to-blue-700 sm:px-4 sm:py-2 ml-16"
      >
        Go Back
      </button>
    </div>
  );
};

export default Blogs;
