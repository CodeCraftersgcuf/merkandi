import React, { useState } from "react";
import sale_img from "../assets/images/desktop_small.jpg";
import store from "../assets/images/register-1.jpg";
import flash from "../assets/images/flash.png";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import RegisterTopNavBar from "./pageComponents/RegisterTopNavBar";
import thumb_up from "../assets/images/ratings-and-thumb-green.svg";

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
      <RegisterTopNavBar />

      {/* Flash Sale */}
      <div className="p-2 bg-[#05006E]">
        <div className="p-4 md:p-4" style={top_sale}>
          <div className="container mx-auto  max-w-[1280px]">
            <h1 className="text-white flex items-center text-[50px] font-extrabold">
              <img src={flash} alt="flash logo" className="w-[40px] " />
              Flash Sale
            </h1>
            <div className="flex flex-col md:flex-row md:items-center justify-between my-4">
              <div className="flex md:items-center flex-col md:flex-row gap-4">
                <div className="w-fit text-[15px] md:text-[30px] font-bold bg-red-500 px-3 text-white  ">
                  20%
                </div>
                <div className="text-white">
                  <h1 className="font-bold  ">
                    For one-year REGISTRATION and RENEWAL
                  </h1>
                  <p className=" ">Promotions cannot be combined</p>
                </div>
              </div>
              <div className="text-white">
                <h1 className="md:text-center text-4xl font-bold">20</h1>
                <p className="md:text-center text-xl">
                  Number of remaining packages
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <div className="my-5 m-auto  max-w-[1280px]">
        <h1 className="text-center font-bold text-4xl">
          Frequently Asked Questions
        </h1>
        <div className="container mx-auto my-5 space-y-4">
          {[
            {
              question: "How can a seller open an account?",
              answer:
                'Sellers can open an account by clicking on the "Register" button at the top right of the page, then selecting the "Seller" option during the registration process.',
            },
            {
              question: "How do I purchase products as a buyer?",
              answer:
                "As a buyer, you can browse products and add items to your cart. Once ready, proceed to checkout and follow the payment instructions.",
            },
            {
              question: "What are the fees for sellers?",
              answer:
                "The platform charges a small fee on each successful sale. There are no monthly subscription fees, and you only pay when you make a sale.",
            },
            {
              question: "Can buyers return products if they are unsatisfied?",
              answer:
                "Yes, buyers can initiate returns if the product does not meet their expectations. Review our return policy for details.",
            },
            {
              question: "How do sellers get paid?",
              answer:
                "Sellers receive payments through their preferred payment method after each successful transaction.",
            },
          ].map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full text-left px-4 py-2    focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
              </button>
              {activeFaq === index && (
                <div className="px-4 py-2 bg-gray-100   ">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
