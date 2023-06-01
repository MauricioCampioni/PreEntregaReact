import { createContext, useState } from "react";
export const CartContext = createContext ();


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState ([]);
    console.log (cartList)
    const addToCart = (product, stock, counter) => {

        const itemCart = {
            id:product.id,
            item:product,
            qty: counter,
             };
             if (!isInCart(product.id)){
              setCartList((prevProducts) =>[...prevProducts, itemCart]);
             } else {
              console.error('El producto ya fue agregado')
             }
      };

 const removeItem = (productStock) => {
  const cartUpdated = cartList.filter (prod => prod.id !== productStock)
  setCartList (cartUpdated)
 }

 const clearCart = () => {
  setCartList ([])
 }
 const isInCart = (productStock) => {
  return cartList.some (prod => prod.id === productStock)
 }

      return (
        <CartContext.Provider value={{ cartList, addToCart, removeItem, clearCart }}>
          {children}
        </CartContext.Provider>
      );
    };

    export default CartContextProvider;
    
