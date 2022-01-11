import React from 'react'
import '../styles/ItemList.css'
import {CarritoConsumer} from '../context/CarritoProvider';

import Item from './Item'
import Spinner from '../UI/Spinner';

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
                    
                :<Spinner/>}
        </div>
    )
}

export default ItemList
