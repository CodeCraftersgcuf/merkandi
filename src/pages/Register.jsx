import React, { useState } from "react";
import sale_img from "../assets/images/desktop_small.jpg";
import store from "../assets/images/register-1.jpg";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import RegisterTopNavBar from "./pageComponents/RegisterTopNavBar";
import thumb_up from "../assets/images/ratings-and-thumb-green.svg";
import Faqs from "../components/Faqs";
import FlashSales from "../components/FlashSales";
const Register = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const top_sale = {
    backgroundImage: `url(${sale_img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const header = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${store})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <RegisterTopNavBar  top_sale={top_sale}/>

      {/* Flash Sale */}
      <FlashSales />
    
      {/* Table Section */}
      <div className="container mx-auto bg-white shadow-lg rounded-lg overflow-hidden  max-w-[1280px] my-5">
        <div className="grid grid-cols-3 bg-gray-50 py-6 px-4">
          <div className="col-span-1 text-center flex items-center justify-center flex-col">
            <img src={thumb_up} alt="likes" className="w-[50%]" />
            <div className="text-green-500 font-bold text-xl  ">
              99.9% satisfied sellers
            </div>
            <p className="text-gray-500 text-sm  ">
              Our customers confidently buy from all over the world
            </p>
          </div>
          <div className="text-center border-l border-r p-4 flex items-center justify-center flex-col">
            <h3 className="text-xl font-bold text-gray-800  ">STANDARD</h3>
            <p className="line-through text-gray-500  ">EUR 199.00</p>
            <p className="text-red-500 text-center md:text-start md:text-2xl font-semibold">
              EUR 159.20 <span className="text-sm">+ VAT / year</span>
            </p>
            <Link to={"/register/form"}>
              <button className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-lg   ">
                REGISTER
              </button>
            </Link>
          </div>
          <div className="text-center p-4 flex items-center justify-center flex-col">
            <h3 className="text-xl font-bold text-gray-800  ">PREMIUM</h3>
            <p className="line-through text-gray-500  ">EUR 279.00</p>
            <p className="text-red-500 text-center md:text-start md:text-2xl font-semibold">
              EUR 223.20 <span className="text-sm">+ VAT / year</span>
            </p>
            <Link to={"/register/form"}>
              <button className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-lg   ">
                REGISTER
              </button>
            </Link>
          </div>
        </div>

        {/* Table Details */}
        <div className="grid grid-cols-3 text-center  ">
          <div className="py-4 px-6 bg-gray-100 text-gray-600 font-semibold text-left">
            Access period
          </div>
          <div className="py-4 px-6">✓</div>
          <div className="py-4 px-6">✓</div>

          <div className="py-4 px-6 bg-gray-100 text-gray-600 font-semibold text-left">
            Unlimited number of inquiries to send
          </div>
          <div className="py-4 px-6">✓</div>
          <div className="py-4 px-6">✓</div>

          <div className="py-4 px-6 bg-gray-100 text-gray-600 font-semibold text-left">
            Daily newsletter with latest offers
          </div>
          <div className="py-4 px-6">✓</div>
          <div className="py-4 px-6">✓</div>

          <div className="py-4 px-6 bg-gray-100 text-gray-600 font-semibold text-left">
            Access to special offers up to 50%
          </div>
          <div className="py-4 px-6">✓</div>
          <div className="py-4 px-6">✓</div>

          <div className="py-4 px-6 bg-gray-100 text-gray-600 font-semibold text-left">
            Extensive database of shopping wholesalers
          </div>
          <div className="py-4 px-6">✗</div>
          <div className="py-4 px-6">✓</div>
        </div>
        <div className="grid grid-cols-3 bg-gray-50 py-6 px-4">
          <div className="col-span-1 text-center flex items-center justify-center flex-col "></div>
          <div className="text-center border-l border-r p-4 flex items-center justify-center flex-col">
            <h3 className="text-xl font-bold text-gray-800  ">STANDARD</h3>
            <p className="line-through text-gray-500  ">EUR 199.00</p>
            <p className="text-red-500 text-center md:text-start md:text-2xl font-semibold">
              EUR 159.20 <span className="text-sm">+ VAT / year</span>
            </p>
            <Link to={"/register/form"}>
              <button className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-lg   ">
                REGISTER
              </button>
            </Link>
          </div>
          <div className="text-center p-4 flex items-center justify-center flex-col">
            <h3 className="text-xl font-bold text-gray-800  ">PREMIUM</h3>
            <p className="line-through text-gray-500  ">EUR 279.00</p>
            <p className="text-red-500 text-center md:text-start md:text-2xl font-semibold">
              EUR 223.20 <span className="text-sm">+ VAT / year</span>
            </p>
            <Link to={"/register/form"}>
              <button className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-lg   ">
                REGISTER
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <Faqs activeFaq={activeFaq} toggleFaq={toggleFaq} />

      <Footer />
    </>
  );
};

export default Register;
