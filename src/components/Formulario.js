import React, {useState} from 'react'
import BotonesCompra from './BotonesCompra'
import {CarritoConsumer} from '../context/CarritoProvider';
import '../styles/Formulario.css'
import useFirebase from '../hooks/useFirebase';


function Formulario() {
    const { fetchGenerateTicket}= useFirebase()


    const {carrito, clear, total}=CarritoConsumer()
    const [formulario, setFormulario]= useState({
        buyer:{
            nombre:"",
            apellido:"",
            telefono:"",
            email:"",
            mensaje:""
        },
            total: total,
            items:carrito
    }
    )
    
    //Destucturing para los elementos del formulario//
    const { buyer:{nombre,apellido,telefono,email}}=formulario

    const handleChange=(e)=>{
        const {name,value} =e.target;
        setFormulario({
            ...formulario,
            buyer:{
                ...formulario.buyer,
                [name]:value
            }
        })

    }

    return (
        <section>
            <form>
                <section>
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        id="nombre"
                        type="text"
                        //value={nombre}
                        name="nombre"
                        value={nombre}
                        placeholder='Ingrese su nombre'
                        onChange={handleChange}
                        />
                </section>

                <section>
                    <label htmlFor="apellido">Apellido</label>
                    <input 
                        name="apellido"
                        placeholder='Ingrese su apellido'
                        id="apellido"
                        value={apellido}
                        onChange={handleChange} 
                        type="text"/>
                </section>

                <section>
                    <label htmlFor="email">Email</label>
                    <input 
                        name="email"
                        placeholder='Ingrese su email'
                        id="email"
                        value={email}
                        onChange={handleChange}
                        type="email"/>
                </section>
                <section>
                    <label htmlFor="telefono">Telefono</label>
                    <input 
                        name="telefono"
                        placeholder='Ingrese su número telefonico'
                        id="email"
                        value={telefono}
                        onChange={handleChange}
                        type="tel"/>
                </section>

                <section>
                    <label htmlFor="detalles">Detalles adicionales</label>
                    <textarea 
                        name="detalles"
                        onChange={handleChange}
                        placeholder='Ingrese su detalles adicionales'
                        id="detalles"
                        type="textarea"/>
                </section>
            </form>
            <BotonesCompra datos={formulario} comprar={fetchGenerateTicket} total={total}carrito={carrito} clear={clear} />
        </section>
    )
}

export default Formulario
