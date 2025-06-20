'use client';
import { Star } from 'lucide-react';
import { Review } from '@/data/data';

export default function ReviewCard({ name, role, rating, text }: Review) {
  return (
    <div className="flex flex-col w-[784px] h-[265px] items-start gap-3.5 p-[21px] rounded-3xl bg-[#FFFFFF]/14 backdrop-blur-[14px] opacity-80">
      <div className="w-fit h-[56px] flex gap-4 items-center justify-center">
        <div className="w-14 h-14 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#FCFCFD"
            className="w-14 h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3s-4.5 2.015-4.5 4.5S9.515 12 12 12zM4.5 21c0-3.314 3.357-6 7.5-6s7.5 2.686 7.5 6"
            />
          </svg>
        </div>
        <div className="flex flex-col w-fit h-full">
          <h3 className="font-bold text-[24px] text-[#FCFCFD]">{name}</h3>
          <span className="text-[18px] text-[#FCFCFD]">{role}</span>
        </div>
      </div>
      <div className="flex items-center justify-center w-[202px] h-8 gap-[5px]">
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={32} fill="#FD853A" stroke="#FD853A" />
          ))}
        </div>
        <span className="text-[32px] text-[#FCFCFD]">{rating}</span>
      </div>
      <p className="w-[742px] h-[106px] text-[20px] text-[#F9FAFB]">{text}</p>
    </div>
  );
}
