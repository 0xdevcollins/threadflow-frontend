import React from 'react';
import SmallTitle from './SmallTitle';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-[#F8F8F8] w-full">
      <div className="container mx-auto px-4 lg:px-8 max-h-[273px] lg:max-h-none">
        <div className="flex flex-col lg:flex-row items-center py-8 lg:py-12">
          <div className="flex-1 max-w-2xl lg:pr-12 text-black mb-8 lg:mb-0">
            <SmallTitle />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-6 mb-4 tracking-tight leading-tight">
              Complete Solutions for Fashion Brand Success
            </h1>
          </div>

          <div className="flex-1 relative w-full aspect-video lg:aspect-auto lg:h-[273px]">
            <Image
              src="/heroimage.svg"
              alt="Fashion Models"
              fill
              priority
              className="object-cover object-right-top rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
