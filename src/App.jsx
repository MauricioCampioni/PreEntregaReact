import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemCategoryContainer from './container/ItemCategoryContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import CartContextProvider from './components/CartContext/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <CartContextProvider>
    <div className="App">
      <BrowserRouter>
      
      <NavBar onSearch={setSearchTerm}/>
      
      <Routes>
          <Route exact path='/' element = {<ItemListContainer greeting={""} searchTerm={searchTerm}/>} />
          <Route exact path='/items' element = {<ItemListContainer greeting={"Bienvenidos a Mi Tienda"} searchTerm= {searchTerm}/>}/>
          <Route exact path="category/:CategoryId" element={<ItemCategoryContainer/>}/>
          <Route exact path='items/:idItem' element= {<ItemDetailContainer/>}/>
          <Route exact path='/Cart' element= {<Cart/>}/>  
          <Route exact path='/Checkout' element={<Checkout />} />
      </Routes>
      </BrowserRouter>
    </div>
    </CartContextProvider>
  );
}

export default App;
