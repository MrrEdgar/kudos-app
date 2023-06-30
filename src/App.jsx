import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import NavbarKudos from './components/NavbarKudos'
import Dashboard from './components/Dashboard'


function App() {
  const API_URL = 'http://127.0.0.1:8000/api/users/1/'
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const fetchUserData = async () => {
      try{
        const response = await fetch(API_URL);
        const data = await response.json();
        setUserData(data)
      } catch (error){
        console.error('Error :(')
      }
    }
    (async () => await fetchUserData())();
  }, []);
  return (
    <>
      <NavbarKudos company={userData.company}/>
      <Routes>
        <Route path='/' element={<Home name={userData.fullname} kudos_left={userData.kudos_left} user_id={userData.id} />}/>
        <Route path='/dashboard' element={<Dashboard user_id={userData.id}/>}/>
      </Routes>
    </>
  )
}

export default App
