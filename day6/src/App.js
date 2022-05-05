import './App.css';
import React, { useState } from 'react'

function App() {

  const [offsetTop, setOffsetTop] = useState(300)

  const changeButton = ()=>{
    setOffsetTop(offsetTop-50)
  }

  return (
    <div className="App">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button onClick={changeButton}>👆 Move Up 👆</button>

      {/* move this box using inline styles */}
      <div className="box" style={{
        transform: `translateY(${offsetTop}px)`
      }} />
    </div>
  );
}

export default App;
