import React from 'react'
import '../styles/ItemDetailContainer.css'
import ItemDetail from './ItemDetail'

function ItemDetailContainer(item) {
    return (
        <div className="itemDetailContainer">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer
