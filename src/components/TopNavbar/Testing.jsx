import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import { categories } from "../../utils/data";

const Testing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [MisCategoryOpen, setMisCategoryOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCategory = () => setIsCategoryOpen((prev) => !prev);
  const toggleCategory2 = () => setMisCategoryOpen((prev) => !prev);

  return (
    <nav className="bg-[#299BCC] px-4 py-3 shadow-md">
      <div className="container mx-auto">
        {/* Desktop Navbar */}
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-white py-2 px-4  bg-[#1d7094] rounded-md font-semibold hover:bg-[#1a6482] transition duration-300"
                onClick={toggleCategory}
              >
                <i className="fa-solid fa-bars mr-2"></i>
                Categories
              </button>
              {isCategoryOpen && (
                <ul className="absolute top-12 left-0 bg-white shadow-lg rounded-lg min-w-[300px]  z-20">
                  {categories.map((category, index) => (
                    <CategoryItem category={category} key={index} />
                  ))}
                </ul>
              )}
            </div>
  
            {/* Main Links */}
            <div className="hidden lg:flex gap-6">
              {["Products", "Stocks", "Wholesalers", "Top Offers"].map(
                (link, index) => (
                  <Link
                    to="#"
                    key={index}
                    className="text-white hover:text-gray-200 font-semibold transition duration-300"
                  >
                    {link}
                  </Link>
                )
              )}
            </div>
          </div>
  
          {/* Right Section */}
          <div className="hidden lg:block">
            <a
              href="#"
              className="py-3 px-6 bg-[#f29d00] text-white font-bold rounded-md hover:bg-[#fbc053] transition duration-300"
            >
              Add offers <i className="fa-solid fa-plus ml-2"></i>
            </a>
          </div>
  
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={toggleMenu}
          >
            <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`} />
          </button>
        </div>
  
        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="mt-4 lg:hidden bg-[#1d7094] text-white rounded-lg shadow-lg">
  
            <div className="px-6 py-4">
              {["Products", "Stocks", "Wholesalers", "Top Offers"].map(
                (link, index) => (
                  <Link
                    to="#"
                    key={index}
                    className="block text-white py-2 hover:bg-[#fbc053] rounded-md"
                  >
                    {link}
                  </Link>
                )
              )}
            </div>
  
            <div className="px-6 py-4">
              <a
                href="#"
                className="block py-3 px-6 bg-[#f29d00] text-white font-bold rounded-md hover:bg-[#fbc053] transition duration-300"
              >
                Add offers <i className="fa-solid fa-plus ml-2"></i>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Testing;
