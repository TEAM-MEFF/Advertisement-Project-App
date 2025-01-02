import React from "react";
import NavbarResponsive from "../components/NavbarResponsive";
import Cart from "./Cart";

const CartPage = () => {
	return (
		<div className="bg-blue-50 h-screen">
			<NavbarResponsive />
			<Cart />
			{/* ... */}
		</div>
	);
};

export default CartPage;
