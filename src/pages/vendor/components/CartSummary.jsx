import React from 'react'

const CartSummary = () => {
    return (
        <div>
            <div className='summary w-[250px] bg-slate-500 p-5 rounded-lg'>
                <h2 className='font-bold text-3xl mb-5'>Summary</h2>
                <div className='sum-total flex items-center justify-between uppercase font-semibold mb-2'>
                    <span className='text-white '>SubTotal* </span> $1000
                </div>
                <div className='sum-total-tax flex items-center justify-between uppercase font-semibold mb-2'>
                    <span className='text-white '>Tax charges (2%)</span> 2
                </div>
                <div className='sum-total-quantity flex items-center justify-between uppercase font-semibold mb-2'>
                    <span className='text-white '>Total Quantity*</span> 5
                </div>
                <div className='sum-total-amount flex items-center justify-between uppercase font-semibold mt-10'>
                    <span className='text-white '>Total Price*</span> $50000
                </div>
                <button className='check-out-btn w-full px-3 py-2 mt-10 bg-slate-200 rounded-xl font-bold uppercase cursor-pointer'>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default CartSummary 