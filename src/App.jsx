import { useState } from 'react'


import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a la tienda" />

    </div>
   
    

    

  )
}

export default App
