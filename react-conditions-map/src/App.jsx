import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Condition from './components/Condition'  

import './App.css'
import User from './components/user'
import ListItem from './components/ListItem'


function App(props) {
  const isLoggin = true;
  return (
    <>
    <h1>conditional rendering</h1>
    <ListItem />
    </>


  )
}

export default App;
