import React from 'react'
import NavBar from '../components/NavBar'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'
function Layout({carrito}) {
    return (
        <>
            <NavBar carrito={carrito}/>  
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Layout