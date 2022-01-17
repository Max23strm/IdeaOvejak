import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/BotonesCompra.css'
import Boton from './Boton'

function BotonesCompra({datos, comprar,total,clear,setFecha,orden,setOrden}) {
    
    let valor
    const comprado=(datos)=>{
        setFecha(new Date())
        valor= comprar(datos)
        valor.then((retorno)=>{
            setOrden(retorno)
            console.log(orden)
        })
    }
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
                        <Boton orden={orden} >Ver ticket de compra</Boton>
                    </Link>:null}
    
                
        </section>
    )
}

export default BotonesCompra
