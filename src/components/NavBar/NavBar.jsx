import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {  Link } from "react-router-dom";
import { StyleBanner, StyleNavBar } from "../../container/Styles";
import './StylesNavBar.css'
const NavBar =()=>{
  const categorias =[{CategoriaId:1, nombreCategoria:"Hombre"},{CategoriaId:2, nombreCategoria:"Mujer"},{CategoriaId:3, nombreCategoria: "Niños"}]
    return (
      <header>
        <nav style={{backgroundColor:"rgb(1,1,39)"}}>


            <img style={StyleBanner} src="/assets/Banner.jpg" alt="logo" />


            <h2 style={{color:"blue", fontSize:"45px", fontFamily:"sans-serif"}}>Boca <span style={{color:"yellow"}}>Store</span> </h2>
            <CartWidget/>

             <ul style={StyleNavBar}>
              <li   key="Inicio">
                
               <Link to={`/`} >Inicio</Link> 
                
              </li>
              
              {categorias.map((categoria)=>(
                <li  key={categoria.CategoriaId}>
                  
                  <Link to={`category/${categoria.CategoriaId}`}>{categoria.nombreCategoria} </Link> 
                  
                  
                  
                </li>
                
              ))}
             </ul>
             
        </nav>
      </header>
    )
}
export default NavBar