import React from 'react'
import ProductFetch from '../components/ProductFetch'
import NavbarResponsive from '../components/NavbarResponsive'
import ApiProductFetch from '../components/apiProductFetch'

const Home = () => {
    return (
        <div>
            <NavbarResponsive />
            <ApiProductFetch />
            {/* <ProductFetch /> */}
        </div>
    )
}

export default Home