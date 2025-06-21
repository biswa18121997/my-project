import Navbar from "@/components/Navbar";
import CustomeText from "@/components/ui/CustomeText";
import DualToggleButtons from "@/components/ui/DualButtons";
import Image from "next/image";
import { Star } from "lucide-react";
import OrangeButton from "@/components/ui/OrangeButton";
import ArrowButton from "@/components/ui/ArrowButton";
import Blog from "@/components/ui/Blog";
import { experiences, buttons, iconAndText, skills, blogs, portfolioData, cardData, reviews } from '../data/data';
import { GenericSlider } from "@/components/ui/GenericSlider";

export default function Home() {

  return (
    <div className="relative min-h-screen w-full bg-white py-10 flex flex-col items-center justify-start">
      <Navbar />

      {/* Hero Section */}
      <div className="group flex w-full h-[846px] px-4 gap-[71px] items-center justify-center mt-6">

        {/* Left Testimonial */}
        <div className="flex flex-col w-[328px] h-[138px] items-start justify-start transition-transform duration-300 ease-in-out group-hover:-translate-y-[250px]">
          <div className="text-[#344054] text-[36px] leading-none">“</div>
          <p className="text-[#344054] text-[16px] font-medium leading-snug">
            Jenny&apos;s exceptional product design ensured our website&apos;s success.
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
              <CustomeText title="I&apos;m" className="text-[#171717] font-semibold text-[96px]" />
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

      {/* Services */}
      <div className="relative flex flex-col w-full h-[878px] gap-[96px] items-center px-[71px] py-[116px] bg-[#171717] rounded-[50px] overflow-hidden -mt-14">
        <Image
          src="/Frame 77.svg"
          alt="image"
          fill
          className="object-cover absolute opacity-50"
        />

        <div className="w-full h-[52px] flex items-start justify-between relative z-10">
          <div className="flex gap-2.5">
            <CustomeText title="My" className="font-medium text-5xl text-[#FCFCFD]" />
            <CustomeText title="Services" className="font-medium text-5xl text-[#FD853A]" />
          </div>
          <p className="h-full w-[578px] font-medium text-[20px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
            posuere in justo vulputate, bibendum sodales
          </p>
        </div>

        <div className="relative flex w-[1299px] h-[508px] items-start justify-center">
          <GenericSlider
            data={cardData}
            slidesPerView={3}
            heightClass="h-[550px]"
            cardType="hover"
          />
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="w-full min-h-[600px] lg:h-[827px] flex flex-col items-start mx-auto px-4 sm:px-6 lg:px-[71px] py-8 lg:py-16">

        {/* Section Title */}
        <div className="w-full h-auto lg:h-[234px] flex lg:flex-row items-start justify-center space-x-2.5 mb-8 lg:mb-16 text-center lg:text-left">
          <CustomeText title="My" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#344054]" />
          <CustomeText title="Work" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#FD853A]" />
          <CustomeText title="Experience" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#FD853A]" />
        </div>

        {/* Timeline - Mobile Layout */}
        <div className="w-full lg:hidden">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex items-start gap-4">
                {/* Mobile Timeline Dot */}
                <div className="relative flex-shrink-0 mt-2">
                  <div className="w-6 h-6 rounded-full border-2 border-dashed border-[#1D2939] bg-white" />
                  <div className={`absolute top-1 left-1 w-4 h-4 rounded-full ${exp.dotColor}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <CustomeText title={exp.company} className="font-semibold text-[#1D2939] text-[20px] sm:text-[24px] mb-1" />
                  <CustomeText title={exp.duration} className="text-[#98A2B3] text-[14px] sm:text-[16px] mb-2" />
                  <CustomeText title={exp.role} className="font-semibold text-[#1D2939] text-[18px] sm:text-[20px] mb-2" />
                  {exp.desc && (
                    <CustomeText title={exp.desc} className="text-[#98A2B3] text-[14px] sm:text-[16px] leading-relaxed" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-auto lg:h-[438px] hidden lg:flex justify-evenly">

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
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[71px] py-20 lg:py-[122px] bg-[#F2F4F7] rounded-[32px] lg:rounded-[50px] gap-12 lg:gap-[96px]">
        {/* Image Section */}
        <div className="relative w-full max-w-[500px] aspect-square group mx-auto lg:mx-0">
          {/* Default Image */}
          <Image
            src="/Property 1=Default.svg"
            alt="Hire me"
            fill
            className="object-contain z-10 transition-all duration-300 ease-in-out group-hover:translate-y-3"
            priority
          />

          {/* Hover Image */}
          <Image
            src="/Property 1=Variant2.svg"
            alt="Hire me"
            fill
            className="object-contain absolute -translate-y-[15px] transition-all duration-300 ease-in-out opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="w-full max-w-xl flex flex-col items-start gap-8">
          {/* Title */}
          <div className="flex flex-wrap text-4xl sm:text-5xl lg:text-6xl font-semibold gap-2">
            <CustomeText title="Why" className="text-[#344054]" />
            <CustomeText title="Hire me" className="text-[#FD853A]" />
            <CustomeText title="?" className="text-[#344054]" />
          </div>

          {/* Paragraph */}
          <p className="text-[#98A2B3] text-base sm:text-lg lg:text-xl leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 w-full">
            <div className="flex flex-col">
              <CustomeText
                title="450+"
                className="text-[32px] sm:text-[36px] font-medium text-[#1D2939]"
              />
              <CustomeText
                title="Project Completed"
                className="text-lg text-[#667085]"
              />
            </div>
            <div className="flex flex-col">
              <CustomeText
                title="450+"
                className="text-[32px] sm:text-[36px] font-medium text-[#1D2939]"
              />
              <CustomeText
                title="Project Completed"
                className="text-lg text-[#667085]"
              />
            </div>
          </div>

          {/* Button */}
          <button className="w-full sm:w-auto px-6 py-4 rounded-[20px] border border-[#151515] text-[#151515] font-semibold text-2xl sm:text-[28px] transition-all duration-300 hover:bg-[#151515] hover:text-white">
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

        <div className="w-[1290px] h-[732px] flex flex-col items-center gap-12">
          <GenericSlider
            data={portfolioData}
            slidesPerView={2}
            heightClass="h-[460px]"
            cardType="portfolio"
          />


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

          <div className="flex flex-col w-[742px] h-[148px] items-start gap-6">
            <div className="w-[742px] h-[63px] gap-[18px] flex items-start">
              <CustomeText
                title="Lirante - Food Delivery Solution"
                className="font-bold text-[40px] text-[#344054]"
              />
              <div className="w-[58px] h-[58px] rounded-full bg-[#FD853A] flex items-center justify-center transition-all duration-300">
                <ArrowButton className="transition-all duration-300 stroke-white -rotate-45" />
              </div>
            </div>
            <p className="w-full h-[61px] text-[20px] text-[#344054] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
          </div>
        </div>

      </div>

      {/* Testimonials */}
      <div className="relative flex flex-col w-full  h-[863px] gap-[96px] items-center px-[71px] py-[116px] bg-[#171717] rounded-[50px] overflow-hidden ">
        <Image
          src="/Frame 77.svg"
          alt="image"
          fill
          className="object-cover absolute opacity-20"
        />

        <div className="flex flex-col h-[201px] w-[1299px] items-center gap-3.5">
          <div className="w-[448px] h-[126px] flex flex-col">
            <CustomeText
              title="Testimonials That"
              className="font-medium text-[48px] text-[#FCFCFD]"
            />
            <div className="flex gap-2.5">
              <CustomeText
                title="Speak to"
                className="font-medium text-[48px] text-[#FCFCFD]"
              />
              <CustomeText
                title="My Result"
                className="font-medium text-[48px] text-[#FD853A]"
              />
            </div>
          </div>
          <p className="w-[742px] h-[61px] text-[20px] text-[#F9FAFB] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
        </div>
        <GenericSlider
          data={reviews}
          slidesPerView={3}
          heightClass=""
          cardType="review"
        />
      </div>

      {/* contact */}
      <div className="w-full bg-white flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-[71px] gap-10">
        {/* Heading */}
        <div className="w-full max-w-4xl text-center flex flex-col items-center gap-4">
          <CustomeText
            title="Have an Awesome Project"
            className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#344054]"
          />
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <CustomeText
              title="Idea?"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#344054]"
            />
            <CustomeText
              title="Let's Discuss"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#FD853A]"
            />
          </div>
        </div>

        {/* Email Input Section */}
        <div className="w-full max-w-3xl flex md:flex-row items-center justify-between gap-4 px-3 py-2 md:px-6 md:py-4 rounded-full border border-[#E4E7EC] bg-white">
          {/* Icon */}
          <div className="w-9 h-9 md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full bg-[#FFEAD5] shrink-0">
            <Image
              src="/sms.svg"
              alt="message icon"
              width={24}
              height={24}
            />
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Enter Email Address"
            className="w-full md:flex-1 px-4 py-2 rounded-full text-center md:text-left text-base sm:text-lg outline-none bg-transparent text-[#1D2939] placeholder:text-[#667085]"
          />

          {/* Button */}
          <button className="w-fit px-6 md:px-12 py-1 md:py-3 rounded-full bg-[#FD853A] hover:bg-[#e4752f] text-white text-lg font-semibold transition duration-300">
            Send
          </button>
        </div>


        {/* Icon and Text Highlights */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base font-medium text-[#000000]">
          {iconAndText.map((data, index) => {
            const Icon = data.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <Icon size={20} />
                {data.name}
              </div>
            );
          })}
        </div>
      </div>


      {/* slider animation */}
      <div className="relative w-full h-[147px] bg-[#FB6514] rounded-tl-4xl rounded-br-4xl overflow-hidden">
        <div className="absolute w-[5000px] h-[63px] bg-white -rotate-[1.9deg] z-10 -ml-2 flex items-center">
          <div className="marquee flex gap-8 w-max">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-5 text-[#000000] text-[48px] whitespace-nowrap"
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4828 0.257982L21.715 12.3411L34.2082 16.5003L22.1251 21.7324L17.9659 34.2256L12.7337 22.1425L0.240553 17.9833L12.3237 12.7512L16.4828 0.257982Z"
                    fill="#FD853A"
                  />
                </svg>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* blog */}
      <div className="flex flex-col w-fll h-fit items-center gap-12 px-[71px] py-[97px]">
        <div className="w-[1298px] h-[126px] flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-[#344054] w-fit md:w-[215px] h-full font-bold text-[48px]">From my blog post</h1>
          <OrangeButton title="See All" className="w-[400px] md:w-fit" />
        </div>
        <GenericSlider
          data={blogs}
          slidesPerView={3}
          heightClass=""
          cardType="blog"
        />
      </div>
    </div >
  );
}