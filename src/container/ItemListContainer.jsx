import React, {useEffect, useState} from 'react';
import {getDocs, collection} from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig';
import ItemList from '../components/ItemList/ItemList';
import { h2Styles } from './Styles';
import "./Styles.css";


const ItemListContainer =({greeting, searchTerm})=>{
    const [productsStock,setProductsStock]=useState([]);
    const [filteredProducts,setFilteredProducts]=useState([]);
    const [loading,setLoading]= useState(true);

    useEffect(()=>{
       const productCollection = collection (db, "items" );
        getDocs(productCollection)
        .then (response =>  {
            const productsAdapted = response.docs.map (doc => {
                const data = doc.data ()
                return {id: doc.id, ...data}
            })
            setProductsStock(productsAdapted);
            setFilteredProducts(productsAdapted);
        })
        .catch(error => {
            console.log(error)
        })
         setTimeout(()=>{
            setLoading(false)
           },2000)
    },[]);

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            const filteredProducts = productsStock.filter((product)=>
                product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filteredProducts);
            setLoading(false);
        },2000);
    }, [searchTerm,productsStock]);
    
    return (                     
        <div>
            {loading ? 
            <h4>Cargando...</h4> : 
            <>
            <h2 style={h2Styles}>{greeting}</h2>
            <ItemList productsStock={filteredProducts} />
            </>}
        </div>
    )
}


export default ItemListContainer