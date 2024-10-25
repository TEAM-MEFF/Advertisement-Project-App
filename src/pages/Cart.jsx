import React, { useContext } from "react";
import PRODUCTS from "../constants";
import { ShopContext } from "../context/ShopContextProvider";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import empty from "../assets/img/Empty.svg";

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
    <div>
      <h2 className="flex justify-center text-2xl p-8">Your Cart Items</h2>
      <div className="flex justify-center">
        <div className="cart-items w-[1250px]">
          {PRODUCTS.map((product) => {
            // display only products in the products array and is added to cart...
            // thus when the "setCartItems" has a value > 0 for a product...
            if (cartItems[product.id] != 0) {
              // then product is in the cart...
              return (
                <div>
                  {/* <CartItem data={product} /> */}
                  <div className="flex gap-5 border-2 rounded-2xl shadow-sm w-2/3 h-[150px] mx-auto m-5 p-5 hover:scale-105 duration-300">
                    <img
                      src={product.images[0]}
                      alt="productImage"
                      className="h-[120px] w-[120px]"
                    />
                    <div className="flex flex-col items-center justify-center gap-3">
                      <p className="font-normal text-theme-color text-xl ">
                        {product.title}
                      </p>
                      <p className="font-normal text-xl">
                        GH₵{product.current_price}.00
                      </p>
                      <div className="flex">
                        <button
                          onClick={() => removeFromCart(product.id)} className="text-xl border-2 rounded-full px-2">
                          -
                        </button>
                        <input
                          value={cartItems[product.id]}
                          onChange={(e) =>
                            updateCartItemCount(
                              Number(e.target.value),
                              product.id
                            )
                          }
                          className="w-5 text-center"
                        />
                        <button
                          onClick={() => addToCart(product.id)}
                          className="text-xl border-2 rounded-full px-1"
                        >
                          +
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
          <div className="mr-16">
            <div className="summary w-[250px] bg-slate-500 p-5 rounded-lg">
              <h2 className="font-bold text-3xl mb-5">Summary</h2>
              <div className="sum-total flex items-center justify-between uppercase font-semibold mb-2">
                <span className="text-white ">Total Price* </span>GH₵{" "}
                {totalAmount}
              </div>
              <div className="sum-total-tax flex items-center justify-between uppercase font-semibold mb-2">
                <span className="text-white ">Tax charges (2%)</span> 2
              </div>
              <div className="sum-total-quantity flex items-center justify-between uppercase font-semibold mb-2">
                <span className="text-white ">Total Quantity*</span>{" "}
                {totalQuantity}
              </div>
              <button className="check-out-btn w-full px-3 py-2 mt-10 bg-slate-200 rounded-xl font-bold uppercase cursor-pointer">
                Proceed to Checkout
              </button>
              <button
                onClick={() => navigate("/")}
                className="check-out-btn w-full px-3 py-2 mt-10 bg-slate-200 rounded-xl font-bold uppercase cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <div className="w-[1700px]">
            <img src={empty} alt="" className="size-72" />
            <h1 className="flex text-2xl font-semibold justify-center items-center p-2 mr-[500px]">
              Your Cart is Empty
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
