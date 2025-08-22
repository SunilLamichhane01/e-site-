import React, { useState } from "react";

const CartPage = () => {
  const [show, setShow] = useState(false);
  const ShowButton = () => {
    setShow(!show);
  };
  return (
    <section>
      <div className="mt-10 min-h-screen flex flex-col items-center">
        <div className="text-center px-5">
          <h2 className="font-extralight text-2xl">Your Cart Items</h2>
          <p className="mt-5 ">
            Note: Please note that you can only check out from one shop at a
            time. Kindly complete your order from one shop before proceeding to
            checkout.
          </p>
        </div>

        <button className="mt-10 bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-300">
          CONTINUE SHOPPING
        </button>
      </div>
    </section>
  );
};

export default CartPage;
