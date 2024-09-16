import { useState } from 'react'
import { BrowserRouter , Router, Routes, Route } from 'react-router-dom';


import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  

  return (
    <div>
      
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
          
        </Routes>
        
    </BrowserRouter>
      
    </div>
  )
}

export default App
