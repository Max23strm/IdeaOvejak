import './App.css';
import Rutas from './routes/Rutas';
import React, { useEffect} from 'react'
import useFirebase from './hooks/useFirebase';
function App() {

    
  //  const[data, setData]=useState([])
    const {productos, fetchGetDataCollection}= useFirebase()
    useEffect(()=>{
        fetchGetDataCollection()
    },[])

    return (
        <div className="App">
            <Rutas data={productos}/>
        </div>
    );
}

export default App;
