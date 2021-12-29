import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/TerminarCompra.css"


function TerminarCompra({clase}) {
    return (
        <section className={`agregado ${clase}`}>
            <h3>Elemento agregado al carrito</h3>
            <Link to="/cart"><button>Ir al carrito</button></Link>
        </section>
    )
}

export default TerminarCompra
