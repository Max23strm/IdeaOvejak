import React, {useState} from 'react'
import '../styles/FiltroItems.css'
function FiltroItems({data}) {
  //  console.log(data)

    const[filtro , setFiltro]=useState([])
    //console.log(indumentaria)
    return (
        <section className='filtro'>
            {/* {data.map((camiseta)=>(
                camiseta.camiseta.indumentaria==="Camisetas"? setFiltro("Camiseta"): console.log("no es camiseta")
            ))} */}
            
        </section>
    )
}

export default FiltroItems
