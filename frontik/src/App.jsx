import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Create from './components/Create'
import Fetch from './components/Fetch'
function App() {
  

  return (
    <>
      <Fetch/>
      <Create/>
    </>
  )
}

export default App
