'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function ReadMore() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 flex flex-col items-center justify-center overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="shadow-xl rounded-3xl bg-white flex flex-row basis-1/3 justify-between overflow-hidden">
          <div className="w-[65%] pt-8 pl-[50px]">
            <h2 className="text-xl font-semibold">
              Selling Online Is Hard? Not With Thread
            </h2>
            <p className="text-sm text-gray-600 mt-4">
              Owning a fashion brand is challenging with tasks like design,
              manufacturing, inventory, and marketing. Threadflow simplifies
              this by offering on-demand manufacturing, delivery, and global
              e-commerce solutions, letting you focus on bringing your creative
              vision to life.
            </p>
            <Button
              size="lg"
              className="px-6 text-black hover:text-white h-12 rounded-2xl border-2 border-black bg-transparent hover:bg-black/90 w-fit mt-8 mb-8"
            >
              Get Started <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-6 w-[65%] basis-128">
            <Image
              src="/banner.webp"
              width={400}
              height={600}
              alt="Fashion brand illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="shadow-xl rounded-3xl bg-white basis-2/3 flex flex-row justify-between overflow-hidden">
          <div className="w-[65%] pt-8 pl-[50px]">
            <h2 className="text-xl font-semibold">
              You’re Just a Few Clicks Away!
            </h2>
            <p className="text-sm text-gray-600 mt-4">
              Threadflow is not your regular D2C platform, everything is minimal
              and straightforward. Get your big brand with a few button clicks.{' '}
              <br />
              Just sign up and start creating your own clothing brand. We handle
              production, fulfillment, and global sales so you can focus
              entirely on designing.
            </p>
            <Button
              size="lg"
              className="px-6 text-black hover:text-white h-12 rounded-2xl border-2 border-black bg-transparent hover:bg-black/90 w-fit mt-8 mb-8"
            >
              Get Started <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-6 w-[65%] basis-128">
            <Image
              src="/banner2.webp"
              width={700}
              height={600}
              alt="Happy customer with shopping bags"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
