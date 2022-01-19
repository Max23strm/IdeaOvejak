import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/BotonesCompra.css'

function BotonesCompra({datos, comprar,total,clear,setFecha,orden,setOrden}) {
    
    let valor
    const comprado=(datos)=>{
        setFecha(new Date())
        valor= comprar(datos)
        valor.then((retorno)=>{
            setOrden(retorno)
        })
    }

    //Verifica si los datos han sido llenados
    const verifica=(datos)=>{
        if(datos.buyer.nombre!==""&&
        datos.buyer.apellido!==""&&
        datos.buyer.telefono!==""&&
        datos.buyer.email!==""){
            comprado(datos)
        }
    }




    return (
        <section className='botonesDeCompra'>
            <p>TOTAL CARRITO: $ <span>{total}</span> USD</p>
            <button onClick={clear}className='botonVaciar'>VACIAR CARRITO</button>
            <button onClick={()=>verifica(datos)}className='botonComprar'>PROCEDER AL PAGO
                {/* <Link to={"/completado"}> */}
            </button>
            {orden?<Link onClick={clear} to={`/ticket/${orden} `}>
                        <button className="verTicket">Ver ticket de compra</button>
                    </Link>:null}
    
                
        </section>
    )
}

export default BotonesCompra
