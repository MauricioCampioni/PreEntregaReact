import { AddItemButtonStyle } from "./AddItemButtonStyles"

const AddItemButton =({handlerAddToCart, product, stock, counter}) => {
    return(
        <button style={AddItemButtonStyle} onClick={()=> handlerAddToCart(product, stock, counter)}>Agregar al Carrito</button>
    )

}

export default AddItemButton