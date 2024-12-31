import React, { useContext, useState } from "react";
import IonIcon from "@reacticons/ionicons";
import PRODUCTS from "../constants";
import { ShopContext } from "../context/ShopContextProvider";
import { Heart } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure the CSS is imported...

const ProductFetch = () => {
	const { addToCart, cartItems } = useContext(ShopContext);
	const [gridView, setGridView] = useState(true); // state to toggle layout/view...

	const handleAddToCart = (productId) => {
		addToCart(productId);
		toast.success("Item added to cart!"); // Show success toast when item is added to cart
	};

	return (
		<div>
			<div className="flex items-center justify-between p-10">
				<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-theme-color font-bold uppercase">
					Top Selling Items
				</h2>
				<div className="flex md:gap-4 gap-1 items-center">
					<IonIcon
						name="list-outline"
						onClick={() => setGridView(false)}
						className={`text-2xl md:text-4xl cursor-pointer ${
							!gridView ? "text-theme-color" : "text-black"
						}`}
					/>
					<IonIcon
						name="grid-outline"
						onClick={() => setGridView(true)}
						className={`text-xl md:text-3xl cursor-pointer ${
							gridView ? "text-theme-color" : "text-black"
						}`}
					/>
				</div>
			</div>
			<div
				className={`entireSpace ${
					gridView
						? "flex flex-wrap mx-auto"
						: "mx-10 flex flex-wrap justify-center"
				}`}
			>
				{PRODUCTS.map((product, index) => {
					return (
						<div
							className={`${
								gridView
									? "item w-[178px] h-[305px] sm:w-[200px] sm:h-[325px] md:w-[280px] md:h-[360px] lg:w-[260px] lg:h-[375px] border m-3 py-5 px-2 hover:shadow-lg hover:scale-105 transition duration-500 ease-in-out relative"
									: "w-full flex justify-around"
							} hover:shadow-lg hover:scale-[1.02] transition ease-in-out border-[0.1px] m-3 p-5 relative`}
							key={index} // Moved the key here
						>
							<div
								className={`${
									gridView
										? "text-center items-start space-y-1"
										: "flex gap-10 items-center"
								} `}
							>
								<div className="relative">
									<img
										src={product.images[0]}
										alt="product-image"
										className={`${
											gridView
												? "w-[130px] sm:w-[160px] h-[130px] sm:h-[150px] md:w-[180px] md:h-[180px] mx-auto"
												: "w-[130px] sm:w-[160px] h-[130px] sm:h-[150px] md:w-[180px] md:h-[180px] mx-auto"
										}`}
									/>
									<span className="absolute top-2 right-2 p-2 bg-slate-200 text-red-600 rounded-full hover:cursor-pointer hover:bg-slate-300 shadow-md">
										<Heart size={16} />
									</span>
									<span className="absolute bottom-2 right-2 px-2 py-1 text-sm md:text-base bg-yellow-200  text-yellow-700">
										-{product.discount_percentage}%
									</span>
								</div>
								<div
									className={`${
										gridView
											? "flex flex-col"
											: "flex justify-around w-[700px] gap-5"
									} space-y-1`}
								>
									<div className="space-y-1">
										<p
											className={`${
												gridView
													? "text-base lg:text-lg text-theme-color text-nowrap font-semibold"
													: "text-base lg:text-lg text-theme-color text-nowrap font-semibold"
											} text-theme-color font-semibold`}
										>
											{product.title}
										</p>
										<p
											className={`${
												gridView
													? "border w-fit mx-auto p-1 text-gray-600 text-xs lg:text-sm"
													: "border w-fit mx-auto p-1 text-gray-600 text-xs lg:text-sm"
											} border-[0.1px] w-fit py-1 px-2 text-gray-600 `}
										>
											{product.category}
										</p>
									</div>
									<div className="space-y-1 ">
										<p
											className={`${
												gridView
													? "text-base lg:text-lg font-semibold pt-1"
													: "text-base lg:text-lg font-semibold pt-1"
											}`}
										>
											<sup className="text-slate-500 text-xs md:text-sm">
												GH₵
											</sup>
											{product.current_price}.00
										</p>
										<p
											className={`${
												gridView
													? "text-xs lg:text-sm line-through text-gray-400 "
													: "text-xs lg:text-sm line-through text-gray-400"
											} `}
										>
											GH₵{product.previous_price}.00
										</p>
									</div>
								</div>
							</div>
							<button
								className={`${
									gridView
										? "absolute bottom-2 right-2 px-1 md:px-2 pb-1 bg-theme-color text-white rounded-md"
										: "absolute bottom-2 right-2 px-1 md:px-2 pb-1 bg-theme-color text-white rounded-md"
								} `}
								onClick={() => handleAddToCart(product.id)} // Trigger toast on click
							>
								<div className="flex justify-center items-center gap-1 p-1">
									<span className="text-xs md:text-sm">
										{" "}
										Add to Cart {cartItems > 0 && <> ({cartItems})</>}
									</span>
									<IonIcon name="add-circle-outline" className="" />
								</div>
								{/* <span className={`${gridView ? "text-sm" : "text-xl"}`}>
									Add to
								</span>
								<div className="flex justify-center items-center gap-1">
									<span className={`${gridView ? "text-sm" : "text-xl"}`}>
										Cart {cartItems > 0 && <> ({cartItems})</>}
									</span>
								</div> */}
							</button>
						</div>
					);
				})}
			</div>
			{/* Make sure the ToastContainer is included somewhere in the app */}
			<ToastContainer />
		</div>
	);
};

export default ProductFetch;
