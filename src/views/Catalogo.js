import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import { useParams } from 'react-router-dom'
import '../styles/Catalogo.css'
import Futbol from '../imagenes/Imagenes-proyectos/Banner/Futbol-HomePagemod.jpg'
import Rugby from '../imagenes/Imagenes-proyectos/Banner/Rugby-HomePagemod.jpg'
import Basquet from '../imagenes/Imagenes-proyectos/Banner/Basquet-HomePage.jpg'
import Accesorio from '../imagenes/Imagenes-proyectos/Banner/Accesorios-HomePage.jpg'
import Camiseta from '../imagenes/Imagenes-proyectos/Banner/Camiseta-HomePage.jpg'
import Conjunto from '../imagenes/Imagenes-proyectos/Banner/Conjunto-HomePage.jpg'
import Short from '../imagenes/Imagenes-proyectos/Banner/Short-HomePage.jpg'

function Catalogo({data}) {
    let mostrando=[];
    let elFiltro=useParams().id;

    let filtrar=()=>(data? data.map((camiseta)=>(
        elFiltro===camiseta.deporte || elFiltro===camiseta.indumentaria?
        mostrando.push(camiseta):null))
        :null)
        filtrar();
    console.log(mostrando)
    return (
        <section className='mainCatalogo'>
            <section className='bannerContenedor'>
            <h2>{elFiltro}</h2>
            <img src={elFiltro==="Futbol"? Futbol
                        :elFiltro==="Rugby"? Rugby
                        :elFiltro==="Basquetball"?Basquet
                        :elFiltro==="Conjunto"?Conjunto
                        :elFiltro==="Shorts"?Short
                        :elFiltro==="Camiseta"?Camiseta:
                        elFiltro==="Accesorios"?Accesorio:null} className="banner"alt="banner"/>
            </section>
        <section className='viewCatalogo'>
            

            <ItemListContainer data={mostrando} />
        </section>
        </section>
    )
}

export default Catalogo
