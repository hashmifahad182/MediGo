import axios from 'axios'
import React, { useContext, useState } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'

const Login = () => {

  const [state, setState] = useState('Admin')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const { setDToken } = useContext(DoctorContext)
  const { setAToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === 'Admin') {

      const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
      
      if (data.success) {
          setAToken(data.token)

          localStorage.setItem("aToken", data.token)

          localStorage.setItem(
              "demoAdmin",
              data.demo ? "true" : "false"
          )

      } else {
          toast.error(data.message)
      }

    } else {

      const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })
      if (data.success) {
        setDToken(data.token)
        localStorage.setItem('dToken', data.token)
      } else {
        toast.error(data.message)
      }

    }

  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <div className="w-full text-center">

          <h2 className="text-3xl font-bold text-gray-800">
              Dashboard Login
          </h2>

          <p className="mt-2 text-gray-500">
              Choose your role and sign in
          </p>

        </div>

        <div className="flex w-full p-1 mt-4 bg-gray-100 rounded-lg">

          <button
              type="button"
              onClick={() => setState("Admin")}
              className={`flex-1 py-2 rounded-md transition-all duration-300 ${
                  state === "Admin"
                      ? "bg-primary text-white shadow"
                      : "text-gray-600 hover:bg-gray-200"}`}>Admin</button>

          <button
              type="button"
              onClick={() => setState("Doctor")}
              className={`flex-1 py-2 rounded-md transition-all duration-300 ${
                  state === "Doctor"
                      ? "bg-primary text-white shadow"
                      : "text-gray-600 hover:bg-gray-200"
              }`}
          >
              Doctor
          </button>

      </div>
        
        <div className='w-full '>
          <p>Email</p>
          <input className="w-full p-3 mt-2 transition border border-gray-300 rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-blue-100" onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>
        
        <div className='w-full '>
          <p>Password</p>
          <input className="w-full p-3 mt-2 transition border border-gray-300 rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-blue-100" onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
        </div>
        
        <button className="w-full py-3 mt-3 font-semibold text-white transition rounded-lg bg-primary hover:opacity-90">
            Login
        </button>
        
      </div>
    </form>
  )
}

export default Login