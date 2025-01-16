import React, { useContext } from "react";
import PRODUCTS from "../constants";
import { ShopContext } from "../context/ShopContextProvider";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import empty from "../assets/img/Empty.svg";
import { MinusCircle, PlusCircle } from "lucide-react";

const Cart = () => {
	const {
		cartItems,
		addToCart,
		removeFromCart,
		updateCartItemCount,
		getTotalCartAmount,
		getTotalCartQuantity,
	} = useContext(ShopContext);
	const totalAmount = getTotalCartAmount();
	const totalQuantity = getTotalCartQuantity();
	const navigate = useNavigate();

	return (
		<section className="">
			<div
				className={`${
					totalAmount > 0
						? "items-start justify-start h-full w-full"
						: "items-center justify-center h-screen w-screen"
				}  flex flex-col relative  `}
			>
				<h2
					className={`${
						totalAmount > 0
							? "sticky text-theme-color -top-11 md:-top-14 z-10 pt-14 md:pt-16 pb-4 mx-auto font-semibold text-sm sm:text-base md:text-xl lg:text-2xl"
							: "hidden"
					}`}
				>
					Your Cart Items
				</h2>
				<div className="md:flex justify-start w-full">
					<div
						className={`${
							totalAmount > 0
								? "cart-items flex flex-col gap-3 md:gap-4 px-4 sm:px-6 md:px-8 lg:px-12 md:w-2/3"
								: "bg-green-100"
						}`}
					>
						{PRODUCTS.map((product) => {
							// display only products in the products array and is added to cart...
							// thus when the "setCartItems" has a value > 0 for a product...
							if (cartItems[product.id] != 0) {
								// then product is in the cart...
								return (
									<div>
										<div className="flex items-center justify-start gap-3 md:gap-5 bg-highlight rounded-lg shadow-md w-full h-[120px] sm:h-[130px] md:h-[140px] mx-auto p-2">
											<img
												src={product.images[0]}
												alt="productImage"
												className="h-[100px] w-[100px] sm:h-[110px] sm:w-[110px] md:h-[120px] md:w-[120px]"
											/>
											<div className="flex flex-col h-full w-full justify-start gap-1 md:gap-3">
												<p className="text-theme-color text-lg md:text-xl font-semibold">
													{product.title}
												</p>
												<p className="font-semibold text-white md:text-lg">
													<span className="text-xs md:text-base text-theme-color pr-1">
														GH₵
													</span>
													{product.current_price}.00
												</p>
												<div className="flex">
													<button
														onClick={() => removeFromCart(product.id)}
														className="text-theme-color hover:text-green-800"
													>
														<MinusCircle />
													</button>
													<input
														value={cartItems[product.id]}
														onChange={(e) =>
															updateCartItemCount(
																Number(e.target.value),
																product.id
															)
														}
														className="w-8 text-center bg-transparent text-white font-semibold md:text-lg"
													/>
													<button
														onClick={() => addToCart(product.id)}
														className="text-theme-color hover:text-green-800"
													>
														<PlusCircle />
													</button>
												</div>
											</div>
										</div>
									</div>
								);
							}
						})}
					</div>
					{totalAmount > 0 ? (
						<div className="fixed bottom-20 sm:top-28 right-4 z-50">
							<div className="summary w-[230px] md:w-[280px] lg:w-[320px] xl:w-[350px] space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 bg-highlight border border-green-300 text-theme-color px-3 md:px-5 py-5 mb:py-8 shadow-md rounded-lg">
								<h2 className="font-bold text-xl md:text-2xl">Summary</h2>
								<div className="space-y-1 md:space-y-2">
									<p className="sum-total flex items-center justify-between uppercase font-semibold text-base md:text-lg">
										<span className="text-white">Total Price* </span>
										<span>
											<sup className="text-xs">GH₵</sup>
											{totalAmount}
										</span>
									</p>
									<p className="sum-total-tax flex items-center justify-between uppercase font-semibold text-base md:text-lg">
										<span className="text-white">Tax charges (2%)</span> 2
									</p>
									<p className="sum-total-quantity flex items-center justify-between uppercase font-semibold text-base md:text-lg">
										<span className="text-white">Total Quantity*</span>{" "}
										{totalQuantity}
									</p>
								</div>
								<div className="space-y-2 pb-1 md:pb-3">
									<button className="check-out-btn px-3 py-2 bg-theme-color hover:bg-green-900 text-white rounded-lg font-medium uppercase cursor-pointer text-sm md:text-base w-full">
										Proceed to Checkout
									</button>
									<button
										onClick={() => navigate("/")}
										className="check-out-btn px-3 py-2 border border-theme-color rounded-lg font-medium uppercase cursor-pointer text-sm md:text-base w-full"
									>
										Continue Shopping
									</button>
								</div>
							</div>
						</div>
					) : (
						<div className="w-full space-y-4 mx-auto flex flex-col">
							<img
								src={empty}
								alt=""
								className="w-72 sm:w-80 md:w-96 mx-auto"
							/>
							<p className="flex text-red-600 text-lg md:text-xl font-semibold justify-center items-center p-2 animate-bounce duration-1000">
								Your Cart is Empty
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Cart;
