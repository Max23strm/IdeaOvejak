import React, {useState} from 'react'
import '../styles/ItemDetailCount.css'

function ItemDetailCount({stock, initial, onAdd}) {
    const[cantidad, setCantidad]= useState(parseInt(initial))

    return (
        <div className="detalleContador">
            <section className='detallePrincipal'>
                
                <button className="detalleAgregarQuitar" onClick={()=>cantidad<=1?setCantidad(cantidad):setCantidad(cantidad-1)}>&#45;</button>
                <section className="detalleCentro">
                    <p>{stock<=0?"0":cantidad}</p>
                    
                    <button className={stock<=0?"sinStock":"hayStock botonCompra"}  disabled={stock<=0?true:false} onClick={()=>console.log(cantidad)}>{stock<=0?"No disponible":"Agregar al carrito"}</button>
                </section>

                <button className="detalleAgregarQuitar" onClick={()=>cantidad<stock?setCantidad(cantidad+1):setCantidad(cantidad)}>&#43;</button>
            </section>
        </div>
    )
}
export default ItemDetailCount
