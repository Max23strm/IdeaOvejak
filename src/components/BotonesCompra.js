import React from 'react'
import '../styles/BotonesCompra.css'
function BotonesCompra({carrito, clear}) {
    let total=0
    carrito.map(element=>{
        return total+=element.precio
        })
    return (
        <section className='botonesDeCompra'>
            <p>TOTAL CARRITO: $ <span>{total}</span> USD</p>
            <button onClick={clear}className='botonVaciar'>VACIAR CARRITO</button>
            <button className='botonComprar'>PROCEDER AL PAGO</button>
        </section>
    )
}

export default BotonesCompra
