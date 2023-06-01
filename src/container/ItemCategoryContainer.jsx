import React, {useEffect, useState} from "react";
import products from '../products.json' ;
import { NavLink, useParams} from "react-router-dom";
import { StyleButton, StylesImg, Stylesdetail } from "./Styles";



const ItemCategoryContainer =()=>{
    const {CategoryId}=useParams();
    

    const [productsStock,setProductsStock]=useState([]);
    const [loading,setLoading]= useState(true);


    useEffect(()=>{
        setLoading(true)
        
        const productList=new Promise ((resolve,reject)=>{
           setTimeout(()=>{
            resolve(products)
           },2000) 
        })
        productList.then(result =>{
            setProductsStock(result);
            setLoading(false);
            console.log(productsStock)
        });
    },CategoryId);
    const itemsFiltrados=productsStock.filter((item)=>item.CategoryId==CategoryId);


    return (
        <div>
            {loading ? 
            <h4>Cargando...</h4> :
            <>
                 {
                itemsFiltrados.map((product)=>(
                    <div style={Stylesdetail} key={product.id}>
                        <h4 >{product.nombre}</h4>
                        <img style={StylesImg} src={product.img} alt="" />
                        <h4 >{product.precio}</h4>

                        <NavLink to={`/items/${product.id}`}><button style={StyleButton} >Mostrar Mas</button></NavLink>
                        <p style={{color:"black"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, fugiat.</p>
                    </div>
                ))}
                
            </>}
            </div>


    )
}
export default ItemCategoryContainer