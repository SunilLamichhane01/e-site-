import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "dessert-bloom",
    image: "./DesertBloom.jpg",
    price: "$250",
    slug: "dessert-bloom",
  },
  {
    id: 2,
    name: "house-plant",
    image: "./product-04.jpg",
    slug: "house-plant",
    price: "$150",
  },
  {
    id: 3,
    name: "silverMist",
    image: "./silverMist.jpg",
    price: "$250",
    slug: "succulents",
  },
];

const PopularProduct = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Shop by Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((items) => (
          <div
            key={items.id}
            className="group block border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={items.image}
              alt={items.name}
              className="w-full h-fulls object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold capitalize group-hover:text-green-600 transition">
                {items.name}
              </h2>
              <p className="mt-2 text-xl font-bold text-gray-800 group-hover:text-green-700 transition">
                {items.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;
