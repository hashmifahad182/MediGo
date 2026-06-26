import React from 'react'
import { useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'

const TopDoctors = () => {
      const navigate = useNavigate();
      const {doctors} = useContext(AppContext)  
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium '>Top Doctors</h1>
      <p className='text-sm text-center sm:w-1/3'>Meet our top-rated doctors who are dedicated to providing exceptional care and expertise.</p>   
      <div className="grid w-full grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {doctors.slice(0,10).map((doctor,index) => (
              <div
    onClick={() => {
        navigate(`/appointment/${doctor._id}`)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }}
    key={doctor._id}
    className="flex flex-col overflow-hidden transition-all duration-300 bg-white border border-blue-100 shadow-sm cursor-pointer rounded-2xl hover:shadow-xl hover:-translate-y-2"
>
                <div className="h-64 overflow-hidden bg-blue-50">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="flex flex-col flex-grow p-5">

                  <div className="flex items-center gap-2 mb-3">
                    <span
                        className={`w-2.5 h-2.5 rounded-full ${
                            doctor.available ? "bg-green-500" : "bg-red-500"
                        }`}
                    ></span>

                    <span
                        className={`text-sm font-medium ${
                            doctor.available ? "text-green-600" : "text-red-600"
                        }`}
                    >
                        {doctor.available ? "Available" : "Unavailable"}
                    </span>
                    
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800">
                      {doctor.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                      {doctor.speciality}
                  </p>

              </div>
              </div>
            ))}
      </div>
      <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className='px-12 py-3 mt-10 text-gray-600 bg-green-100 rounded-full'>More</button>
    </div>
  )
}

export default TopDoctors