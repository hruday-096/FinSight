import React from 'react'

//router imports
import { Router, Route, Routes } from 'react-router-dom'

//page imports
import Home from './pages/Home'


function App() {

  return (
    <Routes>
      <Route path = '/' element = { <Home/> } />
    </Routes>
  )
}

export default App
