import React, {useState} from 'react'
import BotonesCompra from './BotonesCompra'
import {CarritoConsumer} from '../context/CarritoProvider';
import '../styles/Formulario.css'
import useFirebase from '../hooks/useFirebase';


function Formulario({ orden, setOrden}) {
    const { fetchGenerateTicket}= useFirebase()
    const {carrito, clear, total}=CarritoConsumer()
    const [fecha, setFecha]=useState(new Date())
    const [error, setError]=useState({})
    const [clase, setClase]=useState("completo")


    const [formulario, setFormulario]= useState({
        buyer:{
            nombre:"",
            apellido:"",
            telefono:"",
            email:"",
            mensaje:""
        },
            hora:fecha,
            total: total,
            items:carrito
    }
    )
    
    //Destucturing para los elementos del formulario//
    const { buyer:{nombre,apellido,telefono,email, mensaje}}=formulario

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

    const handleBlur=(e)=>{
        const {value, name}=e.target;
        if(value===""){
            setError({...error,[name]:"Campo bligatorio"})
            setClase("incompleto")
        } else{
            setError({})
            setClase("completo")
        }
    }


    let llaves=Object.keys(formulario.buyer)
    return (
        <section>
            <h2>Datos de envio</h2>
            <form>
                {
                    llaves.map((ele)=>{
                        return <section key={ele}>
                            <label htmlFor={ele}>{ele}</label>
                            {ele==="mensaje"? 
                            <textarea type="textarea"
                            name={ele}
                            value={mensaje}
                            placeholder={`Ingrese su ${ele}`}
                            onChange={handleChange}
                            onBlur={(e)=>handleBlur(e)}
                            />:<input
                            type={ele==="telefono"?"tel":ele==="mensaje"?"textarea":"text"}
                            name={ele}
                            onBlur={(e)=>handleBlur(e)}
                            value={ele==="nombre"?nombre:
                                    ele==="apellido"?apellido:
                                    ele==="telefono"?telefono:
                                    ele==="email"?email:null
                                }
                            placeholder={`Ingrese su ${ele}`}
                            onChange={handleChange}
                            />}
                            <h6 className={clase}>{ele==="nombre"?error.nombre:
                                    ele==="apellido"?error.apellido:
                                    ele==="telefono"?error.telefono:
                                    ele==="email"?error.email:null
                                }</h6>
                        </section>
                    })
                }
            </form>
            <BotonesCompra 
                orden={orden}
                setOrden={setOrden} 
                setFecha={setFecha} 
                fecha={fecha} 
                datos={formulario} 
                comprar={fetchGenerateTicket} 
                total={total}
                carrito={carrito} 
                clear={clear} />
        </section>
    )
}

export default Formulario
