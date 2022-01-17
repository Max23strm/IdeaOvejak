import React from 'react'

function Boton({orden}) {

    return (
        <button onClick={()=>{console.log(orden)}}>
            Ver Ticket
        </button>
    )
}

export default Boton
