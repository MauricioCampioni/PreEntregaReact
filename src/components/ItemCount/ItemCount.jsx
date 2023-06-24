import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { NavLink } from "react-router-dom";
import AddItemButton from "../Cart/AddItemButton/AddItemButton";
import ItemQuantitySelector from "../Cart/ItemQuantitySelector/ItemQuantitySelector";



function ItemCount  ({stock, initial, product})  {

    const [stockAdded,setStockAdded] = useState (0)

    const [counter, setCounter] = useState (parseInt(initial))

    const {addToCart, cartList} = useContext (CartContext)


const handlerIncreaseCount = () => {
    if (stock > counter)  setCounter (counter + 1)
    console.log(counter)
}
const handlerDecreaseCount = () => {
    if (counter > 1)  setCounter (counter - 1)
    console.log(counter)

}
const handlerAddToCart = (product, stock, counter) => {
    setStockAdded(1)
    addToCart (product, stock, counter);
    console.log(cartList)
}

    return (
        <div>
            {stockAdded ? 
            <NavLink to={`/cart`}><button>Terminar Compra</button></NavLink>
            :
                <>
                <div>
                
                    <ItemQuantitySelector handlerIncreaseCount={handlerIncreaseCount} handlerDecreaseCount={handlerDecreaseCount} counter={counter}  />
                    
                </div>
                <div>
                    <AddItemButton handlerAddToCart={handlerAddToCart} product={product} stock={stock} counter={counter} />
                </div>
                </>

            }
        </div>
    );
}

export default ItemCount;