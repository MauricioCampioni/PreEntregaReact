import {useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { StylesImg } from "../../container/Styles"
import { Link } from "react-router-dom"

//AGREGARLE ESTILOS

const Cart = () => {
    const {removeItem, clearCart, cartList, total} = useContext (CartContext)

    
    if (cartList.length === 0){
        
        return (
            <div>
                <h2>El carrito se encuentra vacio</h2>
                <Link to='/'><button>Inicio</button></Link>
            </div>
        )
    }
    
    
    
    return (
        <>
             {
                cartList.map((cartProduct)=>(
                    
                    <div 
                    
                     key={cartProduct.item.id}>
                        
                        <h4 >{cartProduct.item.nombre}</h4>
                        <img  style={StylesImg} src={cartProduct.item.img} alt="" />
                        <h4 >{cartProduct.item.precio}</h4>
                        <h4>{cartProduct.qty}</h4>
                        
                        <button onClick={()=> removeItem(cartProduct.id) }>Eliminar Producto</button>
                 
                    </div>
                    
                ))} 
            
            <button onClick={()=> clearCart () }>Vaciar Carrito</button>
            <h4>Total :${total}</h4>
            <Link to='/Checkout' > <button>Checkout</button> </Link>
            
        </>
    
    )




}



export default Cart