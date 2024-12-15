import React, { useContext } from "react";
import IonIcon from "@reacticons/ionicons";
import { ShopContext } from "../context/ShopContextProvider";

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
      <div className="item w-[260px] border-[0.1px] m-3 p-5 hover:shadow-lg hover:scale-105 transition ease-in-out relative">
        <div className="hmm text-center items-center space-y-1">
          <div className="relative">
            <img
              className="w-[180px] h-[180px] mx-auto "
              src={`https://savefiles.org/${images}?shareable_link=440`}
              alt="productImage"
            />
            <p className="absolute bottom-2 right-2 px-2 py-1  bg-yellow-200  text-yellow-700">
              {discountPercentage}%
            </p>
          </div>
          {/* <span className="absolute top-2 right-2 px-2 pt-1  bg-gray-200  text-black rounded-full">
            <IonIcon
              name="heart-outline"
              className="text-2xl md:text-3xl text-the"
            />
          </span> */}

          <h3 className="text-xl text-theme-color  font-semibold">
            {productName}
          </h3>
          <p className="border-[0.1px] w-fit mx-auto py-1 px-2 text-gray-600 text-sm">
            {category}
          </p>
          <p className="text-xl font-semibold">GH₵{price}.00</p>
          <p className="text-base line-through text-gray-400">
            GH₵{discountedPrice}.00
          </p>

          <p>{avatar}</p>
          {/* <p>{description}</p> */}
          <div>
            <button
              className=" absolute bottom-2 right-2 px-2 pb-1 bg-theme-color text-white rounded-md"
              onClick={() => addToCart(id)}
            >
              <span className="text-sm">Add to</span>
              <div className="flex justify-center items-center gap-1">
                <span className="text-sm">
                  {" "}
                  Cart {cartItemsAmount > 0 && <> ({cartItems})</>}
                </span>
                {/* <IonIcon name="add-circle-outline" className="" /> */}
              </div>
            </button>
            <button className=" absolute bottom-2 right-2 px-2 pb-1 bg-gray text-white rounded-md">
              <span className="text-sm">Add to</span>
              <div className="flex justify-center items-center gap-1">
                <span className="text-sm">
                  {" "}
                  Cart {cartItemsAmount > 0 && <> ({cartItems})</>}
                </span>
                {/* <IonIcon name="add-circle-outline" className="" /> */}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiGetProduct;
