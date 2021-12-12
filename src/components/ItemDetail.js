import React from 'react'
import ItemDetailCount from './ItemDetailCount'
import '../styles/ItemDetail.css'
import ProductGalery from './ProductGalery';

function ItemDetail( {item}) {
    return (
        <div className="itemDetalles">
            <section className="galeriaContenedor">
                <ProductGalery elementos={item.imagenes}/>
            </section>

            <section className="detallesGenerales">
                <section className="titulo">
                <h2>{item.equipo}</h2>
                <h3>{item.tipo}</h3>

            </section>
                <section className="detallesMenores">
                    <p>Deporte: <a href={item.deporte}>{item.deporte}</a></p>
                    <p>Torneo:  <a href={item.torneo}>{item.torneo}</a></p>
                    <p>Pais:  <a href={item.pais}>{item.pais}</a></p>
                    <p className="descripcion">{item.descripción}</p>
                </section>
                <section className="sectionPrecio">
                    <h6 className="precio">{item.precio}</h6>
                    <h6 className="detallePrecio">Incluye envio dentro del área</h6>
                </section>
            <ItemDetailCount stock={item.stock} initial="1"/>
            </section>
        </div>
    )
}

export default ItemDetail
