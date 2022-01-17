import { useState } from 'react/cjs/react.development'
//import {GlobarProvider} from '../context/GlobalProvider'
import{addDoc, collection, getDocs, getDoc, doc} from "firebase/firestore"
import db from "../service"


function useFirebase() {
    const[producto, setProducto]=useState({})
    const[productos, setProductos]=useState([])
    
    //BUSCA UNA COLECCION
    const fetchGetDataCollection=async()=>{
        try{
            const data=collection(db,"items");
            const col=await getDocs(data)
            const response= col.docs.map(doc=>(
                ({id:doc.id, ...doc.data()}))
                )
            setProductos(response)
        } catch(error){
            console.log(error)
        }
    }


    //BUSCA UN ELEMENTO POR ID
    const fetchGetIndividualProduct= async (id)=>{
        try{
            const document= doc(db,"items",id)
            const response= await getDoc(document)
            let result=response.data()
            setProducto({id:response.id,...result})
        }
        catch (error){
            console.log(error)
        }
    }

    //GENERA UN TICKET
    const fetchGenerateTicket= async (datos)=>{
    let orden=""
        try{
            const col=collection(db,"ordenes")
            const order= await addDoc(col,datos)
            orden=order.id
            console.log(`Numero de orden ${orden}`)
            return orden
        } catch (error){
        }

        }

    const fetchGetIndividualTicket= async (id)=>{
        try{
            const document= doc(db,"ordenes",id)
            const response= await getDoc(document)
            let result=response.data()
            setProducto({id:response.id,...result})
        }
        catch (error){
            console.log(error)
        }
    }
    
    return {

        producto,
        productos,
        fetchGenerateTicket,
        fetchGetDataCollection,
        fetchGetIndividualTicket,
        fetchGetIndividualProduct
    }
}








export default useFirebase
