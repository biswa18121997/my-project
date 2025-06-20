'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ServicesCard from './ServicesCard';
import PortfolioCard from './PortfolioCard';
import ReviewCard from './ReviewCard';
import React from 'react';

interface GenericSliderProps<T> {
  data: T[];
  slidesPerView: number;
  heightClass?: string;
  cardType: 'hover' | 'portfolio' | 'review';
}

export function GenericSlider<T>({ data, slidesPerView, heightClass, cardType }: GenericSliderProps<T>) {
  const isReview = cardType === 'review';

  return (
    <div className={`relative flex flex-col justify-center items-center ${heightClass || ''}`}>
      <div className={`${isReview ? 'w-full' : 'w-full max-w-[1340px] mx-auto'}`}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          centeredSlides={isReview}
          slidesPerView={isReview ? 'auto' : slidesPerView}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="!pb-10"
        >
          {data.map((item: any, index) => (
            <SwiperSlide
              key={index}
              className={isReview ? '!w-[784px]' : ''} 
            >
              {cardType === 'hover' && (
                <ServicesCard title={item.title} imageSrc={item.imageSrc} />
              )}
              {cardType === 'portfolio' && (
                <PortfolioCard
                  image={item.image}
                  title={item.title}
                  href={item.href}
                  desc={item.desc}
                />
              )}
              {cardType === 'review' && (
                <ReviewCard
                  name={item.name}
                  role={item.role}
                  rating={item.rating}
                  text={item.text}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
