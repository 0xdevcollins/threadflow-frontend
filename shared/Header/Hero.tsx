import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import SmallTitle from './SmallTitle';
import ProductCard from './ProductCard';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 pt-16 lg:pt-28">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex-1 max-w-2xl lg:pr-12">
          <SmallTitle />
          <h1 className="text-4xl lg:text-5xl font-semibold mt-6 mb-4 tracking-tight">
            <span className="block">Empowering</span>
            <span className="block">Creatives to Effortlessly</span>
            <span className="block">Build Their Brands</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl">
            We handle on-demand manufacturing, delivery, storefronts, and sales
            while you focus on marketing your unique vision.
          </p>
          <Button
            size="lg"
            className="rounded-full px-8 h-12 bg-black hover:bg-black/90"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="flex-1 relative w-full -mt-28 -mr-28 lg:mt-0ss">
          <div className="aspect-square relative">
            <div className="absolute inset-0 bg-transparent  overflow-hidden">
              <Image
                src="/heroimage.svg"
                alt="Fashion Models"
                fill
                priority
                className="object-cover object-center scale-110 lg:scale-125 z-"
              />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
