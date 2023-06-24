import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";



const CartWidget =()=>{
    const { cartList } = useContext(CartContext);
    function calculateItems (cartList) {
        let totalProducts=0;
        cartList.forEach(ItemCart => {
            totalProducts+=ItemCart.qty;
        });
        return totalProducts;
    }
    return (
        <Link to={`/cart`} style={{textDecoration: 'none'}} >
            <div>
            <p> 🛒{calculateItems(cartList)} </p>
            </div>
        </Link>

    )
}
export default CartWidget;