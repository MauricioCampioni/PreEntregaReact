import React, {useEffect, useState} from 'react';
import products from '../products.json' ;
import { NavLink } from "react-router-dom";
import { StyleButton, StylesImg, Stylesdetail } from "./Styles";
import { db } from '../services/firebase/firebaseConfig';


const ItemListContainer =({greeting})=>{
    

    const [productsStock,setProductsStock]=useState([]);
    const [loading,setLoading]= useState(true);

    useEffect(()=>{
        const productList=new Promise ((resolve,reject)=>{
           setTimeout(()=>{
            resolve(products)
           },2000) 
        })
        productList.then(result =>{
            setProductsStock(result);
            setLoading(false);
        });
    },[]);

    return (
        <div>
            {loading ? 
            <h4>Cargando...</h4> : 
            <>
            <h2 style={Stylesdetail}>{greeting}</h2>
            <div>
                {productsStock.map((product)=>(
                    <div style={Stylesdetail} key={product.id}>
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