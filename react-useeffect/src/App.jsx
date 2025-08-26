import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {

  const [Count,SetCount]= useState (0);
  const [CounTwo,SetCountTwo]= useState (0);

  // use effect passes two  parameters 1 is function and 2 is dependency array 
  useEffect(() => {
    console.log("rendered");
    
  },[Count]);
  return (
    <>
      <h1>hello</h1>
      <p> counter : {Count}</p>
      <button onClick={() => SetCount(Count+1)}>Add</button>

      <p> counter : {CountTwo}</p>
      <button onClick={() => SetCountTwo(CounTwo+1)}>Add</button>
    </>
  )
}

export default App
