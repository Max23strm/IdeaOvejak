import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
function App() {

  return (
    <div className="App">
        <NavBar/>
        <ItemCount stock="2" initial="1"/>
        <ItemListContainer/>

    </div>
  );
}

export default App;
