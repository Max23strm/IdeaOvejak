import React  from 'react'
import '../styles/ItemListContainer.css'
import ItemList from './ItemList'

function ItemListContainer({data,filtro}) {
        console.log(data)
    return (
        <div>
            <ItemList mostrando={data} filtro={filtro}/>
        </div>
    )
}

export default ItemListContainer
