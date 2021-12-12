import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import '../styles/ItemDetailContainer.css'


function ItemDetailContainer() {
    const [camiseta,setCamiseta]= useState(null)

    const producto={
        imagenes:[
            "https://us03-imgcdn.ymcart.com/50018/2021/11/19/b/b/bbd0c410ab8819a9.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp"],
        id:2,
        equipo:"Leinster",
        tipo:"Home",
        torneo:"Guinnes Premiership",
        deporte:"Rugby",
        pais:"Irlanda",
        precio:"$30 USD",
        stock:10,
        descripción:"Camiseta titular del club Leinster Rugby. Incluye personalización y envío dentro del país"
    };

    let promesa=new Promise((resolve, reject)=>{
        setTimeout(()=>{
        resolve(producto)
        },2000)
    })

    const obtenerProducto= async()=>{
        try{
            const camiseta= await promesa;
            setCamiseta(camiseta)
        //console.log(data)
        } catch(error){
            throw error
        } finally{
        }
    }

    useEffect(()=>{
        obtenerProducto()
    },[])


    return (
        <div className="itemDetailContainer">
            {camiseta? 
            <ItemDetail item={producto}/>
            :<section className="Cargando"> <img src="https://s2.svgbox.net/loaders.svg?ic=oval&color=000000" width="32" height="32" alt="Cargando"/> <h1>Cargando..</h1> </section>}
        

        </div>
    )
}

export default ItemDetailContainer
