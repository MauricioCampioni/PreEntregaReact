import React from "react";
import CartWidget from "./CartWidget";
const NavBar =()=>{
    return (
      <header>
        <nav>
            <img src="" alt="logo" />
            <h2>BocaStore</h2>
            <CartWidget/>
            <ul>
                <li><a href="#">Hombre</a></li>
                <li><a href="#">Mujer</a></li>
                <li><a href="#">Niños</a></li>
                <li><a href="#">Nosotros</a></li>
            </ul>
        </nav>
      </header>
    )
}
export default NavBar