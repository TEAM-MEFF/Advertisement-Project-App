import React, { useEffect, useState } from "react";
import { apiGetProducts } from "../Services/products";
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
    console.log(response.data);
  };

  useEffect(() => {
    getProducts();
  }, [inputValue]);

  if (loading)
    return <div>Loading...</div>

  return (
    <div>
      <input className="border-2" type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
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
