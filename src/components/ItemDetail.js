import ItemCount from './ItemCount'
import '../styles/ItemDetail.css'
import ProductGalery from './ProductGalery';
import TerminarCompra from './TerminarCompra';
import {CarritoConsumer} from '../context/CarritoProvider';

function ItemDetail({item}) {
    const {addItem, terminar}=CarritoConsumer();
    return (
        <div className="itemDetalles">
            <section className="galeriaContenedor">
                <ProductGalery elementos={item.img}/>
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
            <ItemCount stock={item.stock} item={item} clase="detalle" onAdd={addItem} initial="1"/>
            <TerminarCompra clase={terminar}/>
            </section>
        </div>
    )
}

export default ItemDetail
