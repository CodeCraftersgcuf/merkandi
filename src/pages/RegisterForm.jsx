import React, { useState } from "react";
import { phone_codes } from "../utils/phone_code";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import RegisterTopNavBar from "./pageComponents/RegisterTopNavBar";
import RightSideBarForm from "../components/RightSideBarForm";
import FlashSales from "../components/FlashSales";
import InputField from "../components/InputField";
const RegisterForm = () => {
  const [isPassword, setIspassword] = React.useState(false);
  const [isInvoice, setIsinvoice] = useState(false);
  const [isSeller, setisSeller] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    phone_code: "",
    phone_number: "",
    country: "",
    company_name: "",
    tax_number: "",
    street_address: "",
    postal_code: "",
    city: "",
    invoice: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <RegisterTopNavBar />
      <FlashSales />

      {/* form */}
      <div className="p-3 md:p-[50px] bg-gray-100">
        <div className="container max-w-[1280px] mx-auto grid md:grid-cols-12 gap-3 ">
          <div className="p-4 md:col-span-8 bg-white order-2 md:order-1">
            <h1 className="text-3xl font-bold  ">Registration form</h1>
            <p className="text-sm text-gray-600  ">
              <span className="text-red-500">*</span> All fields marked with an
              asterisk (*) are required
            </p>
            <hr className="my-4 " />
            <div className="form-can">
              <form action="">
                {/* baisc info */}
                <div className="Basic-info grid md:grid-cols-12 gap-3">
                  <div className="text-xl font-bold col-span-3">
                    Basic Information
                  </div>
                  <div className="col-span-9 flex flex-wrap">
                    <InputField
                      label="Name"
                      name="name"
                      id="name"
                      required
                      placeholder="Enter name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Surname"
                      name="surname"
                      id="surname"
                      required
                      placeholder="Enter surname"
                      value={formData.surname}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Email"
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Password"
                      type="password"
                      name="password"
                      id="password"
                      required
                      placeholder="Enter password"
                      isPasswordToggle
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Phone Code"
                      type="select"
                      name="phone_code"
                      id="phone_code"
                      options={phone_codes.map((code) => ({
                        value: code.code,
                        label: `${code.code} ${code.country}`,
                      }))}
                      value={formData.phone_code}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Phone Number"
                      type="number"
                      name="phone_number"
                      id="phone_number"
                      placeholder="Enter phone number"
                      value={formData.phone_number}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Country"
                      type="select"
                      name="country"
                      id="country"
                      options={phone_codes.map((code) => ({
                        value: code.country,
                        label: code.country,
                      }))}
                      value={formData.country}
                      onChange={handleChange}
                    />
                    <div className="w-full mt-5 align-middle">
                      <InputField
                        label="I want Invoice"
                        type="checkbox"
                        name="invoice"
                        id="invoice"
                        value={formData.invoice}
                        onChange={handleChange}
                      />
                    </div>
                    {formData.invoice && (
                      <>
                        <InputField
                          label="Company Name"
                          name="company_name"
                          id="company_name"
                          required
                          placeholder="Enter company name"
                          value={formData.company_name}
                          onChange={handleChange}
                        />
                        <InputField
                          label="Tax Number"
                          name="tax_number"
                          id="tax_number"
                          required
                          placeholder="Enter tax number"
                          value={formData.tax_number}
                          onChange={handleChange}
                        />
                        <InputField
                          label="Street Address"
                          name="street_address"
                          id="street_address"
                          required
                          placeholder="Enter street address"
                          value={formData.street_address}
                          onChange={handleChange}
                        />
                        <InputField
                          label="Postal Code"
                          name="postal_code"
                          id="postal_code"
                          required
                          placeholder="Enter postal code"
                          value={formData.postal_code}
                          onChange={handleChange}
                        />
                        <InputField
                          label="City"
                          name="city"
                          id="city"
                          required
                          placeholder="Enter city"
                          value={formData.city}
                          onChange={handleChange}
                        />
                      </>
                    )}
                  </div>
                </div>
                <hr className="my-4" />

                {/* package info */}
                <div className="Basic-info grid md:grid-cols-12 gap-3">
                  <div className="text-lg font-bold col-span-3">
                    On Merkandi I want to{" "}
                    <span className="text-red-500">*</span>
                  </div>
                  <div className="col-span-9 flex flex-wrap">
                    <InputField
                      label=""
                      type="radio"
                      name="account"
                      id="seller"
                      value="seller"
                      required={true}
                      options={[
                        { value: "seller", label: "Sell" },
                        { value: "buyer", label: "Buy" },
                      ]}
                      onChange={(e) => console.log(e.target.value)} // Add your logic
                    />
                    <span className="text-sm text-gray-500">
                      Thanks to this information, we will personalize your
                      experience on our platform
                    </span>
                  </div>
                </div>
                <hr className="my-4" />

                {/* policy info */}
                <div className="Basic-info grid md:grid-cols-12 gap-3">
                  <div className="text-lg font-bold col-span-3">
                    Terms and Conditions and consents
                  </div>
                  <div className="col-span-9 flex flex-wrap">
                    <InputField
                      label="I accept terms and Conditions and privacy Policy."
                      type="checkbox"
                      name="policy"
                      id="policy"
                      value="1"
                      required={true}
                      onChange={(e) => console.log(e.target.checked)} // Add your logic
                    />
                  </div>
                </div>

                <hr className="my-4" />

                {/* button */}
                <div className="flex items-center justify-end p-4">
                  <button
                    type="submit"
                    className="btn bg-yellow px-6 py-2 font-bold text-white uppercase "
                  >
                    Register and pay
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* right side  */}
          <RightSideBarForm />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RegisterForm;
