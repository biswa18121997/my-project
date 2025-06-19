"use client"
import React, { useState } from 'react'

const Navbar = () => {
    const menuItems = [
        { label: "Home" },
        { label: "About" },
        { label: "Service" },
        { label: "Resume" },
        { label: "Project" },
        { label: "Contact" },
    ];
    const [selected, setSelected] = useState("Home");

    return (
        <nav className="w-[1298px] h-[86px] bg-[#171717] text-white px-2.5 rounded-[50px] backdrop-blur-[15px] box-border border border-white mx-auto flex items-center justify-between z-50">
            {/* Left menu */}
            <div className="flex flex-1 justify-start gap-2.5">
                {menuItems.slice(0, 3).map((item) => (
                    <button
                        key={item.label}
                        className={`w-[139px] h-[66px] cursor-pointer flex items-center justify-center gap-2.5 rounded-[60px] text-base font-medium transition-colors duration-500 ease-in-out ${selected === item.label ? 'bg-[#FD853A] text-white font-bold' : 'bg-transparent text-white hover:bg-[#232323]'}`}
                        onClick={() => setSelected(item.label)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            {/* Logo */}
            <div className="flex flex-col items-center flex-shrink-0 cursor-pointer">
                <div className="w-10 h-10 bg-[#FD853A] rounded-full flex items-center justify-center mb-1">
                    {/* Placeholder SVG logo */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="4" y="18" fontSize="14" fontWeight="bold" fill="white">JC</text>
                    </svg>
                </div>
                <span className="font-bold text-lg tracking-wide cursor-pointer">JCREA</span>
            </div>
            {/* Right menu */}
            <div className="flex flex-1 justify-end gap-4">
                {menuItems.slice(3).map((item) => (
                    <button
                        key={item.label}
                        className={`w-[139px] h-[66px] cursor-pointer flex items-center justify-center gap-2.5 rounded-[60px] text-base font-medium transition-colors duration-500 ease-in-out ${selected === item.label ? 'bg-[#FD853A] text-white font-bold' : 'bg-transparent text-white hover:bg-[#232323]'}`}
                        onClick={() => setSelected(item.label)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default Navbar