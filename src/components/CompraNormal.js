import React from 'react'
import {CarritoConsumer} from '../context/CarritoProvider';
import Item from './Item'
import Formulario from './Formulario';
import '../styles/Cart.css'

function CompraNormal() {
    const {carrito,removeOneItem, addOneItem}=CarritoConsumer()
    return (
        <section className='compraContainer'>
            <div className='elementosComprados'>
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
            <Formulario />
        </section>
    )
}

export default CompraNormal
