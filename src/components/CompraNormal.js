import React from 'react'
import BotonesCompra from './BotonesCompra'
import {CarritoConsumer} from '../context/CarritoProvider';
import Item from './Item'

function CompraNormal() {
    const {carrito,removeOneItem, clear, addOneItem}=CarritoConsumer()  
    return (
        <div>
            <BotonesCompra carrito={carrito} clear={clear}/>

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
    )
}

export default CompraNormal
