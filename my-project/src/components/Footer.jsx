import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "/" },
    { icon: <FaTwitter />, url: "/" },
    { icon: <FaInstagram />, url: "/" },
  ];

  return (
    <footer className="bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4">Your Shop</h2>
          <p className="text-gray-200">
            Bringing you the finest plants and greenery for your home, garden,
            and office. Quality, style, and care in every leaf.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <div className="hover:text-yellow-400 transition">
                  {link.name}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4 mb-4 text-white">
            {socialLinks.map((social, index) => (
              <div
                key={index}
                className="hover:text-yellow-400 transition text-2xl"
              >
                {social.icon}
              </div>
            ))}
          </div>
          <p className="text-gray-200 text-sm">
            📞 +123 456 7890 <br />
            📧 info@yourshop.com
          </p>
        </div>
      </div>

      <div className="border-t border-green-600 mt-8">
        <p className="text-center text-gray-300 text-sm py-4">
          &copy; {new Date().getFullYear()} Your Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
