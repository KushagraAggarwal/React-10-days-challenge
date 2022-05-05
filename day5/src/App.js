import React,{ useState } from 'react';
import './App.css';
import Button from './container/Button';

function App() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  function handleNumber1Change(e) {
    setNumber1(+e.target.value);
  }

  function handleNumber2Change(e) {
    setNumber2(+e.target.value);
  }

  function calculateTotal() {
    setTotal(number1 + number2);
    setNumber1(0)
    setNumber2(0)
  }
  function subtractTotal(){
    setTotal(number1-number2);
    setNumber1(0)
    setNumber2(0)
  }
  function multiplyTotal(){
    setTotal(number1*number2);
    setNumber1(0)
    setNumber2(0)
  }
  function divideTotal(){
    setTotal(number1/number2);
    setNumber1(0)
    setNumber2(0)
  }

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input
          type="number"
          placeholder={number1}
          onChange={handleNumber1Change}
          value={number1}
        />
        <input
          type="number"
          placeholder={number2}
          onChange={handleNumber2Change}
          value={number2}
        />
      </div>

      <Button onClick={calculateTotal} name="Add Them!" />
      <Button onClick={subtractTotal} name="Subtract Them" />
      <Button onClick={multiplyTotal} name="Multiply Them" />
      <Button onClick={divideTotal} name="Divide Them" />

      <h2>{total}</h2>
    </div>
  );
}

export default App;
