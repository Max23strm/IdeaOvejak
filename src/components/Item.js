import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import '../styles/Item.css'

function Item({camino,item}) {

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
            <section className="loInteresante">
                <ItemCount stock={item.stock} initial="1"/>
                <Link className="linkazo" to={`/item/${item.id}`}>
                    <button className="botonazo" onClick={console.log(camino)}>
                        Ver mas detalles..
                    </button>
                </Link>
            </section>
        </div>
    )
}

export default Item
