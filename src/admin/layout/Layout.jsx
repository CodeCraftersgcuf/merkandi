import React, { useState } from "react";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import SellerInput from "../../components/SellerInput";
import DataForm from "../../components/DataForm";
import ChattingComponent from "../../components/ChattingComponent";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("/dashboard"); // Default selected tab

  const [formData, setFormData] = useState({
    title: "",
    regularPrice: "",
    salePrice: "",
    wholesale: false,
    negotiable: false,
    productBadges: "",
    minimalOrder: "",
    productStock: 0,
    stockStatus: "in stock",
    sku: "",
    ean: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab); // Update the selected tab
    if (tab === "chatting") {
      console.log("This is the Chatting part");
    }
  };

  return (
    <>
      <TopNavbar />
      <div className="flex max-w-[1280px] m-auto">
        {/* Sidebar */}
        <div
          className={`fixed lg:static top-0 left-0 z-20 bg-white transition-transform transform ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:w-[20%] w-64`}
        >
          <Sidebar selectedTab={selectedTab} onTabChange={handleTabChange} />
        </div>

        {/* Main Content */}
        {selectedTab === "chatting" ? (
          <ChattingComponent />
        ) : (
          <div
            className={`flex-1 min-h-screen bg-gray-100 transition-all duration-300`}
          >
            <div className="p-4">
              <div className="bg-gray-200 flex justify-between items-center p-4 rounded mb-4">
                <button
                  className="block lg:hidden"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  <i className="fa-solid fa-bars text-2xl"></i>
                </button>
                <button
                  className="hidden lg:block opacity-0 cursor-default"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <i className="fa-solid fa-bars text-2xl"></i>
                </button>
                <div className="bg-blue-700 w-10 h-10 flex items-center justify-center rounded-full">
                  <i className="fa-solid fa-user text-xl text-white"></i>
                </div>
              </div>
              <Outlet />
            </div>

            <DataForm />

            <form onSubmit={handleSubmit} className="px-7 mt-6">
              <div className="">
                <h3 className="font-bold text-lg">Price</h3>
                <SellerInput
                  label="Regular price ($)"
                  type="number"
                  name="regularPrice"
                  value={formData.regularPrice}
                  onChange={handleChange}
                />
                <SellerInput
                  label="Sale price ($)"
                  type="number"
                  name="salePrice"
                  value={formData.salePrice}
                  onChange={handleChange}
                />
                <SellerInput
                  label="Wholesale"
                  type="checkbox"
                  name="wholesale"
                  checked={formData.wholesale}
                  onChange={handleChange}
                />
                <SellerInput
                  label="NEGOTIABLE"
                  type="checkbox"
                  name="negotiable"
                  checked={formData.negotiable}
                  onChange={handleChange}
                />
                <SellerInput
                  label="Product badges"
                  type="select"
                  name="productBadges"
                  options={["piece", "Damaged", "New"]}
                  value={formData.productBadges}
                  onChange={handleChange}
                />
                <SellerInput
                  label="Minimal order"
                  type="number"
                  name="minimalOrder"
                  value={formData.minimalOrder}
                  onChange={handleChange}
                />
                <SellerInput
                  label="Product Stock"
                  type="number"
                  name="productStock"
                  value={formData.productStock}
                  onChange={handleChange}
                />
                <SellerInput
                  label="Stock status"
                  type="select"
                  name="stockStatus"
                  options={["in stock", "out of stock"]}
                  value={formData.stockStatus}
                  onChange={handleChange}
                />
                <SellerInput
                  label="SKU"
                  type="text"
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                />
                <SellerInput
                  label="EAN"
                  type="text"
                  name="ean"
                  value={formData.ean}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
