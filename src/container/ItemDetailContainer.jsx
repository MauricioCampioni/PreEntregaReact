import React from 'react';
import products from '../products.json' ;
import { useParams } from "react-router-dom";
import { StylesImg, Stylesdetail } from "./Styles";
import ItemCount from "../components/ItemCount/ItemCount";




const ItemDetailContainer =()=>{
    
    const {idItem}=useParams();
    
    const itemsFiltrados=products.filter((item)=>item.id==idItem);


    
    
    return (
            <>
                 {
                itemsFiltrados.map((product)=>(
                    <div style={Stylesdetail} key={product.id}>
                        <h4 >{product.nombre}</h4>
                        <img  style={StylesImg} src={product.img} alt="" />
                        <h4 >{product.precio}</h4>
                    <ItemCount initial="1" product={product} stock={product.stock}></ItemCount>
                
                    </div>
                    
                ))} 
            </>
    )
}
export default ItemDetailContainer