import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Item.css'
import Spinner from '../UI/Spinner';

function Item({camiseta, clase, onAdd, removeOneItem, addOneItem, }) {
    const item=camiseta
    
    return (
        <div className={clase}>
            {item.img?<img src={item.img[0]} alt="camiseta en venta"/>:<Spinner/>}
            
            <section className={`${clase}detalles`}>
                <section className={`${clase}principal`}>
                    <section className={`${clase}titulo`}>
                        <h4 >{item.equipo}</h4>
                        <h5>{item.tipo}</h5>
                    </section>
                    <p className={`${clase}Item`}>${item.precio}</p>
                </section>
                <section className={`${clase}DetallesCarro`}>
                    <p>ENVIO INCLUIDO</p>
                    <p>ARTICULO NO PERSONALIZADO</p>
                </section>
                <section className={`${clase}Precios`}>
                    <p >STOCK: {item.stock}</p>
                    <p>CANTIDAD: {item.cantidad}</p>
                    <p>TOTAL: $ {item.precio*item.cantidad} USD</p>
                </section>
            <section className={`${clase}AgregarQuitar`}>
                <p>MODIFICAR CANTIDAD</p>
                <section className='botones'>
                    <button onClick={()=>removeOneItem(item,item.id)} className='quitar'>REMOVER</button>
                    <button onClick={()=>addOneItem(item,item.id)} className='agregar'>AGREGAR</button>
                </section>
            </section>
            </section>
            



            <section className={`${clase}loInteresante`}>
                
                <Link className={`${clase}linkazo`} to={`/item/${item.id}`}>
                    <button className={`${clase}botonazo`}>
                        Detalles..
                    </button>
                </Link>
                {/* <ItemCount stock={item.stock} item={item} onAdd={onAdd} clase="normal"initial="1"/> */}
            </section>
        </div>
    )
}

export default Item
