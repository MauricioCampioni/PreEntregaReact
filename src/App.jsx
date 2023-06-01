
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemCategoryContainer from './container/ItemCategoryContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import CartContextProvider from './components/CartContext/CartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <CartContextProvider>
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
          <Route exact path='/' element = {<ItemListContainer greeting={"Bienvenidos a BocaStore"}/>} />
          <Route exact path='/items' element = {<ItemListContainer greeting={"Bienvenidos a BocaStore"}/>} />
          <Route exact path="category/:CategoryId" element={<ItemCategoryContainer/>}/>
          <Route exact path='items/:idItem' element= {<ItemDetailContainer/>}/>
          <Route exact path='/Cart' element= {<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </CartContextProvider>
  );
}

export default App;
