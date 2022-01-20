import {createContext, useContext, useState} from 'react'

const CarritoContext= createContext();

export const CarritoConsumer= ()=>useContext(CarritoContext)


function CarritoProvider({children}) {

    const [carrito, setCarrito]= useState([])
    const [terminar, setTerminar]= useState("invisible"); 
    const [itemTemporal, setItemTemporal]=useState([])

    const mostrarComprado=()=>{
        setTerminar("visible")
        setTimeout(setTerminar("invisible"),5000)
    }
    //FUNCION PARA ENCONTRAR ITEM
    const isInCart=(id)=>{
        var siEsta= carrito.filter(objeto=> objeto.id===id)
        if(siEsta.length>0){
            return true
        } else{
            return false
            
        }
    }
    
    //FUNCION PARA AGREGAR ELEMENTO
    const addItem=(item, cantidad,itemId)=>{
        setItemTemporal([item])
        if(!carrito[0]){
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
                carrito[indice].cantidad+=cantidad
                
            }else{
                item["cantidad"]=cantidad
                setCarrito([...carrito, item])
                
            }
            
        }
        mostrarComprado()
    }
    

    
    //FUNCION PARA REMOVER ELEMENTO
    const removeOneItem=(item,itemId)=>{
        for(var i = 0; i < carrito.length; i++){
            if (carrito[i].id===itemId){
                if(carrito[i].cantidad>1){

                    let cantidad=carrito[i].cantidad
                    carrito.splice(i,1)
                    cantidad--
                    item["cantidad"]=cantidad
                    setCarrito([ item,...carrito])
                }else{
                    setCarrito(carrito.filter((ele)=>{
                                //eslint-disable-next-line
                        return ele!=item
                    }))
                    if(!carrito[0]){
                        setCarrito([])
                    }

                }
            }
        }
    }

    //FUNCION PARA AGREGAR UN ITEM
    const addOneItem=(item,itemId)=>{
        let cantidad=""
        for(var i = 0; i < carrito.length; i++){
            if (carrito[i].id===itemId){
                cantidad=carrito[i].cantidad
                cantidad++
                //carrito.splice(i,1)
                //setCarrito([item,...carrito])
            }
        }
        let arr = carrito.filter(cosa => cosa !== item)
        item["cantidad"]=cantidad
        setCarrito([item,...arr])
        console.log(carrito)    }

    //FUNCION PARA BORRAR TODO
    const clear=()=>{
        setCarrito([])
    }

    //TOTAL DE LA COMPRA
    let total=0
    const totalCompra=(carrito)=>{
        if(carrito){
        carrito.map((e)=>{
            let monto=e.cantidad*e.precio
            return total+=monto
        })}
    }
    totalCompra(carrito)

    return (
        <CarritoContext.Provider value={{carrito,
            total,
            addItem,
            removeOneItem,
            clear,
            isInCart,
            addOneItem,
            terminar,
            itemTemporal,
            setItemTemporal
            }}>
            {children}
        </CarritoContext.Provider>
    )
}

export default CarritoProvider
