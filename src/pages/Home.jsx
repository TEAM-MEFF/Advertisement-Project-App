import React from 'react'
import ProductFetch from '../components/ProductFetch'
import NavbarResponsive from '../components/NavbarResponsive'

const Home = () => {
    return (
        <div>
            <NavbarResponsive />
            <ProductFetch />
        </div>
    )
}

export default Home