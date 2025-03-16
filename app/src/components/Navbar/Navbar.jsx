import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import SectionContainer from "../SectionContainer/SectionContainer";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SectionContainer className="flex items-center justify-between px-6 !py-8 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="text-[#26875C] font-semibold text-3xl">
          LOGO
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 md:mx-16 lg:mx-32">
          <Link to="/" className="text-gray-800 hover:text-green-600">
            Home
          </Link>
          <Link to="#" className="text-gray-800 hover:text-green-600">
            Product
          </Link>
          <Link to="/pricing" className="text-gray-800 hover:text-green-600">
            Pricing
          </Link>
          <Link to="#" className="text-gray-800 hover:text-green-600">
            Contact
          </Link>
        </div>
      </div>

      {/* Login and Button */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/signin" className="text-gray-800 hover:text-green-600">
          Login
        </Link>
        <Link
          to="/freetrial"
          className="border border-[#0000001A] font-medium px-4 py-2 hover:bg-[#26875C] transition hover:text-white cursor-pointer"
        >
          Start free
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(true)}>
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Side Drawer */}
      <div
        className={`z-100 fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out p-12`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
        <nav className="mt-12 space-y-8 text-lg">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 hover:text-green-600"
          >
            Home
          </Link>
          <Link
            to="#"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 hover:text-green-600"
          >
            Product
          </Link>
          <Link
            to="/pricing"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 hover:text-green-600"
          >
            Pricing
          </Link>
          <Link
            to="#"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 hover:text-green-600"
          >
            Contact
          </Link>
          <Link
            to="/signin"
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 hover:text-green-600 mt-4"
          >
            Login
          </Link>
          <Link
            to="/freetrial"
            onClick={() => setIsOpen(false)}
            className="px-4 py-3 hover:bg-green-800 transition mt-2 inline-block bg-[#26875C] text-white"
          >
            Start free
          </Link>
        </nav>
      </div>
    </SectionContainer>
  );
};

export default Navbar;
