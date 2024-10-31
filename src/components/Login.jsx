import React from "react";
import { Link, useNavigate } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";
import { apiLogin, apiProfile } from "../Services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await apiLogin({ email, password });
      console.log(response.data);

      // Show success toast after successful login
      toast.success("You've logged in successfully!");

      // Navigate to the dashboard after showing the toast for 2 seconds
      setTimeout(() => {
        navigate("/vendordashboard");
      }, 2000); // Wait 2 seconds before navigation

      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
        // const profileResponse = await apiProfile();
        // console.log(profileResponse.data);
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="signin flex justify-center items-center h-screen bg-opacity-25">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full"
      >
        <p className="text-2xl font-semibold text-[#0E345A] relative pl-10 mb-8">
          LogIn
          <span className="mt-[4px] absolute left-[4px] top-[5px] w-4 h-4 bg-[#0E345A] rounded-full"></span>
          <span className="mt-[5px] absolute left-0 top-0 w-6 h-6 animate-pulse bg-[#0E345A] rounded-full opacity-10"></span>
        </p>
        <div>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter your email..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-3"
          />
        </div>
        <div>
          <input
            required
            type="password"
            name="password"
            placeholder="Enter your password..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mb-3"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#0E345A] text-white py-3 rounded-lg hover:bg-[#0e345ade] transition-colors mb-5"
        >
          Login
        </button>
        <div>
          <p className="p line mb-3">Or LogIn With</p>
          <div className="flex gap-5">
            <button className="btn google w-1/2">
              <IonIcon name="logo-google" className="text-2xl" />
              Google
            </button>
            <button className="btn apple w-1/2">
              <IonIcon name="logo-apple" className="text-2xl mb-1" />
              Apple
            </button>
          </div>
        </div>
        <p className="text-center text-sm text-gray-600 mt-5">
          New Here?{" "}
          <Link
            className="text-blue-600 font-semibold hover:underline"
            to="/sign-up"
          >
            SignUp
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
