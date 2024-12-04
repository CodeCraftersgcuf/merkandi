import React from 'react'
import { Link } from 'react-router-dom';

const Product_component = ({ product, cardHeight = '400px', Card2xl = '500px' }) => {
    const dynamicHeightClass = `min-h-[${cardHeight}]`;
    // console.log(dynamicHeightClass);
    return (
        <>
             {/* <div className={`card shadow rounded overflow-hidden ${dynamicHeightClass} 2xl:min-h-[${Card2xl}] `}> */}
               <Link to='/2/product_view'>
                    <img src={product.img} alt="product img" className='w-full min-h-[200px] max-h-[400px]' />
                    <div className='p-2 flex gap-2 flex-col'>
                        <p className='text-sm font-bold text-gray-500'>
                            <span className='text-red-600'>{product.price.split('/')[0]}</span> {product.price.split('/')[1]}
                        </p>
                        <h1 className=''>
                            {product.name}
                        </h1>
                        {product.negotiable && <h6 className='bg-gray-300 hidden md:block py-1 px-2 text-[12px]    w-fit  rounded'>Negotiable</h6>}
                        {product.discount && <h6 className='bg-green-500 hidden md:block text-white text-[12px]  py-1 px-2 w-fit rounded'>{product.discount}</h6>}
                        <h6 className='text-gray-400 text-xs'>
                            <i className="fa-solid fa-cart-shopping mr-2"></i>{product.availability}
                        </h6>
                        <h6 className='text-gray-400 text-xs'>
                            <i className="fa-solid fa-box mr-2"></i> {product.status}
                        </h6>
                    </div>
               </Link>
            {/* </div> */}
        </>
    )
}

export default Product_component
