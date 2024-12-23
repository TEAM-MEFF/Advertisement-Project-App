import VendorNav from "../../components/VendorNav";
import Sidebar from "../../components/Sidebar";
import Dashboard from "../dashboard/Dashboard";
import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div>
      <div>
        {/* <VendorNav /> */}
        <div className="flex fixed w-full z-[1] top-0 items-center mx-auto justify-end py-2 px-10 bg-blue-200 ">
          <div className="flex items-center gap-1 md:gap-3">
            <Link
              to="/sign-up"
              className=" flex gap-2 border-2 border-theme-color -full px-2 py-1 rounded-full text-center"
            >
              <span className=" lg:text-lg text-sm font-medium">
                My Account
              </span>
              <IonIcon
                name="person-outline"
                className=" text-2xl text-theme-color my-auto"
              />
            </Link>
            <Link to="/">
              <div>
                <div className="relative">
                  <IonIcon
                    name="notifications-outline"
                    className="text-xl md:text-3xl text-theme-color my-auto align-middle"
                  />
                  <span className="absolute top-[-3px] right-[-3px] w-2 h-2 bg-red-600 rounded-full"></span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/5">
          {/* <Sidebar /> */}
          <div className="flex flex-col items-start justify-start left-0 top-0 bg-blue-200 h-full fixed z-[1]">
            <div className="content-center items-center mx-auto my-3">
              <Link to="/">
                <span className="bg-theme-color text-lg px-3 py-2  text-white font-bold content-center text-center">
                  Di Me🛒
                </span>
                <span
                  href="#"
                  className=" px-2 py-1.5 text-lg text-theme-color content-center hover:bg-blue-700 hover:text-white border-theme-color border-2 text-center font-bold"
                >
                  DWA🛍️
                </span>
              </Link>
            </div>
            <div className="flex flex-col transition-all duration-1000 ease-in-out mt-1">
              <Link
                to="/vendordashboard"
                className="bg-theme-color text-white  px-5 py-3 sm:text-base md:text-xl current:bg-slate-300 hover:bg-blue-700 font-semibold items-center"
              >
                <IonIcon
                  name="bar-chart-outline"
                  className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 "
                />
                Dashboard
              </Link>
              <Link
                to="/vendordashboard/myproducts"
                className="hover:text-white text-black  px-5 sm:text-base md:text-xl py-3 current:bg-slate-300 hover:bg-blue-700 font-semibold  items-center"
              >
                <IonIcon
                  name="business-outline"
                  className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 "
                />
                My Store
              </Link>
              <Link
                to="/vendordashboard/postproduct"
                className="hover:text-white text-black  px-5 sm:text-base md:text-xl py-3 current:bg-slate-300 hover:bg-blue-700 font-semibold  items-center"
              >
                <IonIcon
                  name="add-circle-outline"
                  className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 "
                />
                Post a Product
              </Link>
              <Link
                to="/vendordashboard"
                className="hover:text-white text-black  px-5 sm:text-base md:text-xl py-3 current:bg-slate-300 hover:bg-blue-700 font-semibold  items-center"
              >
                <IonIcon
                  name="settings-outline"
                  className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 "
                />
                Settings
              </Link>
              <Link
                to="/vendordashboard"
                className="hover:text-white text-black  px-5 sm:text-base md:text-xl py-3 current:bg-slate-300 hover:bg-blue-700 font-semibold  items-center"
              >
                <IonIcon
                  name="log-out-outline"
                  className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 "
                />
                Logout
              </Link>
            </div>
            <div className="mx-auto space-y-4 mt-36 text-gray-600">
              <div className="text-center hover:text-black">
                <IonIcon
                  name="globe-outline"
                  className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 "
                />
                <span>@dimedwagh.com</span>
              </div>
              <div className="mx-auto">
                <div className="flex justify-around mx-auto">
                  <IonIcon
                    name="logo-facebook"
                    className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 hover:text-black"
                  />
                  <IonIcon
                    name="logo-twitter"
                    className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 hover:text-black"
                  />
                  <IonIcon
                    name="logo-instagram"
                    className="text-xl md:text-2xl  my-auto align-middle items-center mb-1 pr-2 hover:text-black"
                  />
                </div>
                <p className="text-center">@DiMeDwaGh</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='w-full'><Dashboard /></div> */}
      </div>
    </div>
  );
};

export default DashboardPage;
