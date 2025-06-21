'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import ServicesCard from './ServicesCard';
import PortfolioCard from './PortfolioCard';
import ReviewCard from './ReviewCard';
import Blog from './Blog';

import { CardData, PortfolioItem, Review, Blog as BlogItem } from '@/data/data';

type AllowedCard = CardData | PortfolioItem | Review | BlogItem;

interface GenericSliderProps<T extends AllowedCard> {
  data: T[];
  slidesPerView: number;
  heightClass?: string;
  cardType: 'hover' | 'portfolio' | 'review' | 'blog';
}

export function GenericSlider<T extends AllowedCard>({
  data,
  slidesPerView,
  heightClass,
  cardType,
}: GenericSliderProps<T>) {
  const isReview = cardType === 'review';

  return (
    <div className={`relative flex flex-col justify-center items-center w-full ${heightClass || ''}`}>
      <div className={`${isReview ? 'w-full' : 'w-full max-w-[1440px] -mx-5'}`}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          centeredSlides={isReview}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: slidesPerView,
            },
          }}
          className="!pb-10"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className={isReview ? '!w-[90%] md:!w-[784px]' : ''}>
              {cardType === 'hover' && 'title' in item && 'imageSrc' in item && (
                <ServicesCard title={item.title} imageSrc={item.imageSrc} />
              )}
              {cardType === 'portfolio' && 'image' in item && (
                <PortfolioCard
                  image={item.image}
                  title={item.title}
                  href={item.href}
                  desc={item.desc}
                />
              )}
              {cardType === 'review' && 'rating' in item && (
                <ReviewCard
                  name={item.name}
                  role={item.role}
                  rating={item.rating}
                  text={item.text}
                />
              )}
              {cardType === 'blog' && 'image' in item && 'button' in item && (
                <Blog
                  image={item.image}
                  button={item.button}
                  name={item.name}
                  date={item.date}
                  title={item.title}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
