import React, { useState } from 'react'
import './App.css';

function App() {

  const [name,setName] = useState(``)
  const [age,setAge]= useState(0)

  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      {/* Display Data */}
      <div className="input-display">
        <p>Display Name:{name} </p>
        <p>Display Age: {age}</p>
      </div>

      {/* Collect User Inputs */}
      <div className="inputs">
        {/* Input name */}
        <div className="field">
          <label className="label">Name: </label>
          <input
            className="input"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="William"
          />
        </div>

        {/* Input age */}
        <div className="field">
          <label className="label">Age: </label>
          <input
            className="input"
            onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="38"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
