import React, { useContext, useState } from "react";
import IonIcon from "@reacticons/ionicons";
import PRODUCTS from "../constants";
import { ShopContext } from "../context/ShopContextProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure the CSS is imported...

const ProductFetch = () => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const [gridView, setGridView] = useState(true) // state to toggle layout/view...

  const handleAddToCart = (productId) => {
    addToCart(productId);
    toast.success("Item added to cart!"); // Show success toast when item is added to cart
  };

  return (
    <div>
      <div className="flex items-center justify-between p-10">
        <h2 className="text-3xl text-theme-color font-bold  uppercase">
          Top Selling Items
        </h2>
        <div className="flex md:gap-4 gap-1 items-center">
          <IonIcon
            name="list-outline"
            onClick={() => setGridView(false)}
            className={`text-2xl md:text-4xl cursor-pointer ${!gridView ? "text-theme-color" : "text-black"}`}
          />
          <IonIcon
            name="grid-outline"
            onClick={() => setGridView(true)}
            className={`text-xl md:text-3xl cursor-pointer ${gridView ? "text-theme-color" : "text-black"}`}
          />
        </div>
      </div>
      <div className={`entireSpace ${gridView ? "flex flex-wrap mx-auto" : "mx-10 flex flex-wrap justify-center"}`}>
        {PRODUCTS.map((product, index) => {
          return (
            <div
              className={`${gridView ? "w-[260px] mx-auto" : "w-full flex justify-around"} hover:shadow-lg hover:scale-[1.02] transition ease-in-out border-[0.1px] m-3 p-5 relative`}
              key={index} // Moved the key here
            >
              <div className={`${gridView ? "text-center items-start space-y-1" : "flex gap-10 items-center"} `}>
                <div className="relative">
                  <img
                    src={product.images[0]}
                    alt="product-image"
                    className={`${gridView ? "w-[180px] h-[180px] mx-auto" : "w-[180px] h-[150px] "}`}
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
                <div className={`${gridView ? "flex flex-col" : "flex justify-around w-[700px] gap-5"} space-y-1`}>
                  <div className="space-y-3">
                    <p className={`${gridView ? "text-xl" : "text-4xl"} text-theme-color font-semibold`}>
                      {product.title}
                    </p>
                    <p className={`${gridView ? " text-sm mx-auto" : "text-xl"} border-[0.1px] w-fit py-1 px-2 text-gray-600 `}>
                      {product.category}
                    </p>
                  </div>
                  <div className="space-y-1 ">
                    <p className={`${gridView ? "text-xl " : "text-4xl"} font-semibold text-center`}>
                      <sup className="text-theme-color text-[1.3rem]">GH₵</sup>
                      {product.current_price}.00
                    </p>
                    <p className={`${gridView ? "text-base " : "text-2xl"} text-center line-through text-gray-400`}>
                      GH₵{product.previous_price}.00
                    </p>
                  </div>
                </div>
              </div>
              <button
                className={`${gridView ? "absolute bottom-2 right-2 " : "static"} px-2 pb-1 bg-theme-color text-white rounded-md my-auto h-fit`}
                onClick={() => handleAddToCart(product.id)} // Trigger toast on click
              >
                <span className={`${gridView ? "text-sm" : "text-xl"}`}>Add to</span>
                <div className="flex justify-center items-center gap-1">
                  <span className={`${gridView ? "text-sm" : "text-xl"}`}>
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
    </div >
  );
};

export default ProductFetch;
