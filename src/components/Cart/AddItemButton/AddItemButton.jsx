const AddItemButton =({handlerAddToCart, product, stock, counter}) => {
    return(
        <button onClick={()=> handlerAddToCart(product, stock, counter)}>Agregar al Carrito</button>
    )

}

export default AddItemButton