import React from 'react'
import { useState } from 'react/cjs/react.development'
//import {GlobarProvider} from '../context/GlobalProvider'
import{addDoc, collection, getDocs, getDoc, doc} from "firebase/firestore"
import db from "../service"







function useFirebase() {
    
    const[producto, setProducto]=useState({})
    const[productos, setProductos]=useState([])
  //  const {setLoading}= GlobarProvider()
    
    //BUSCA UNA COLECCION
    const fetchGetDataCollection=async()=>{
    //    setLoading(true)
        try{
            const data=collection(db,"items");
            const col=await getDocs(data)
            const response= col.docs.map(doc=>(
                ({id:doc.id, ...doc.data()}))
                )
            setProductos(response)
    //        setLoading(false)
        } catch(error){
            console.log(error)
        }
    }


    //BUSCA UN ELEMENTO POR ID
    const fetchGetIndividualProduct= async (id)=>{
    //    setLoading(true)
        try{
            console.log(id)
            const document= doc(db,"items",id)
            const response= await getDoc(document)
            let result=response.data()
            setProducto({id:response.id,...result})
    //        setLoading(false)
        }
        catch (error){
            console.log(error)
        }
    }

    //GENERA UN TICKET
    const fetchGenerateTicket= async (datos)=>{
    //    setLoading(true)
        try{
            const col=collection(db,"ordenes")
            const order= await addDoc(col,datos)
            
            console.log(`Numero de orden ${order.id}`)
        } catch (error){
            console.log(error)
        }
    }
    
    return {
        producto,
        productos,
        fetchGenerateTicket,
        fetchGetDataCollection,
        fetchGetIndividualProduct
    }
}








export default useFirebase
