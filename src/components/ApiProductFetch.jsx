import React, { useEffect, useState } from "react";
import { apiGetProducts } from "../Services/products";
import IonIcon from "@reacticons/ionicons";
import axios from "axios";
import ApiGetProduct from "./ApiGetProduct";
import { Link } from "react-router-dom";

const ApiProductFetch = () => {
  const [inputValue, setInputValue] = useState('');
  const [apiProducts, setApiProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  const getProducts = async () => {
    const response = await apiGetProducts({ "productName": { "$regex": inputValue } });

    setApiProducts(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    getProducts();
  }, [inputValue]);

  if (loading)
    return <div>Loading...</div>

  return (
    <div>
      <div className={`mx-auto p-2 sticky top-2 z-[1] w-[120px] sm:w-[270px] md:w-[400px] lg:w-[600px] h-fit bg-theme-color shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex items-center transition-all duration-300`}>
        <input className="outline-none text-base bg-transparent w-full text-white font-normal px-4" type="search" placeholder="Search for any item... from Groceries, to Appliances, to Furniture..." value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <IonIcon
          name="search-outline"
          className=" text-xl text-white my-auto"
        />
      </div>
      <h1 className="text-3xl text-theme-color font-bold p-10">ALL PRODUCTS</h1>
      <div className="entireSpace flex flex-wrap justify-center">
        {apiProducts.map((ad, index) => {
          console.log(`${index}: ${ad.images}`)
          return (
            <Link to={`/product/${ad.id}`}>
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ApiProductFetch;
