import React from 'react'
import Carro from '../imagenes/carrito.png'
import '../styles/Carrito.css'
import AgregadoCarrito from './AgregadoCarrito'



function Carrito({cantidad}) {
    return (
        <div className="carrito">
            <img src={Carro} alt="carrito"></img>
            <p className="cantidadObjetos">{cantidad}</p>
            <AgregadoCarrito/>
        </div>
    )
}

export default Carrito
