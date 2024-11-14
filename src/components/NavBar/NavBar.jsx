import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {  Link } from "react-router-dom";
import {navbarTitleStyle,containerInputStyle,searchInputStyle,navbarMenuStyle,navbarLinkStyle, navbarStyle} from './StylesNavBar';
import "./NavBar.css";

const NavBar =()=>{
  const categorias =[{CategoriaId:1, nombreCategoria:"Hombre"},{CategoriaId:2, nombreCategoria:"Mujer"},{CategoriaId:3, nombreCategoria: "Niños"}];

  return (
    <header>
      <nav style={navbarStyle}>
        {/* Título de la tienda */}
        <Link to="/" style={navbarTitleStyle}>
          Mi tienda
        </Link>

        {/* Barra de búsqueda */}
        <div style={containerInputStyle}>
          <input
            type="text"
            style={searchInputStyle}
            placeholder="Buscar..."
          />
        </div>

        {/* Enlaces de categorías */}
        <ul style={navbarMenuStyle}>
          <li key="Inicio">
            <Link to="/" style={navbarLinkStyle}>
              Inicio
            </Link>
          </li>
          {categorias.map((categoria) => (
            <li key={categoria.CategoriaId}>
              <Link
                to={`category/${categoria.CategoriaId}`}
                style={navbarLinkStyle}
              >
                {categoria.nombreCategoria}
              </Link>
            </li>
          ))}
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;