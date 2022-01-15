import React from 'react'
import {CarritoConsumer} from '../context/CarritoProvider';
import CompraVacia from '../components/CompraVacia'
import CompraNormal from './CompraNormal';


function Cart() {
    const {carrito}=CarritoConsumer()

    return (
        <section className='pantallaCarrito'>
            {carrito.length===0?
            <CompraVacia/>:
            <CompraNormal/>}
        </section>
        
    )
    }

export default Cart
