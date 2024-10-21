import React, { useEffect, useState } from 'react'
import { apiGetProducts } from '../Services/products';
import axios from 'axios';
import ApiGetProduct from './ApiGetProduct';

const ApiProductFetch = () => {
    const [apiProducts, setApiProducts] = useState([]);

    const getProducts = async () => {
        const response = await apiGetProducts()

        // axios.get(`${import.meta.env.VITE_BASE_URL}/todos?, limit=0`);
        setApiProducts(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            <h1>ALL PRODUCTS</h1>
            <div>
                {
                    apiProducts.map((ad) => {
                        return (
                            <ApiGetProduct
                                images={ad.images}
                                productName={ad.productName}
                                category={ad.category}
                                price={ad.price}
                                description={ad.description}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ApiProductFetch