import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import '../styles/Item.css'

function Item({camiseta, clase, onAdd, removeOneItem, addOneItem}) {
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
                    <p className={`${clase}Item`}>${item.precio}</p>
                </section>
                {/* <h5>{item.torneo}</h5>
                <h5>{item.deporte}</h5>
                <p>{item.descripción}</p> */}
                <section className={`${clase}DetallesCarro`}>
                    <p>ENVIO INCLUIDO</p>
                    <p>ARTICULO NO PERSONALIZADO</p>
                </section>
            </section>
            
            <section className={`${clase}Precios`}>
                <p>CANTIDAD: {item.cantidad}</p>
                <p>PRECIO INDIVIDUAL: $ <span>{item.precio}</span> USD</p>
                <p>TOTAL: $ <span>{parseInt(item.precio)*item.cantidad}</span> USD</p>
            </section>


            <section className={`${clase}AgregarQuitar`}>
                <p>MODIFICAR CANTIDAD</p>
                <section className='botones'>
                    <button onClick={()=>removeOneItem(item,item.id)} className='quitar'>REMOVER</button>
                    <button onClick={()=>addOneItem(item,item.id)} className='agregar'>AGREGAR</button>
                </section>
            </section>

            <section className={`${clase}loInteresante`}>
                <ItemCount stock={item.stock} item={item} onAdd={onAdd} clase="normal"initial="1"/>
                
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
