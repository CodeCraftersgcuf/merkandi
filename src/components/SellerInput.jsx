import React from "react";

const SellerInput = ({ label, type = "text", options = [], ...rest }) => {
  return (
    <div className="mb-4 flex gap-8 items-center">
      <label className="block text-sm font-medium text-gray-700 mt-3 w-1/4">{label}</label>
      {type === "text" || type === "number" ? (
        <input
          type={type}
          className="p-2 w-3/4 border border-gray-300 rounded"
          {...rest}
        />
      ) : type === "select" ? (
        <select
          className="p-2 w-3/4 border border-gray-300 rounded"
          {...rest}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "checkbox" ? (
        <input type="checkbox" className="ml-1" {...rest} />
      ) : null}
    </div>
  );
};

export default SellerInput;
