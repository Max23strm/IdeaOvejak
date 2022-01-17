import React from 'react'
import { useState } from 'react/cjs/react.development'
import '../styles/Ordenes.css'
import { Link } from 'react-router-dom'

function Ordenes() {
    const [nOrden, setNOrden]= useState("")
    const handleChange=(e)=>{
        setNOrden(e.target.value)
    }
    return (
        <div className='buscadorOrdenes'>
            <section>
                <h2>Ingrese su número de orden</h2>
                <input className='inputOrden' onChange={handleChange}></input>
                <Link to={`/ticket/${nOrden}`}><button>Buscar</button></Link>
            </section>
        </div>
    )
}

export default Ordenes
