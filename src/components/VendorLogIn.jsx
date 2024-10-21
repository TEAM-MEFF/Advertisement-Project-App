import React from 'react'
import { Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";

const VendorLogIn = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
    <form className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full">
        <p className="text-2xl font-semibold text-[#0E345A] relative pl-10 mb-8">
            Vendor LogIn
            <span className="mt-[4px] absolute left-[4px] top-[5px] w-4 h-4 bg-[#0E345A] rounded-full"></span>
            <span className=" mt-[5px] absolute left-0 top-0 w-6 h-6 animate-pulse bg-[#0E345A] rounded-full opacity-10"></span>
        </p>
        <label className="w-full relative ">
            <input
                required
                type="email"
                placeholder="Enter your email..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-3"
            />
        </label>
        <label className="w-full relative">
            <input
                required
                type="password"
                placeholder="Enter your password..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mb-3"
            />
        </label>

        <button
            type="submit"
            className="w-full bg-[#0E345A] text-white py-3 rounded-lg hover:bg-[#0e345ade] transition-colors mb-5"
        ><Link to="/categoriesBar">
               userLogin</Link>
        </button>
        <div>
            <p className="p line mb-3">Or Sign In With</p>
            <div className="flex-row">
                <button className="btn google"><IonIcon name="logo-google" className="text-2xl " />Google</button>
                <button className="btn apple"><IonIcon name="logo-apple" className="text-2xl mb-1" />Apple</button>
            </div>
        </div>
        <p className="text-center text-sm text-gray-600 mt-5">
            New Here?{" "}
            <Link className="text-blue-600 font-semibold hover:underline" to="/categoriesBar">
               vendorSignUp
            </Link>
        </p>

    </form>
</div>
  )
}

export default VendorLogIn