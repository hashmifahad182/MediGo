import React from 'react'
import medigo_logo from '../assets/medigo_logo.png'

const Footer = () => {
  return (
      <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
                  <div>
                        <img className='w-60 ' src={medigo_logo} alt="logo" />
                        <p className='w-full leading-6 text-gray-600 md:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt unde impedit deserunt quos illum delectus iure animi porro similique expedita sint dolorum iste, odio atque reiciendis itaque debitis. Sit, maxime.
                       </p>
                  </div>

                  <div>
                        <p className='mb-5 text-xl font-medium'>COMPANY</p>
                        <ul className='flex flex-col gap-2 text-gray-600'>
                              <li>Home</li>
                              <li>About</li>
                              <li>Contact us</li>
                              <li>Privacy Policy</li>
                        </ul>

                  </div>

                  <div>
                        <p className='mb-5 text-xl font-medium'>Get in Touch</p>
                        <ul className='flex flex-col gap-2 text-gray-600'>
                              <li>info@medigo.com</li>
                              <li>+91 12345xxxxx</li>
                              <li>123 Main Street, City, India</li>
                        </ul>

                  </div>
            </div>
            <div>
                  <hr />
                  <p className='py-5 text-sm text-center'>Copyright © 2026 MediGo. All rights reserved.</p>
            </div>
    </div>
  )
}

export default Footer