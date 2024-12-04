import React, { useState } from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const [isHovering, setIsHovering] = useState(false);
  // console.log(category);
  

  return (
    <li
      className="relative lg:hover:border-l-[5px] lg:border-blue-500  transition duration-300"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={()=> setIsHovering(!isHovering) }
    >
      <button
        className="w-full flex items-center  text-gray-800 p-3 hover:bg-gray-200 transition duration-300"
        type="button"
      >
        <span>
          <i className={`${category.iconClass} mr-3 text-gray-500`} />{" "}
          {category.name}
        </span>
      </button>
      {isHovering && category.subcategories?.length > 0 && (
        <ul className="lg:absolute top-2 left-full  lg:w-[200px] 2xl:w-[400px] bg-white lg:shadow-xl rounded-lg z-10 lg:border lg:border-gray-200 overflow-hidden 2xl:p-4">
        <li className="px-4 py-2 text-xl font-bold hover:bg-gray-100 text-black transition duration-200">
            <Link to='/products'>{ category.name }</Link>
        </li>
        <hr />
          {category.subcategories.map((subcategory, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 text-black transition duration-200 2xl:py-4"
            >
              <Link to='/products'>{subcategory}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default CategoryItem;
