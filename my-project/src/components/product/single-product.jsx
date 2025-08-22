import React from "react";

const products = [
  {
    id: 1,
    name: "Home Plant",
    price: 79.99,
    image: "./product-06.jpg",
    slug: "home-plant",
    description: "Beautiful home plant to freshen your space.",
  },
  {
    id: 2,
    name: "Outside Plants",
    price: 149.99,
    image: "./product-07.jpg",
    slug: "outside-plants",
    description: "Perfect plants for your garden or backyard.",
  },
  {
    id: 3,
    name: "Garden Plant",
    price: 49.99,
    image: "./product-07.jpg",
    slug: "garden-plant",
    description: "Compact garden plants for indoor/outdoor use.",
  },
];

const SingleProduct = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-10 items-center">
      {/* Product Image */}
      <div className="flex items-center justify-center">
        <img
          src={products.image}
          alt={products.name}
          className="rounded-2xl shadow-lg w-full max-w-md object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">{products.name}</h2>
        <p className="text-gray-600">{products.description}</p>

        <button className="bg-Green-600 text-white px-6 py-3 rounded-lg hover:bg-Green-700 transition">
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default SingleProduct;
