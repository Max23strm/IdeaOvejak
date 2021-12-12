import React  from 'react'
import '../styles/ItemListContainer.css'
import ItemList from './ItemList'
function ItemListContainer({datos}) {


    return (
        <div>
            <ItemList datos={datos}/>
        </div>
    )
}

export default ItemListContainer
