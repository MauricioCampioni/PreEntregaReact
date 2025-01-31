import React, { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import {  Link } from "react-router-dom";
import {navbarTitleStyle,containerInputStyle,searchInputStyle,navbarMenuStyle,navbarLinkStyle, navbarStyle} from './StylesNavBar';
import "./NavBar.css";

const NavBar =({onSearch})=>{
  const[searchInput, setSearchInput]= useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value); // Actualiza el estado local
    };
  
  const handleSearch = () => {
    if (searchInput.trim() !== ""){
    onSearch(searchInput); // Actualiza el estado del componente padre
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleResetSearch = () => {
    setSearchInput("");
    onSearch("");
  };
    

  const categorias =[{CategoriaId:1, nombreCategoria:"Hombre"},{CategoriaId:2, nombreCategoria:"Mujer"},{CategoriaId:3, nombreCategoria: "Niños"}];

  return (
    <header>
      <nav style={navbarStyle}>
        {/* Título de la tienda */}
        <Link to="/" style={navbarTitleStyle} onClick={handleResetSearch}>
          Mi tienda
        </Link>

        {/* Barra de búsqueda */}
        <div style={containerInputStyle}>
          <input
            type="text"
            style={searchInputStyle}
            placeholder="Buscar..."
            value={searchInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} //Muestra el valor del input
          />
          <button onClick={handleSearch} style={{marginLeft: "10px", padding: "5px 10px", cursor: "pointer"}}>
            🔍
          </button>
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