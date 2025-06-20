import Image from 'next/image';

interface HoverCardProps {
  title: string;
  imageSrc: string;
}

export default function ServicesCard({ title, imageSrc }: HoverCardProps) {
  return (
    <div className="relative flex w-[416px] h-[508px] flex-col items-center justify-end rounded-[40px] bg-white/10 backdrop-blur-[15px] border border-white/50 hover:bg-[#FD853A] transition-colors duration-300 ease-in-out overflow-hidden cursor-pointer group">
      <h1 className="absolute top-4 w-full h-[65px] flex items-start font-medium text-[32px] text-white z-30 border-b-2 border-[#F9FAFB]/30">
        <span className="relative top-2 left-6">{title}</span>
      </h1>

      <div className="absolute w-[328px] h-[329px] rounded-[35px] bg-[#757575] opacity-50 mb-5"></div>
      <div className="absolute w-[374px] h-[329px] rounded-[35px] bg-[#9E9D9D]"></div>

      <Image
        src={imageSrc}
        alt="Card Image"
        width={416}
        height={307}
        className="object-cover z-20"
      />
    </div>
  );
}
