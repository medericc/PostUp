"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // État pour le menu déroulant "OTHERS"

  // Fonction pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header
      className={`w-full py-4 fixed top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#8B3D4E]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <Image
            src="/logo.png" // Remplace par le chemin de ton logo
            alt="PostUp Logo"
            width={100}
            height={40}
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Links for Desktop */}
        <ul className="hidden md:flex space-x-8 text-white uppercase text-sm">
          {["France", "Championnats étrangers", "Compét. européennes", "Autres continents", "Monde", "Divers"].map(
            (menu) => (
              <li key={menu} className="hover:text-gray-300">
                <a href="#">{menu}</a>
              </li>
            )
          )}
        </ul>

        {/* Right Side - Home and Others */}
        <div className="hidden md:flex items-center space-x-6 relative">
          <a
            href="#"
            className="text-white uppercase text-sm hover:text-gray-300"
          >
            Home ↗
          </a>

          {/* Dropdown Button */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="border border-white text-white px-4 py-1 text-sm uppercase hover:bg-white hover:text-black transition"
            >
              OTHERS
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#8B3D4E] border border-white text-white text-sm">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-white hover:text-[#8B3D4E]"
                >
                  Lena
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-white hover:text-[#8B3D4E]"
                >
                  Lucile
                </a>
              </div>
            )}
          </div>

          <FaSearch className="text-white hover:text-gray-300 cursor-pointer" />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#8B3D4E] text-white uppercase text-sm space-y-4 py-4">
          {["France", "Championnats étrangers", "Compét. européennes", "Autres continents", "Monde", "Divers"].map(
            (menu) => (
              <a key={menu} href="#" className="hover:text-gray-300">
                {menu}
              </a>
            )
          )}
          <a href="#" className="text-sm hover:text-gray-300">
            Home ↗
          </a>

          {/* Mobile Dropdown Button */}
          <div className="w-full flex flex-col items-center">
            <button
              onClick={toggleDropdown}
              className="border border-white text-white px-4 py-1 text-sm uppercase hover:bg-white hover:text-black transition"
            >
              OTHERS
            </button>
            {dropdownOpen && (
              <div className="w-full mt-2 flex flex-col items-center bg-[#8B3D4E] border border-white text-white text-sm">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-white hover:text-[#8B3D4E]"
                >
                  Lena
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-white hover:text-[#8B3D4E]"
                >
                  Lucile
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
