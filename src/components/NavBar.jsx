import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from '@tanstack/react-router';
import { logout } from '../store/slice/authSlice';
import { logoutUser } from '../api/auth';

function NavBar({}) {
    const {isAuthenticated} = useSelector((state)=>state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async() =>{
      await logoutUser();
      dispatch(logout());
      navigate({to:"/"});
    }

    const handleLogin = () =>{
      navigate({to:"/auth"})
    }

  return (
    <nav className='bg-white '>
        <div className='flex justify-between mx-10 mt-4'>
          <div onClick={()=>navigate({to:"/"})}  className='text-2xl text-green-400 font-bold mb-4 cursor-pointer'>
            UrlRoom
          </div>
          <ul className='flex justify-between gap-4 items-center'>
            <li onClick={()=>navigate({to:"/"})} className='cursor-pointer'>Home</li>
            <li onClick={()=>navigate({to:"/dashboard"})} className='cursor-pointer'>Dashboard</li>
            <li > {isAuthenticated ? <button onClick={handleLogout}  className='cursor-pointer text-white bg-blue-600 rounded-md px-4 py-2 w-20 '>logout</button>  : 
                  <button onClick={handleLogin}  className='cursor-pointer text-white bg-blue-600 rounded-md px-4 py-2 w-20 '>login</button>  }  </li>
          </ul>
          </div>
    </nav>
  )
}

export default NavBar