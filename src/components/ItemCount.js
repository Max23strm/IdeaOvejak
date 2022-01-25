import React, {useState} from 'react'
import '../styles/ItemCount.css'

function ItemCount({stock, initial, onAdd, clase, clase2, item, setCompraTerminada}) {
    const[cantidad, setCantidad]= useState(parseInt(initial))
    const elementoAgregado=(item, cantidad, itemid)=>{
        onAdd(item,cantidad,itemid)
        setCompraTerminada("noEscondido")
    }
    return (
        <div className={`${clase}Contador ${clase2}`}>
            <section className={`${clase}seccionPrincipal`}>
                <button className={`${clase}ponerQuitar`}
                onClick={()=>cantidad<=1?setCantidad(cantidad):setCantidad(cantidad-1)}>
                    &#45;
                </button>
                <section className={`${clase}centro`}>

                    <p>{stock<=0?"0":cantidad}</p>

                    <button className={stock<=0?
                        `${clase}sinStock` :`${clase}enStock`}
                        disabled={stock<=0?true:false}
                        onClick={()=>elementoAgregado(item, cantidad,item.id)}>
                            {stock<=0?"No disponible":"Agregar al carrito"}
                    </button>
                
                </section>
                <button  className={`${clase}ponerQuitar`}
                onClick={()=>cantidad<stock?setCantidad(cantidad+1):setCantidad(cantidad)}>
                    &#43;
                </button>
            </section>
        </div>
    )
}
export default ItemCount
