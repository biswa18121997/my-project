"use client"
import React from 'react'
import Services from './ui/Services'

const servicesData = [
  {
    service: 'UI/ UX Design',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    service: 'Web Design',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  },
  {
    service: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
]

const MyServices = () => {
  return (
    <div
      className='w-full h-[878px] gap-24 px-[71px] py-[116px] rounded-[50px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-[#171717] relative flex flex-col'
    >
      {/* Header Row */}
      <div className='w-full max-w-[1299px] h-[52px] flex items-center justify-between mx-auto mt-2'>
        {/* Title */}
        <h1 className='font-medium text-[2rem] text-[#FCFCFD] flex items-center'>
          My <span className='text-[#FD853A] ml-2'>Services</span>
        </h1>
        {/* Description */}
        <p className='w-[576px] h-[52px] text-left text-white text-sm flex items-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales
        </p>
      </div>
      {/* Services Cards Row */}
      <Services/>
    </div>
  )
}

export default MyServices