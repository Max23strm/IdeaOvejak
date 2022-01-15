import React, { useEffect } from 'react'
import '../styles/ItemDetailContainer.css'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import useFirebase from '../hooks/useFirebase';


function ItemDetailContainer() {
    const identi=useParams().id
    const {producto, fetchGetIndividualProduct}= useFirebase()
        useEffect(()=>{
            fetchGetIndividualProduct(identi)
            //eslint-disable-next-line
        },[])
    return (
        <div className="itemDetailContainer">
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer
