import React from 'react'
import BotonesCompra from './BotonesCompra'
import {CarritoConsumer} from '../context/CarritoProvider';
import Item from './Item'
import Formulario from './Formulario';
import '../styles/Cart.css'

function CompraNormal() {
    const {carrito,removeOneItem, clear, addOneItem}=CarritoConsumer()
    console.log(carrito)
    return (
        <section className='compraContainer'>
            <div>

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
            <Formulario carrito={carrito}/>
        </section>
    )
}

export default CompraNormal
