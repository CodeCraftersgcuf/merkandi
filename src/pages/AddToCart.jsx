import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import RegisterTopNavBar from './pageComponents/RegisterTopNavBar'
import card_1 from '../assets/images/cards-1.png';
import card_2 from '../assets/images/cards-2.png';
import card_3 from '../assets/images/cards-3.png';
import card_4 from '../assets/images/cards-4.png';
import { Link } from 'react-router-dom';
import News from '../components/News/News';

const AddToCart = () => {
    const [isDiscount, setissDiscount] = useState(false)
    const [discountCode, setDiscountCode] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setDiscountCode(e.target.value);
        if (e.target.value !== '') {
            setError(false);
        }
    };
    console.log(card_1)
    const handleSubmit = () => {
        if (discountCode === '') {
            setError(true);
        } else {
            setError(false);
            // Handle discount code submission
            alert(`Discount Code: ${discountCode}`);
        }
    };
    return (
        <>
            <RegisterTopNavBar />
            <div className=' px-[10px] py-8 md:px-[100px] bg-gray-100'>
                <div className="container mx-auto bg-white rounded-lg p-8">
                    <h2 className="text-center text-3xl mb-5  tracking-widest">PAYMENT</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border  ">
                            <thead className='bg-gray-100'>
                                <tr>
                                    <th className="px-4 py-2  border-gray-300 text-left">Name</th>
                                    <th className="px-4 py-2  border-gray-300 text-left">Price</th>
                                    <th className="px-4 py-2  border-gray-300 text-left">Quantity</th>
                                    <th className="px-4 py-2  border-gray-300 text-left">VAT</th>
                                    <th className="px-4 py-2  border-gray-300 text-left">Gross Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2 border border-gray-300">PREMIUM account on Merkandi</td>
                                    <td className="px-4 py-2 border border-gray-300 text-left">PLN 1,190.00</td>
                                    <td className="px-4 py-2 border border-gray-300 text-left">1</td>
                                    <td className="px-4 py-2 border border-gray-300 text-left">np</td>
                                    <td className="px-4 py-2 border border-gray-300 text-left">PLN 1,190.00</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border border-gray-300">Discount (FLASHSALE) 20%</td>
                                    <td className="px-4 py-2 border border-gray-300 text-left">PLN -238.00</td>
                                    <td className="px-4 py-2 border border-gray-300 text-left">1</td>
                                    <td className="px-4 py-2 border border-gray-300 text-left">np</td>
                                    <td className="px-4 py-2 border border-gray-300 text-left">PLN -238.00</td>
                                </tr>
                                <tr>
                                    <td colSpan="4" className="px-4 py-2  border border-gray-300 text-right font-bold">Total</td>
                                    <td className="px-4 py-2 border border-gray-300 text-left font-bold">PLN 952.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-5 text-right">
                        <button className="text-blue-500" onClick={() => setissDiscount(!isDiscount)}>I've got a discount code</button>
                        {isDiscount && <div className="flex items-center justify-end mt-5">
                            <input
                                type="text"
                                placeholder="Enter the discount code"
                                value={discountCode}
                                onChange={handleChange}
                                className={`px-4 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64`}
                            />
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 text-white border bg-blue-500 rounded-r-md hover:bg-blue-400 focus:outline-none"
                            >
                                Add Discount Code
                            </button>
                        </div>}
                    </div>

                    <div className="rounded-lg p-8">
                        <h2 className="text-center text-3xl mb-6 font-bold">Choose the payment method</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card Payment Section */}
                            <div className="flex flex-col items-center justify-between bg-gray-100 p-6 rounded-lg shadow-lg">
                                <div className="mb-4 w-full">
                                    <img src={card_1} alt="Visa" className="w-full mb-4" />
                                </div>
                                <Link to={'/payments/cards'} className="bg-orange-500 text-white px-6 py-2 text-center rounded-md hover:bg-orange-400 w-full  ">
                                    I PAY BY CARD
                                </Link>
                            </div>

                            {/* Payment Option 1 Section */}
                            <div className="flex flex-col items-center justify-between bg-gray-100 p-6 rounded-lg shadow-lg">
                                <div className="mb-4 w-full">
                                    <img src={card_2} alt="EPS" className="w-full mb-4" />
                                </div>
                                <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-400 w-full  ">
                                    PAY
                                </button>
                            </div>


                            {/* PayPal Section */}
                            <div className="flex flex-col items-center justify-between bg-gray-100 p-6 rounded-lg shadow-lg">
                                <img src={card_3} alt="PayPal" className="w-full mb-4" />
                                <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-400 w-full  ">
                                    PAY
                                </button>
                            </div>

                            {/* Payment Option 2 Section */}
                            <div className="flex flex-col items-center justify-between bg-gray-100 p-6 rounded-lg shadow-lg">
                                <img src={card_4} alt="Bank Transfer" className="w-full mb-4" />
                                <p className="text-sm text-center text-gray-600 mb-4  ">
                                    The account number will be presented after you click this option.
                                </p>
                                <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-400 w-full  ">
                                    PAY
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* add to cart start */}
            <News/>
            <Footer />
        </>
    )
}

export default AddToCart
