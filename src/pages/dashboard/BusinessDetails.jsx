import IonIcon from "@reacticons/ionicons";
import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";

const BusinessDetails = () => {
  return (
    <div className="mt-14">
        <div className="bg-slate-200  p-3 ">
      <div className="flex p-5 border rounded-lg bg-white mb-3">
        <div>
          <IonIcon name="person-outline" className=" text-4xl  m-5 " />
        </div>
        <div>
          <span className=" flex text-lg">
            {" "}
            3<h3 className="font-bold">/5</h3>
          </span>

          <p>Total</p>
          <p>Categories</p>
        </div>
      </div>
      <div className="flex p-5 border rounded-lg bg-white mb-3">
        <div>
        <GiTakeMyMoney className=" text-5xl  m-5 "/>
        </div>
        <div>
          <span className=" flex text-lg">
            {" "}
            200<h3 className="font-bold">/300</h3>
          </span>

          <p>Number of</p>
          <p>Product Sold</p>
        </div>
      </div>
      <div className="flex p-5 border rounded-lg bg-white">
        <div>
        <CiDeliveryTruck  className=" text-5xl  m-5 "/>
        </div>
        <div>
          <span className=" flex text-lg">
            {" "}
            200<h3 className="font-bold">/250</h3>
          </span>

          <p>Weekly</p>
          <p>Delivery</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BusinessDetails;
