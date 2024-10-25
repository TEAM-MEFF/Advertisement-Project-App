import React from "react";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start justify-start left-0 top-0 bg-blue-200 h-full fixed">
      <div className="content-center items-center mx-auto my-3">
        <Link to="/">
          <span className="bg-theme-color text-lg px-3 py-2  text-white font-bold content-center text-center">
            Di Me🛒
          </span>
          <span
            href="#"
            className=" px-2 py-1.5 text-lg text-theme-color content-center hover:bg-theme-color hover:text-white border-theme-color border-2 text-center font-bold"
          >
            DWA🛍️
          </span>
        </Link>
      </div>
      <div className='flex flex-col transition-all duration-1000 ease-in-out'>
        <Link to="/vendor" className="hover:text-white text-black  px-5 py-3 sm:text-base md:text-xl current:bg-slate-300 hover:bg-theme-color font-semibold rounded items-center">
          <IonIcon name="bar-chart-outline" className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 "
          />Dashboard
        </Link>
        <Link to="/vendor" className="hover:text-white text-black  px-5 sm:text-base md:text-xl py-3 current:bg-slate-300 hover:bg-theme-color font-semibold rounded items-center">
          <IonIcon name="business-outline" className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 "
          />My Store
        </Link>
        <Link to="/vendor" className="hover:text-white text-black  px-5 sm:text-base md:text-xl py-3 current:bg-slate-300 hover:bg-theme-color font-semibold rounded items-center">
          <IonIcon name="add-circle-outline" className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 "
          />Post a Product
        </Link>
        <Link to="/vendor" className="hover:text-white text-black  px-5 sm:text-base md:text-xl py-3 current:bg-slate-300 hover:bg-theme-color font-semibold rounded items-center">
          <IonIcon name="settings-outline" className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 "
          />Settings
        </Link>
        <Link to="/vendor" className="hover:text-white text-black  px-5 sm:text-base md:text-xl py-3 current:bg-slate-300 hover:bg-theme-color font-semibold rounded items-center">
          <IonIcon name="log-out-outline" className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 "
          />Logout
        </Link>
      </div>
      <div className="mx-auto space-y-4 mt-36 text-gray-600">
        <div className="text-center hover:text-black">
          <IonIcon name="globe-outline" className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 "
          />
          <span>@dimedwagh.com</span>
        </div>
        <div className="mx-auto">
          <div className="flex justify-around mx-auto">
            <IonIcon name="logo-facebook" className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 hover:text-black"
            />
            <IonIcon name="logo-twitter" className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 hover:text-black"
            />
            <IonIcon name="logo-instagram" className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 hover:text-black"
            />
          </div>
          <p className="text-center">@DiMeDwaGh</p>
        </div>
      </div>
    </div >
  );
};

export default Sidebar;
