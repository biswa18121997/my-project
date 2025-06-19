import Navbar from "@/components/Navbar";
import CustomeText from "@/components/ui/CustomeText";
import DualToggleButtons from "@/components/ui/DualButtons";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Home() {
  const experiences = [
    {
      company: "Cognizant, Mumbai",
      duration: "Sep 2016 - July 2020",
      role: "Experience Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
      dotColor: "bg-[#FD853A]",
    },
    {
      company: "Sugee Pvt limited, Mumbai",
      duration: "Sep 2020 - July 2023",
      role: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
      dotColor: "bg-[#1D2939]",
    },
    {
      company: "Cinetstox, Mumbai",
      duration: "Sep 2023",
      role: "Lead UX Designer",
      desc: "",
      dotColor: "bg-[#FD853A]",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-white py-10 flex flex-col items-center justify-start">
      <Navbar />

      {/* Hero Section */}
      <div className="group flex max-w-[1440px] w-full h-[846px] px-4 gap-[71px] items-center justify-center mt-6">
        
        {/* Left Testimonial */}
        <div className="flex flex-col w-[328px] h-[138px] items-start justify-start transition-transform duration-300 ease-in-out group-hover:-translate-y-[250px]">
          <div className="text-[#344054] text-[36px] leading-none">“</div>
          <p className="text-[#344054] text-[16px] font-medium leading-snug">
            Jenny's exceptional product design ensured our website's success.
            <br />
            Highly recommended.
          </p>
        </div>

        {/* Center Content */}
        <div className="relative w-full flex flex-col items-center mt-16">

          {/* Title Text */}
          <div className="flex w-[952px] h-[266px] flex-col items-center justify-center mb-6 transition-all duration-300 ease-in-out group-hover:translate-y-[280px] group-hover:opacity-0">
            <button className="h-[45px] px-[26px] py-[13px] rounded-full border border-[#171717] flex items-center justify-center bg-white z-50">
              Hello!
            </button>
            <div className="flex gap-2 items-end mb-1">
              <CustomeText title="I'm" className="text-[#171717] font-semibold text-[96px]" />
              <div className="flex">
                <CustomeText title="Jenny" className="text-[#FD853A] font-semibold text-[96px]" />
                <CustomeText title="," className="text-[#171717] font-semibold text-[96px]" />
              </div>
            </div>
            <CustomeText title="Product Designer" className="text-[#171717] font-semibold text-[96px]" />
          </div>

          {/* Hover Illustration & Image */}
          <div className="relative w-[952px] h-[636px] flex flex-col items-center justify-center -translate-y-[20%]">
            {/* Half Circle Background */}
            <div className="absolute bottom-0 z-0 w-[812px] h-[406px] overflow-hidden flex items-center justify-center pointer-events-auto">
              <div className="absolute w-full h-full bg-[#FEB273] rounded-t-full" />
            </div>

            {/* Frame Doodle (appears on hover) */}
            <div className="absolute z-10 transition-all duration-500 ease-in-out opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-105">
              <Image
                src="/Frame 68.svg"
                alt="Frame Decoration"
                width={1017}
                height={688}
                className="object-contain"
                priority
              />
            </div>

            {/* Jenny Image */}
            <Image
              src="/girl.svg"
              alt="Jenny"
              width={952}
              height={636}
              className="relative z-20"
              priority
            />

            {/* Theme Toggle */}
            <div className="absolute bottom-[10%] z-30">
              <DualToggleButtons />
            </div>
          </div>
        </div>

        {/* Experience Stats */}
        <div className="w-[169px] h-[125px] flex flex-col items-end justify-end gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-[250px]">
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

      {/* Work Experience Section */}
      <div className="w-full h-[827px] flex flex-col items-start mx-auto px-[71px]">
        
        {/* Section Title */}
        <div className="w-full h-[234px] flex items-start justify-center space-x-2.5">
          <CustomeText title="My" className="font-medium text-6xl text-[#344054]" />
          <CustomeText title="Work" className="font-medium text-6xl text-[#FD853A]" />
          <CustomeText title="Experince" className="font-medium text-6xl text-[#FD853A]" />
        </div>

        {/* Timeline */}
        <div className="w-full h-[438px] flex justify-evenly">

          {/* Company Names & Duration */}
          <div className="flex flex-col justify-between w-[495px] h-[438px] gap-[102px]">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-[14px]">
                <CustomeText title={exp.company} className="font-semibold text-[#1D2939] text-[40px]" />
                <CustomeText title={exp.duration} className="text-2xl text-[#98A2B3]" />
              </div>
            ))}
          </div>

          {/* Vertical Timeline with Dots */}
          <div className="relative flex flex-col items-center justify-between">
            <div className="absolute top-0 bottom-0 w-[2px] border-l-2 border-dashed border-[#1D2939]" />
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-center w-12 h-12">
                <div className="absolute w-12 h-12 rounded-full border-2 border-dashed border-[#1D2939] bg-white" />
                <div className={`w-9 h-9 rounded-full z-10 ${exp.dotColor}`} />
              </div>
            ))}
          </div>

          {/* Role and Description */}
          <div className="flex flex-col justify-between w-[444px] h-[400px] gap-[48px]">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-[14px]">
                <CustomeText title={exp.role} className="font-semibold text-[#1D2939] text-[40px]" />
                {exp.desc && (
                  <CustomeText title={exp.desc} className="text-2xl text-[#98A2B3]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
