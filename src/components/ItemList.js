import React from 'react'
import '../styles/ItemList.css'
import {CarritoConsumer} from '../context/CarritoProvider';

import Item from './Item'

function ItemList({mostrando, filtro}) {
    const {addItem}=CarritoConsumer();
    //console.log(mostrando)
    return (
        <div className="ItemList">

            {mostrando? mostrando.map((camiseta)=>(
                <Item key={camiseta.id}
                    clase="catalogo"
                    camiseta={camiseta}
                    onAdd={addItem}/>))
                    
                :<section className="Cargando">
                    <img src="https://s2.svgbox.net/loaders.svg?ic=oval&color=000000" width="32" height="32" alt="Cargando"/>
                    <h1>Cargando..</h1>
                </section>}
        </div>
    )
}

export default ItemList
