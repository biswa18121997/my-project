'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import ServicesCard from './ServicesCard';
import PortfolioCard from './PortfolioCard';
import ReviewCard from './ReviewCard';
import Blog from './Blog';

import {
  CardData,
  PortfolioItem,
  Review,
  Blog as BlogItem,
} from '@/data/data';

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
  const isPortfolio = cardType === 'portfolio';
  const isBlog = cardType === 'blog';

  return (
    <div className={`relative w-full flex flex-col justify-center items-center ${heightClass || ''}`}>
      <div className={`w-full px-4 sm:px-6 lg:px-0 ${!isReview ? 'max-w-[1440px]' : ''}`}>
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
              slidesPerView: isPortfolio ? 1 : 1,
            },
            850: {
              slidesPerView: isPortfolio || isBlog || isReview ? 1 : 2,
            },
            1024: {
              slidesPerView: isPortfolio ? 2 : slidesPerView,
            },
          }}
          className="!pb-10"
        >
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`${isReview ? '!w-[90%] md:!w-[784px]' : '!flex justify-center'}`}
            >
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
