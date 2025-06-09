import './App.css'
import { Outlet } from '@tanstack/react-router'
import NavBar from './components/NavBar'
import { useEffect } from 'react'
import { checkAuth } from './utils/checkAuth';

function App() {
      useEffect(()=>{
        checkAuth();
      },[]);
  return (
    <>
     <NavBar/>   
     <Outlet/>
    </>
  )
}

export default App
