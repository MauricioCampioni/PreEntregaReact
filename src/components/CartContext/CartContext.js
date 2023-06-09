import { createContext, useState, useEffect } from "react";

export const CartContext = createContext ();


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState ([]);
    const [total, setTotal] = useState(0)
    useEffect (()=> {},[cartList])
    console.log (cartList)
    const addToCart = (product, stock, counter) => {

        const itemCart = {
            id:product.id,
            item:product,
            qty: counter,

             };
             if (!isInCart(product.id)){
              setCartList((prevProducts) =>[...prevProducts, itemCart]);

              let updatedTotal = (itemCart.qty * (itemCart.item.precio) + total);
              console.log(itemCart.qty)
              console.log(itemCart.item.precio)
              setTotal (updatedTotal)
              console.log('El total es'+ total)
             } else {
              console.error('El producto ya fue agregado')
             }
      };

 const removeItem = (id) => {
  const cartUpdated = cartList.filter (prod => prod.id !== id)
  setTotal (cartUpdated)
  setCartList (cartUpdated)
 }

 const clearCart = () => {
  setTotal (0)
  setCartList ([])
 }
 const isInCart = (productStock) => {
  return cartList.some (prod => prod.id === productStock)
 }

      return (
        <CartContext.Provider value={{ cartList, addToCart, removeItem, clearCart, total }}>
          {children}
        </CartContext.Provider>
      );
    };

    export default CartContextProvider;
    
