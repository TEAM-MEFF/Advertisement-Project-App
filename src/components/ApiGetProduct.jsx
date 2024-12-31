import React, { useContext } from "react";
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
}) => {
	const { addToCart, cartItems } = useContext(ShopContext);
	const cartItemsAmount = cartItems;

	return (
		<div className="entireSpace flex flex-wrap justify-center">
			<div className="item w-[178px] h-[305px] sm:w-[200px] sm:h-[325px] md:w-[280px] md:h-[360px] lg:w-[260px] lg:h-[375px] border m-3 py-5 px-2 hover:shadow-lg hover:scale-105 transition duration-500 ease-in-out relative">
				<div className="hmm text-center items-center space-y-1">
					<div className="relative">
						<img
							className="w-[130px] sm:w-[160px] h-[130px] sm:h-[150px] md:w-[180px] md:h-[180px] mx-auto"
							src={`https://savefiles.org/${images}?shareable_link=440`}
							alt="productImage"
						/>
						<p className="absolute bottom-2 right-2 px-2 py-1 text-sm md:text-base bg-yellow-200  text-yellow-700">
							{discountPercentage}%
						</p>
					</div>
					<span className="absolute top-2 right-2 p-2 bg-slate-200 text-red-600 rounded-full hover:cursor-pointer hover:bg-slate-300 shadow-md">
						<Heart size={16} />
					</span>
					<h3 className="text-base lg:text-lg text-theme-color text-nowrap font-semibold">
						{productName}
					</h3>
					<p className="border w-fit mx-auto p-1 text-gray-600 text-xs lg:text-sm">
						{category}
					</p>
					<p className="text-base lg:text-lg font-semibold pt-1">
						<sup className="text-slate-500 text-xs md:text-sm">GH₵</sup>
						{price}.00
					</p>
					<p className="text-xs lg:text-sm line-through text-gray-400">
						GH₵{discountedPrice}.00
					</p>

					<p>{avatar}</p>
					{/* <p>{description}</p> */}
					<div>
						<button
							className="absolute bottom-2 right-2 px-1 md:px-2 pb-1 bg-theme-color text-white rounded-md"
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
