import React from "react";

const HomeHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-green-100 to-green-200 overflow-hidden flex flex-col md:flex-row items-center justify-center p-6">
      {/* Left side - Text */}
      <div className="flex-1 max-w-lg md:pr-12 text-center md:text-left">
        <h1 className="text-5xl font-extrabold mb-6 text-green-900 leading-tight">
          Welcome to My Shop
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover amazing products tailored just for you. <br />
          Quality, style, and affordability all in one place.
        </p>
        <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow hover:bg-green-700 transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Right side - Image */}
      <div className="flex-1 max-w-md mt-10 md:mt-0">
        <img
          src="./homehero.svg"
          alt="Hero Image"
          className="w-full h-auto transform hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  );
};

export default HomeHero;
