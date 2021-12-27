import {createContext, useContext, useState} from 'react'

const CarritoContext= createContext();

export const CarritoConsumer= ()=>useContext(CarritoContext)


function CarritoProvider({children}) {

    const [carrito, setCarrito]= useState([])
    console.log(carrito)


    //FUNCION PARA ENCONTRAR ITEM
    const isInCart=(id)=>{
        var siEsta= carrito.filter(objeto=> objeto.id===id)
        if(siEsta.length>0){
            console.log(true)
            return true
        } else{
            console.log(false)
            return false
            
        }
    }

    //FUNCION PARA AGREGAR ELEMENTO
    const addItem=(item, cantidad,itemId)=>{
        
        if(!carrito[0]){
            console.log("no habia nada, lo agregamos")
            item["cantidad"]=cantidad
            setCarrito([...carrito, item])
        }
        else{
            let indice
            //FUNCION PARA VERIFICAR SI EL OBJETO YA SE ENCUENTRA EN EL ARREGLO
            let existeEnCarrito=()=> {for (var i = 0; i < carrito.length; i++){
                if (carrito[i].id===itemId){
                    indice=i
                    return true
                }
            }}
            // EJECUTA UNA ACCION DEPENDIENDO SI EL OBJETO EXISTE O NO
            if(existeEnCarrito()){
                console.log("este no se deberia crear, solo modificar cantidad")
                carrito[indice].cantidad+=cantidad
                
            }else{
                item["cantidad"]=cantidad
                setCarrito([...carrito, item])
                
            }
    
        }
    }


    
    //FUNCION PARA REMOVER ELEMENTO
    const removeItem=(itemId)=>{
        for(var i = 0; i < carrito.length; i++){
            if (carrito[i].id===itemId){
                if(carrito[i].cantidad>1){
                    carrito[i].cantidad--
                }else{
                    carrito.splice(i,1)
                }
            }
        }
        console.log(carrito)
    }


    //FUNCION PARA BORRAR TODO
    const clear=()=>{
        setCarrito([])
    }



    return (
        <CarritoContext.Provider value={{carrito, addItem, removeItem, clear, isInCart}}>
            {children}
        </CarritoContext.Provider>
    )
}

export default CarritoProvider
