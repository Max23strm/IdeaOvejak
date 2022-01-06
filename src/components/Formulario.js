import React, {useState} from 'react'
import BotonesCompra from './BotonesCompra'
import {CarritoConsumer} from '../context/CarritoProvider';


function Formulario() {
    const [formulario, setFormulario]= useState(

    )
    const {carrito,removeOneItem, clear, addOneItem}=CarritoConsumer()  

    return (
        <section>
            <form>
                <section>
                    <label for="nombre">Nombre</label>
                    <input id="nombre" type="text"/>
                </section>

                <section>
                    <label for="apellido">Apellido</label>
                    <input id="apellido" type="text"/>
                </section>

                <section>
                    <label for="email">Email</label>
                    <input id="email" type="email"/>
                </section>

                <section>
                    <label for="telefono">Teléfono</label>
                    <input id="email" type="phone"/>
                </section>
            </form>
            <BotonesCompra carrito={carrito} clear={clear}/>
        </section>
    )
}

export default Formulario
