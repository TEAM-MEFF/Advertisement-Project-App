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
						<h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-theme-color ">
							Login
						</h3>
						<p className="text-sm ">
							New Here?{" "}
							<Link
								className="text-theme-color hover:text-hoverBG font-semibold underline"
								to="/register"
							>
								Sign up
							</Link>
						</p>
					</div>
				</div>
				<div className="space-y-2">
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
							className="w-full px-2 py-2 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG"
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
							className="w-full px-2 py-2 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG"
						/>
					</div>
				</div>
				<div className="pt-3 pb-1">
					<button
						type="submit"
						className="w-full  ring ring-inputRing bg-theme-color hover:bg-hoverBG text-white px-2 py-2.5 rounded-lg hover:bg-[#0e345ade] transition-colors "
					>
						Login
					</button>
				</div>
				<div className="space-y-4">
					<div className="flex justify-around items-center">
						<hr className="bg-theme-color w-1/4" />
						<p className="items-center text-sm">Or Login using</p>
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

export default Login;
