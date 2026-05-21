import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const docInfo = doctors.find((doc) => doc._id === docId)

  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  if (!doctors || doctors.length === 0) {
    return <p className='text-xl text-blue-500'>Loading doctors...</p>
  }

  if (!docInfo) {
    return <p className='text-xl text-red-500'>Doctor not found</p>
  }

  const getAvailableSlots = () => {
  let slots = []

  let today = new Date()

  for (let i = 0; i < 7; i++) {
    let currentDate = new Date(today)
    currentDate.setDate(today.getDate() + i)

    let startTime = new Date(currentDate)
    let endTime = new Date(currentDate)

    // Set clinic timing: 10 AM to 9 PM
    startTime.setHours(10, 0, 0, 0)
    endTime.setHours(21, 0, 0, 0)

    // If today, start from next available half-hour slot
    if (i === 0) {
      let now = new Date()

      if (now.getHours() >= 10) {
        startTime.setHours(now.getHours(), now.getMinutes(), 0, 0)

        if (startTime.getMinutes() > 30) {
          startTime.setHours(startTime.getHours() + 1)
          startTime.setMinutes(0)
        } else if (startTime.getMinutes() > 0) {
          startTime.setMinutes(30)
        }

        if (startTime < now) {
          startTime.setMinutes(startTime.getMinutes() + 30)
        }
      }
    }

    let timeSlots = []

    while (startTime < endTime) {
      let hour = startTime.getHours()

      // Skip slots from 1 PM to 3 PM
      if (hour < 13 || hour >= 14) {
        timeSlots.push({
          dateTime: new Date(startTime),
          time: startTime.toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          }).toLowerCase()
        })
    }

  startTime.setMinutes(startTime.getMinutes() + 30)
}

    // Push whole day array
    if (timeSlots.length > 0) {
      slots.push(timeSlots)
    }
  }

  setDocSlots(slots)
}

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots)
  }, [docSlots])

  return (
    <div className='p-4'>
      <div className='flex flex-col gap-4 sm:flex-row'>
        <div>
          <img
            className='w-full rounded-lg sm:max-w-72 bg-primary'
            src={docInfo.image}
            alt="doctor"
          />
        </div>

        <div className='flex-1 p-8 mx-2 bg-white border border-gray-400 rounded-lg py-7 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="verified" />
          </p>

          <div className='flex items-center gap-2 mt-1 text-sm text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border rounded-full text-xs'>{docInfo.experience}</button>
          </div>

          <div>
            <p className='flex items-center gap-1 mt-3 text-sm font-medium text-gray-900'>
              About <img className='w-5' src={assets.info_icon} alt="verified" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>

          <p className='mt-4 font-medium text-gray-500'>
            Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      <div className='mt-4 font-medium text-gray-700 sm:ml-72 sm:pl-4'>
        <p>Booking Slots</p>

        <div className='flex items-center w-full gap-3 mt-4 overflow-x-scroll'>
          {
            docSlots.length > 0 && docSlots.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setSlotIndex(index)
                  setSlotTime('')
                }}
                className={`py-6 text-center rounded-full cursor-pointer min-w-16 border transition-all duration-300 ${
                  slotIndex === index
                    ? 'bg-primary text-white'
                    : 'border-gray-200 bg-white text-gray-700'
                }`}
              >
                <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                <p>{item[0] && item[0].dateTime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className='flex items-center w-full gap-3 mt-4 overflow-x-scroll'>
          {
            docSlots.length > 0 &&
            docSlots[slotIndex]?.map((item, index) => (
              <p
                key={index}
                onClick={() => setSlotTime(item.time)}
                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer border transition-all duration-300 ${
                  slotTime === item.time
                    ? 'bg-primary text-white'
                    : 'text-gray-400 border-gray-300'
                }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))
          }
        </div>

        <button className='py-3 my-6 text-sm font-light text-white rounded-full px-14 bg-primary'>
          Book an Appointment
        </button>
      </div>
    </div>
  )
}

export default Appointment