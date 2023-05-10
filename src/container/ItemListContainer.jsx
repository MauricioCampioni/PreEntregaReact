import React from "react";
import products from '../products.json' ;
import { Link, NavLink } from "react-router-dom";

const ItemListContainer =({greeting})=>{
    console.log(products);
    return (
        <div>
            {greeting}
            <div>
                {products.map((product)=>(
                    <div key={product.id}>
                        <h4 >{product.nombre}</h4>
                        <img  src={product.img} alt="" />
                        <h4 >{product.precio}</h4>

                        <NavLink to={`/items/${product.id}`}><button >Mostrar mas</button></NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default ItemListContainer