import React, { useEffect, useState } from "react";
import { apiGetProducts } from "../Services/products";
import axios from "axios";
import ApiGetProduct from "./ApiGetProduct";

const ApiProductFetch = () => {
  const [apiProducts, setApiProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  const getProducts = async () => {
    const response = await apiGetProducts();

    setApiProducts(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading)
    return <div>Loading...</div>

  return (
    <div>
      <h1 className="text-3xl text-theme-color font-bold p-10">ALL PRODUCTS</h1>
      <div className="entireSpace flex flex-wrap justify-center">
        {apiProducts.map((ad, index) => {
          return (
            <ApiGetProduct
              key={ad.id}
              images={ad.images}
              productName={ad.productName}
              category={ad.category}
              price={ad.price}
              description={ad.description}
              discountPercentage={ad.discountPercentage}
              discountedPrice={ad.discountedPrice}
              avatar={ad.avatar}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ApiProductFetch;
