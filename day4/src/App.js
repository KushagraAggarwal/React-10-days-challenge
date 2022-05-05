import React, { useState } from 'react'
import './App.css';

function App() {

  const [phrase, setPhrase] = useState('')


  if(phrase==='open sesame'){
    alert('you may pass')
  }

  return (
    <div className="App">
      <h2>What's the secret phrase?</h2>

      <input type="text" placeholder="Super duper secret" value={phrase} onChange={e=>setPhrase(e.target.value)}/>

      <p>
        Hint: It's <strong>open sesame</strong>
      </p>
    </div>
  );
}

export default App;
