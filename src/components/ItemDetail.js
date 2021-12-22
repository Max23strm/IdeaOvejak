import ItemCount from './ItemCount'
import '../styles/ItemDetail.css'
import ProductGalery from './ProductGalery';
import { useState } from 'react';
import TerminarCompra from './TerminarCompra';

function ItemDetail(item) {
    const [comprado, setComprado]= useState("visible");
    const [terminar, setTerminar]= useState("invisible"); 
    let producto=item.item.item

    function onAdd (producto) {
        setComprado("invisible")
        setTerminar("flex")
    }


    return (
        <div className="itemDetalles">
            <section className="galeriaContenedor">
                <ProductGalery elementos={producto.img}/>
            </section>

            <section className="detallesGenerales">
                <section className="titulo">
                <h2>{producto.equipo}</h2>
                <h3>{producto.tipo}</h3>

            </section>
                <section className="detallesMenores">
                    <p>Deporte: <a href={producto.deporte}>{item.deporte}</a></p>
                    <p>Torneo:  <a href={producto.torneo}>{item.torneo}</a></p>
                    <p>Pais:  <a href={producto.pais}>{producto.pais}</a></p>
                    <p className="descripcion">{producto.descripción}</p>
                </section>
                <section className="sectionPrecio">
                    <h6 className="precio">{producto.precio}</h6>
                    <h6 className="detallePrecio">Incluye envio dentro del área</h6>
                </section>
            <ItemCount stock={producto.stock} item={producto} clase="detalle" clase2={comprado} onAdd={onAdd} initial="1"/>
            <TerminarCompra clase={terminar}/>
            </section>
        </div>
    )
}

export default ItemDetail
