import React, { useContext } from 'react'
import PRODUCTS from '../constants'
import { ShopContext } from "../context/ShopContextProvider"
import CartItem from '../components/CartItem';

const Cart = () => {
    const { cartItems } = useContext(ShopContext);

    return (
        <div>
            <h2>Your Cart Items</h2>
            <div className='cart-items'>
                {
                    PRODUCTS.map((product) => {
                        // display only products in the products array and is added to cart...
                        // thus when the "setCartItems" has a value > 0 for a product...
                        if (cartItems[product.id] != 0) {
                            // then product is in the cart...
                            return (
                                // <CartItem data={product} />
                                <div>
                                    <img src={product.images[0]} alt="productImage" />
                                    <div>
                                        <p>{product.title}</p>
                                        <p>{product.current_price}</p>
                                        <p>Quantity</p>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Cart