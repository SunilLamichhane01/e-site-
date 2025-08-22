import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Home Plant",
    price: 79.99,
    image: "./product-06.jpg",
    slug: "home-plant",
  },
  {
    id: 2,
    name: "Outside Plants",
    price: 149.99,
    image: "./product-07.jpg",
    slug: "outside-plants",
  },
  {
    id: 3,
    name: "Garden Plant",
    price: 49.99,
    image: "./product-07.jpg",
    slug: "garden-plant",
  },
];

const ProductHero = () => {
  return (
    <div className="min-h-screen p-6 mt-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover "
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-black font-bold mb-4">
                ${product.price.toFixed(2)}
              </p>
              <Link
                to={`/product/${product.slug}`}
                className="mt-auto bg-green-500 text-white py-2 rounded-md hover:bg-green-700 transition"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHero;
