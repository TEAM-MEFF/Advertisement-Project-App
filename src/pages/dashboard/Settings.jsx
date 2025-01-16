import React, { useState } from "react";

const Settings = () => {
	const [formData, setFormData] = useState({
		name: "John Doe",
		email: "johndoe@example.com",
		password: "",
		notifications: true,
		theme: "light",
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Simulate save logic
		alert("Settings Saved Successfully!");
	};

	return (
		<div className="max-w-xl items-start justify-center px-4 py-16 text-theme-color content-center">
			<form
				onSubmit={handleSubmit}
				className="bg-highlight p-4 md:p-6 shadow-md w-full space-y-0"
			>
				<div className="text-center">
					<h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
						Settings
					</h2>
					<p className="text-sm text-gray-400">
						Manage your account details at ease...
					</p>
				</div>
				<div className="space-y-2 pb-5">
					<h2 className="text-base md:text-lg lg:text-xl font-semibold">
						Profile
					</h2>
					<div>
						<label htmlFor="name" className="block text-sm font-medium">
							Full Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							value={formData.name}
							onChange={handleChange}
							className="w-full px-3 py-1 md:py-1.5 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full px-3 py-1 md:py-1.5 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG"
						/>
					</div>
				</div>
				<div className="space-y-2 pb-5">
					<h2 className="text-base md:text-lg lg:text-xl font-semibold">
						Security
					</h2>
					<div>
						<label htmlFor="cPassword" className="block text-sm font-medium">
							Current Password
						</label>
						<input
							type="password"
							name="password"
							id="cPassword"
							value={formData.password}
							onChange={handleChange}
							className="w-full px-3 py-1 md:py-1.5 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG"
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium">
							New Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							value={formData.password}
							onChange={handleChange}
							className="w-full px-3 py-1 md:py-1.5 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG"
						/>
					</div>
				</div>
				<div className="space-y-2">
					<h2 className="text-base md:text-lg lg:text-xl font-semibold">
						Preferences
					</h2>
					<div className="flex items-center">
						<input
							type="checkbox"
							name="notifications"
							id="notifications"
							checked={formData.notifications}
							onChange={handleChange}
							className="h-4 w-4"
						/>
						<label htmlFor="notifications" className="ml-2 text-sm">
							Enable Email Notifications
						</label>
					</div>

					<div>
						<label htmlFor="theme" className="block text-sm font-medium">
							Theme
						</label>
						<select
							name="theme"
							id="theme"
							value={formData.theme}
							onChange={handleChange}
							className="w-full px-3 py-1 md:py-1.5 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG"
						>
							<option value="light">Light</option>
							<option value="dark">Dark</option>
						</select>
					</div>
				</div>
				<div className="pt-4 md:pt-7 ">
					<button
						type="submit"
						className="w-full ring ring-inputRing bg-theme-color text-white px-2 py-2 md:py-3 rounded-lg hover:bg-hoverBG transition-colors"
					>
						Save Changes
					</button>
				</div>
			</form>
		</div>
	);
};

export default Settings;
