import React from 'react'
import { useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext'
// import { doctors } from '../assets/assets'
import { useContext } from 'react'

const TopDoctors = () => {
      const navigate = useNavigate();
      const {doctors} = useContext(AppContext)  
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium '>Top Doctors</h1>
      <p className='text-sm text-center sm:w-1/3'>Meet our top-rated doctors who are dedicated to providing exceptional care and expertise.</p>   
      <div className='grid w-full grid-cols-5 gap-4 px-3 pt-5 gap-y-6 sm:px-0'>
            {doctors.slice(0,10).map((doctor,index) => (
              <div onClick={()=>navigate(`/appointment/${doctor._id}`)} key={index} className='overflow-hidden border border-blue-200 rounded-xl cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                <img className=' bg-blue-50' src={doctor.image} alt=""/>
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                        <p >Available</p>
                  </div>
                  <p className='text-lg font-medium text-gray-900'>{doctor.name}</p>
                  <p className='text-sm text-gray-600'>{doctor.speciality}</p>
                </div>
              </div>
            ))}
      </div>
      <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className='px-12 py-3 mt-10 text-gray-600 bg-green-100 rounded-full'>More</button>
    </div>
  )
}

export default TopDoctors