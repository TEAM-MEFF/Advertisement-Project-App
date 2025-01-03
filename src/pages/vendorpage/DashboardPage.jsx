import Sidebar from "../../components/Sidebar";
import Dashboard from "../dashboard/Dashboard";
import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const DashboardPage = ({ totalAmount }) => {
	return (
		<div>
			<div>
				<div className="flex fixed w-full z-[1] top-0 items-center mx-auto justify-end py-2 px-10 bg-green-200 ">
					<div className="flex items-center gap-2 md:gap-3">
						<Link
							to="/register"
							className=" flex gap-0 md:gap-1 border-2 border-theme-color rounded-full px-1 md:px-2 py-1 text-center items-center"
						>
							<span className="text-xs sm:text-sm md:text-base lg:text-lg pl-1 font-semibold text-theme-color">
								My Account
							</span>
							<User className="text-theme-color h-4 md:h-5" />
						</Link>
						<Link className="relative" to="/">
							<div>
								<div className="relative">
									<IonIcon
										name="notifications-outline"
										className="text-lg md:text-xl text-theme-color my-auto align-middle"
									/>
									<span
										className={`${
											totalAmount > 0
												? "w-1.5 md:w-2 h-1.5 md:h-2 absolute top-0 -right-1 md:top-[-3px] md:right-[-6px] bg-red-400 rounded-full "
												: "w-1.5 md:w-2 h-1.5 md:h-2 absolute top-0 -right-1 md:top-[-3px] md:right-[-6px] bg-red-400 rounded-full"
										}`}
									>
										<span className="w-1.5 md:w-2 h-1.5 md:h-2 absolute top-0 bg-red-400 rounded-full animate-ping"></span>
									</span>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div className="flex">
				<div className="w-1/5">
					{/* <Sidebar /> */}
					<div className="flex flex-col items-start justify-start left-0 top-0 bg-green-200 h-full fixed z-[1]">
						<div className="content-center items-center">
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
						<div className="flex flex-col transition-all duration-1000 ease-in-out mt-1">
							<Link
								to="/vendordashboard"
								className="bg-theme-color text-white  px-5 py-3 sm:text-base md:text-xl current:bg-slate-300 hover:bg-green-700 font-semibold items-center"
							>
								<IonIcon
									name="bar-chart-outline"
									className="text-sm md:text-base lg:text-lg my-auto align-middle items-center mb-1 pr-2 "
								/>
								Dashboard
							</Link>
							<Link
								to="/vendordashboard/myproducts"
								className="hover:text-white text-black  px-5 sm:text-base md:text-xl py-3 current:bg-slate-300 hover:bg-green-700 font-semibold  items-center"
							>
								<IonIcon
									name="business-outline"
									className="text-sm md:text-base lg:text-lg my-auto align-middle items-center mb-1 pr-2 "
								/>
								My Store
							</Link>
							<Link
								to="/vendordashboard/postproduct"
								className="hover:text-white text-black  px-5 sm:text-base md:text-xl py-3 current:bg-slate-300 hover:bg-green-700 font-semibold  items-center"
							>
								<IonIcon
									name="add-circle-outline"
									className="text-sm md:text-base lg:text-lg my-auto align-middle items-center mb-1 pr-2 "
								/>
								Post a Product
							</Link>
							<Link
								to="/vendordashboard"
								className="hover:text-white text-black  px-5 sm:text-base md:text-xl py-3 current:bg-slate-300 hover:bg-green-700 font-semibold  items-center"
							>
								<IonIcon
									name="settings-outline"
									className="text-sm md:text-base lg:text-lg my-auto align-middle items-center mb-1 pr-2 "
								/>
								Settings
							</Link>
							<Link
								to="/vendordashboard"
								className="hover:text-white text-black  px-5 sm:text-base md:text-xl py-3 current:bg-slate-300 hover:bg-green-700 font-semibold  items-center"
							>
								<IonIcon
									name="log-out-outline"
									className="text-sm md:text-base lg:text-lg my-auto align-middle items-center mb-1 pr-2 "
								/>
								Logout
							</Link>
						</div>
						<div className="mx-auto space-y-4 mt-36 text-gray-600">
							<div className="text-center hover:text-black">
								<IonIcon
									name="globe-outline"
									className="text-sm md:text-base lg:text-lg my-auto align-middle items-center mb-1 pr-2 "
								/>
								<span>@dimedwagh.com</span>
							</div>
							<div className="mx-auto">
								<div className="flex justify-around mx-auto">
									<IonIcon
										name="logo-facebook"
										className="text-sm md:text-base lg:text-lg my-auto align-middle items-center mb-1 pr-2 hover:text-black"
									/>
									<IonIcon
										name="logo-twitter"
										className="text-sm md:text-base lg:text-lg my-auto align-middle items-center mb-1 pr-2 hover:text-black"
									/>
									<IonIcon
										name="logo-instagram"
										className="text-sm md:text-base lg:text-lg my-auto align-middle items-center mb-1 pr-2 hover:text-black"
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
