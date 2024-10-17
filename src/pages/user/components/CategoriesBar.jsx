import React from "react";
import { FaBars, FaHome } from "react-icons/fa";

const CategoriesBar = ({ categoriesBarToggle, setCategoriesBarToggle }) => {
  return (
    <div className="w-64 bg-gray-800 h-full px-4 py-2">
      <div className="flex items-center text-xl my-2 mb-4 ">
        <FaBars
          className="text-white me-4 cursor-pointer"
          onClick={() => setCategoriesBarToggle(!categoriesBarToggle)}
        />
        <span className="text-white font-semibold">CATEGORIES</span>
      </div>
      <hr />
      {categoriesBarToggle ? (
        <ul className="mt-3 text-white font-bold">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <a href="" className="px-3">
              <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
              Home
            </a>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <a href="" className="px-3">
              <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
              Home
            </a>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <a href="" className="px-3">
              <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
              Home
            </a>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <a href="" className="px-3">
              <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
              Home
            </a>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default CategoriesBar;
