import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { X, AlertTriangle } from 'lucide-react';

const ApiDeleteProduct = ({ product, isModal = false, onClose }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleDelete = async () => {
        setLoading(true);
        setError('');

        try {
            const response = await fetch(`your-api-endpoint/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Failed to delete product');
            }

            // If it's a modal, close it and refresh the parent
            if (isModal && onClose) {
                onClose(true); // true indicates successful deletion
            } else {
                // If it's a standalone page, redirect to products list
                navigate('/products');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            setError('Failed to delete product. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const content = (
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative p-6">
                {isModal && (
                    <button
                        onClick={() => onClose(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                    >
                        <X className="w-5 h-5" />
                    </button>
                )}

                <div className="flex items-center justify-center mb-6">
                    <div className="bg-red-100 rounded-full p-3">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                </div>

                <h2 className="text-xl font-bold text-center text-gray-900 mb-4">
                    Delete Product
                </h2>

                <p className="text-center text-gray-600 mb-6">
                    Are you sure you want to delete this product? This action cannot be undone.
                </p>

                {product && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold text-gray-900">
                            {product.productName}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                            Category: {product.category}
                        </p>
                        <p className="text-sm text-gray-600">
                            Price: ${product.price}
                        </p>
                    </div>
                )}

                {error && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-red-600 text-sm">{error}</p>
                    </div>
                )}

                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={() => isModal ? onClose(false) : navigate(-1)}
                        className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        disabled={loading}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={() => handleDelete(ad.id)}
                        disabled={loading}
                        className={`flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                            ${loading
                                ? 'bg-red-400 cursor-not-allowed'
                                : 'bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                            }`}
                    >
                        {loading ? 'Deleting...' : 'Delete Product'}
                    </button>
                </div>
            </div>
        </div>
    );

    // If used as a modal, return just the content
    if (isModal) {
        return content;
    }

    // If used as a standalone page, wrap with a full-page container
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            {content}
        </div>
    );
};

export default ApiDeleteProduct;