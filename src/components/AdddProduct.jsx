import React, { useState } from 'react';
import { apiAddProducts } from '../Services/products';

const AddProduct = () => {
    // Predefined categories from the documentation
    const categories = ['furniture', 'clothing', 'appliances', 'groceries', 'electronics'];

    const [formData, setFormData] = useState({
        productName: '',
        description: '',
        category: '',  // Will be one of the predefined categories
        price: '',
        discountPrice: '',
        discountPercentage: '',
    });
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'discountPrice' && value) {
            setFormData(prev => ({
                ...prev,
                [name]: value,
                discountPercentage: ''
            }));
        } else if (name === 'discountPercentage' && value) {
            setFormData(prev => ({
                ...prev,
                [name]: value,
                discountPrice: ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');

        try {
            // Create a base FormData object with the text fields
            const baseFormData = {
                productName: formData.productName,
                description: formData.description || '',
                category: formData.category,
                price: formData.price,
                ...(formData.discountPrice && { discountPrice: formData.discountPrice }),
                ...(formData.discountPercentage && { discountPercentage: formData.discountPercentage })
            };

            // Handle images one at a time
            for (let i = 0; i < images.length; i++) {
                const productData = new FormData();

                // Add all text fields
                Object.keys(baseFormData).forEach(key => {
                    productData.append(key, baseFormData[key]);
                });

                // Add current image
                productData.append('images', images[i]);

                // Make individual API call for each image
                await apiAddProducts(productData);
            }

            setMessage('Product added successfully!');

            // Reset form
            setFormData({
                productName: '',
                description: '',
                category: '',
                price: '',
                discountPrice: '',
                discountPercentage: '',
            });
            setImages([]);
            document.getElementById('imageInput').value = '';

        } catch (error) {
            console.error('Error details:', error);
            setError(error.response?.data?.message || 'Error adding product. Please check the console for details.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="py-8 px-6 sm:px-10">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Add New Product</h2>
                        <p className="text-sm text-gray-600">Fill in the details to list your product</p>
                    </div>

                    {message && (
                        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
                            <p className="text-green-600 text-sm">{message}</p>
                        </div>
                    )}

                    {error && (
                        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                            <p className="text-red-600 text-sm">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Product Name *
                            </label>
                            <input
                                type="text"
                                name="productName"
                                value={formData.productName}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows="4"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Category *
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Select a category</option>
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Price *
                            </label>
                            <input
                                type="text"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Discount Price
                                </label>
                                <input
                                    type="number"
                                    name="discountPrice"
                                    value={formData.discountPrice}
                                    onChange={handleInputChange}
                                    disabled={formData.discountPercentage !== ''}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Discount Percentage
                                </label>
                                <input
                                    type="number"
                                    name="discountPercentage"
                                    value={formData.discountPercentage}
                                    onChange={handleInputChange}
                                    disabled={formData.discountPrice !== ''}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Images *
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="imageInput"
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                                        >
                                            <span>Upload files</span>
                                            <input
                                                id="imageInput"
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                required
                                                onChange={handleImageChange}
                                                className="sr-only"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                    ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}`}
                        >
                            {loading ? 'Adding Product...' : 'Add Product'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;