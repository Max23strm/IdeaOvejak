import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer'


function Producto ({definido,data}) {
    
    let parametros=useParams()
    let datos
    console.log(definido)
    data? data.map((camisetas)=>(
        camisetas.id===parametros.id? datos=camisetas:null
    )): datos={definido}

    console.log(datos)
    return (
        <ItemDetailContainer producto={datos}/>
    )
}

export default Producto
