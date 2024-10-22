import React from 'react'

const ApiGetProduct = (
    { productName, description, category, images, price }
) => {
    return (
        <div>
            <h2>{productName}</h2>
            <p>{description}</p>
            <p>{category}</p>
            <p>{price}</p>
            <img src={`https://savefiles.org/${images}?shareable_link=1387`} alt="productImage" />
        </div>
    )
}

export default ApiGetProduct