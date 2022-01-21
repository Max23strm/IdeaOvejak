import { useState } from 'react/cjs/react.development'
import{addDoc, collection, getDocs, getDoc, doc} from "firebase/firestore"
//import db from "../service"
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyBt4tHMCq7d0yfhg_oYpXEvHcBoR7kS6RA",

    authDomain: "ecommerce-28185.firebaseapp.com",

    projectId: "ecommerce-28185",

    storageBucket: "ecommerce-28185.appspot.com",

    messagingSenderId: "503979312960",

    appId: "1:503979312960:web:ff082608c48d285894dca5"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db= getFirestore(app)

//export default db

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
