
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemCategoryContainer from './container/ItemCategoryContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
          <Route exact path='/' element = {""} />
          <Route exact path='/items' element = {<ItemListContainer greeting={"Bienvenidos a BocaStore"}/>} />
          <Route exact path="category/:CategoriaId" element={<ItemCategoryContainer/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
