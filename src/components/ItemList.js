import React from 'react'
import '../styles/ItemList.css'
import Producto from '../views/Producto'

import Item from './Item'

function ItemList({data, filtro}) {
    console.log(data)
    let elFiltro={filtro}.filtro.id
    return (
        <div className="ItemList">
            {data? data.map((camiseta)=>(
                elFiltro===camiseta.deporte || elFiltro===camiseta.indumentaria?
                <Item key={camiseta.id} item={camiseta}/>
                :elFiltro===camiseta.id?<Producto item={camiseta}/>:null))
                :<section className="Cargando"> <img src="https://s2.svgbox.net/loaders.svg?ic=oval&color=000000" width="32" height="32" alt="Cargando"/> <h1>Cargando..</h1> </section>}
        </div>
    )
}

export default ItemList
