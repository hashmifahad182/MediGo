import React from 'react'
import {specialityData} from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1> 
      <p className='text-sm text-center sm-1/3'>Select a speciality to find relevant doctors.</p>
      <div className='flex w-full gap-4 pt-5 overflow-scroll sm:justify-center'>
        {specialityData.map((item,index) => (
          <Link onClick={() => scrollTo(0,0)} className='flex flex-col items-center flex-shrink-0 text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
            <img className='w-16 mb-2 rounded-full sm:w-24' src={item.image} alt=""/>
            <p>{item.speciality} </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu