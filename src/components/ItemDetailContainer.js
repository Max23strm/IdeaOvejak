import React from 'react'
import '../styles/ItemDetailContainer.css'
import ItemDetail from './ItemDetail'

function ItemDetailContainer(producto) {
    console.log(producto)

    return (
        <div className="itemDetailContainer">
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer
