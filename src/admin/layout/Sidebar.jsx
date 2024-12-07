import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
const Sidebar = ({ setMobileOpen }) => {
  const sections = [
    {
      title: "Menu",
      links: [
        { to: "/dashboard", label: "Dashboard", icon: "fa-solid fa-gauge" },
        {
          to: "/products",
          label: "Products",
          icon: "fa-brands fa-product-hunt",
        },
        { to: "/orders", label: "Orders", icon: "fa-solid fa-boxes-packing" },
      ],
    },
    {
      title: "Services",
      links: [
        { to: "#", label: "Service", icon: "fa-solid fa-gauge" },
        { to: "#", label: "Service add", icon: "fa-solid fa-gauge" },
      ],
    },
    {
      title: "Shopping",
      links: [
        { to: "#", label: "Products", icon: "fa-solid fa-gauge" },
        { to: "#", label: "Wholeseller", icon: "fa-solid fa-gauge" },
        { to: "#", label: "Search Results", icon: "fa-solid fa-gauge" },
      ],
    },
    {
      title: "Seller",
      links: [
        { to: "#", label: "Products", icon: "fa-solid fa-gauge" },
        { to: "#", label: "Products add", icon: "fa-solid fa-gauge" },
        { to: "#", label: "Phone", icon: "fa-solid fa-gauge" },
        { to: "#", label: "Search Results", icon: "fa-solid fa-gauge" },
        { to: "#", label: "WhatsApp", icon: "fa-solid fa-gauge" },
        { to: "#", label: "Other", icon: "fa-solid fa-gauge" },
        { to: "#", label: "Order", icon: "fa-solid fa-gauge" },
      ],
    },
    {
      title: "Account Managment",
      links:[
        {to: "#", label: "My Data", icon: "fa-solid fa-gauge"},
        {to: "#", label: "Notification", icon: "fa-solid fa-gauge"},
        {to: "#1", label: "Orders and Invoices", icon: "fa-solid fa-gauge"},
      ]
    }
  ];
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
      {/* Sidebar content */}
      {sections.map((section, index) => (
        <Section key={index} title={section.title} links={section.links} />
      ))}
         <button className="flex items-center gap-3 text-red-500 px-1 mb-3 hover:text-black border-y-2 py-2 border-l-2 mt-4 w-full">
         <i className="fa-solid fa-user text-2xl text-black"></i>
         Logout
        </button>
    </div>
  );
};

export default Sidebar;
