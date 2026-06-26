import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import medigo_logo from '../assets/medigo_logo.png'

const Navbar = () => {

  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')

    if (dToken) {
      setDToken('')
      localStorage.removeItem('dToken')
    }

    if (aToken) {
      setAToken('')
      localStorage.removeItem('aToken')
      localStorage.removeItem('demoAdmin')   // <-- Add this
    }
  }

  return (
    <div className='flex items-center justify-between px-4 py-3 bg-white border-b sm:px-10'>
      <div className='flex items-center gap-2 text-xs'>
        <img onClick={() => navigate('/')} className='cursor-pointer w-36 sm:w-40' src={medigo_logo} alt="" />
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={() => logout()} className='px-10 py-2 text-sm text-white rounded-full bg-primary'>Logout</button>
    </div>
  )
}

export default Navbar