import React from "react";
import products from '../products.json' ;
import { Links, NavLink, useParams} from "react-router-dom";


const ItemCategoryContainer =()=>{
    const {idCategoria}=useParams();
    console.log(idCategoria);
    const itemsFiltrados=products.filter((item)=>item.CategoriaId==CategoriaId);
    return (
            <>
                 {
                itemsFiltrados.map((product)=>(
                    <div key={product.id}>
                        <h4 >{product.nombre}</h4>
                        <img  src={product.img} alt="" />
                        <h4 >{product.precio}</h4>

                        <NavLink to={`/items/${product.id}`}><button >Muestrame mas</button></NavLink>
                    </div>
                ))}
            </>



    )
}
export default ItemCategoryContainer