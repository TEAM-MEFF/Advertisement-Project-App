import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";

const MainSidebar = () => {
	const [activeItem, setActiveItem] = useState("dashboard");

	const navItems = [
		{
			id: "dashboard",
			name: "Dashboard",
			icon: "bar-chart-outline",
			path: "/dashboard",
		},
		{
			id: "store",
			name: "My Store",
			icon: "business-outline",
			path: "/dashboard/store",
		},
		{
			id: "post",
			name: "Post Product",
			icon: "add-circle-outline",
			path: "/dashboard/post",
		},
		{
			id: "settings",
			name: "Settings",
			icon: "settings-outline",
			path: "/dashboard/settings",
		},
		{
			id: "logout",
			name: "Logout",
			icon: "log-out-outline",
			path: "/",
		},
	];

	return (
		<div className="text-theme-color text-nowrap sm:min-w-40 md:min-w-48 sticky top-0 left-0">
			<div className="flex flex-col justify-between min-h-screen pt-12 pb-4 items-start bg-highlight">
				<div className="flex flex-col w-full">
					{navItems.map((item) => (
						<Link
							key={item.id}
							to={item.path}
							onClick={() => setActiveItem(item.id)}
							className={`flex items-center px-6 sm:px-8 md:px-10 py-3 text-sm md:text-base lg:text-lg font-medium current:bg-red-300 hover:bg-hoverBG  w-full mx-auto ${
								activeItem === item.id
									? "bg-theme-color text-white"
									: "hover:text-white"
							}`}
						>
							<IonIcon
								name={item.icon}
								className="text-sm md:text-base lg:text-lg my-auto align-middle items-center mb-1 pr-2 "
							/>
							<span>{item.name}</span>
						</Link>
					))}
				</div>
				<div className="mx-auto space-y-1 sm:space-y-2 md:space-y-3 text-gray-500 border-t border-t-gray-400 pt-2 w-full px-3 ">
					<div className="hover:text-black hover:cursor-pointer font-medium">
						<IonIcon
							name="globe-outline"
							className="text-sm md:text-base lg:text-lg my-auto align-middle items-center pr-2"
						/>
						<span className="text-xs md:text-sm lg:text-base">
							@dimedwagh.com
						</span>
					</div>
					<div className="hover:text-black hover:cursor-pointer font-medium">
						<IonIcon
							name="logo-facebook"
							className="text-sm md:text-base lg:text-lg my-auto align-middle items-center pr-2"
						/>
						<span className="text-xs md:text-sm lg:text-base">@DiMeDwaGh</span>
					</div>
					<div className="hover:text-black hover:cursor-pointer font-medium">
						<IonIcon
							name="logo-twitter"
							className="text-sm md:text-base lg:text-lg my-auto align-middle items-center pr-2"
						/>
						<span className="text-xs md:text-sm lg:text-base">@DiMeDwaGh</span>
					</div>
					<div className="hover:text-black hover:cursor-pointer font-medium">
						<IonIcon
							name="logo-instagram"
							className="text-sm md:text-base lg:text-lg my-auto align-middle items-center pr-2"
						/>
						<span className="text-xs md:text-sm lg:text-base">@DiMeDwaGh</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainSidebar;
