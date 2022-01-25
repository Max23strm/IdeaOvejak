import ItemCount from './ItemCount'
import '../styles/ItemDetail.css'
import TerminarCompra from './TerminarCompra';
import {CarritoConsumer} from '../context/CarritoProvider';
import { useState } from 'react';
import Spinner from '../UI/Spinner';

function ItemDetail({item}) {
    const {addItem}=CarritoConsumer();
    const [compraTerminada, setCompraTerminada]= useState("escondido")
    return (
        <div className="itemDetalles">
            <section className="galeriaContenedor">
                {item.img?<img src={item.img[0]} alt="imagen del producto"/>:<Spinner/>}
                
            </section>

            <section className="detallesGenerales">
                <section className="titulo">
                <h2>{item.equipo}</h2>
                <h3>{item.tipo}</h3>
                <p>Item: {item.id}</p>
            </section>
            <section className="sectionPrecio">
                <h6 className="precio">$<span>{item.precio}</span>USD</h6>
                <h6 className="detallePrecio">Incluye envio dentro del área</h6>
            </section>
            <section className="detallesMenores">
                <p><span>Marca:</span> {item.marca}</p>
                <p><span>Tipo:</span> {item.indumentaria}</p>
                <p><span>Deporte:</span> {item.deporte}</p>
                <p><span>Torneo:</span> {item.torneo}</p>
                <p><span>Stock:</span> {item.stock}</p>
                <p className="descripcion">{item.descripcion}</p>
            </section>
            <ItemCount stock={item.stock} item={item} clase="detalle" onAdd={addItem} setCompraTerminada={setCompraTerminada} initial="1"/>
            <TerminarCompra clase={compraTerminada}/>
            </section>
        </div>
    )
}

export default ItemDetail
