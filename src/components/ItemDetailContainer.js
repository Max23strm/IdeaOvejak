import React from 'react'
import '../styles/ItemDetailContainer.css'
import ItemDetail from './ItemDetail'

function ItemDetailContainer(item) {
    const producto=item.item
    return (
        <div className="itemDetailContainer">
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer
