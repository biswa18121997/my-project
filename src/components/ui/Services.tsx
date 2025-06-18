import React from 'react'

interface ServicesProps {
  service: string;
  image: string;
}

const Services: React.FC<ServicesProps> = ({ service, image }) => {
  return (
    <div className="relative w-[416px] h-[508px] rounded-[32px] bg-[#686868]/20 border-2 border-white/50 backdrop-blur-lg flex flex-col items-center shadow-lg overflow-hidden">
      {/* Title */}
      <h1 className="w-full h-[65px] flex items-center text-white text-2xl font-semibold border-b-2 border-[#F9FAFB]/30 px-[37px]">
        {service}
      </h1>
      {/* Main Image */}
      <img
        src={image}
        alt={service}
        className="w-[90%] h-[60%] object-cover rounded-[32px] mt-8 mx-auto"
      />
      {/* Arrow Button */}
      <button className="absolute right-6 bottom-6 w-[72px] h-[72px] rounded-full bg-[#232932] flex items-center justify-center shadow-lg border-4 border-[#171717]">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M13 27L27 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 13H27V25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

export default Services