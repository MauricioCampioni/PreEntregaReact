import React from "react";
import products from '../products.json' ;
import { NavLink, useParams} from "react-router-dom";
import { StyleButton, StylesImg, Stylesdetail } from "./Styles";


const ItemCategoryContainer =()=>{
    const {CategoriaId}=useParams();
    console.log(CategoriaId);
    const itemsFiltrados=products.filter((item)=>item.CategoriaId==CategoriaId);
    console.log(itemsFiltrados);
    return (
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
            </>



    )
}
export default ItemCategoryContainer