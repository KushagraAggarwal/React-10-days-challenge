import React, { useState } from 'react'
import './App.css';

function App() {

  const [val, setVal] = useState(0);

  const handleDecreament=()=>{
    if(val===0){
     return alert("Value is already 0")
    }
    setVal(val-1)
  }

  const handleIncreament=()=>{
    setVal(val+1)
  }

  return (
    <div className="App">

      <h1>Increament and Decreament</h1>
      <div className="container d-flex flex-column">
        <input type="number" value={val} />
        <button
          name="incre"
          className="btn btn-primary my-3"
          onClick={handleIncreament}
        >
          Increament
        </button>
        <button
          name="decre"
          className="btn btn-primary"
          onClick={handleDecreament}
        >
          Decreament
        </button>
      </div>
    </div>
  );
}

export default App;
