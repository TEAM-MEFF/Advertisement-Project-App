import React, { useContext } from "react";
import IonIcon from "@reacticons/ionicons";
import PRODUCTS from "../constants";
import { ShopContext } from "../context/ShopContextProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure the CSS is imported

const ProductFetch = () => {
  const { addToCart, cartItems } = useContext(ShopContext);

  const handleAddToCart = (productId) => {
    addToCart(productId);
    toast.success("Item added to cart!"); // Show success toast when item is added to cart
  };

  return (
    <div>
      <h2 className="text-3xl text-theme-color font-bold p-10 uppercase">
        Top Selling Items
      </h2>
      <div className="entireSpace flex flex-wrap justify-center">
        {PRODUCTS.map((product, index) => {
          return (
            <div
              className="item w-[260px] border-[0.1px] m-3 p-5 hover:shadow-lg hover:scale-105 transition ease-in-out relative"
              key={index} // Moved the key here
            >
              <div className="hmm text-center items-center space-y-1">
                <div className="relative">
                  <img
                    src={product.images[0]}
                    alt="product-image"
                    className="w-[180px] h-[180px] mx-auto "
                  />
                  {/* <span className="absolute top-2 right-2 px-2 pt-1 bg-gray-200 text-black rounded-full">
                    <IonIcon
                      name="heart-outline"
                      className="text-2xl md:text-3xl"
                    />
                  </span> */}
                  <span className="absolute bottom-2 right-2 px-2 py-1 bg-yellow-200 text-yellow-700">
                    -{product.discount_percentage}%
                  </span>
                </div>
                <h3 className="text-xl text-theme-color font-semibold">
                  {product.title}
                </h3>
                <p className="border-[0.1px] w-fit mx-auto py-1 px-2 text-gray-600 text-sm">
                  {product.category}
                </p>
                <p className="text-xl font-semibold">
                  GH₵{product.current_price}.00
                </p>
                <p className="text-base line-through text-gray-400">
                  GH₵{product.previous_price}.00
                </p>
              </div>
              <button
                className="absolute bottom-2 right-2 px-2 pb-1 bg-theme-color text-white rounded-md"
                onClick={() => handleAddToCart(product.id)} // Trigger toast on click
              >
                <span className="text-sm">Add to</span>
                <div className="flex justify-center items-center gap-1">
                  <span className="text-sm">
                    Cart {cartItems > 0 && <> ({cartItems})</>}
                  </span>
                </div>
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
