import React from 'react';

interface CustomeTextProps {
  title: string;
  className?: string;
}

const CustomeText: React.FC<CustomeTextProps> = ({ title, className = '' }) => {
  return (
    <div
      className={`font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[95px] leading-tight ${className}`}
    >
      {title}
    </div>
  );
};

export default CustomeText;
