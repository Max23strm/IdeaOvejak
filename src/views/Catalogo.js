import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import { useParams } from 'react-router-dom'
import FiltroItems from '../components/FiltroItems'
import '../styles/Catalogo.css'

function Catalogo({data}) {
    let mostrando=[];
    let elFiltro=useParams().id;

    let filtrar=()=>(data? data.map((camiseta)=>(
        elFiltro===camiseta.deporte || elFiltro===camiseta.indumentaria?
        mostrando.push(camiseta):null))
        :null)
        filtrar();

    return (
        <section className='viewCatalogo'>
            <FiltroItems data={mostrando}/>

            <ItemListContainer data={mostrando} filtro={elFiltro} />
        </section>
    )
}

export default Catalogo
