import IonIcon from "@reacticons/ionicons";
import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";

const BusinessDetails = () => {
  return (
    <div className="">
      <div className=" p-2 space-y-2">
        {/* Card */}
        <div className="flex p-1 border rounded-lg bg-white text-gray-400 justify-center items-center md:gap-3 gap-1">
          <div>
            <IonIcon name="person-outline" className=" text-3xl text-theme-color " />
          </div>
          <div>
            <h3 className=" text-lg ">
              <span className="font-bold text-3xl text-theme-color">
                7.6</span>/10
            </h3>
            <p className="text-sm">Customer Satisfaction</p>
          </div>
        </div>
        {/* Card */}
        <div className="flex p-1 border rounded-lg bg-white mb-3 text-gray-400 justify-center items-center md:gap-3 gap-1">
          <div>
            <IonIcon name="analytics-outline" className=" text-3xl text-theme-color " />
          </div>
          <div>
            <h3 className=" text-lg ">
              <span className="font-bold text-3xl text-theme-color">
                250</span>/clicks
            </h3>
            <p className="text-sm">on your recent post</p>
          </div>
        </div>
        {/* Card */}
        <div className="flex p-1 border rounded-lg bg-white mb-3 text-gray-400 justify-center items-center md:gap-3 gap-1">
          <div>
            <IonIcon name="eye-outline" className=" text-3xl text-theme-color " />
          </div>
          <div>
            <h3 className=" text-lg ">
              <span className="font-bold text-3xl text-theme-color">
                450</span>{" "}views
            </h3>
            <p className="text-sm"> on your latest listing</p>
          </div>
        </div>
        {/* Card */}
        <div className="flex p-1 border rounded-lg bg-white mb-3 text-gray-400 justify-center items-center md:gap-3 gap-1">
          <div>
            <GiTakeMyMoney className=" text-5xl text-theme-color" />
          </div>
          <div>
            <h3 className=" text-lg ">
              <span className="font-bold text-3xl text-theme-color">
                ₵1,200</span>{" "}
            </h3>
            <p className="text-sm">total sales this month</p>
          </div>
        </div>
        {/* Card */}
        <div className="flex p-1 border rounded-lg bg-white mb-3 text-gray-400 justify-center items-center md:gap-3 gap-1">
          <div>
            <CiDeliveryTruck className="text-theme-color text-5xl" />
          </div>
          <div>
            <h3 className=" text-lg ">
              <span className="font-bold text-3xl text-theme-color">
                95</span>%
            </h3>
            <p className="text-sm">successful orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
