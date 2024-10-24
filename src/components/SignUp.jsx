import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import { apiSignup } from "../Services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);

      // Prepare form data
      const formData = new FormData(event.target);
      const avatar = formData.get("avatar");
      const userName = formData.get("userName");
      const email = formData.get("email");
      const password = formData.get("password");
      const phone = formData.get("phone");
      const role = formData.get("role");
      const businessName = formData.get("businessName");

      // Payload for the API
      const payload = {
        businessName,
        email,
        userName,
        password,
        phone,
        role: "vendor",
      };

      // Call the API to sign up
      const response = await apiSignup(payload);
      console.log(response.data);

      // If sign-up is successful, show success toast and navigate to login
      toast.success("You've signed up successfully!");

      setTimeout(() => {
        navigate("/login"); // Navigate to login page after the toast
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Sign-up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin flex justify-center items-center h-screen bg-contain">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full"
      >
        <p className="text-2xl font-semibold text-[#0E345A] relative pl-10 mb-8">
          SignUp
          <span className="mt-[4px] absolute left-[4px] top-[5px] w-4 h-4 bg-[#0E345A] rounded-full"></span>
          <span className="mt-[5px] absolute left-0 top-0 w-6 h-6 animate-pulse bg-[#0E345A] rounded-full opacity-10"></span>
        </p>
        <div className="space-y-2">
          <div>
            <input
              required
              type="file"
              name="avatar"
              placeholder="Upload your avatar"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-1"
            />
          </div>
          <div>
            <input
              required
              type="text"
              name="userName"
              placeholder="Enter your User Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-1"
            />
          </div>
          <div>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-1"
            />
          </div>
          <div>
            <input
              required
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mb-1"
            />
          </div>
          <div>
            <input
              required
              type="number"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-1"
            />
          </div>
          <div>
            <select
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-1"
              value={selectedOption}
              onChange={handleSelectChange}
              name="role"
            >
              <option value="">--Role--</option>
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>
          <div>
            <input
              required
              type="text"
              name="businessName"
              placeholder="Enter Business Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-1"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#0E345A] text-white py-3 rounded-lg hover:bg-[#0e345ade] transition-colors my-5"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <div>
          <p className="p line mb-3 items-center">or SignUp With</p>
          <div className="flex gap-5">
            <button className="btn google">
              <IonIcon name="logo-google" className="text-2xl" />
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
            to="/login"
          >
            LogIn
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
