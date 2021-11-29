import React from 'react'
import Hero from '../imagenes/preparando.jpg'
import Hero2 from '../imagenes/preparando-vertical.jpg'
import '../styles/ItemListContainer.css'

function ItemListContainer() {
    return (
        <div className="hero">
            <img src={Hero} alt="Proximamente la tienda" className="horizontal"></img>
            <img src={Hero2} alt="Proximamente la tienda" className="vertical"></img>
                <h1>¡Bienvenidos!</h1>
                <h2>Estamos entrenando para abrir proximamente</h2>
                <h2>¡Te esperamos!</h2>
        </div>
    )
}

export default ItemListContainer
