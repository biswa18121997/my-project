"use client";

import Navbar from "@/components/Navbar";
import CustomeText from "@/components/ui/CustomeText";
import DualToggleButtons from "@/components/ui/DualButtons";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white py-10 flex flex-col items-center justify-start">
      <Navbar />

      <div className="flex max-w-[1440px] w-full h-[846px] px-4 gap-[71px] items-center justify-center mt-6">

        {/* Left Testimonial */}
        <div className="flex flex-col w-[328px] h-[138px] items-start justify-start transition-all duration-300 ease-in-out group-hover/half:-translate-y-[280px] group-hover/half:opacity-0">
          <div className="text-[#344054] text-[36px] leading-none">“</div>
          <p className="text-[#344054] text-[16px] font-medium leading-snug">
            Jenny's exceptional product design ensured our website's success.
            <br />
            Highly recommended.
          </p>
        </div>

        {/* Center Hero Section */}
        <div className="relative w-full flex flex-col items-center mt-16">

          {/* Top Text */}
          <div className="flex w-[952px] h-[266px] flex-col items-center justify-center mb-6 transition-all duration-300 ease-in-out group-hover/half:translate-y-[99%] group-hover/half:opacity-0">
            <button className="h-[45px] px-[26px] py-[13px] rounded-full border border-[#171717] flex items-center justify-center bg-white">
              Hello!
            </button>

            <div className="flex gap-2 items-end mb-1">
              <CustomeText title="I'm" className="text-[#171717]" />
              <div className="flex">
                <CustomeText title="Jenny" className="text-[#FD853A]" />
                <CustomeText title="," className="text-[#171717]" />
              </div>
            </div>

            <CustomeText title="Product Designer" className="text-[#171717]" />
          </div>


          <div className="relative w-[952px] h-[636px] flex flex-col items-center justify-center -translate-y-[20%] group/half">
            <div className="absolute bottom-0 z-0 w-[812px] h-[406px] overflow-hidden flex items-center justify-center rounded-t-full bg-[#FEB273]" />

            <div className="absolute z-10 transition-all duration-300 ease-in-out opacity-0 scale-0 group-hover/half:opacity-100 group-hover/half:scale-105">
              <Image
                src="/Frame 68.svg"
                alt="Frame Decoration"
                width={952.4}
                height={636}
                className="object-contain"
                priority
              />
            </div>

            <Image
              src="/girl.svg"
              alt="Jenny"
              width={952.4}
              height={636}
              className="relative z-20"
              priority
            />

            <div className="absolute bottom-[10%] z-30">
              <DualToggleButtons />
            </div>
          </div>
        </div>

        {/* Right Stats */}
        <div className="w-[169px] h-[125px] flex flex-col items-end justify-end gap-2 transition-all duration-300 ease-in-out group-hover/half:-translate-y-[280px] group-hover/half:opacity-0">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} fill="#FD853A" stroke="#FD853A" />
            ))}
          </div>
          <h1 className="text-[32px] font-bold text-[#171717] leading-none whitespace-nowrap">
            10 Years
          </h1>
          <p className="text-sm text-[#171717]">Experience</p>
        </div>

      </div>
    </div>
  );
}
