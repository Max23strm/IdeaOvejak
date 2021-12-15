import React  from 'react'
import '../styles/ItemListContainer.css'
import ItemList from './ItemList'
function ItemListContainer({data,filtro}) {

    return (
        <div>
            <ItemList data={data} filtro={filtro}/>
        </div>
    )
}

export default ItemListContainer
