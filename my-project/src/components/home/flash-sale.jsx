import React from "react";

const FlashSale = () => {
  return (
    <div
      className="h-[400px] bg-cover bg-center relative text-white mt-10"
      style={{
        backgroundImage: `url('./bgpic1.jpg')`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
        <div>
          <h2 className="mt-4 font-bold">
            Flash Sale:Up to 50% off<br></br> on select Items!
          </h2>

          <p className="mt-8 font-semibold">
            Don't miss out on our flash sale event! For a limited time, enjoy up
            <br></br>
            to 50% off on a selection of our best-selling products. Hurry—stock
            <br></br>
            is limited and deals won’t last long. Shop now and grab your
            <br></br>
            favorites before they’re gone!"
          </p>
        </div>
        <button className=" mt-12 bg-green-400 hover:bg-green-700 transition text-white px-6 py-3 rounded-3xl">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default FlashSale;
