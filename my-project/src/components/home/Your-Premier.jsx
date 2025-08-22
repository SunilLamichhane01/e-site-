import React from "react";

const YourPremier = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-yellow-100 via-green-100 to-green-200 px-6 mt-10">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/YourPremier.jpg"
          alt="Your Premier"
          className="w-full max-w-md h-96 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0 md:ml-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 leading-snug">
          Your Premier <br /> Destination for <br /> All Green.
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          Discover a wide variety of plants, flowers, and greenery <br />
          to brighten your home, garden, and workspace.
        </p>
        <div className="mt-10 flex items-start justify-start gap-12 text-center">
          <div>
            <p className="text-3xl font-bold text-green-700">+950</p>
            <p className="text-gray-700 text-sm">Sales</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-green-700">90%</p>
            <p className="text-gray-700 text-sm">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourPremier;
