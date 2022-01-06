import React from 'react'
import {CarritoConsumer} from '../context/CarritoProvider';
import '../styles/AgregadoCarrito.css'

function AgregadoCarrito() {
    const {itemTemporal,setItemTemporal}=CarritoConsumer()
    let clase="oculto"
    if(itemTemporal[0]){
        clase="visible"
        setTimeout(() => {
            setItemTemporal([]) 
        }, 3000);
    }
    return (
        <section className={`${clase} otro` }>
            <img className="imagenpop"src={itemTemporal[0]?itemTemporal[0].img:null} alt='imagen de producto'></img>
            <p>Producto agregado al carrito</p>
        </section>
    )
}

export default AgregadoCarrito
