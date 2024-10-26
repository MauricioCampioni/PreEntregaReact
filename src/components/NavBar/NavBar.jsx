import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {  Link } from "react-router-dom";
import { StyleBanner} from "../../container/Styles";
import { linkStyle, StyleNavBar } from "./StylesNavBar";
const NavBar =()=>{
  const categorias =[{CategoriaId:1, nombreCategoria:"Hombre"},{CategoriaId:2, nombreCategoria:"Mujer"},{CategoriaId:3, nombreCategoria: "Niños"}];

    return (
      <header>
        <nav style={{backgroundColor:"rgb(1,1,39)"}}>


            <img style={StyleBanner} src="/assets/Banner.jpg" alt="logo" />


            <h2 style={{color:"blue", fontSize:"45px", fontFamily:"sans-serif"}}>Boca <span style={{color:"yellow"}}>Store</span> </h2>
            

             <ul style={StyleNavBar}>
                  <li key="Inicio">
                    <Link to={`/`} style={linkStyle} >Inicio</Link>
                  </li>
                
                 
              
                {categorias.map((categoria)=>(
                    <li key={categoria.CategoriaId}>
                      <Link to={`category/${categoria.CategoriaId}`} style={linkStyle}>
                      {categoria.nombreCategoria} 
                      
                      </Link> 
                  
                    </li>
                    
                ))}
                <CartWidget/>
              </ul> 
              
             
             
             
        </nav>
      </header>
    )
}
export default NavBar