import React, {useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import { StyleButton, StylesImg} from "./Styles";
import {getDocs, collection} from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig';


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
            <h2 >{greeting}</h2>
            <div>
                {productsStock.map((product)=>(
                    <div  key={product.id}>
                        <h4 >{product.nombre}</h4>
                        <img style={StylesImg} src={product.img} alt="" />
                        <h4 >{product.precio}</h4>
                        <NavLink to={`/items/${product.id}`}><button style={StyleButton}>Mostrar mas</button></NavLink>
                        
                        <p style={{color:"black"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, fugiat.</p>
                    </div>
                ))}
            </div>
            
            </>}

            
        </div>
    )
}


export default ItemListContainer