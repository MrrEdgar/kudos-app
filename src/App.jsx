import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import NavbarKudos from './components/NavbarKudos'
import Dashboard from './components/Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarKudos/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
