import React, { useState } from 'react'
import {assets} from '../assets/assets'
import medigo_logo from '../assets/medigo_logo.png'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    // const [showMenu,setShowMenu] = useState(false);
    const [token, setToken] = useState(true);
    
  return (
    <div className='flex items-center justify-between py-4 mb-5 border-b border-gray-400'>
        <img onClick={()=>navigate('/ ')} src={medigo_logo} alt="logo" className='cursor-pointer w-60'  />
        <ul className='items-start hidden font-medium gap-7 md:flex'>

            <NavLink to="/">{({ isActive }) => (<>
                <li className={`py-1 ${isActive ? "text-primary" : "text-gray-500"}`}>HOME</li>
                <hr className={`${isActive ? "bg-primary h-0.5 border-none w-full" : "hidden"}`} /></>)}
            </NavLink>
            <NavLink to="/doctors">{({ isActive }) => (<>
                <li className={`py-1 ${isActive ? "text-primary" : "text-gray-500"}`}>DOCTORS</li>
                <hr className={`${isActive ? "bg-primary h-0.5 border-none w-full" : "hidden"}`} /></>)}
            </NavLink>
            <NavLink to="/about">{({ isActive }) => (<>
                <li className={`py-1 ${isActive ? "text-primary" : "text-gray-500"}`}>ABOUT</li>
                <hr className={`${isActive ? "bg-primary h-0.5 border-none w-full" : "hidden"}`} /></>)}
            </NavLink>
            <NavLink to="/contact">{({ isActive }) => (<>
                <li className={`py-1 ${isActive ? "text-primary" : "text-gray-500"}`}>CONTACT</li>
                <hr className={`${isActive ? "bg-primary h-0.5 border-none w-full" : "hidden"}`} /></>)}
            </NavLink>
        
        </ul>
        <div className='flex items-center gap-4 mx-10'>
            {
                token 
                ? <div className='relative flex items-center gap-2 cursor-pointer group'>
                    <img src={assets.profile_pic} alt="user" className='w-12 rounded-full' />
                    <img src={assets.dropdown_icon} alt="dropdown" className='w-2.5 cursor-pointer' />
                    <div className='absolute top-0 right-0 z-20 hidden text-base font-medium text-gray-600 pt-14 group-hover:block'>
                        <div className='flex flex-col gap-3 p-4 rounded min-w-48 gap bg-stone-100'>
                            <p onClick={()=>navigate('my-profile')} className='cursor-pointer hover:text-black'>My Profile</p>
                            <p onClick={()=>navigate('my-appointments')} className='cursor-pointer hover:text-black'>My Appointments</p>
                            <p onClick={()=>setToken(false)} className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                :<button onClick={() => navigate('/login')} className='hidden px-4 py-2 font-light text-white rounded-full bg-primary hover:bg-blue-600 md:block'>Create Account</button>
            }
            
        </div>
    </div>
  )
}

export default Navbar