import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import '../styles/Item.css'

function Item({camiseta, clase, onAdd}) {
    const item=camiseta;

    return (
        <div className={clase}>
            <img src={item.img} alt="camiseta en venta"></img>
            
            <section className={`${clase}detalles`}>
                <section className={`${clase}principal`}>
                    <section className={`${clase}titulo`}>
                        <h4 >{item.equipo}</h4>
                        <h5>{item.tipo}</h5>
                    </section>
                    <h4 className={`${clase}precio`}>{item.precio}</h4>
                </section>
                {/* <h5>{item.torneo}</h5>
                <h5>{item.deporte}</h5>
                <p>{item.descripción}</p> */}
            </section>
            
            <section className={`${clase}loInteresante`}>
                <ItemCount stock={item.stock} onAdd={onAdd} clase="normal"initial="1"/>
                
                <Link className={`${clase}linkazo`} to={`/item/${item.id}`}>
                    <button className={`${clase}botonazo`}>
                        Ver mas detalles..
                    </button>
                </Link>
            </section>
        </div>
    )
}

export default Item
