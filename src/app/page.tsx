import Navbar from "@/components/Navbar";
import CustomeText from "@/components/ui/CustomeText";
import DualToggleButtons from "@/components/ui/DualButtons";
import Image from "next/image";
import { Award , Star, ShieldCheck  } from "lucide-react";
import OrangeButton from "@/components/ui/OrangeButton";

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

  const buttons = [
    "Landing Page", "Product Deesign", "Animation", "Glassmorphim", "Cards"
  ]

  const IconAndText = [
    {
      icon: Star,
      name: "4.9 Average Rating",
    },
    {
      icon: Award,
      name: "25+ Winning Awards",
    },
    {
      icon: ShieldCheck,
      name: "Certified Product Design",
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

      {/* hire me */}
      <div className="w-full h-[806px] gap-[96px] flex items-center justify-center px-[71px] py-[122px] bg-[#F2F4F7] rounded-[50px]">
        <div className="relative w-[603px] h-[600px] group cursor-pointer">
          {/* Default Image*/}
          <Image
            src="/Property 1=Default.svg"
            alt="Hire me"
            fill
            className="object-contain z-10 transition-all duration-300 ease-in-out hover:translate-y-3"
            priority
          />

          {/* Hover Image*/}
          <Image
            src="/Property 1=Variant2.svg"
            alt="Hire me"
            fill
            className="object-contain absolute  -translate-y-[15px] transition-all duration-300 ease-in-out opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-120"
            priority
          />
        </div>


        <div className="w-[696px] h-[474px] flex flex-col items-start gap-[47px]">
          <div className="w-fll h-12 flex gap-5">
            <CustomeText
              title="Why"
              className="font-semibold text-6xl text-[#344054]"
            />
            <CustomeText
              title="Hire me"
              className="font-semibold text-6xl text-[#FD853A]"
            />
            <CustomeText
              title="?"
              className="font-semibold text-6xl text-[#344054]"
            />
          </div>
          <p className="w-[444px] h-[78px] text-[#98A2B3] text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>
          <div className="flex w-full h-[83px] items-start justify-start gap-2.5">
            <div className="w-[343px] flex flex-col items-start justify-center">
              <CustomeText
                title="450+"
                className="font-medium text-[36px] text-[#1D2939]"
              />
              <CustomeText
                title="Project Completed"
                className="text-[20px] text-[#667085]"
              />
            </div>
            <div className="w-[343px] flex flex-col items-start justify-center">
              <CustomeText
                title="450+"
                className="font-medium text-[36px] text-[#1D2939]"
              />
              <CustomeText
                title="Project Completed"
                className="text-[20px] text-[#667085]"
              />
            </div>
          </div>

          <button className="flex w-[233px] h-[108px] px-6 py-5 rounded-[24px] border border-[#151515] text-[#151515] font-semibold text-[32px] items-center justify-center transition-colors duration-300 ease-in-out cursor-pointer hover:bg-[#000000] hover:text-white">
            Hire me
          </button>

        </div>
      </div>

      {/* my portfolio */}

      <div className="w-full h-[1124px] flex flex-col items-center px-[71px] py-[97px] gap-12">

        <div className="w-full h-[150px] flex justify-between items-center">
          <div className="w-[643px] flex  flex-col items-start">
            <CustomeText
              title="Lets Have a look at"
              className="font-semibold text-[64px] text-[#344054]"
            />
            <div className="w-full flex items-start justify-start gap-4">
              <CustomeText
                title="my"
                className="font-semibold text-[64px] text-[#344054]"
              />
              <CustomeText
                title="Portfolio"
                className="font-semibold text-[64px] text-[#FD853A]"
              />
            </div>
          </div>
          <OrangeButton
            title="See All"
          />
        </div>

        <div>
          <div></div>
          <div className="w-[947px] h-[54px] flex gap-[14px] items-center">
            {buttons.map((text, index) => (
              <button
                key={index}
                className="px-8 py-[15px] rounded-[24px] bg-[#F2F4F7] text-[#000000] text-[20px] hover:bg-[#FD853A] hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {text}
              </button>
            ))}
          </div>

        </div>
        <div className="flex flex-col w-[742px] h-[148px] items-start gap-6">
          <div className="w-[742px] h-[63px] gap-[18px] flex items-start">
            <CustomeText
              title="Lirante - Food Delivery Solution"
              className="font-bold text-[40px] text-[#344054]"
            />
            <div className="bg-[#FD853A] w-[48px] h-[48px] flex items-center justify-center p-3 rounded-[60px]">
              <Image
                src="/down right.svg"
                alt="arrow"
                width={34}
                height={34}
                className="cursor-pointer"
              />
            </div>
          </div>
          <p className="w-full h-[61px] text-[20px] text-[#344054] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
        </div>
      </div>

      {/* contact */}
      <div className="w-full h-[476px] gap-2.5 flex flex-col py-[98px] items-center justify-center">
        <div className="w-[799px] h-[150px] flex  flex-col items-start">
          <CustomeText
            title="Have an Awsome Project"
            className="font-semibold text-[64px] text-[#344054]"
          />
          <div className="w-full flex items-start justify-start gap-4">
            <CustomeText
              title="Idea?"
              className="font-semibold text-[64px] text-[#344054]"
            />
            <CustomeText
              title="Let's Discuss"
              className="font-semibold text-[64px] text-[#FD853A]"
            />
          </div>
        </div>

        <div className="w-[832px] h-[86px] flex items-center justify-between px-6 rounded-full border border-[#E4E7EC] bg-white">
          {/* Icon Container */}
          <div className="w-[58px] h-[58px] flex items-center justify-center rounded-full bg-[#FFF2E5]">
            <Image
              src="/sms.svg"
              alt="message icon"
              width={28}
              height={28}
            />
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Enter Email Address"
            className="flex-1 mx-4 outline-none text-[#1D2939] placeholder:text-[#667085] text-[18px] bg-transparent"
          />

          {/* Send Button */}
          <OrangeButton title="Send"/>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {IconAndText.map((data, index) => {
            const Icon = data.icon;
            return (
              <div key={index} className="flex items-center gap-2 text-base font-medium text-[#000000]">
                <Icon size={20} />
                {data.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
