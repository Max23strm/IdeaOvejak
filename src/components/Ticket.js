import React from 'react'
import '../styles/ticket.css'
import Item from './Item'

function Ticket({ticket}) {
    let fechacompra
    if(ticket.hora){
        let fecha=new Date(ticket.hora.seconds*1000)
        fechacompra=fecha.toLocaleDateString()}
        else{fechacompra="cargando"}
        console.log(ticket.total)
    return (
        <div className='ticket'>
            <h2 className='titulo'>Orden de compra</h2>
            <section className='nOrden'>
                <h2>Numero de orden: {ticket.id}</h2>
                <h3>Fecha de compra: {fechacompra}</h3>
            </section>
            {ticket.buyer?
            <section className='pedido'>
                <section className='buyer'>
                    <p><span>Nombre:</span> {ticket.buyer.nombre}</p>
                    <p><span>Apellido:</span> {ticket.buyer.apellido}</p>
                    <p><span>Telefono de contacto:</span> {ticket.buyer.telefono}</p>
                    <p><span>Email de contacto:</span> {ticket.buyer.email}</p>
                </section>
                <section className='detallesPedido'>
                    {ticket.items.map((el)=>{
                        return <Item key={el.id}
                        camiseta={el}
                        clase="ticketItem"/>
                    })}
                </section>
                <h3 className='total'>Total: $<span>{ticket.total}</span> Usd</h3>
            </section>
            :null}
            
            
        </div>
    )
}

export default Ticket
