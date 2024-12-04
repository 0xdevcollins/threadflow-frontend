import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import SmallTitle from './SmallTitle';
import ProductCard from './ProductCard';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:py-28 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="max-w-2xl z-10">
          <SmallTitle />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-6 mb-4 tracking-tight">
            <span className="block">Empowering</span>
            <span className="block">Creatives to Effortlessly</span>
            <span className="block">Build Their Brands</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
            We handle on-demand manufacturing, delivery, storefronts, and sales
            while you focus on marketing your unique vision.
          </p>
          <Button
            size="lg"
            className=" px-6 sm:px-8 h-12 bg-black hover:bg-black/90 w-full sm:w-auto"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="mt-12 lg:mt-0 lg:-mr-20 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full">
          <Image
            src="/heroimage.svg"
            alt="Fashion Models"
            fill
            priority
            className="object-cover object-center lg:object-right-top"
          />
          <div className="absolute md:static -bottom-8 right-4 z-10 w-full">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
