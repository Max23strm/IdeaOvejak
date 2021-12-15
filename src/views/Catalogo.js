import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import { useParams } from 'react-router-dom'

function Catalogo({data}) {
    let params=useParams()
    return (
        <ItemListContainer data={data} filtro={params} />
    )
}

export default Catalogo
