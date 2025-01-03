import React, { useContext, useState } from "react";
import IonIcon from "@reacticons/ionicons";
import { ShopContext } from "../context/ShopContextProvider";
import { Heart } from "lucide-react";

const ApiGetProduct = ({
	id,
	productName,
	description,
	category,
	images,
	price,
	discountPercentage,
	discountedPrice,
	avatar,
	showGrid,
}) => {
	const { addToCart, cartItems } = useContext(ShopContext);
	// const [showGrid, setShowGrid] = useState(true); // state to toggle layout/view...

	const cartItemsAmount = cartItems;

	return (
		<div className="entireSpace flex flex-wrap justify-center w-full h-full">
			<div
				className={`${
					showGrid ? " item w-full h-full py-5 px-2 " : "w-full flex flex-col"
				} border border-theme-color border-opacity-20 hover:shadow-lg hover:scale-105 transition duration-500 ease-in-out relative`}
			>
				<div
					className={`${
						showGrid
							? "text-center  items-start space-y-1"
							: "flex gap-2 items-start "
					} `}
				>
					<div className={`${showGrid ? "relative" : "relative"}`}>
						<img
							className={`${
								showGrid
									? "w-[130px] h-[130px] sm:w-[160px] sm:h-[150px] md:w-[180px] md:h-[180px] mx-auto"
									: "w-[130px] h-[130px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[160px] p-2"
							}`}
							src={`https://savefiles.org/${images}?shareable_link=440`}
							alt="productImage"
						/>
						<span className="absolute top-0 right-2 p-2 bg-slate-100 text-red-600 rounded-full hover:cursor-pointer hover:bg-slate-200 shadow-md">
							<Heart size={16} />
						</span>
						<span className="absolute bottom-2 right-2 px-2 py-1 text-xs md:text-sm lg:text-base bg-yellow-200  text-yellow-700">
							{discountPercentage}%
						</span>
					</div>
					<div
						className={`${
							showGrid ? "flex flex-col space-y-1" : "p-2 space-y-3"
						} `}
					>
						<div className="space-y-1">
							<h3
								className={`${
									showGrid
										? "text-sm md:text-base text-theme-color font-semibold"
										: "text-sm md:text-base lg:text-lg text-theme-color font-semibold"
								} text-theme-color font-semibold`}
							>
								{productName}
							</h3>
							<p
								className={`${
									showGrid
										? "w-fit mx-auto p-1 text-gray-600 text-xs lg:text-sm"
										: "w-fit p-1 text-gray-600 text-xs lg:text-sm"
								}  border border-theme-color border-opacity-20`}
							>
								{category}
							</p>
						</div>
						<div className={`${showGrid ? "space-y-1 " : "space-y-1"}`}>
							<p
								className={`${
									showGrid
										? "text-sm md:text-base font-semibold pt-1"
										: "text-sm md:text-base lg:text-lg font-semibold pt-1"
								}`}
							>
								<sup className="text-slate-500 text-xs">GH₵</sup>
								{price}.00
							</p>
							<p
								className={`${
									showGrid
										? "text-xs lg:text-sm line-through text-gray-400"
										: "text-sm lg:text-base line-through text-gray-400"
								} `}
							>
								GH₵{discountedPrice}.00
							</p>
						</div>
					</div>
					<p>{avatar}</p>
					{/* <p>{description}</p> */}
					<div>
						<button
							className={`${
								showGrid
									? "absolute bottom-2 md:bottom-4 right-2 md:right-4 px-1 md:px-2 pb-1 bg-theme-color hover:bg-green-800 text-white rounded-md"
									: "absolute bottom-2 md:bottom-4 right-2 md:right-4 px-1 md:px-2 pb-1 bg-theme-color text-white rounded-md"
							} `}
							onClick={() => addToCart(id)}
						>
							{/* <span className="text-xs md:text-sm">Add to</span> */}
							<div className="flex justify-center items-center gap-1 p-1">
								<span className="text-xs md:text-sm">
									{" "}
									Add to Cart {cartItemsAmount > 0 && <> ({cartItems})</>}
								</span>
								<IonIcon name="add-circle-outline" className="" />
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApiGetProduct;
