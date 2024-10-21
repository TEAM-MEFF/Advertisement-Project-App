import React from "react";
import Fashion from "../../../assets/img/Fashion.jpg";
import Appliances from "../../../assets/img/Appliances.jpg";
import Electronics from "../../../assets/img/Electronics.jpg";
import Groceries from "../../../assets/img/Groceries.jpg";
import Furniture from "../../../assets/img/Furniture.jpg";

const CategoriesSection = () => {
  return (
    <div className="flex w-full h-full gap-5">
      <div className=" transform transition-transform duration-300 hover:scale-105  ">
        <img src={Fashion} alt="" className="h-64 " />
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 font-semibold text-3xl">
          Fashion
        </div>
      </div>
      <div className=" transform transition-transform duration-300 hover:scale-105 ">
        <img src={Appliances} alt="" className="h-64 " />
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 font-semibold text-3xl">
          Appliances
        </div>
      </div>
      <div className=" transform transition-transform duration-300 hover:scale-105 ">
        <img src={Electronics} alt="" className="h-64 " />
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 font-semibold text-3xl">
          Electronics
        </div>
      </div>
      <div className=" transform transition-transform duration-300 hover:scale-105 ">
        <img src={Groceries} alt="" className="h-64 " />
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 font-semibold text-3xl">
          Groceries
        </div>
      </div>
      <div className=" transform transition-transform duration-300 hover:scale-105 ">
        <img src={Furniture} alt="" className="h-64 " />
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 font-semibold text-3xl">
          Furniture
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
