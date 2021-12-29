import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/CompraVacia.css'

function CompraVacia() {
    return (
        <section className='compraVacia'>
            <h1>SU CARRO DE COMPRAS SE ENCUENTRA VACÍO!</h1>
            <h2>Por favor dirijase a la tienda y seleccione los productos que desea comprar</h2>
            <Link to='/'><button>Tienda</button></Link>
        </section>
    )
}

export default CompraVacia
