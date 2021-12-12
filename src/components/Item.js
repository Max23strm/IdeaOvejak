import React from 'react'
import ItemCount from './ItemCount'
import '../styles/Item.css'

function Item({item}) {
    return (
        <div className="tarjeta">
            <img src={item.img} alt="camiseta en venta"></img>
            <section className="detalles">
                <section className="principal">
                    <h4 className="titulo">{item.equipo} <br/>{item.tipo}</h4>
                    <h4 className="precio">{item.precio}</h4>
                </section>
                <h5>{item.torneo}</h5>
                <h5>{item.deporte}</h5>
                <p>{item.descripción}</p>
            </section>
            <ItemCount stock={item.stock} initial="1"/>
        </div>
    )
}

export default Item
