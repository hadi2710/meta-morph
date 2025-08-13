import { FaHome, FaSearch, FaCubes, FaTools, FaEnvelope, FaInfoCircle, FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="bg-black text-white border-b border-gray-800 shadow-md">
      {/* Top Bar: Logo, Search, Cart, Sign In */}
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaCubes className="text-sky-400 text-3xl" />
          <h1 className="text-2xl font-extrabold tracking-wide">
            Meta <span className="text-sky-400">Morph</span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-sky-800 rounded-full px-4 py-2 w-80 border border-sky-700 hover:border-sky-400 transition-all duration-300">
          <FaSearch className="text-gray-200 mr-2" />
          <input
            type="text"
            placeholder="Search 3D Models..."
            className="bg-transparent outline-none text-white placeholder-gray-300 w-full"
          />
        </div>

        {/* Cart + Sign In */}
        <div className="flex items-center gap-6">
          <a href="/cart" className="flex items-center gap-2 hover:text-sky-400 transition">
            <FaShoppingCart /> Cart
          </a>
          <a
            href="/signin"
            className="flex items-center gap-2 bg-sky-400 px-4 py-2 rounded-full hover:bg-sky-500 transition"
          >
            <FaUser /> Sign In
          </a>
        </div>
      </div>

      {/* Bottom Links Bar */}
      <nav className="bg-sky-900 border-t border-sky-800">
        <div className="flex justify-center gap-8 py-3 text-lg">
          <a href="/" className="flex items-center gap-1 hover:text-sky-400 transition">
            <FaHome /> Home
          </a>
          <a href="/products" className="flex items-center gap-1 hover:text-sky-400 transition">
            <FaCubes /> Products
          </a>
          <a href="/custom" className="flex items-center gap-1 hover:text-sky-400 transition">
            <FaTools /> Custom
          </a>
          <a href="/contact" className="flex items-center gap-1 hover:text-sky-400 transition">
            <FaEnvelope /> Contact
          </a>
          <a href="/about" className="flex items-center gap-1 hover:text-sky-400 transition">
            <FaInfoCircle /> About
          </a>
        </div>
      </nav>
    </header>
  );
}
