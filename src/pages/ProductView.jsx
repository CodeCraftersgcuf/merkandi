import React from 'react'
import TopNavbar from '../components/TopNavbar/TopNavbar'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer';
import News from '../components/News/News';
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';
import { shippingData } from '../utils/deliveryCountries';
import Product_Swipper from './pageComponents/Product_Swipper';
import { products } from '../utils/products';
import Related_Search from '../components/Related_search/Related_Search';

const ProductView = () => {
    const { id } = useParams();
    const [currentImage, setCurrentImage] = React.useState(0);
    const [isViewerOpen, setIsViewerOpen] = React.useState(false);
    const [isDelivery, setisDelivery] = React.useState(false);
    const [isdetail, setIsdetail] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTblJRG5o6QR989lq7rmmfuWbEF6x8J2QC_1A&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJf_ISxyfHDw5cBbtFhe6G_oigFyhNl6SXw&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhdW6_AMXWN70u4mci8f3eUs0bY0Ady7cwow&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAyr4Xx6yVgyBXPcLGaTVFFqtGCM-WdcopTw&s'
    ];

    const openImageViewer = React.useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    const hours = {
        Mon: "09:00 - 18:00",
        Tues: "09:00 - 18:00",
        Wed: "09:00 - 18:00",
        Thurs: "09:00 - 18:00",
        Fri: "09:00 - 18:00",
        Sat: "Closed",
        Sun: "Closed",
    };

    const dayMap = {
        Monday: "Mon",
        Tuesday: "Tues",
        Wednesday: "Wed",
        Thursday: "Thurs",
        Friday: "Fri",
        Saturday: "Sat",
        Sunday: "Sun",
    };
    const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });
    const todayHours = hours[dayMap[currentDay]];
    const [hoveredHours, setHoveredHours] = React.useState(todayHours);
    return (
        <>
            <TopNavbar />

            <div className='py-12 px-4 md:px-0 container mx-auto'>
                <div className='headings flex flex-wrap gap-1 md:gap-2'>
                    <span className='text-blue-500 text-sm '>Merkandi</span> /
                    <span className='text-blue-500 text-sm '>Offers' database</span> /
                    <span className='text-blue-500 text-sm '>Clothing</span> /
                    <span className='text-blue-500 text-sm '>Fashion accessories</span> /
                    <span className='text-blue-500 text-sm '>STOCK CLOTHING, UNDERWEAR AND SHOES FOR WOMEN, MEN, CHILDREN</span>
                </div>
                <div className='flex flex-wrap mt-8'>
                    <div className='product-view md:p-0 md:w-[70%]'>
                        <div className='flex flex-wrap md:gap-2 lg:gap-0'>
                            <div className='product-view-image w-full md:w-[100%] lg:w-1/2 lg: flex flex-wrap justify-center border'>
                                {images.map((src, index) => (
                                    <img
                                        src={src}
                                        onClick={() => openImageViewer(index)}
                                        width={index === 0 ? "100%" : "50"}
                                        key={index}
                                        style={{ margin: '2px', maxHeight: `${index === 0 ? '300px' : '50px'}`, marginTop: `${index === 0 ? '0' : '20px'}`, objectFit: 'contain' }}
                                        alt=""
                                    />
                                ))}
                                {isViewerOpen && (
                                    <ImageViewer
                                        src={images}
                                        currentIndex={currentImage}
                                        disableScroll={false}
                                        closeOnClickOutside={true}
                                        onClose={closeImageViewer}
                                    />
                                )}
                            </div>
                            <div className='product-detail md:w-[100%] px-4  lg:w-1/2'>
                                <h1 className='font-extrabold text-2xl'>
                                    STOCK CLOTHING, UNDERWEAR AND SHOES FOR WOMEN, MEN, CHILDREN
                                </h1>
                                <div className='price-can py-4 flex flex-wrap gap-2 items-end'>
                                    <span className='text-red-500 text-2xl  font-extrabold'>
                                        $100
                                    </span>
                                    <span className='text-gray-400 pb-1 '>
                                        /piece
                                    </span>
                                    <span className='text-green-500 pb-1 '>
                                        price excl. VAT
                                    </span>
                                </div>
                                <div className='order-can'>
                                    <button className='w-full bg-yellow py-2 text-2xl font-extrabold text-white'>
                                        Order
                                    </button>
                                    <button className='border-2 border-[#f29d00] mt-4 py-2 px-7 text-[#f29d00] hover:bg-[#f29d00] hover:text-white'>
                                        Add to cart
                                    </button>
                                </div>
                                <hr className='my-4' />
                                <div className='detail-list'>
                                    <table className='w-full'>
                                        <tbody>
                                            <tr>
                                                <td className='py-1 font-bold'>Minimal order</td>
                                                <td className='py-1 text-gray-500'>100 pieces</td>
                                            </tr>
                                            <tr>
                                                <td className='py-1 font-bold'>Available quantity</td>
                                                <td className='py-1 text-gray-500'>no limits</td>
                                            </tr>
                                            <tr>
                                                <td className='py-1 font-bold'>Country</td>
                                                <td className='py-1 text-gray-500'>Italy</td>
                                            </tr>
                                            <tr>
                                                <td className='py-1 font-bold'>Grade</td>
                                                <td className='py-1 text-gray-500'>New</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='border my-8 p-4'>
                            <div className='description-can'>
                                <h1 className='text-xl font-extrabold'>STOCK CLOTHING, UNDERWEAR AND SHOES FOR WOMEN, MEN, CHILDREN - description</h1>
                                <div className='mt-8 flex flex-col gap-4 '>
                                    <p>Stock of WOMEN'S MEN'S CHILDREN'S clothing, shoes, underwear and accessories and household items.</p>

                                    <p>General offer of all available brands.</p>

                                    <p>Price per unit or kg (starting from €0.90 per piece or 4.50 per KG)</p>

                                    <p>Ideal product for OUTLETS and STREET VENDORS coming from the past season.</p>

                                    <p>Shipments to all destinations in the world.</p>

                                    <p>Small and large quantities sold (from 100 pieces to one truck)</p>

                                    <p>Ask for information, photos, videos, offers, packing lists.</p>

                                    <p>Warehouse of +10,000 sqm</p>
                                    <p>Visit our 1,000 sqm showroom: - in person, in Italy - via video link via smartphone.</p>

                                    <p>Note: Brands may only be available for sale in specific countries. Ask for all the information</p>

                                    <p>We are based in Northern Italy, in the province of Turin</p>
                                </div>
                            </div>
                            <hr className='my-4' />
                            <div className='payemnts'>
                                <h1 className='text-xl font-bold my-4'>Payment options</h1>
                                <ul className='\'>
                                    <li className='flex items-center gap-4'><i className="text-green-500 fa-solid fa-check"></i>Cash</li>
                                    <li className='flex items-center gap-4'><i className="text-green-500 fa-solid fa-check"></i>VISA</li>
                                    <li className='flex items-center gap-4'><i className="text-green-500 fa-solid fa-check"></i>MasterCard</li>
                                    <li className='flex items-center gap-4'><i className="text-green-500 fa-solid fa-check"></i>American Express</li>
                                    <li className='flex items-center gap-4'><i className="text-green-500 fa-solid fa-check"></i>Maestro</li>
                                </ul>
                            </div>
                            <hr className='my-4' />
                            <div className='delivery'>
                                <h1 className='my-4 font-bold text-xl'>
                                    Delivery options
                                </h1>
                                <ul className='flex flex-wrap justify-between '>
                                    <li className='flex items-center gap-4'><i className="text-green-500 fa-solid fa-check"></i>Collection in person</li>
                                    <li className='flex items-center gap-4'><i className="text-green-500 fa-solid fa-check"></i>National delivery</li>
                                    <li className='flex items-center gap-4'><i className="text-green-500 fa-solid fa-check"></i>International delivery</li>
                                </ul>
                            </div>
                            <hr className='my-4 ' />
                            <div className='Shipping-countries'>
                                <h1 className='my-4 font-bold text-xl cursor-pointer' onClick={() => setisDelivery(!isDelivery)}>Shipping to countries</h1>
                                <div className=''>
                                    {isDelivery && <ul className='flex flex-col gap-4'>
                                        {shippingData.map((delivery, index) => {
                                            return <li className='flex flex-col gap-2'>
                                                <h1 className='font-bold text-lg '>{delivery.continent}</h1>
                                                <h3 className='flex items-center gap-2 \'><i className="text-green-500 fa-solid fa-check"></i> {delivery.description}</h3>
                                            </li>
                                        })}
                                    </ul>}
                                </div>
                            </div>
                            <hr className='my-4 ' />
                            <div className='tags'>
                                <h1 className='my-4 font-bold text-xl cursor-pointer' >Tags</h1>
                                <div className='flex flex-wrap gap-2'>
                                    <span className='px-6 py-2 border text-xs hover:bg-gray-300 cursor-pointer '>Clothes</span>
                                    <span className='px-6 py-2 border text-xs hover:bg-gray-300 cursor-pointer '>Kids</span>
                                    <span className='px-6 py-2 border text-xs hover:bg-gray-300 cursor-pointer '>Adult</span>
                                    <span className='px-6 py-2 border text-xs hover:bg-gray-300 cursor-pointer '>Women</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-3 w-full md:w-[30%] bg-gray-50 rounded'>
                        <div className='sticky top-0'>
                            <h1 className='text-2xl font-bold text-blue-500 '>Wholesaler's data</h1>
                            <h2 className='text-lg \'>John Wick</h2>
                            <h3 className='text-green-500 mt-2'>
                                {/* verifired icon */}
                                <i className="fa-solid fa-check pr-1"></i> Verified Seller
                            </h3>
    
                            {isdetail && <div className='imp-detail w-full my-4 '>
                                <table className='w-full '>
                                    <tr>
                                        <td className='py-1  font-bold min-w-[100px]'>Country:</td>
                                        <td className='py-1 text-gray-500 text-right'>Italy</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1  font-bold min-w-[100px]'>City:</td>
                                        <td className='py-1 text-gray-500 text-right'>city name</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1  font-bold min-w-[100px]'>Postal code:</td>
                                        <td className='py-1 text-gray-500 text-right'>232322</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1  font-bold min-w-[100px]'>Street</td>
                                        <td className='py-1 text-gray-500 text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ad?</td>
                                    </tr>
                                </table>
                                <hr className='my-4 ' />
                                <table className='w-full '>
                                    <tr>
                                        <td className='py-1  font-bold min-w-[100px]'>Name and surname:</td>
                                        <td className='py-1 text-gray-500 text-right'>Charles Smith</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1  font-bold min-w-[100px]'>Languages:</td>
                                        <td className='py-1 text-gray-500 text-right'>English, French</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1  font-bold min-w-[100px]'>Phone number:</td>
                                        <td className='py-1 text-gray-500 text-right'>+123 456 789 1011</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1  font-bold min-w-[100px]'>Mobile phone No.:</td>
                                        <td className='py-1 text-gray-500 text-right'>0123 4567890</td>
                                    </tr>
                                </table>
                            </div>}
                            {!isdetail && <div className='imp-detail w-full relative my-4 '>
                                <button onClick={() => setIsdetail(!isdetail)} className='z-10 btn bg-yellow px-6 py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                                    <i className="fa-solid fa-eye pr-1 text-white"></i>
                                </button>
                                <div className=' blur-sm'>
                                    <table className='w-full \'>
                                        <tbody>
                                            <tr>
                                                <td className='py-1  font-bold min-w-[100px]'>Country:</td>
                                                <td className='py-1 text-gray-500 text-right'>********</td>
                                            </tr>
                                            <tr>
                                                <td className='py-1  font-bold min-w-[100px]'>City:</td>
                                                <td className='py-1 text-gray-500 text-right'>********</td>
                                            </tr>
                                            <tr>
                                                <td className='py-1  font-bold min-w-[100px]'>Postal code:</td>
                                                <td className='py-1 text-gray-500 text-right'>******</td>
                                            </tr>
                                            <tr>
                                                <td className='py-1  font-bold min-w-[100px]'>Street</td>
                                                <td className='py-1 text-gray-500 text-right'>*****************************</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <hr className='my-4 ' />
                                    <table className='w-full \'>
                                        <tbody>
                                            <tr>
                                                <td className='py-1  font-bold min-w-[100px]'>Name and surname:</td>
                                                <td className='py-1 text-gray-500 text-right'>******** ******</td>
                                            </tr>
                                            <tr>
                                                <td className='py-1  font-bold min-w-[100px]'>Languages:</td>
                                                <td className='py-1 text-gray-500 text-right'>********</td>
                                            </tr>
                                            <tr>
                                                <td className='py-1  font-bold min-w-[100px]'>Phone number:</td>
                                                <td className='py-1 text-gray-500 text-right'>**** *** *** ****</td>
                                            </tr>
                                            <tr>
                                                <td className='py-1  font-bold min-w-[100px]'>Mobile phone No.:</td>
                                                <td className='py-1 text-gray-500 text-right'>**** ********</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            }
                            <hr className='my-4 ' />
                            <div className="open-hour overflow-hidden my-4 ">
                                <div
                                    className="opening-hours"
                                >
                                    <div className="flex items-center ">
                                        <span className="font-bold">Opening hours:</span>
                                        <span className="ml-2 text-gray-500 \">
                                            {hoveredHours === "Closed" ? "Closed" : hoveredHours}
                                        </span>
                                    </div>
                                    <div className="hours-dropdown mt-2 border flex items-center w-full">
                                        {Object.entries(hours).map(([day, time], index) => (
                                            <div key={index} className={`p-2 bg-gray-200 w-full cursor-pointer hover:bg-[#f29d00] text-center    ${dayMap[currentDay] == day ? 'bg-yellow' : ''}`}
                                                onMouseEnter={() => setHoveredHours(time)}
                                                onMouseLeave={() => setHoveredHours(todayHours)}
                                            >
                                                {day}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <hr className='my-4 ' />
                            <div className='flex flex-col gap-4 justify-center items-center'>
                                <button className='border border-black w-fit px-4 py-2 min-w-[200px] bg-white'>
                                    View profile
                                </button>
                                <button className='border border-black w-fit px-4 py-2 min-w-[200px] bg-white'>
                                    All offers
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-10 bg-'>
                    <Product_Swipper heading={'Other offers of this wholesaler'} link={'#'} products={ products }/>
                    <Product_Swipper heading={'Other offers in this category'} link={'#'} products={ products }/>
                    <div className='my-4'>
                        <Related_Search/>
                    </div>
                </div>
            </div >

            <News />
            <Footer />
        </>
    )
}

export default ProductView
