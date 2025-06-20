'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import PortfolioCard from './PortfolioCard';
import { portfolioData } from '../../data/data';

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
    </div>
  );
};

export default PortfolioSlider;
