import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "dessert-bloom",
    image: "./dessert-bloom.jpg",
    price: "$250",
    slug: "dessert-bloom",
  },
  {
    id: 2,
    name: "house-plant",
    image: "./house-plant.jpg",
    slug: "house-plant",
    price: "$150",
  },
  {
    id: 3,
    name: "succulents",
    image: "./succulents.jpg",
    price: "$250",
    slug: "succulents",
  },
  {
    id: 4,
    name: "outdoor-plant",
    image: "./outdoor-plant.jpg",
    price: "$150",
    slug: "outdoor-plant",
  },
];

const CategoriesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Shop by Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((items) => (
          <Link
            to={`/category/${items.name}`}
            key={items.id}
            className="group block border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={items.image}
                alt={items.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold capitalize group-hover:text-green-600 transition">
                {items.name}
              </h2>
              <p className="mt-2 text-xl font-bold text-gray-800 group-hover:text-green-700 transition">
                {items.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
