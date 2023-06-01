import { useState, useEffect, useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { Stylesdetail, StylesImg } from "../../container/Styles"



const Cart = () => {
    const {addToCart, cartList} = useContext (CartContext)
    return (
        <>
             {
                cartList.map((cartProduct)=>(
                    <div style={Stylesdetail} key={cartProduct.item.id}>
                        <h4 >{cartProduct.item.nombre}</h4>
                        <img  style={StylesImg} src={cartProduct.item.img} alt="" />
                        <h4 >{cartProduct.item.precio}</h4>
                        <h4>{cartProduct.qty}</h4>
                
                    </div>
                    
                ))} 
            <h4>Carrito</h4>
        </>
    )

}



export default Cart