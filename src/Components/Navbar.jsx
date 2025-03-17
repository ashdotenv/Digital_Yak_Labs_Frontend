import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white  transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-semibold text-blue-600 hover:text-blue-700 transition-colors">
          Digital Yak Labs
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300">Services</Link>
          <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300">Portfolio</Link>
          <Link to="/blogs" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300">Blogs</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300">Contact</Link>
        </nav>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          className="md:hidden bg-white border-t border-gray-200 shadow-lg transform transition-all duration-500 ease-in-out opacity-100 translate-y-0"
          style={{ animation: "slideIn 0.5s ease-out" }}
        >
          <Link to="/" className="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-all duration-300">Home</Link>
          <Link to="/about" className="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-all duration-300 delay-100">About</Link>
          <Link to="/services" className="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-all duration-300 delay-200">Services</Link>
          <Link to="/portfolio" className="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-all duration-300 delay-300">Portfolio</Link>
          <Link to="/contact" className="block px-6 py-4 text-gray-700 hover:bg-gray-100 transition-all duration-300 delay-300">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
