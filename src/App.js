import './App.css';
import Rutas from './routes/Rutas';
import React, { useEffect, useState } from 'react'
import{collection, getDocs} from "firebase/firestore"
import db from "./service"

function App() {
    const[data, setData]=useState([])

    useEffect(()=>{

        const itemListCollection=collection(db,"items");
        getDocs(itemListCollection).then((snapshot)=>{
            setData(
            snapshot.docs.map((doc)=>(
                //console.log(data)
                ({id:doc.id, ...doc.data()}))
            ))
        })
    },[])
    console.log(data)
    return (
        <div className="App">
            <Rutas data={data}/>
        </div>
    );
}

export default App;
