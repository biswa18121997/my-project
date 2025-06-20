'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import PortfolioCard from './PortfolioCard';

const portfolioData = [
  { image: "/Frame 26.svg", title: "Lirante 1", href: "/project-1",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis."
  },
  { image: "/Frame 26.svg", title: "Lirante 2", href: "/project-2",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis."
   },
  { image: "/Frame 26.svg", title: "Lirante 3", href: "/project-3",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis."
   },
  { image: "/Frame 26.svg", title: "Lirante 4", href: "/project-4" ,
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis."
  },
];

const PortfolioSlider = () => {
  return (
    <div className="relative flex flex-col justify-between items-center w-full h-[460px]">
      <div className="w-full max-w-[1340px] mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="!pb-10"
        >
          {portfolioData.map((item, index) => (
            <SwiperSlide key={index}>
              <PortfolioCard
                image={item.image}
                title={item.title}
                href={item.href}
                desc={item.desc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullets {
          bottom: 0px !important;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .swiper-pagination-bullet {
          width: 15px;
          height: 15px;
          background: #d1d5db;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease-in-out;
        }

        .swiper-pagination-bullet-active {
          background: #fd853a;
          width: 60px;
          height: 15px; /* Fixed typo: hight -> height */
          border-radius: 21px;
          transition: all 0.3s ease-in-out;
        }
      `}</style>

    </div>
  );
};

export default PortfolioSlider;
