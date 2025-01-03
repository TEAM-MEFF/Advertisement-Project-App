import { useContext, useState } from "react";
import IonIcon from "@reacticons/ionicons";
import PRODUCTS from "../constants";
import { ShopContext } from "../context/ShopContextProvider";
import { Heart } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure the CSS is imported...

const ProductFetch = () => {
	const { addToCart, cartItems } = useContext(ShopContext);
	const [gridView, setGridView] = useState(false); // state to toggle layout/view...

	const handleAddToCart = (productId) => {
		addToCart(productId);
		toast.success("Item added to cart!"); // Show success toast when item is added to cart
	};

	return (
		<div className="px-3 sm:px-5 md:px-10 max-w-7xl mx-auto my-10">
			<div className="flex justify-between pt-8 pb-4 px-3">
				<h2 className="text-xl md:text-2xl lg:text-3xl text-theme-color font-bold uppercase">
					Top Selling Items
				</h2>
				<div className="flex md:gap-4 gap-1 items-center">
					<IonIcon
						name="list-outline"
						onClick={() => setGridView(false)}
						className={`text-2xl md:text-4xl cursor-pointer ${
							!gridView ? "text-theme-color" : "text-[#CDE500]"
						}`}
					/>
					<IonIcon
						name="grid-outline"
						onClick={() => setGridView(true)}
						className={`text-xl md:text-3xl cursor-pointer ${
							gridView ? "text-theme-color" : "text-[#CDE500]"
						}`}
					/>
				</div>
			</div>
			<div
				className={`entireSpace ${
					gridView
						? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center"
						: "flex flex-col md:grid md:grid-cols-2"
				} gap-4`}
			>
				{PRODUCTS.map((product, index) => {
					return (
						<section
							key={index}
							className="entireSpace flex flex-wrap justify-center w-full h-full"
						>
							<div
								className={`${
									gridView
										? "item w-full h-full py-5 px-2 "
										: "w-full flex flex-col"
								} border border-theme-color border-opacity-20 hover:shadow-lg hover:scale-105 transition duration-500 ease-in-out relative`}
							>
								<div
									className={`${
										gridView
											? "text-center items-start space-y-1"
											: "flex gap-2 items-start"
									} `}
								>
									<div className={`${gridView ? "relative" : "relative"}`}>
										<img
											src={product.images[0]}
											alt="product-image"
											className={`${
												gridView
													? "w-[130px] h-[130px] sm:w-[160px] sm:h-[150px] md:w-[180px] md:h-[180px] mx-auto"
													: "w-[130px] h-[130px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[160px] p-2"
											}`}
										/>
										<span className="absolute top-0 right-2 p-2 bg-slate-100 text-red-600 rounded-full hover:cursor-pointer hover:bg-slate-200 shadow-md">
											<Heart size={16} />
										</span>
										<span className="absolute bottom-2 right-2 px-2 py-1 text-xs md:text-sm lg:text-base bg-yellow-200  text-yellow-700">
											-{product.discount_percentage}%
										</span>
									</div>
									<div
										className={`${
											gridView ? "flex flex-col space-y-1" : "p-2 space-y-3"
										} `}
									>
										<div className="space-y-1">
											<p
												className={`${
													gridView
														? "text-sm md:text-base text-theme-color font-semibold"
														: "text-sm md:text-base lg:text-lg text-theme-color font-semibold"
												} text-theme-color font-semibold`}
											>
												{product.title}
											</p>
											<p
												className={`${
													gridView
														? "w-fit mx-auto p-1 text-gray-600 text-xs lg:text-sm"
														: "w-fit p-1 text-gray-600 text-xs lg:text-sm"
												}  border border-theme-color border-opacity-20`}
											>
												{product.category}
											</p>
										</div>
										<div className={`${gridView ? "space-y-1 " : "space-y-1"}`}>
											<p
												className={`${
													gridView
														? "text-sm md:text-base font-semibold pt-1 md:pt-0"
														: "text-sm md:text-base lg:text-lg font-semibold pt-1 md:pt-0"
												}`}
											>
												<sup className="text-slate-500 text-xs">GH₵</sup>
												{product.current_price}.00
											</p>
											<p
												className={`${
													gridView
														? "text-xs lg:text-sm line-through text-gray-400"
														: "text-sm lg:text-base line-through text-gray-400"
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
											? "absolute bottom-2 md:bottom-4 right-2 md:right-4 px-1 md:px-2 pb-1 bg-theme-color hover:bg-green-800 text-white rounded-md"
											: "absolute bottom-2 md:bottom-4 right-2 md:right-4 px-1 md:px-2 pb-1 bg-theme-color text-white rounded-md"
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
								</button>
							</div>
						</section>
					);
				})}
			</div>
			{/* Make sure the ToastContainer is included somewhere in the app */}
			<ToastContainer />
		</div>
	);
};

export default ProductFetch;
