import React from 'react'
import {CarritoConsumer} from '../context/CarritoProvider';
import Item from './Item'
import Formulario from './Formulario';
import '../styles/Cart.css'
import { useState } from 'react/cjs/react.development';

function CompraNormal() {
    const[orden, setOrden]=useState()
    const {carrito,removeOneItem, addOneItem}=CarritoConsumer()
    return (
        <section className='compraContainer'>
            <div className='elementosComprados'>
                <h2>Carro de compras</h2>
                {carrito.map(elemento=>{
                    return(
                        <Item key={elemento.id}
                        removeOneItem={removeOneItem}
                        addOneItem={addOneItem}
                        clase="carro" 
                        camiseta={elemento}/>
                        )
                    })}
            
            </div>
            <Formulario orden={orden} setOrden={setOrden}/>
        </section>
    )
}

export default CompraNormal
