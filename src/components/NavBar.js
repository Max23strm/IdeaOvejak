import React from 'react'
import Usuario from '../imagenes/usuario.png'
import Menu from '../imagenes/menu.png'
import Cerrar from '../imagenes/cerrar.png'
import Carrito from '../UI/Carrito'
import '../styles/NavBar.css'


function NavBar() {

    
    return (
        <nav>
            <h2>LaCasaca</h2>
            <section className="opciones" id="opciones">
                <img src={Cerrar} alt="cerrar" className="botonCerrar" />
                <ul className="opcionesNavegacion">
                    <li className="opcionNavegacion">INICIO</li>
                    <li className="opcionNavegacion">DEPORTES 
                        <ul>
                            <li>Futbol</li>
                            <li>Rugby</li>
                            <li>Basquetball</li>
                        </ul>
                    </li>
                    <li className="opcionNavegacion">CATEGORIAS 
                        <ul>
                            <li>Camisetas</li>
                            <li>Shorts</li>
                            <li>Conjuntos</li>
                            <li>Accesorios</li>
                            <li>Novedades</li>
                            <li>Ofertas</li>
                        </ul>
                    </li>
                    <li className="opcionNavegacion">CONTACTO</li>
                </ul>
            </section>
            <section className="iconos">
                    <a href="none" id="menu"><img src={Menu} alt="menu" className="menu"></img></a> 
                    <a href="none"><img src={Usuario} alt="usuario"></img></a>
                    <a href="alCarrito"><Carrito cantidad="0"/></a>
            </section>
        </nav>
    )
}

export default NavBar
