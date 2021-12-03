import React, {useState} from 'react'
import '../styles/ItemCount.css'

function ItemCount({stock, initial, onAdd}) {
    const[cantidad, setCantidad]= useState(parseInt(initial))

    return (
        <div className="Contador">
                <section >
                <button onClick={()=>cantidad<=1?setCantidad(cantidad):setCantidad(cantidad-1)}>&#45;</button>

                <p>{stock<=0?"0":cantidad}</p>
                
                <button onClick={()=>cantidad<stock?setCantidad(cantidad+1):setCantidad(cantidad)}>&#43;</button>
            </section>
            <button className={stock<=0?"sinStock":"enStock"}  disabled={stock<=0?true:false} onClick={()=>console.log(cantidad)}>{stock<=0?"No disponible":"Agregar al carrito"}</button>
        </div>
    )
}
export default ItemCount
