import React from 'react'
import Usuario from '../imagenes/usuario.png'
import Menu from '../imagenes/menu.png'
import Cerrar from '../imagenes/cerrar.png'
import Carrito from '../UI/Carrito'
import '../styles/NavBar.css'
import{Link, NavLink} from 'react-router-dom'
import { CarritoConsumer } from '../context/CarritoProvider'



function NavBar(id) {
    
    const{carrito}=CarritoConsumer();
    
    return (
        <nav>
            <Link to="/"><h2>LaCasaca</h2></Link>
            <section className="opciones" id="opciones">
                <img src={Cerrar} alt="cerrar" className="botonCerrar" />
                <ul className="opcionesNavegacion">
                    {/* <li className="opcionNavegacion">INICIO</li> */}
                    <li className="opcionNavegacion">DEPORTES 
                        <ul>
                            <li><NavLink to="/category/Futbol">Futbol</NavLink></li>
                            <li><NavLink to="/category/Rugby">Rugby</NavLink></li>
                            <li><NavLink to="/category/Basquetball">Basquetball</NavLink></li>
                        </ul>
                    </li>
                    <li className="opcionNavegacion">CATEGORIAS 
                        <ul>
                            <li><NavLink to="/category/Camiseta">Camisetas</NavLink></li>
                            <li><NavLink to="/category/Shorts">Shorts</NavLink></li>
                            <li><NavLink to="/category/Conjunto">Conjuntos</NavLink></li>
                            <li><NavLink to="/category/Accesorios">Accesorios</NavLink></li>
                            {/* <li><NavLink to="/category/Novedades">Novedades</NavLink></li> */}
                            {/* <li><NavLink to="/category/Ofertas">Ofertas</NavLink></li> */}
                        </ul>
                    </li>
                    <li className="opcionNavegacion">CONTACTO</li>
                </ul>
            </section>
            <section className="iconos">
                    <img id="menu" src={Menu} alt="menu" className="menu"></img> 
                    <Link to=""><img src={Usuario} alt="usuario"></img></Link>
                    
                    <Link to="/cart">
                        <Carrito cantidad={carrito.length}/>
                    </Link>
            </section>
        </nav>
    )
}

export default NavBar
