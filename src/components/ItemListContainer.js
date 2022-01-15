import React  from 'react'
import ItemList from './ItemList'

function ItemListContainer({data,filtro}) {

    return (
        <div>
            <ItemList mostrando={data} filtro={filtro}/>
        </div>
    )
}

export default ItemListContainer
