import React from 'react'
import '../styles/BotonesCompra.css'
function BotonesCompra({datos, comprar,total,carrito, clear}) {

    return (
        <section className='botonesDeCompra'>
            <p>TOTAL CARRITO: $ <span>{total}</span> USD</p>
            <button onClick={clear}className='botonVaciar'>VACIAR CARRITO</button>
            <button onClick={()=>comprar(datos)}className='botonComprar'>PROCEDER AL PAGO</button>
        </section>
    )
}

export default BotonesCompra
