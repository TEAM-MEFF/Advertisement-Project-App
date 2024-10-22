import React from 'react'
import PRODUCTS from '../constants';

const CartItem = () => {
    return (
        <div>
            <div>
                <img src={product.images} alt="productImage" />
                <div>
                    <p>{title}</p>
                    <p>{current_price}</p>
                    <p>Quantity</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem