import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from '../views/Home'
import Error from '../views/Error'
import Producto from '../views/Producto'
import Catalogo from '../views/Catalogo'
import CarritoProvider from '../context/CarritoProvider'
import Carrito from '../views/Carrito'
import TicketContainer from '../components/TicketContainer' 
import Ordenes from '../views/Ordenes'

function Rutas({data,tickets}) {
    return (
        <BrowserRouter>
            <CarritoProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<Home data={data}/>}/>
                        {/* <Route path="/cart" /> */}
                        <Route path="/producto:id" />
                        <Route path="/category/:id"element={<Catalogo data={data}/>}/>
                        <Route path="/item/:id" element={<Producto/>}/>
                        <Route path="/cart" element={<Carrito/>} />
                        <Route path="/ticket/:id" datos={tickets}element={<TicketContainer/>} />
                        <Route path="*" element={<Error/>}/>
                        <Route path="/ordenes" element={<Ordenes/>}/>
                    </Route>
                </Routes>
            </CarritoProvider>
        </BrowserRouter>
    )
}

export default Rutas