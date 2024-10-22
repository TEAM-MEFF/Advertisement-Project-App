import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import { apiSignup } from "../Services/auth";

const SignUp = () => {
    const [selectedOption, setSelectedOption] = useState('')
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value)
    }

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => { // async and await goes with Try-Catch...
        event.preventDefault();
        try {
            setLoading(true);
            // preparing data to be sent to backend...
            const formData = new FormData(event.target) // getting data from the form
            const avatar = formData.get("avatar");
            const userName = formData.get("userName");
            const email = formData.get("email");
            const password = formData.get("password");
            // const confirmPass = formData.get("confirmPass");
            const phone = formData.get("phone");
            const role = formData.get("role");
            const businessName = formData.get("businessName");

            // checking if passwords match...
            // if (password !== confirmPass) {
            //     return;
            // }

            console.log("userName", userName);
            const payload = { businessName, email, userName, password, phone, role: "vendor" };

            const response = await apiSignup(payload)
            console.log(response.data);
            navigate("/");
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex justify-center items-center h-screen ">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full">
                <p className="text-2xl font-semibold text-[#0E345A] relative pl-10 mb-8">
                    SignUp (auth)
                    <span className="mt-[4px] absolute left-[4px] top-[5px] w-4 h-4 bg-[#0E345A] rounded-full"></span>
                    <span className=" mt-[5px] absolute left-0 top-0 w-6 h-6 animate-pulse bg-[#0E345A] rounded-full opacity-10"></span>
                </p>
                <div className="space-y-2">
                    <div>
                        <label name="avatar" className="w-full relative">
                        </label>
                        <input
                            required
                            type="file"
                            name="avatar"
                            placeholder="Enter your User Name..."
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-1"
                        />
                    </div>
                    <div>
                        <label name="userName" className="w-full relative">
                        </label>
                        <input
                            required
                            type="text"
                            name="userName"
                            placeholder="Enter your User Name..."
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-1"
                        />
                    </div>
                    <div>
                        <label name="email" className="w-full relative ">
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Enter your email..."
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-1"
                        />
                    </div>
                    <div>
                        <label name="password" className="w-full relative">
                        </label>
                        <input
                            required
                            type="password"
                            name="password"
                            placeholder="Enter a valid password..."
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mb-1"
                        />
                    </div>
                    {/* <label className="w-full relative">
                        <input
                            required
                            type="password"
                            name="confirmPass"
                            placeholder="Confirm password..."
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-1"
                        />
                    </label> */}
                    <div>
                        <label name="phone" className="w-full relative">
                        </label>
                        <input
                            required
                            type="number"
                            name="phone"
                            placeholder="Enter your number..."
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-1"
                        />
                    </div>
                    <div>
                        <label className="w-full relative">
                        </label>
                        <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-1"
                            id="dropdown"
                            value={selectedOption}
                            onChange={handleSelectChange}
                            placeholder="Role..."
                        >
                            <option value="">--Role--</option>
                            <option value="user">User</option>
                            <option value="vendor">Vendor</option>
                        </select>
                    </div>
                    <div>
                        <label className="w-full relative">
                        </label>
                        <input
                            required
                            type="text"
                            name="businessName"
                            placeholder="Enter Business Name..."
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-1"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#0E345A] text-white py-3 rounded-lg hover:bg-[#0e345ade] transition-colors my-5">
                    {loading ? "Loading..." : "Sign Up"}
                </button>
                <div>
                    <p className="p line mb-3 items-center">or SignUp With</p>
                    <div className="flex gap-5">
                        <button className="btn google">
                            <IonIcon name="logo-google" className="text-2xl " />
                            Google
                        </button>
                        <button className="btn apple">
                            <IonIcon name="logo-apple" className="text-2xl mb-1" />
                            Apple
                        </button>
                    </div>
                </div>
                <p className="text-center text-sm text-gray-600 mt-5">
                    Already have an account?{" "}
                    <Link
                        className="text-blue-600 font-semibold hover:underline"
                        to="/categoriesBar"
                    >
                        LogIn
                    </Link>
                </p>
            </form >
        </div >
    );
};

export default SignUp;
