import React, { useState } from 'react'
import IonIcon from '@reacticons/ionicons';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';


const NavbarResponsive = () => {

    let [open, setOpen] = useState(false);

    return (
        <header className='flex justify-between md:flex-col bg-slate-200 w-full sticky top-0 z-[1]'>
            <div className='flex items-center md:w-[92%]  mx-auto justify-center md:justify-between py-2 bg-slate-200 '>
                <div className="content-center items-center">
                    <Link to="/">
                        <span className="bg-theme-color text-lg px-3 py-2  text-white font-bold content-center text-center">Di Me🛒</span>
                        <span href="#" className=" px-2 py-1.5 text-lg text-theme-color content-center hover:bg-theme-color hover:text-white border-theme-color border- border-2 text-center font-bold">DWA🛍️</span></Link>
                </div>
                <SearchBox />
                <div className='flex items-center gap-2'>
                    <Link to="/sign-up"><IonIcon name="person-circle" className="text-4xl md:text-5xl text-theme-color" /></Link>
                    <Link><IonIcon name="cart-outline" className="text-4xl md:text-5xl text-the" /></Link>
                </div>
            </div >
            <nav className='flex items-center gap-2 md:w-[92%]  mx-auto py-2 justify-center bg-slate-200'>
                <div className={`sm:min-h-fit  md:min-h-fit md:w-auto md:z-auto z-[1] px-12 py-6 md:py-0 absolute md:static bg-slate-200 min-h-[40vh] right-0  flex items-center transition-all duration-500 ease-in-out ${open ? 'top-14 opacity-100' : 'top-[-500px] md:opacity-100 opacity-0'}`}>
                    <div className='flex sm:gap-5 sm:flex-row md:items-center gap-2 md:flex-row flex-col transition-all duration-1000 ease-in-out'>
                        <Link to="/" className='sm:text-base md:text-lg px-2 py-1 hover:bg-theme-color hover:text-white rounded'>Today's Deals</Link>
                        <Link to="/add-new" className='sm:text-base md:text-lg px-2 py-1 hover:bg-theme-color hover:text-white rounded'>Categories</Link>
                        <Link to="/pending" className='sm:text-base md:text-lg px-2 py-1 hover:bg-theme-color hover:text-white rounded'>Gift Cards</Link>
                        <Link to="/pending" className='sm:text-base md:text-lg px-2 py-1 hover:bg-theme-color hover:text-white rounded'>Sell</Link>
                        <Link to="/pending" className='sm:text-base md:text-lg px-2 py-1 hover:bg-theme-color hover:text-white rounded'>About Us</Link>
                        <Link to="/pending" className='sm:text-base md:text-lg px-2 py-1 hover:bg-theme-color hover:text-white rounded'>Contact Us</Link>
                    </div>
                </div >
                <div onClick={() => setOpen(!open)} className='menuIcon text-theme-color mx-2 cursor-pointer md:hidden text-4xl'>
                    <IonIcon name={open ? 'close' : 'menu'} />
                    {/* <IonIcon name="close" /> */}
                </div>
            </nav >
        </header >

    )
}

export default NavbarResponsive