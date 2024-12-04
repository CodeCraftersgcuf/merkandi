import React from "react";
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import { countries } from "../utils/flags";
import { products } from "../utils/products";
import News from "../components/News/News";
import Related_Search from "../components/Related_search/Related_Search";
import Product_component from "./pageComponents/Product_component";

const Products = () => {
    const [selectedCountries, setSelectedCountries] = React.useState([]);
    const totalPages = 4; // Set the number of pages here
    const [currentPage, setCurrentPage] = React.useState(1);
    const [openSections, setOpenSections] = React.useState({
        categories: false,
        countries: false,
        grade: false,
    });

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
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

    return (
        <>
            <TopNavbar />
            <div className="px-8 py-8 md:px-0 bg-gray-200">
                <div className="container mx-auto">
                    <h6 className="text-blue-600 ">
                        <span>lot24</span> / <span>Category</span> / <span>Sub category</span>
                    </h6>
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
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 md:px-0">
                <div className="lg:col-span-3 border">
                    {/* Accordion */}
                    <div className="space-y-4">
                        {/* Categories Accordion */}
                        <div className="space-y-2 ">
                            <button
                                className="w-full py-2 px-4 text-left bg-gray-100 text-blue-600 font-medium"
                                onClick={() => toggleSection("categories")}
                            >
                                Categories
                            </button>
                            {openSections.categories && (
                                <div className="space-y-2 px-3">
                                    {["Men & Women", "Men", "Women", "Young Kid", "Adult"].map(
                                        (category, index) => (
                                            <a
                                                href="#"
                                                key={index}
                                                className="block text-blue-600 hover:underline 2xl:py-2"
                                            >
                                                {category}
                                            </a>
                                        )
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Countries Accordion */}
                        <div className="space-y-2">
                            <button
                                className="w-full py-2 px-4 text-left bg-gray-100 text-blue-600 font-medium"
                                onClick={() => toggleSection("countries")}
                            >
                                Countries
                            </button>
                            {openSections.countries && (
                                <div className="space-y-2 px-3">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <ul className="space-y-2 max-h-[400px] overflow-auto">
                                        {countries.map((country) => (
                                            <li
                                                key={country.name}
                                                className="flex items-center gap-2 my-2 "
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedCountries.includes(country.name)}
                                                    onChange={() => toggleCountry(country.name)}
                                                    className="form-checkbox"
                                                />
                                                <img
                                                    src={country.flag}
                                                    alt="flags"
                                                    className="w-[20px]"
                                                />
                                                <span>{country.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Grade Accordion */}
                        <div className="space-y-2 ">
                            <button
                                className="w-full py-2 px-4 text-left bg-gray-100 text-blue-600 font-medium"
                                onClick={() => toggleSection("grade")}
                            >
                                Grade
                            </button>
                            {openSections.grade && (
                                <div className="space-y-2">
                                    {["New", "Used", "Damaged", "Open Seal"].map((grade, index) => (
                                        <div key={index} className="flex items-center gap-2 2xl:px-4">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span>{grade}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-9">
                    {/* Filter and Sort Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="px-3 py-1 border rounded">UK</span>
                            <span className="px-3 py-1 border rounded">Damaged</span>
                            <button className="px-3 py-1 bg-red-600 text-white rounded">
                                Clear Filter
                            </button>
                        </div>
                        <div className="flex items-center justify-end gap-4">
                            <h1 className="font-bold min-w-[80px]">Sort By:</h1>
                            <select className="p-2 border rounded">
                                <option value="">Select Date or Expensive</option>
                                <option value="latest">Latest</option>
                                <option value="oldest">Oldest</option>
                                <option value="low-to-high">Lower to Higher Price</option>
                                <option value="high-to-low">Higher to Lower Price</option>
                            </select>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
                        {products.map((product, index) => (
                            <div className="shadow">
                                <Product_component product={product} key={index} />
                            </div>
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
                                className={`py-1 px-3 border rounded text-lg transition-transform ${currentPage === index + 1
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
