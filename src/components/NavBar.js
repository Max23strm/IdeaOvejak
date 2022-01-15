import React, {useState} from 'react'
import Menu from '../UI/Menu'
import Cerrar from '../imagenes/cerrar.png'
import Carrito from '../UI/Carrito'
import '../styles/NavBar.css'
import{Link, NavLink} from 'react-router-dom'
import { CarritoConsumer } from '../context/CarritoProvider'



function NavBar() {
    const{carrito}=CarritoConsumer();

    const [mostrarNav, setMostrarNav]= useState("esconderNav")

    
    //MOSTRAR U OCULTAR NAVBAR
    const [claseDeNav, setClaseDeNav]=useState("")
    let scrollGuardado=0
    const scrollear=()=>{
        const scrollActual=window.scrollY
        if (scrollActual>scrollGuardado && !claseDeNav==="scroll-down"){
            console.log("si baja", claseDeNav)
            setClaseDeNav("scroll-down")
        } else if (scrollActual<scrollGuardado && claseDeNav==="scroll-down"){
            console.log("si sube",claseDeNav)
            setClaseDeNav("scroll-up")
        }
        scrollGuardado=scrollActual;
    }


    //MEJORA UN POCO EL RENDIMIENTO DEL SCROLL
    function throttle (scrollear, limite) {
        let wait = false;                  
        return function () {              
            if (!wait) {                  
                scrollear.call();           
                wait = true;               
                setTimeout(function () {   
                    wait = false;          
                }, limite);
            }
        }
    }
    
    window.addEventListener("scroll", throttle(scrollear, 100));


    return (
        <nav className={claseDeNav}>
            <Link to="/"><h2>LaCasaca</h2></Link>

            <section className={`opciones ${mostrarNav}`} id="opciones">
                <button className="botonCerrar" onClick={()=>setMostrarNav("esconderNav")}>
                    <img src={Cerrar} alt="cerrar"  />
                </button>
                <ul className="opcionesNavegacion">
                    {/* <li className="opcionNavegacion">INICIO</li> */}
                    <li className="opcionNavegacion">
                        <img alt='expand'
                            src="https://s2.svgbox.net/materialui.svg?ic=arrow_forward_ios"
                            className='expandArrow'/>
                        DEPORTES 
                        <ul onClick={()=>setMostrarNav("esconderNav")}>
                            <li><NavLink to="/category/Futbol">Futbol</NavLink></li>
                            <li><NavLink to="/category/Rugby">Rugby</NavLink></li>
                            <li><NavLink to="/category/Basquetball">Basquetball</NavLink></li>
                        </ul>
                    </li>
                    <li className="opcionNavegacion">
                        <img alt='expand'
                            className='expandArrow'
                            src="https://s2.svgbox.net/materialui.svg?ic=arrow_forward_ios"/>
                            CATEGORIAS 
                        <ul onClick={()=>setMostrarNav("esconderNav")}>
                            <li><NavLink to="/category/Camiseta">Camisetas</NavLink></li>
                            <li><NavLink to="/category/Shorts">Shorts</NavLink></li>
                            <li><NavLink to="/category/Conjunto">Conjuntos</NavLink></li>
                            <li><NavLink to="/category/Accesorios">Accesorios</NavLink></li>
                        </ul>
                    </li>
                        <li className="opcionNavegacion">
                        CONTACTO
                    </li>
                </ul>
            </section>
            <section className="iconos">
                    <button onClick={()=>setMostrarNav("mostrarNav")}>
                        <Menu/>
                    </button>
                    
                    <Carrito cantidad={carrito.length}/>

            </section>
        </nav>
    )
}

export default NavBar
