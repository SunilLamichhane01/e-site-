import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { MdAccountCircle } from "react-icons/md";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

// Navigation items
const NavList = [
  { id: 1, name: "Home", path: "/", icon: <FaHome /> },
  { id: 2, name: "Product", path: "/product", icon: <FiShoppingCart /> },
  { id: 3, name: "Categories", path: "/categories", icon: <FiShoppingCart /> },
  { id: 5, name: "Cart", path: "/cart", icon: <GrCart /> },
  { id: 6, name: "Contact", path: "/contact", icon: <MdAccountCircle /> },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow px-4 py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-xl">My Shop</div>

        {/* Hamburger (Mobile Only) */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {NavList.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="text-gray-700 hover:text-green-500 flex items-center gap-1"
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {NavList.map((item) => (
            <div
              key={item.id}
              to={item.path}
              className="text-gray-700 hover:text-blue-500 flex items-center gap-2"
            >
              {item.icon} {item.name}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
