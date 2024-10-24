import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiGetOneProduct } from '../Services/products';

const EditProduct = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const categories = ['furniture', 'clothing', 'appliances', 'groceries', 'electronics'];

    const [formData, setFormData] = useState({
        productName: '',
        description: '',
        category: '',
        price: '',
        discountPrice: '',
        discountPercentage: '',
    });
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [initialLoad, setInitialLoad] = useState(true);

    const fetchProduct = async () => {
        try {
            const response = await apiGetOneProduct(id);
            const product = response.data;

            setFormData({
                productName: product.productName || '',
                description: product.description || '',
                category: product.category || '',
                price: product.price || '',
                discountPrice: product.discountPrice || '',
                discountPercentage: product.discountPercentage || '',
            });
            setInitialLoad(false);
        } catch (error) {
            setError('Error loading product. Please try again.');
            console.error('Error fetching product:', error);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

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
            const baseFormData = {
                productName: formData.productName,
                description: formData.description || '',
                category: formData.category,
                price: formData.price,
                ...(formData.discountPrice && { discountPrice: formData.discountPrice }),
                ...(formData.discountPercentage && { discountPercentage: formData.discountPercentage })
            };

            // If new images are selected
            if (images.length > 0) {
                for (let i = 0; i < images.length; i++) {
                    const productData = new FormData();

                    Object.keys(baseFormData).forEach(key => {
                        productData.append(key, baseFormData[key]);
                    });

                    productData.append('images', images[i]);

                    // Use your update API endpoint here
                    await fetch(`/products/${id}`, {
                        method: 'PUT',
                        body: productData
                    });
                }
            } else {
                // If no new images, just update the text data
                await fetch(`your-api-endpoint/products/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(baseFormData)
                });
            }

            setMessage('Product updated successfully!');
            setTimeout(() => {
                navigate(`/product/${id}`); // Redirect to product details page
            }, 2000);

        } catch (error) {
            console.error('Error details:', error);
            setError(error.response?.data?.message || 'Error updating product. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (initialLoad) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="text-xl text-gray-600">Loading product data...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="py-8 px-6 sm:px-10">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Edit Product</h2>
                        <p className="text-sm text-gray-600">Update your product details</p>
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
                                // defaultValue={"Enter Product Name"}
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
                                Update Images
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
                                            <span>Upload new files</span>
                                            <input
                                                id="imageInput"
                                                type="file"
                                                multiple
                                                accept="image/*"
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

                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => navigate(`/product/${id}`)}
                                className="flex-1 py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`flex-1 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                                ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}`}
                            >
                                {loading ? 'Updating...' : 'Update Product'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;