import Image from 'next/image';
import Link from 'next/link';
import ArrowButton from './ArrowButton';

interface PortfolioCardProps {
  image: string;
  title: string;
  href: string;
  desc: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ image, title, href, desc }) => {
  return (
    <div
      className="relative group w-[633px] h-[371px] rounded-[20px] overflow-hidden transition-all duration-300"
      style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
    >
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(225deg, rgba(0, 0, 0, 0) 44%, rgba(0, 0, 0, 0.72) 83%, rgba(0, 0, 0, 1) 100%)',
          opacity: 0.4,
        }}
      />

      <Image src={image} alt={title} fill className="object-cover z-0" />

      <div className="relative z-20 w-full h-full flex flex-col justify-between">
        <div className="flex justify-end p-4">
          <Link href={href}>
            <div className="w-[60px] h-[60px] rounded-full border-2 border-[#FD853A] group-hover:bg-[#FD853A] flex items-center justify-center transition-all duration-300">
              <ArrowButton className="transition-all duration-300 stroke-[#FD853A] group-hover:stroke-white" />
            </div>
          </Link>
        </div>

        <h1 className="p-4 font-bold text-[70px] text-[#FFFAF5] leading-[1]">
          {title}
        </h1>

        <div className="absolute bottom-0 left-0 right-0 w-[95%] mx-auto mb-4 bg-black/40 backdrop-blur-md rounded-[20px] px-6 py-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-30">
          <h1 className="text-[32px] font-bold text-white mb-2">{title}</h1>
          <p className="text-white text-sm leading-relaxed text-center">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
