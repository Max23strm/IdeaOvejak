import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from '../views/Home'
import Error from '../views/Error'
import Producto from '../views/Producto'
import Catalogo from '../views/Catalogo'


function Rutas({data}) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" />
                    <Route path="/producto:id" />
                    <Route path="/category/:id"element={<Catalogo data={data}/>}/>
                    <Route path="/item/:id" element={<Producto data={data}/>}/>
                    <Route path="/checkout:id" />
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas