import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetOneProduct } from '../Services/products';
import { Calendar, Phone, Mail, Store, Tag, Percent } from 'lucide-react';

const ProductDetailsMawuse = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const fetchProduct = async () => {
        try {
            const response = await apiGetOneProduct(id);
            setProduct(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching product:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl">Product not found</div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Product Images and Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                    <img
                        src={product.images || "/api/placeholder/400/400"}
                        alt={product.productName}
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">{product.productName}</h1>
                    <div className="flex items-center space-x-2">
                        <Tag className="w-5 h-5" />
                        <span className="text-xl font-semibold">${product.price}</span>
                        {product.discountPercentage > 0 && (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded flex items-center">
                                <Percent className="w-4 h-4 mr-1" />
                                {product.discountPercentage}% OFF
                            </span>
                        )}
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h2 className="font-semibold mb-2">Description</h2>
                        <p className="text-gray-700">{product.description}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h2 className="font-semibold mb-2">Category</h2>
                        <p className="text-gray-700">{product.category}</p>
                    </div>
                </div>
            </div>

            {/* Seller Information */}
            <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
                <h2 className="text-2xl font-bold mb-6">Seller Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-4">
                        <img
                            src={product.user.avatar || "/api/placeholder/64/64"}
                            alt={product.user.userName}
                            className="w-16 h-16 rounded-full"
                        />
                        <div>
                            <h3 className="font-semibold">{product.user.userName}</h3>
                            <div className="flex items-center text-gray-600">
                                <Store className="w-4 h-4 mr-1" />
                                {product.user.businessName}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-gray-600">
                            <Mail className="w-4 h-4" />
                            <span>{product.user.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <Phone className="w-4 h-4" />
                            <span>{product.user.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span>Member since {formatDate(product.user.createdAt)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Timeline */}
            <div className="mt-8 text-sm text-gray-500">
                <div className="flex justify-between">
                    <span>Listed on {formatDate(product.createdAt)}</span>
                    <span>Last updated {formatDate(product.updatedAt)}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsMawuse;