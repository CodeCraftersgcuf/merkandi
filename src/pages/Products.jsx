import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import { countries } from "../utils/flags";
import { products } from "../utils/products";
import News from "../components/News/News";
import Related_Search from "../components/Related_search/Related_Search";
import Product_component from "./pageComponents/Product_component";
import Breadcrumbs from "../components/Breadcrumbs";
import SideBarCategories from "../components/SideBarCategories";
import FilterDisplay from "../components/FilterDisplay";

const Products = () => {
  const [selectedCountries, setSelectedCountries] = React.useState([]);
  const totalPages = 4; // Set the number of pages here
  const [currentPage, setCurrentPage] = React.useState(1);
  const [openSections, setOpenSections] = React.useState({
    categories: false,
    countries: false,
    grade: false,
  });
  const categories = ["Men & Women", "Men", "Women", "Young Kid", "Adult"];
  const countryList = countries;
  const grades = ["New", "Used", "Damaged", "Open Seal"];

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  // State for the selected filters
  const [selectedGrades, setSelectedGrades] = useState(["Damaged"]); // Example of selected grade
  const [sortOption, setSortOption] = useState(""); // No sorting option selected initially

  // Function to clear the filters
  const clearFilters = () => {
    setSelectedCountries([]);
    setSelectedGrades([]);
    setSortOption("");
  };
  const toggleCountry = (countryName) => {
    setSelectedCountries((prevSelected) =>
      prevSelected.includes(countryName)
        ? prevSelected.filter((c) => c !== countryName)
        : [...prevSelected, countryName]
    );
  };

  // Change page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Go to the previous page
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Go to the next page
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const product_breadcrumbItems = ["lot24", "Category", "Sub Category"];

  return (
    <>
      <TopNavbar />
      <div className="px-8 py-8 md:px-0 bg-gray-200">
        <div className="container mx-auto  max-w-[1280px]">
          <Breadcrumbs items={product_breadcrumbItems} />
          <div className="my-4 md:flex md:items-center md:justify-between">
            <div className="pr-3 mt-2">
              <h1 className="text-3xl font-bold">
                wholesale products{" "}
                <span className="text-gray-400 text-lg">( 1000 offers )</span>
              </h1>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam blanditiis aspernatur ea explicabo sint tempora quas
                maiores, inventore nihil qui!
              </p>
            </div>
            <h4 className="text-blue-600 mt-2 ">
              <i className="fa-regular fa-star mr-1"></i>
              Follow search results
            </h4>
          </div>
        </div>
      </div>
      <div className="container  max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 md:px-0">
        <SideBarCategories
          categories={categories}
          countries={countryList}
          grades={grades}
        />

        <div className="lg:col-span-9">
          {/* Filter and Sort Section */}
          <FilterDisplay
            selectedCountries={selectedCountries}
            selectedGrades={selectedGrades}
            clearFilters={clearFilters}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
            {products.map((product, index) => (
              <>
                <div className="shadow">
                  <Product_component product={product} key={index} />
                </div>
              </>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 py-4">
            <button
              onClick={handlePrev}
              className="py-2 px-3 bg-blue-500 text-white rounded hover:scale-110 transition-transform"
              disabled={currentPage === 1}
            >
              <i className="fa-solid fa-angle-left"></i>
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`py-1 px-3 border rounded text-lg transition-transform ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white scale-110"
                    : "text-blue-500 hover:bg-blue-100"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNext}
              className="py-2 px-3 bg-blue-500 text-white rounded hover:scale-110 transition-transform"
              disabled={currentPage === totalPages}
            >
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
      <Related_Search />
      <News />
      <Footer />
    </>
  );
};

export default Products;
