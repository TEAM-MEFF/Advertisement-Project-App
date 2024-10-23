import React, { useState } from 'react';
import { PlusCircle, Package } from 'lucide-react';
import { apiAddProducts } from '../Services/products'; // Import your API function here

const VendorDashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState('post');
    const [notification, setNotification] = useState(null);
    const [adverts, setAdverts] = useState([
        { id: 1, title: 'Sample Product', description: 'Description here', price: 149.99, category: 'Electronics' }
    ]);
    const [formData, setFormData] = useState({
        productName: '',
        description: '',
        price: '',
        category: '',
        discountPercentage: '',
        discountPrice: '',
        avatar: null,
        images: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check for required fields
        if (formData.productName && formData.description && formData.price && formData.category) {
            const payload = new FormData(); // Create FormData to handle file uploads

            // Append form fields to FormData
            payload.append('productName', formData.productName);
            payload.append('description', formData.description);
            payload.append('price', formData.price);
            payload.append('category', formData.category);
            payload.append('discountPercentage', formData.discountPercentage);
            payload.append('discountPrice', formData.discountPrice);
            payload.append('avatar', formData.avatar); // Assuming one avatar image
            payload.append('images', formData.images); // Assuming multiple images

            try {
                await apiAddProducts(payload); // Post to the backend API
                setNotification({ type: 'success', message: 'Advertisement posted successfully!' });

                // Reset form after successful submission
                setFormData({
                    productName: '',
                    description: '',
                    price: '',
                    category: '',
                    discountPercentage: '',
                    discountPrice: '',
                    avatar: null,
                    images: null
                });
            } catch (error) {
                setNotification({ type: 'error', message: 'Failed to post advertisement. Try again.' });
            }
        } else {
            setNotification({ type: 'error', message: 'Please fill in all required fields.' });
        }
    };

    const handleDelete = (id) => {
        setAdverts(adverts.filter(ad => ad.id !== id));
        setNotification({ type: 'success', message: 'Advertisement deleted successfully!' });
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`bg-white shadow-lg ${collapsed ? 'w-20' : 'w-64'} transition-all duration-300`}>
                <div className="p-4 border-b">
                    <h2 className={`font-bold ${collapsed ? 'text-center' : 'text-xl'}`}>
                        {collapsed ? 'VD' : 'Vendor Dashboard'}
                    </h2>
                </div>
                <nav className="mt-6">
                    <div
                        onClick={() => setActiveTab('post')}
                        className={`p-4 flex items-center cursor-pointer hover:bg-gray-50 ${activeTab === 'post' ? 'bg-gray-50' : ''}`}
                    >
                        <PlusCircle className="h-5 w-5" />
                        {!collapsed && <span className="ml-4">Post Advert</span>}
                    </div>
                    <div
                        onClick={() => setActiveTab('manage')}
                        className={`p-4 flex items-center cursor-pointer hover:bg-gray-50 ${activeTab === 'manage' ? 'bg-gray-50' : ''}`}
                    >
                        <Package className="h-5 w-5" />
                        {!collapsed && <span className="ml-4">Manage Adverts</span>}
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-8">
                    {notification && (
                        <div className={`mb-4 p-4 rounded ${notification.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                            {notification.message}
                        </div>
                    )}
                    {activeTab === 'post' && (
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-4">Post New Advertisement</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Product Name</label>
                                        <input
                                            type="text"
                                            value={formData.productName}
                                            onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                                            className="w-full p-2 border rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Description</label>
                                        <textarea
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            className="w-full p-2 border rounded"
                                            rows="4"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Price</label>
                                            <input
                                                type="number"
                                                value={formData.price}
                                                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                                className="w-full p-2 border rounded"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Category</label>
                                            <select
                                                value={formData.category}
                                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                                className="w-full p-2 border rounded"
                                            >
                                                <option value="">Select Category</option>
                                                <option value="Electronics">Electronics</option>
                                                <option value="Clothing">Clothing</option>
                                                <option value="Home">Home</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Discount Percentage</label>
                                            <input
                                                type="number"
                                                value={formData.discountPercentage}
                                                onChange={(e) => setFormData({ ...formData, discountPercentage: e.target.value })}
                                                className="w-full p-2 border rounded"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Discounted Price</label>
                                            <input
                                                type="number"
                                                value={formData.discountPrice}
                                                onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
                                                className="w-full p-2 border rounded"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Avatar Image</label>
                                        <input
                                            type="file"
                                            onChange={(e) => setFormData({ ...formData, avatar: e.target.files[0] })}
                                            className="w-full p-2 border rounded"
                                            accept="image/*"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Product Images</label>
                                        <input
                                            type="file"
                                            onChange={(e) => setFormData({ ...formData, images: e.target.files[0] })}
                                            className="w-full p-2 border rounded"
                                            accept="image/*"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                                    >
                                        Post Advertisement
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {activeTab === 'manage' && (
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-4">Manage Advertisements</h2>
                                <div className="space-y-4">
                                    {adverts.map((ad) => (
                                        <div key={ad.id} className="border rounded p-4">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-semibold">{ad.title}</h3>
                                                    <p className="text-sm text-gray-600">{ad.description}</p>
                                                    <p className="text-sm mt-2">
                                                        <span className="font-medium">Price:</span> ${ad.price}
                                                        <span className="ml-4 font-medium">Category:</span> {ad.category}
                                                    </p>
                                                </div>
                                                <div className="space-x-2">
                                                    <button
                                                        className="text-sm bg-red-600 text-white px-2 py-1 rounded"
                                                        onClick={() => handleDelete(ad.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VendorDashboard;