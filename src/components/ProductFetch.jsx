import React, { useContext } from 'react'
import IonIcon from "@reacticons/ionicons";
import { Link } from 'react-router-dom';
import PRODUCTS from '../constants';
import { ShopContext } from "../context/ShopContextProvider"


const ProductFetch = () => {
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemsAmount = cartItems;
    return (
        <div>
            <h2 className='text-3xl text-theme-color font-bold p-10'>Top Selling Items</h2>
            <div className='entireSpace flex flex-wrap justify-center'>
                {
                    PRODUCTS.map((product, index) => {
                        console.table(product);
                        return (
                            <div className='item w-[260px] border-[0.1px] m-3 p-5 hover:shadow-lg hover:scale-105 transition ease-in-out relative'>
                                <div className='hmm text-center items-center space-y-1' key={index}>
                                    <div className='relative'>
                                        <img src={product.images[0]} alt="product-image" className='w-[180px] h-[180px] mx-auto ' />
                                        <span className='absolute top-2 right-2 px-2 py-1  bg-yellow-200  text-yellow-700'>-{product.discount_percentage}%</span>
                                    </div>
                                    <h3 className='text-xl text-theme-color  font-semibold'>{product.title}</h3>
                                    <p className='border-[0.1px] w-fit mx-auto py-1 px-2 text-gray-600 text-sm'>{product.category}</p>
                                    <p className='text-xl font-semibold'>GH₵{product.current_price}.00</p>
                                    <p className='text-base line-through text-gray-400'>GH₵{product.previous_price}.00</p>
                                </div>
                                <button className=" absolute bottom-2 right-2 px-2 pb-1 bg-theme-color text-white rounded-md" onClick={() => addToCart(product.id)}>
                                    <span className="text-sm">Add to</span>
                                    <div className="flex justify-center items-center gap-1">
                                        <span className="text-sm"> Cart {cartItemsAmount > 0 && <> ({cartItems})</>}</span>
                                        {/* <IonIcon name="add-circle-outline" className="" /> */}
                                    </div>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default ProductFetch