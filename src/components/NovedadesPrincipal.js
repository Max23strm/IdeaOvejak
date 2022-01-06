import React from 'react'
import Item from './Item'
import "../styles/NovedadesPrincipal.css"

function NovedadesPrincipal(data) {
    let camisetas=data.data
    return (
        <section className='principalNovedades'>
            <h2>Los más populares</h2>
            <section className='principalGaleria'>
                {camisetas.map((element)=>element.popular?
                <Item clase="home" key={element.id} camiseta={element}/>:null)}
            </section>
        </section>
    )
}

export default NovedadesPrincipal
