'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="w-full bg-[#F8F8F8] py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="text-sm text-gray-700">
                🔘 THE #1 ON-DEMAND PRODUCT-AS-A-SERVICE PLATFORM IN AFRICA
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
              Empowering Creatives to Effortlessly Build Their Brands
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-2xl">
              We handle on-demand manufacturing, delivery, storefronts, and
              sales while you focus on marketing your unique vision.
            </p>
            <Button className="bg-black text-white hover:bg-gray-900 h-12 px-6 text-lg">
              Get Started →
            </Button>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square max-w-[600px] mx-auto">
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="Empowering Creatives"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Floating Product Card */}
              <div className="absolute bottom-8 right-8 bg-white shadow-lg rounded-lg p-4 max-w-[280px] animate-float">
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Designer Clothes"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">
                      Designer Clothes
                    </p>
                    <p className="text-xs text-gray-500">Color: Black</p>
                    <p className="text-xs text-gray-500">Size: 41</p>
                  </div>
                  <div className="flex-shrink-0">
                    <p className="font-bold text-black">₦20k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
