import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {  Link } from "react-router-dom";
import {navbarStyle,navbarTitleStyle,containerInputStyle,searchInputStyle,navbarMenuStyle,navbarLinkStyle} from './StylesNavBar';
import "./NavBar.css";


const NavBar =()=>{
  const categorias =[{CategoriaId:1, nombreCategoria:"Hombre"},{CategoriaId:2, nombreCategoria:"Mujer"},{CategoriaId:3, nombreCategoria: "Niños"}];

    return (
      <header>
        <nav style={navbarStyle}>
        
        <ul style={navbarMenuStyle}>
          <li key="Inicio">
            <Link to={`/`} style={navbarTitleStyle}>
              Mi tienda
            </Link>
          </li>
        </ul>
        

        <div style={containerInputStyle}>
          <input
            type="text"                                   
            style={searchInputStyle}
            placeholder="Buscar..."
          />
        </div>

        <ul style={navbarMenuStyle}>
          <li key="Inicio">
            <Link to={`/`} style={navbarLinkStyle}>
              Inicio
            </Link>
          </li>
          
          {categorias.map((categoria) => (
            <li key={categoria.CategoriaId}>
              <Link to={`category/${categoria.CategoriaId}`} 
              style={navbarLinkStyle}>
                {categoria.nombreCategoria}
              </Link>
            </li>
          ))}
          
          <CartWidget />
        </ul>
      </nav>
      </header>
    )
}
export default NavBar;