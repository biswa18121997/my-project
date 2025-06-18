import MyServices from "@/components/MyServices";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full py-10 flex flex-col items-center justify-start mx-auto">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full flex-1 flex flex-col items-center justify-center text-center">
        <button className="w-fit h-[45px] px-[25.49px] rounded-[38.24px] border-[1.27px] border-[#171717] font-medium text-[20px]">
          Hello!
        </button>

        <div className="flex items-center justify-center gap-4 font-semibold text-[95.57px] leading-[1.1]">
          <h1 className="text-[#171717]">I'm</h1>
          <h1 className="text-[#FD853A]">Jenny</h1>
        </div>

        <h2 className="text-[#171717] text-[95.57px] font-medium">Product Designer</h2>

        <Image
          src={""}
          alt="Designer"
          width={952.4}
          height={636}
        />
      </div>

      <MyServices />
    </div>
  );
}
