import React, {useEffect, useState} from 'react';
import {getDocs, collection} from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig';
import ItemList from '../components/ItemList/ItemList';
import { h2Styles } from './Styles';


const ItemListContainer =({greeting})=>{
    

    const [productsStock,setProductsStock]=useState([]);
    const [loading,setLoading]= useState(true);

    useEffect(()=>{
       const productCollection = collection (db, "items" );
        getDocs(productCollection)
        .then (response =>  {
            const productsAdapted = response.docs.map (doc => {
                const data = doc.data ()
                return {id: doc.id, ...data}
            })
            setProductsStock(productsAdapted)
        })
        .catch(error => {
            console.log(error)
        })
         setTimeout(()=>{
            setLoading(false)
           },2000)
    },[]);

    return (
        <div>
            {loading ? 
            <h4>Cargando...</h4> : 
            <>
            <h2 style={h2Styles}>{greeting}</h2>
            <ItemList productsStock={productsStock} />
            </>}
        </div>
    )
}


export default ItemListContainer