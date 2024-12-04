import React, { useState } from 'react'
import { phone_codes } from '../utils/phone_code'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'
import RegisterTopNavBar from './pageComponents/RegisterTopNavBar'

const RegisterForm = () => {
    const [isPassword, setIspassword] = React.useState(false)
    const [isInvoice, setIsinvoice] = useState(false);
    const [isSeller, setisSeller] = useState(false)
    return (
        <>
            <RegisterTopNavBar/>


            {/* form */}
            <div className='p-3 md:p-[50px] bg-gray-100'>
                <div className='container mx-auto grid md:grid-cols-12 gap-3 '>
                    <div className='p-4 md:col-span-8 bg-white order-2 md:order-1'>
                        <h1 className='text-3xl font-bold  '>Registration form</h1>
                        <p className='text-sm text-gray-600  '><span className='text-red-500'>*</span> All fields marked with an asterisk (*) are required</p>
                        <hr className='my-4 ' />
                        <div className='form-can'>
                            <form action="">
                                {/* baisc info */}
                                <div className='Basic-info grid md:grid-cols-12 gap-3'>
                                    <div className='text-xl   font-bold col-span-3'>
                                        Basic Information
                                    </div>
                                    <div className='col-span-9 flex flex-wrap'>
                                        <div className='w-full md:w-1/2 p-1   '>
                                            <label htmlFor="name">Name <span className='text-red-500'>*</span></label>
                                            <input type="text" name="name" id="name" required className=' block mt-2 border border-gray-300 rounded-sm outline-none w-full px-2 py-1' placeholder='Enter name' />
                                            {/* <div className='invalid-feedback block'>
                                                <span className='text-red-500'>Required</span>
                                            </div> */}
                                        </div>
                                        <div className='w-full md:w-1/2 p-1   '>
                                            <label htmlFor="surname">Surname <span className='text-red-500'>*</span></label>
                                            <input type="text" name="surname" id="surname" required className=' block mt-2 border border-gray-300 rounded-sm outline-none w-full px-2 py-1' placeholder='Enter name' />
                                            {/* <div className='invalid-feedback block'>
                                                <span className='text-red-500'>Required</span>
                                            </div> */}
                                        </div>
                                        <div className='w-full md:w-1/2 p-1   '>
                                            <label htmlFor="email">Email <span className='text-red-500'>*</span></label>
                                            <input type="text" name="email" id="email" required className=' block mt-2 border border-gray-300 rounded-sm outline-none w-full px-2 py-1' placeholder='Enter email' />
                                            {/* <div className='invalid-feedback block'>
                                                <span className='text-red-500'>Required</span>
                                            </div> */}
                                        </div>
                                        <div className='w-full md:w-1/2 p-1   '>
                                            <label htmlFor="password">Password <span className='text-red-500'>*</span></label>
                                            <div className='relative'>
                                                <input type={isPassword ? 'text' : 'password'} name="password" id="password" required className=' block mt-2 border border-gray-300 rounded-sm outline-none w-full px-2 py-1' placeholder='Enter Password' />
                                                {/* awesome font icon of eye */}
                                                <div className='absolute top-1/2 right-2 -translate-y-1/2' onClick={() => setIspassword(!isPassword)}>
                                                    {isPassword ? <i className='fa-solid fa-eye-slash text-gray-400 text-sm cursor-pointer'></i> : <i className='fa-solid fa-eye text-gray-400 text-sm cursor-pointer'></i>}
                                                </div>
                                            </div>
                                            {/* <div className='invalid-feedback block'>
                                                <span className='text-red-500'>Required</span>
                                            </div> */}
                                        </div>
                                        <div className='w-full md:w-1/2 p-1    '>
                                            <label htmlFor="phone_code">Phone code</label>
                                            <select name="phone_code" id="phone_code" className=' block mt-2 border
                                            border-gray-300 rounded-sm outline-none text-sm   w-full px-2 py-2'>
                                                <option value="">Select code</option>
                                                {phone_codes.map((code, index) => {
                                                    return <option key={index} value={code.code}>{(code.code)} {code.country}</option>
                                                })}
                                            </select>
                                            {/* <div className='invalid-feedback block'>
                                                <span className='text-red-500'>Required</span>
                                            </div> */}
                                        </div>
                                        <div className='w-full md:w-1/2 p-1   '>
                                            <label htmlFor="phone_number">Phone number </label>
                                            <input type="number" name="phone_number" id="phone_number" required className=' block mt-2 border border-gray-300 rounded-sm outline-none w-full px-2 py-1'
                                                placeholder='Enter phone number' />
                                            {/* <div className='invalid-feedback block'>
                                                <span className='text-red-500'>Required</span>
                                            </div> */}
                                        </div>
                                        <div className='w-full md:w-1/2 p-1   '>
                                            <label htmlFor="country">Country <span className='text-red-500'>*</span></label>
                                            <select name="phone_code" id="phone_code" className=' block mt-2 border
                                            border-gray-300 rounded-sm outline-none text-sm   w-full px-2 py-2'>
                                                <option value="">Select code</option>
                                                {phone_codes.map((code, index) => {
                                                    return <option key={index} value={code.country}>{code.country}</option>
                                                })}
                                            </select>
                                            {/* <div className='invalid-feedback block'>
                                                <span className='text-red-500'>Required</span>
                                            </div> */}
                                        </div>
                                        <div className='w-full p-1   '>
                                            <div className='flex items-center gap-2'>
                                                <input type="checkbox" name="invoice" id="invoice" onFocus={()=>setIsinvoice(!isInvoice)} onClick={()=> setIsinvoice(!isInvoice)} className='rounded-none' value={1} />
                                                <label htmlFor="invoice" className='select-none' onClick={()=> setIsinvoice(!isInvoice)} >I want invoice</label>
                                            </div>
                                            {isInvoice && <><hr className='my-4' />
                                                <div className='flex flex-wrap'>
                                                    <div className='flex flex-wrap items-end'>
                                                        <div className='w-full md:w-1/2 p-1   '>
                                                            <label htmlFor="company_name">Company name <span className='text-red-500'>*</span></label>
                                                            <input type="text" name="company_name" id="company_name" required className=' block mt-2 border border-gray-300 rounded-sm outline-none w-full px-2 py-1'
                                                                placeholder='Enter company name' />
                                                            {/* <div className='invalid-feedback block'>
                                                            <span className='text-red-500'>Required</span>
                                                        </div> */}
                                                        </div>
                                                        <div className='w-full md:w-1/2 p-1   '>
                                                            <label htmlFor="tax_number">EU Tax number or company registration number <span className='text-red-500'>*</span></label>
                                                            <input type="text" name="tax_number" id="tax_number" required className=' block mt-2 border border-gray-300 rounded-sm outline-none w-full px-2 py-1'
                                                                placeholder='Enter tax number' />
                                                            {/* <div className='invalid-feedback block'>
                                                            <span className='text-red-500'>Required</span>
                                                        </div> */}
                                                        </div>
                                                    </div>
                                                    <div className='w-full md:w-1/2 p-1   '>
                                                        <label htmlFor="street_address">Street , unit <span className='text-red-500'>*</span></label>
                                                        <input type="text" name="street_address" id="street_address" required className=' block mt-2 border border-gray-300 rounded-sm outline-none w-full px-2 py-1'
                                                            placeholder='Enter street address' />
                                                        {/* <div className='invalid-feedback block'>
                                                            <span className='text-red-500'>Required</span>
                                                        </div> */}
                                                    </div>
                                                    <div className='w-full md:w-1/2 p-1   '>
                                                        <label htmlFor="postal_code">Postal code <span className='text-red-500'>*</span></label>
                                                        <input type="text" name="postal_code" id="postal_code" required className=' block mt-2 border border-gray-300 rounded-sm outline-none w-full px-2 py-1'
                                                            placeholder='Enter postal code' />
                                                        {/* <div className='invalid-feedback block'>
                                                            <span className='text-red-500'>Required</span>
                                                        </div> */}
                                                    </div>
                                                    <div className='w-full md:w-1/2 p-1   '>
                                                        <label htmlFor="city">City <span className='text-red-500'>*</span></label>
                                                        <input type="text" name="city" id="city" required className=' block mt-2 border border-gray-300 rounded-sm outline-none w-full px-2 py-1'
                                                            placeholder='Enter postal code' />
                                                        {/* <div className='invalid-feedback block'>
                                                            <span className='text-red-500'>Required</span>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </>}
                                        </div>
                                    </div>
                                </div>

                                <hr className='my-4' />

                                {/* package info */}
                                <div className='Basic-info grid md:grid-cols-12 gap-3'>
                                    <div className='text-lg   font-bold col-span-3'>
                                        On Merkandi I want to <span className='text-red-500'>*</span>
                                    </div>
                                    <div className='col-span-9 flex flex-wrap'>
                                        <div className='radio-sel-buy flex flex-wrap items-center gap-4'>
                                            <div className='flex items-center gap-2'>
                                                <input
                                                    type="radio"
                                                    name="account"
                                                    id="seller"
                                                    value="seller"
                                                    required
                                                    className="w-4 h-4  border-gray-300 border-2 rounded-sm"
                                                />
                                                <label htmlFor="seller" className="text-lg  ">Sell</label>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <input
                                                    type="radio"
                                                    name="account"
                                                    id="buyer"
                                                    value="buyer"
                                                    required
                                                    className="w-4 h-4  border-gray-300 border-2 rounded-sm"
                                                />
                                                <label htmlFor="buyer" className="text-lg  ">Buy</label>
                                            </div>
                                        </div>
                                        <span className='text-sm text-gray-500'>Thanks to this information, we will personalize your experience on our platform</span>
                                    </div>
                                </div>
                                <hr className='my-4' />
                                {/* policy info */}
                                <div className='Basic-info grid md:grid-cols-12 gap-3'>
                                    <div className='text-lg   font-bold col-span-3'>
                                        Terms and Conditions and consents
                                    </div>
                                    <div className='col-span-9 flex flex-wrap'>
                                        <div className='w-full p-1   '>
                                            <div className='flex items-center gap-2'>
                                                <input type="checkbox" name="policy" id="policy" className='rounded-none ' value={1} />
                                                <label htmlFor="policy">
                                                    I accept
                                                    <Link to={'#'} className='text-blue-500'> terms and Conditions </Link>
                                                    and
                                                    <Link to={'#'} className='text-blue-500'> privacy Policy. </Link>
                                                    <span className='text-red-500'>*</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className='my-4' />

                                {/* button */}
                                <div className='flex items-center justify-end p-4'>
                                    <button type='submit'  className='btn bg-yellow px-6 py-2 font-bold text-white uppercase '>Register and pay</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* right side  */}
                    <div className='p-6 border bg-gray-50 md:col-span-4 order-1 md:order-2'>
                        <h1 className='text-xl font-bold text-yellow  '>PREMIUM</h1>
                        <h2 className='text-sm line-through text-gray-400  '>EUR 279.00 +VAT -20%</h2>
                        <h1><span className='text-2xl font-bold  '>EUR 223.20</span> +VAT / 1 year</h1>
                        <p className='text-sm mt-2 text-gray-400'>
                            These are net prices, which are subject to VAT rate in line with EU directive.
                        </p>
                        <ul className='flex flex-col gap-4 mt-5'>
                            {[
                                { "description": "Access to the opinions about the wholesalers" },
                                { "description": "Posting offers - after positive company verification" },
                                { "description": "Access to the blacklist of wholesalers" },
                                { "description": "Listing your company in Merkandi international catalogue" },
                                { "description": "Unlimited number of inquiries to send" },
                                { "description": "Advanced statistics of your offers and your company's profile views" },
                                { "description": "Access to the wholesalers' contact details" },
                                { "description": "Import/Export offers to CSV, XLS, XML files" },
                                { "description": "Daily newsletter with the latest offers" },
                                { "description": "Promoting your offers all across Europe" },
                                { "description": "Offers from 150 countries, up to 90% off regular prices" },
                                { "description": "Automatic translation of your offers into 26 languages" },
                                { "description": "An account to manage your settings, contacts and offers" },
                                { "description": "Access to the course 'Trade Path to Success'" }
                            ].map((desc, index) => {
                                return <li className='flex items-center gap-2 text-sm  '>
                                    <span className='text-green-500'>✓</span>
                                    {desc.description}
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default RegisterForm
