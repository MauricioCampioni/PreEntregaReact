import React from "react";
import CartWidget from "./CartWidget";
import { NavLink,Link } from "react-router-dom";
const NavBar =()=>{
  const categorias =[{CategoriaId:1,},{CategoriaId:2},{CategoriaId:3}]
    return (
      <header>
        <nav>
            <img src="/StockAssets/logo.png" alt="logo" />
            <h2>Pixeles-Gamestore</h2>
            <CartWidget/>

             <ul>
              {categorias.map((categoria)=>(
                <li key={categoria.idCategoria}>
                  <Link to={`category/${categoria.idCategoria}`}>{categoria.nombreCategoria}</Link>
                </li>
              ))}
             </ul>


        </nav>
      </header>
    )
}
export default NavBar