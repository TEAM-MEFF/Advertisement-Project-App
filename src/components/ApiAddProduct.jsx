import React, { useState } from "react";
import { apiAddProducts } from "../Services/products";

const ApiAddProduct = () => {
	// Predefined categories from the documentation
	const categories = [
		"furniture",
		"clothing",
		"appliances",
		"groceries",
		"electronics",
	];

	const [formData, setFormData] = useState({
		productName: "",
		description: "",
		category: "", // Will be one of the predefined categories
		price: "",
		discountPrice: "",
		discountPercentage: "",
	});
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		if (name === "discountPrice" && value) {
			setFormData((prev) => ({
				...prev,
				[name]: value,
				discountPercentage: "",
			}));
		} else if (name === "discountPercentage" && value) {
			setFormData((prev) => ({
				...prev,
				[name]: value,
				discountPrice: "",
			}));
		} else {
			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));
		}
	};

	const handleImageChange = (e) => {
		const files = Array.from(e.target.files);
		setImages(files);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setMessage("");
		setError("");

		try {
			// Create a base FormData object with the text fields
			const baseFormData = {
				productName: formData.productName,
				description: formData.description || "",
				category: formData.category,
				price: formData.price,
				...(formData.discountPrice && {
					discountPrice: formData.discountPrice,
				}),
				...(formData.discountPercentage && {
					discountPercentage: formData.discountPercentage,
				}),
			};

			// Handle images one at a time
			for (let i = 0; i < images.length; i++) {
				const productData = new FormData();

				// Add all text fields
				Object.keys(baseFormData).forEach((key) => {
					productData.append(key, baseFormData[key]);
				});

				// Add current image
				productData.append("images", images[i]);

				// Make individual API call for each image
				await apiAddProducts(productData);
			}

			setMessage("Product added successfully!");

			// Reset form
			setFormData({
				productName: "",
				description: "",
				category: "",
				price: "",
				discountPrice: "",
				discountPercentage: "",
			});
			setImages([]);
			document.getElementById("imageInput").value = "";
		} catch (error) {
			console.error("Error details:", error);
			setError(
				error.response?.data?.message ||
					"Error adding product. Please check the console for details."
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="max-w-xl items-start justify-center px-4 py-16 text-theme-color content-center">
			<div className="bg-highlight p-4 md:p-6 shadow-md w-full max-w-md ">
				<div className="space-y-5">
					<div className="text-center">
						<h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
							Add New Product
						</h2>
						<p className="text-sm text-gray-400">
							Fill in the details to list your product
						</p>
					</div>
					{message && (
						<div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
							<p className="text-green-600 text-sm">{message}</p>
						</div>
					)}
					{error && (
						<div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
							<p className="text-red-600 text-sm">{error}</p>
						</div>
					)}

					<form
						onSubmit={handleSubmit}
						className="space-y-2 md:space-y-3 lg:space-y-4"
					>
						<div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4">
							<div className="sm:col-span-9">
								<label htmlFor="productName" className="font-medium text-sm">
									Product Name*
								</label>
								<input
									type="text"
									name="productName"
									id="productName"
									value={formData.productName}
									onChange={handleInputChange}
									required
									className="w-full px-3 py-1 md:py-1.5 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG"
								/>
							</div>
							<div className="sm:col-span-3">
								<label htmlFor="price" className="font-medium text-sm">
									Price*
								</label>
								<input
									type="number"
									name="price"
									id="price"
									value={formData.price}
									onChange={handleInputChange}
									content="$"
									required
									pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
									className="w-full px-3 py-1 md:py-1.5 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG"
								/>
							</div>
						</div>
						<div className="w-full">
							<label htmlFor="description" className="font-medium text-sm">
								Description
							</label>
							<textarea
								name="description"
								id="description"
								value={formData.description}
								onChange={handleInputChange}
								className="w-full px-3 py-1 md:py-1.5 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG"
							/>
						</div>
						<div className="text-nowrap">
							<label htmlFor="imageInput" className="font-medium text-sm">
								Images*
							</label>
							<div className="flex justify-center py-3 border-2 border-inputRing border-dashed rounded-md">
								<div className="space-y-1 text-center">
									<svg
										className="mx-auto h-6 w-12 text-theme-color"
										stroke="currentColor"
										fill="none"
										viewBox="0 0 48 48"
										aria-hidden="true"
									>
										<path
											d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<div className="flex text-sm">
										<label
											htmlFor="imageInput"
											className="relative cursor-pointer text-theme-color hover:text-hoverBG font-semibold underline focus-within:outline-none"
										>
											<span>Upload files</span>
											<input
												id="imageInput"
												type="file"
												multiple
												accept="image/*"
												required
												onChange={handleImageChange}
												className="sr-only"
											/>
										</label>
										<p className="pl-1">or drag and drop</p>
									</div>
									<p className="text-xs text-gray-400">
										PNG, JPG, GIF up to 10MB
									</p>
								</div>
							</div>
						</div>
						<div>
							<label htmlFor="category" className="font-medium text-sm">
								Category*
							</label>
							<select
								name="category"
								id="category"
								value={formData.category}
								onChange={handleInputChange}
								required
								className="w-full px-2 py-1.5 md:py-1.5 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG"
							>
								<option value="" disabled>
									Select a category
								</option>
								{categories.map((category) => (
									<option key={category} value={category}>
										{category.charAt(0).toUpperCase() + category.slice(1)}
									</option>
								))}
							</select>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
							<div>
								<label htmlFor="discountPrice" className="font-medium text-sm">
									Discount Price
								</label>
								<input
									type="number"
									name="discountPrice"
									id="discountPrice"
									value={formData.discountPrice}
									onChange={handleInputChange}
									disabled={formData.discountPercentage !== ""}
									className="w-full px-3 py-1.5 md:py-2 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG  disabled:bg-gray-100 disabled:cursor-not-allowed"
								/>
							</div>

							<div>
								<label
									htmlFor="discountPercentage"
									className="font-medium text-sm"
								>
									Discount Percentage
								</label>
								<input
									type="number"
									name="discountPercentage"
									id="discountPercentage"
									value={formData.discountPercentage}
									onChange={handleInputChange}
									disabled={formData.discountPrice !== ""}
									className="w-full px-3 py-1.5 md:py-2 bg-inputBG rounded-md focus:outline-none ring ring-inputRing focus:ring-2  focus:ring-hoverBG  disabled:bg-gray-100 disabled:cursor-not-allowed"
								/>
							</div>
						</div>
						<div className="py-2 md:py-3 lg:py-4">
							<button
								type="submit"
								disabled={loading}
								className={`w-full ring ring-inputRing bg-theme-color text-white px-2 py-2 md:py-3 rounded-lg hover:bg-hoverBG transition-colors 
                    ${loading ? "cursor-not-allowed" : ""}`}
							>
								{loading ? "Adding Product..." : "Add Product"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ApiAddProduct;
