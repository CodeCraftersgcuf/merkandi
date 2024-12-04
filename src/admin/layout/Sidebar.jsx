import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ setMobileOpen }) => {
  return (
    <div className="bg-white border-r min-h-screen mr-4">
      {/* Close button for mobile */}
      <div className="flex justify-end lg:hidden mb-4">
        <button
          className="text-xl cursor-pointer"
          onClick={() => setMobileOpen(false)}
        >
          ✕
        </button>
      </div>
      {/* Sidebar content */}
      <div className="bg-gray-200 p-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-blue-700 w-12 h-12 flex items-center justify-center rounded-full">
            <i className="fa-solid fa-user text-2xl text-white"></i>
          </div>
          <div>
            <h1 className="font-extrabold text-xl">John Wick</h1>
            <span className="text-sm px-3 py-1 bg-gray-500 text-white rounded">
              Default
            </span>
          </div>
        </div>
        <div className="h-[2px] bg-white mb-4"></div>
        <div className="text-center mb-4">
          <h4 className="text-sm">Account expiration date</h4>
          <h2 className="font-bold">October 19, 2024</h2>
        </div>
        <Link to="/">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 w-full rounded">
            Logout
          </button>
        </Link>
      </div>

      {/* Menu */}
      <div className="mt-6">
        <h1 className="font-extrabold text-lg mb-4">Menu</h1>
        <nav className="flex flex-col gap-3">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 text-gray-500 hover:text-black"
          >
            <i className="fa-solid fa-gauge"></i>
            Dashboard
          </Link>
          <Link
            to="/products"
            className="flex items-center gap-3 text-gray-500 hover:text-black"
          >
            <i className="fa-brands fa-product-hunt"></i>
            Products
          </Link>
          <Link
            to="/orders"
            className="flex items-center gap-3 text-gray-500 hover:text-black"
          >
            <i className="fa-solid fa-boxes-packing"></i>
            Orders
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
