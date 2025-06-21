'use client';
import { Star } from 'lucide-react';
import { Review } from '@/data/data';

export default function ReviewCard({ name, role, rating, text }: Review) {
  return (
    <div className="w-full  sm:max-w-xl md:max-w-2xl lg:max-w-[784px] bg-white/10 backdrop-blur-[14px] rounded-3xl p-4 sm:p-6 flex flex-col gap-4 text-white items-center justify-center">
      
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white/10 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#FCFCFD"
            className="w-8 h-8 sm:w-full sm:h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3s-4.5 2.015-4.5 4.5S9.515 12 12 12zM4.5 21c0-3.314 3.357-6 7.5-6s7.5 2.686 7.5 6"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold">{name}</h3>
          <p className="text-xs sm:text-sm text-white/80">{role}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={18} className="text-[#FD853A]" fill="#FD853A" stroke="#FD853A" />
          ))}
        </div>
        <span className="text-sm sm:text-base">{rating}</span>
      </div>

      {/* Review Text */}
      <p className="text-sm sm:text-base text-[#F9FAFB] leading-relaxed">
        {text}
      </p>
    </div>
  );
}
