import React from "react";
import products from '../products.json' ;
import { NavLink } from "react-router-dom";
import { StyleButton, StylesImg, Stylesdetail } from "./Styles";

const ItemListContainer =({greeting})=>{
    console.log(products);
    return (
        <div>
            <h2 style={Stylesdetail}>{greeting}</h2>
            <div>
                {products.map((product)=>(
                    <div style={Stylesdetail} key={product.id}>
                        <h4 >{product.nombre}</h4>
                        <img style={StylesImg} src={product.img} alt="" />
                        <h4 >{product.precio}</h4>
                        
                        <NavLink to={`/items/${product.id}`}><button style={StyleButton}>Mostrar mas</button></NavLink>
                        <p style={{color:"black"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, fugiat.</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default ItemListContainer