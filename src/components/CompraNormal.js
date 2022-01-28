import React, { useState } from 'react'
import {CarritoConsumer} from '../context/CarritoProvider';
import Item from './Item'
import Formulario from './Formulario';
import '../styles/Cart.css' 

function CompraNormal() {
    const[orden, setOrden]=useState()
    const {carrito,removeOneItem, addOneItem, mensajeError}=CarritoConsumer()
    return (
        <section className='compraContainer'>
            
                {mensajeError?<section className='errorStock'><h2>Hay un error en la compra, intente nuevamente</h2>
                    <h3>Alguno de los elementos que está intentando comprar no cuenta con suficiente stock</h3></section>:
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
                    }

            <Formulario orden={orden} setOrden={setOrden}/>
        </section>
    )
}

export default CompraNormal
