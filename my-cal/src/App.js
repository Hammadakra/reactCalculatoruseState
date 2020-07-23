import React, { useState } from 'react';
import './App.css';

function App() {
  const [number1,setNumber1] =useState(0);
  const [number2,setNumber2] =useState(0);
  const [Total,setTotal] =useState(number2+number1);
  
  function add()
  {
    setTotal(number1+number2)
  }


  return (
    <div>
    <h1>Adding Two Number</h1>
    <div className="inp">

    <input 
    type='number'
    placeholder='0'
    value={number1} 
    onChange={e => setNumber1(e.target.value)}></input>
    
    <input 
    type='number' 
    placeholder='0' 
    value={number2}
    onChange={e => setNumber2(e.target.value)}>
    </input>
  </div>
  <br></br>
    <button onClick={add}>Add Them</button>   
    <h1>{add}</h1> 
    </div>
  );
}

export default App;
