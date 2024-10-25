import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";

const VendorNav = () => {

    return (

        <div className="flex sticky top-0 items-center mx-auto justify-end py-2 px-10 bg-blue-200 ">

            <div className="flex items-center gap-1 md:gap-3">
                <Link
                    to="/sign-up"
                    className=" flex gap-2 border-2 border-theme-color rounded-full px-2 py-1 text-center"
                >
                    <span className=" lg:text-lg text-sm font-medium">My Account</span>
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
    );
};

export default VendorNav;
