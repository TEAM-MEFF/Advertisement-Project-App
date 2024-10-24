// src/components/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetOneProduct } from "../Services/products"; // Import your API function

import axios from "axios";

const ProductDetails = () => {
    const { productId } = useParams(); // Get product ID from URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const getProductById = async (id) => {
        try {
            const response = await apiGetOneProduct(id); // Fetch the product by ID using your API function
            setProduct(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching product", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (productId) {
            getProductById(productId);
        }
    }, [productId]);

    if (loading) return <div>Loading...</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div className="product-details">
            <h1 className="text-3xl font-bold">{product.productName}</h1>
            <img
                className="w-[300px] h-[300px]"
                src={`https://savefiles.org/${product.images}?shareable_link=440`}
                alt="productImage"
            />
            <p className="category">{product.category}</p>
            <p className="price">Price: ${product.price}</p>
            <p className="discount">Discount: {product.discountPercentage}%</p>
            <p className="discounted-price">Discounted Price: ${product.discountedPrice}</p>
            <p className="description">{product.description}</p>
        </div>
    );
};

export default ProductDetails;
