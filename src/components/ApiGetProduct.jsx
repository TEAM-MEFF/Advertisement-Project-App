import React from "react";

const ApiGetProduct = ({
  productName,
  description,
  category,
  images,
  price,
  discountPercentage,
  discountedPrice,
  avatar,
}) => {
  return (
    <div className="entireSpace flex flex-wrap justify-center">
      <div className="item w-[260px] border-[0.1px] m-3 p-5 hover:shadow-lg hover:scale-105 transition ease-in-out relative">
        <div className="hmm text-center items-center space-y-1">
          <img
            className="w-[180px] h-[180px] mx-auto "
            src={`https://savefiles.org/${images}?shareable_link=440`}
            alt="productImage"
          />
          <h3 className="text-xl text-theme-color  font-semibold">
            {productName}
          </h3>
          <p className="border-[0.1px] w-fit mx-auto py-1 px-2 text-gray-600 text-sm">
            {category}
          </p>
          <p>{price}</p>
          <p className="absolute top-2 right-2 px-2 py-1  bg-yellow-200  text-yellow-700">
            {discountPercentage}
          </p>
          <p className="text-xl font-semibold">{discountedPrice}</p>
          <p>{avatar}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ApiGetProduct;
