
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a BocaStore"}/>
    </div>
  );
}

export default App;
