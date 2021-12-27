import React from 'react'
import '../styles/FiltroItems.css'
function FiltroItems(data) {
    let objetos=data.data
    const indumentaria=[]
    const tipo=[]
    //console.log(indumentaria)
    return (
        <section className='filtro'>
            {objetos.map((camiseta)=>(
                !indumentaria["Camisetas"]?
                indumentaria.push(camiseta.camiseta.indumentaria):null
            ))}
            
        </section>
    )
}

export default FiltroItems
