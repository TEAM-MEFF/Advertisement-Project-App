import React, { useContext } from "react";
import PRODUCTS from "../constants";
import { ShopContext } from "../context/ShopContextProvider";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div>
      <h2>Your Cart Items</h2>
      <div className="cart-items">
        {PRODUCTS.map((product) => {
          // display only products in the products array and is added to cart...
          // thus when the "setCartItems" has a value > 0 for a product...
          if (cartItems[product.id] != 0) {
            // then product is in the cart...
            return (
              // <CartItem data={product} />
              <div className="flex gap-5 border-2 rounded-2xl shadow-sm w-2/3 mx-auto m-5 p-5 hover:scale-105 duration-300">
                <img
                  src={product.images[0]}
                  alt="productImage"
                  className="h-[200px] w-[200px]"
                />
                <div className="flex flex-col items-center justify-center gap-5">
                  <p className="font-semibold text-theme-color text-2xl ">
                    {product.title}
                  </p>
                  <p className="font-semibold text-2xl">
                    GH₵{product.current_price}.00
                  </p>
                  <p className="">Quantity</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
