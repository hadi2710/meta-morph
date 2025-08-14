"use client";

import { motion } from "framer-motion";
import {
  FaHome,
  FaSearch,
  FaCubes,
  FaTools,
  FaEnvelope,
  FaInfoCircle,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white text-gray-900 shadow-sm border-b border-gray-200"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaCubes className="text-orange-500 text-2xl" />
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
            Meta <span className="text-orange-500">Morph</span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-72 border border-gray-300 focus-within:border-orange-500 transition-all duration-300">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search 3D Models..."
            className="bg-transparent outline-none text-gray-800 placeholder-gray-500 w-full"
          />
        </div>

        {/* Cart + Sign In */}
        <div className="flex items-center gap-4">
          <a
            href="/cart"
            className="flex items-center gap-2 hover:text-orange-500 transition"
          >
            <FaShoppingCart /> Cart
          </a>
          <a
            href="/signin"
            className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
          >
            <FaUser /> Sign In
          </a>
        </div>
      </div>

      {/* Bottom Links Bar */}
      <nav className="border-t border-gray-200">
        <div className="flex justify-center gap-6 py-3 text-sm sm:text-base">
          <a href="/" className="flex items-center gap-1 hover:text-orange-500 transition">
            <FaHome /> Home
          </a>
          <a href="/products" className="flex items-center gap-1 hover:text-orange-500 transition">
            <FaCubes /> Products
          </a>
          <a href="/custom" className="flex items-center gap-1 hover:text-orange-500 transition">
            <FaTools /> Custom
          </a>
          <a href="/contact" className="flex items-center gap-1 hover:text-orange-500 transition">
            <FaEnvelope /> Contact
          </a>
          <a href="/about" className="flex items-center gap-1 hover:text-orange-500 transition">
            <FaInfoCircle /> About
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
