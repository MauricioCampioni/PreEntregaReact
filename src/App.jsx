
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemCategoryContainer from './container/ItemCategoryContainer';
import ItemDetailContainer from './container/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
          <Route exact path='/' element = {<ItemListContainer greeting={"Bienvenidos a BocaStore"}/>} />
          <Route exact path='/items' element = {<ItemListContainer greeting={"Bienvenidos a BocaStore"}/>} />
          <Route exact path="category/:CategoriaId" element={<ItemCategoryContainer/>}/>
          <Route exact path='items/:idItem' element= {<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
