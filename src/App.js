import './App.css';
import Rutas from './routes/Rutas';
import React from 'react'
import datos from './context/productos.json'


function App() {

    //const camisetas=[
    //{
    //    img:`https://us03-imgcdn.ymcart.com/50018/2021/08/31/9/3/93e35cc274a3759a.jpeg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp`,
    //    id:"1",
    //    equipo:"Inter",
    //    tipo:"Home",
    //    torneo:"Serie A",
    //    deporte:"Futbol",
    //    precio:"$25 USD",
    //    stock:2,
    //    descripción:"Camiseta titular del Inter. Incluye personalización y envío dentro del país",
    //    indumentaria: "Camisetas",
    //    popular:true,
    //},
    //{
    //    img:"https://us03-imgcdn.ymcart.com/50018/2021/11/19/b/b/bbd0c410ab8819a9.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_1500,h_1500/format,webp",
    //    id:"2",
    //    equipo:"Leinster",
    //    tipo:"Home",
    //    torneo:"Guinnes Premiership",
    //    deporte:"Rugby",
    //    precio:"$30 USD",
    //    stock:10,
    //    descripción:"Camiseta titular del club Leinster Rugby. Incluye personalización y envío dentro del país",
    //    indumentaria: "Camisetas",
    //    popular:true,
    //},
    //{
    //    img:"https://us03-imgcdn.ymcart.com/50018/2021/03/12/1/c/1cb872fc53f31ff9.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_600,h_600/format,webp",
    //    id:"3",
    //    equipo:"Tottenham",
    //    tipo:"Home",
    //    torneo:"Premier League",
    //    deporte:"Futbol",
    //    precio:"$25 USD",
    //    stock:0,
    //    descripción:"Camiseta titular del Tottenham Hotspur. Incluye personalización y envío dentro del país",
    //    indumentaria: "Camisetas",
    //    popular:true,
    //},
    //]   
    //let promesa=new Promise((resolve, reject)=>{
    //    setTimeout(()=>{
    //    resolve(camisetas)
    //    },1500)
    //})
//
    //const resolverArreglo= async()=>{
    //    try{
    //        const data= await promesa;
    //        setData(data)
    //    console.log(data)
    //    } catch(error){
    //        throw error
    //    } finally{
    //        console.log ("la peticion se termino")
    //    }
    //}   
    //useEffect(()=>{
    //    resolverArreglo()
    //},[])
    //console.log(imagen)
    return (
        <div className="App">
            <Rutas data={datos}/>
        </div>
    );
}

export default App;
