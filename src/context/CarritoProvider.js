import {createContext, useContext, useState} from 'react'

const CarritoContext= createContext();

export const CarritoConsumer= ()=>useContext(CarritoContext)


function CarritoProvider({children}) {

    let prueba= "prueba de contexto"

    const [carrito, setCarrito]= useState([])

    const addCarrito=(item)=>{
        setCarrito([...carrito, item])
    }
    return (
        <CarritoContext.Provider value={{carrito, prueba, addCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}

export default CarritoProvider
