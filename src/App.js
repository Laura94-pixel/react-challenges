import React, {useState} from 'react';
import './App.css';

function App() {
 const [algo, setAlgo] = useState({ firstName: '' })

    return (
      <div className="App">
        <div>
        <label >Escribe algo</label>
        <input 
         onChange={e => setAlgo ({escribe: e.target.value}) }
         className = "form-control" 
          type = "text" 
          name = "escribe"
          value={algo.escribe}
          />
        </div>
        <div className="box" >
        <p> {algo.escribe} </p>
        
        </div>
      </div>
  );
}


export default App;
