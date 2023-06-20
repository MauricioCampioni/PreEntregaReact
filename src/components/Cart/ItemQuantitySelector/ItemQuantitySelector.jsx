
const ItemQuantitySelector= ({handlerIncreaseCount, handlerDecreaseCount, counter, product, stock}) => {

    return (

        <div>
            <button onClick={()=>handlerDecreaseCount()}>-</button>
            <button onClick={()=>handlerIncreaseCount()}>+</button>
            <button onClick={()=>handlerAddToCart(product, stock, counter)}>Agregar al Carrito</button>
        </div>
    )
}
export default ItemQuantitySelector;



