import React, { useState } from "react";
import axios from "axios";

const ProductPost = () => {
    const [formData, setFormData] = useState({
        productName: "",
        description: "",
        price: "",
        discountPrice: "",
        discountPercentage: "",
        category: "",
    });
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle image upload
    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Assuming one image at a time
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Create a FormData object to handle file uploads
        const data = new FormData();
        data.append("productName", formData.productName);
        data.append("description", formData.description);
        data.append("price", formData.price);
        data.append("discountPrice", formData.discountPrice);
        data.append("discountPercentage", formData.discountPercentage);
        data.append("category", formData.category);
        if (image) {
            data.append("images", image); // Append the image file
        }

        try {
            const response = await axios.post(
                "https://advertisement-project-api.onrender.com/products",
                data, // Send form data including the image
                {
                    headers: {
                        "Content-Type": "multipart/form-data", // Set proper headers
                    },
                }
            );
            console.log(response.data); // Handle success
            setLoading(false);
            alert("Product added successfully!");
        } catch (error) {
            console.error("Error posting product:", error);
            setLoading(false);
            alert("Failed to add product. Please try again.");
        }
    };

    return (
        <div className="post-product-container">
            <h2 className="text-2xl font-bold">Add a New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label>Product Name:</label>
                    <input
                        type="text"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    ></textarea>
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <div>
                    <label>Discount Price (Optional):</label>
                    <input
                        type="number"
                        name="discountPrice"
                        value={formData.discountPrice}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                </div>
                <div>
                    <label>Discount Percentage (Optional):</label>
                    <input
                        type="number"
                        name="discountPercentage"
                        value={formData.discountPercentage}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <div>
                    <label>Product Image:</label>
                    <input type="file" onChange={handleImageChange} className="border p-2 w-full" required />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 mt-4"
                    disabled={loading}
                >
                    {loading ? "Adding Product..." : "Add Product"}
                </button>
            </form>
        </div>
    );
};

export default ProductPost;
