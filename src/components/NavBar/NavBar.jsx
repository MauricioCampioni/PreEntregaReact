import React, { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import {
  navbarTitleStyle,
  containerInputStyle,
  searchInputStyle,
  navbarMenuStyle,
  navbarLinkStyle,
  navbarStyle,
} from "./StylesNavBar";
import "./NavBar.css";

const NavBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(false);

  // Manejo del input de búsqueda
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      onSearch(searchInput);
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

  // Categorías del menú desplegable
  const submenuItems = {
    destacados: ["Lanzamientos", "Los más elegidos"],
    hombre: [
      "Destacados de Hombre",
      "Buzos",
      "Remeras",
      "Camisetas",
      "Pantalones",
      "Shorts",
      "Zapatillas",
      "Accesorios",
    ],
    mujer: [
      "Destacados de Mujer",
      "Buzos",
      "Remeras",
      "Camisetas",
      "Pantalones",
      "Shorts",
      "Zapatillas",
      "Accesorios",
    ],
    niños: [
      "Destacados de Niños",
      "Buzos",
      "Remeras",
      "Camisetas",
      "Pantalones",
      "Shorts",
      "Zapatillas",
      "Accesorios",
    ],
  };
  return (
    <header>
      <nav style={navbarStyle}>
        {/* Título de la tienda */}
        <Link to="/" style={navbarTitleStyle} onClick={handleResetSearch}>
          Mi Tienda
        </Link>

        {/* Barra de búsqueda */}
        <div style={containerInputStyle}>
          <input
            type="text"
            style={searchInputStyle}
            placeholder="Buscar..."
            value={searchInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSearch}
            style={{ marginLeft: "10px", padding: "5px 10px", cursor: "pointer" }}
          >
            🔍
          </button>
        </div>

        {/* Menu de navegacion */}
        <ul style={navbarMenuStyle}>
          {/* Destacados con submenú */}
          <li
            onMouseEnter={() => setActiveDropdown("destacados")}
            onMouseLeave={() => setActiveDropdown(null)}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <span style={navbarLinkStyle}>Destacados</span>
            {activeDropdown === "destacados" && (
              <ul className="submenu">
                {submenuItems.destacados.map((item, index) => (
                  <li key={index}>
                    <Link to="/" className="submenu-link">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Hombre con submenú */}
          <li
            onMouseEnter={() => setActiveDropdown("hombre")}
            onMouseLeave={() => setActiveDropdown(null)}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <span style={navbarLinkStyle}>Hombre</span>
            {activeDropdown === "hombre" && (
              <ul className="submenu">
                {submenuItems.hombre.map((item, index) => (
                  <li key={index}>
                    <Link to="/" className="submenu-link">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Mujer con submenú */}
          <li
            onMouseEnter={() => setActiveDropdown("mujer")}
            onMouseLeave={() => setActiveDropdown(null)}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <span style={navbarLinkStyle}>Mujer</span>
            {activeDropdown === "mujer" && (
              <ul className="submenu">
                {submenuItems.mujer.map((item, index) => (
                  <li key={index}>
                    <Link to="/" className="submenu-link">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Niños con submenú */}
          <li
            onMouseEnter={() => setActiveDropdown("niños")}
            onMouseLeave={() => setActiveDropdown(null)}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <span style={navbarLinkStyle}>Niños</span>
            {activeDropdown === "niños" && (
              <ul className="submenu">
                {submenuItems.niños.map((item, index) => (
                  <li key={index}>
                    <Link to="/" className="submenu-link">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Carrito */}
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;