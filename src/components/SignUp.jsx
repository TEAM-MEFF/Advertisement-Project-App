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
		<div className="w-full min-h-screen flex items-center justify-center py-10 px-4">
			<form
				onSubmit={handleSubmit}
				className="bg-highlight p-4 md:p-6 shadow-md w-full max-w-md space-y-5"
			>
				<div className="flex justify-between items-start">
					<div className="content-center items-center py-1 w-fit">
						<Link to="/">
							<span className="bg-theme-color text-sm md:text-base lg:text-lg px-2 md:px-3 py-1 md:py-2 text-white font-bold content-center text-center">
								Di Me🛒
							</span>
							<span
								href="#"
								className="px-1 md:px-2 py-0.5 md:py-1.5 text-sm md:text-base lg:text-lg text-theme-color content-center hover:bg-theme-color hover:text-white border-theme-color border-2 text-center font-bold"
							>
								DWA🛍️
							</span>
						</Link>
					</div>
					<div className="w-fit text-right">
						<h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-theme-color">
							Sign Up
						</h3>
						<p className="text-sm">
							Already have an account?{" "}
							<Link
								className="text-theme-color hover:text-hoverBG font-semibold underline"
								to="/login"
							>
								Login
							</Link>
						</p>
					</div>
				</div>
				<div className="space-y-2">
					<div>
						<label htmlFor="avatar" className="font-medium text-sm">
							Profile Picture
						</label>
						<input
							required
							type="file"
							name="avatar"
							id="avatar"
							placeholder="Upload your avatar"
							className="w-full px-3 py-1 md:py-1.5 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG"
						/>
					</div>
					<div>
						<label htmlFor="userName" className="font-medium text-sm">
							User Name
						</label>
						<input
							required
							type="text"
							name="userName"
							id="userName"
							placeholder="Enter your User Name"
							className="w-full px-3 py-1.5 md:py-2 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG "
						/>
					</div>
					<div>
						<label htmlFor="email" className="font-medium text-sm">
							Email
						</label>
						<input
							required
							type="email"
							name="email"
							id="email"
							placeholder="Enter your email"
							className="w-full px-3 py-1.5 md:py-2 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG "
						/>
					</div>
					<div>
						<label htmlFor="password" className="font-medium text-sm">
							Password
						</label>
						<input
							required
							type="password"
							name="password"
							id="password"
							placeholder="Enter your password"
							className="w-full px-3 py-1.5 md:py-2 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG "
						/>
					</div>
					<div>
						<label htmlFor="phone" className="font-medium text-sm">
							Contact
						</label>
						<input
							required
							type="number"
							name="phone"
							id="phone"
							placeholder="Enter your phone number"
							className="w-full px-3 py-1.5 md:py-2 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG "
						/>
					</div>
					<div>
						<label htmlFor="role" className="font-medium text-sm">
							Role
						</label>
						<select
							required
							className="w-full px-2 py-1.5 md:py-2 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG "
							value={selectedOption}
							onChange={handleSelectChange}
							name="role"
							id="role"
						>
							<option value="">--Role--</option>
							<option value="user">User</option>
							<option value="vendor">Vendor</option>
						</select>
					</div>
					<div className="">
						<label htmlFor="businessName" className="font-medium text-sm">
							Business Name
						</label>
						<input
							required
							type="text"
							name="businessName"
							id="businessName"
							placeholder="Enter Business Name"
							className="w-full px-3 py-1.5 md:py-2 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG "
						/>
					</div>
					<div className="flex text-sm gap-2 pt-1">
						<input
							required
							type="checkbox"
							name="policy"
							id="policy"
							placeholder="Enter Business Name"
							className="text-2xl w-4 outline-none"
						/>
						<label htmlFor="policy">
							You accept the{" "}
							<span className="text-theme-color font-semibold underline">
								privacy policy
							</span>{" "}
							and{" "}
							<span className="text-theme-color font-semibold underline">
								terms of use
							</span>
						</label>
					</div>
				</div>
				<div className="pt-3 pb-1">
					<button
						type="submit"
						className="w-full ring ring-inputRing bg-theme-color text-white px-2 py-2 md:py-3 rounded-lg hover:bg-hoverBG transition-colors "
					>
						{loading ? "Loading..." : "Sign Up"}
					</button>
				</div>
				<div className="space-y-4">
					<div className="flex justify-around items-center">
						<hr className="bg-theme-color w-1/4" />
						<p className="items-center text-sm">or Sign Up using</p>
						<hr className="bg-theme-color w-1/4" />
					</div>
					<div className="flex justify-center gap-5">
						<button className="px-3 pb-1 pt-2 border border-[#0E345A20] transition-colors duration-300 ease-in-out hover:text-hoverBG hover:border-hoverBG">
							<IonIcon name="logo-google" className="text-2xl" />
						</button>
						<button className="px-3 pb-1 pt-2 border border-[#0E345A20] transition-colors duration-300 ease-in-out hover:text-hoverBG hover:border-hoverBG">
							<IonIcon name="logo-apple" className="text-2xl" />
						</button>
						<button className="px-3 pb-1 pt-2 border border-[#0E345A20] transition-colors duration-300 ease-in-out hover:text-hoverBG hover:border-hoverBG">
							<IonIcon name="logo-facebook" className="text-2xl" />
						</button>
						<button className="px-3 pb-1 pt-2 border border-[#0E345A20] transition-colors duration-300 ease-in-out hover:text-hoverBG hover:border-hoverBG">
							<IonIcon name="logo-twitter" className="text-2xl" />
						</button>
					</div>
				</div>
			</form>
			<ToastContainer />
		</div>
	);
};

export default SignUp;
