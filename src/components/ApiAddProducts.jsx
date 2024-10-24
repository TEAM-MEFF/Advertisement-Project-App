// src/components/ApiAddProduct.jsx
import React, { useState } from "react";
import { apiAddProducts } from "../Services/products"; // Import your API function

const ApiAddProduct = () => {
    const [formData, setFormData] = useState({
        productName: "",
        description: "",
        category: "",
        price: "",
        discountPrice: "",
        discountPercentage: "",
    });
    const [image, setImage] = useState(null); // For handling image upload
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Take the first image from the file input
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Create form data to send
        const payload = new FormData();
        payload.append("productName", formData.productName);
        payload.append("description", formData.description);
        payload.append("category", formData.category);
        payload.append("price", formData.price);

        if (formData.discountPrice) {
            payload.append("discountPrice", formData.discountPrice);
        } else if (formData.discountPercentage) {
            payload.append("discountPercentage", formData.discountPercentage);
        } else {
            // Send neither if both are empty
        }
        if (image) {
            payload.append("images", image); // Send the image
        }

        for (let [key, value] of payload.entries()) {
            console.log(key, value);
        }

        try {
            // Post product data to the backend
            const response = await apiAddProducts(payload);
            console.log("Product added successfully:", response.data);
            setSuccessMessage("Product added successfully!");
            setFormData({
                productName: "",
                description: "",
                category: "",
                price: "",
                discountPrice: "",
                discountPercentage: "",
            });
            setImage(null); // Clear the image
        } catch (error) {
            console.error("Error adding product", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="add-product-form">
            <h1 className="text-3xl text-theme-color font-bold p-10">Add New Product</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5 p-10">
                <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                    placeholder="Product Name"
                    required
                    className="border px-4 py-2"
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Product Description"
                    className="border px-4 py-2"
                />
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="Product Category"
                    required
                    className="border px-4 py-2"
                />
                <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="Product Price"
                    required
                    className="border px-4 py-2"
                />
                <input
                    type="number"
                    name="discountPrice"
                    value={formData.discountPrice}
                    onChange={handleInputChange}
                    placeholder="Discount Price (optional)"
                    className="border px-4 py-2"
                />
                <input
                    type="number"
                    name="discountPercentage"
                    value={formData.discountPercentage}
                    onChange={handleInputChange}
                    placeholder="Discount Percentage (optional)"
                    className="border px-4 py-2"
                />
                <input
                    type="file"
                    name="images"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="border px-4 py-2"
                />
                <button type="submit" className="bg-blue-500 text-white px-6 py-2" disabled={loading}>
                    {loading ? "Submitting..." : "Add Product"}
                </button>
            </form>
            {successMessage && <p className="text-green-500">{successMessage}</p>}
        </div>
    );
};

export default ApiAddProduct;
