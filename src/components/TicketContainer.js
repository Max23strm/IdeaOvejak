import React, { useEffect } from 'react'
import '../styles/ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import useFirebase from '../hooks/useFirebase';
import Ticket from './Ticket';
import Spinner from '../UI/Spinner';

function TicketContainer() {
    
    const identi=useParams().id
    const {producto, fetchGetIndividualTicket}= useFirebase()
        useEffect(()=>{
            fetchGetIndividualTicket(identi)
            //eslint-disable-next-line
        },[])
                console.log(producto)
    return (
        <div>
            {producto?<Ticket ticket={producto}/>:<Spinner/>}
            
        </div>
    )
}

export default TicketContainer
