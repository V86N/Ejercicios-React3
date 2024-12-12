import { useState } from 'react'
import './App.css'
import Reserve from './components/Reserve/reserve'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Headers from './components/Headers/Headers'

function App() {
  

  return (
    
      <div>
      <BrowserRouter>
      <Headers/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Reserve' element={<Reserve/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
     </BrowserRouter>
      </div>
      
  )
}

export default App
