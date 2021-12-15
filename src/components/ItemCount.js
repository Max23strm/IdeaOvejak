import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/ItemCount.css'

function ItemCount({stock, initial, onAdd, Item}) {
    const[cantidad, setCantidad]= useState(parseInt(initial))

    return (
        <div className="Contador">
            <section className='seccionPrincipal'>
                <button className="ponerQuitar"onClick={()=>cantidad<=1?setCantidad(cantidad):setCantidad(cantidad-1)}>&#45;</button>
                <section className="centro">

                    <p>{stock<=0?"0":cantidad}</p>
                    <button className={stock<=0?"sinStock":"enStock"}  disabled={stock<=0?true:false} onClick={()=>console.log(cantidad)}>{stock<=0?"No disponible":"Agregar al carrito"}</button>
                
                </section>
                <button  className="ponerQuitar"onClick={()=>cantidad<stock?setCantidad(cantidad+1):setCantidad(cantidad)}>&#43;</button>
            </section>
        </div>
    )
}
export default ItemCount
