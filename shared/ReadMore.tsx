'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function ReadMore() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 flex flex-col items-center justify-center">
      <div className="w-full grid md:grid-cols-[44.2%_55.8%] gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-[#E1E4E5] bg-white flex flex-col lg:flex-row flex-[44.2] justify-between overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 flex flex-col justify-center items-start lg:items-start w-full "
          >
            <h2 className="text-2xl font-medium">
              <span className="whitespace-nowrap block">
                Selling Online Is Hard?
              </span>
              Not With Thread
            </h2>
            <p className="max-w-xs lg:max-w-[226px] text-sm text-[#6F7071] mt-4">
              Owning a fashion brand is challenging with tasks like design,
              manufacturing, inventory, and marketing. Threadflow simplifies
              this by offering on-demand manufacturing, delivery, and global
              e-commerce solutions, letting you focus on bringing your creative
              vision to life.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                className="px-6 text-black hover:text-white h-12 rounded-2xl border border-black bg-transparent hover:bg-black/90 w-fit mt-8"
              >
                Get Started <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 absolute hidden md:hidden lg:block lg:w-[70%] xl:w-[400px] bottom-0 right-0"
          >
            <Image
              src="/banner.webp"
              width={400}
              height={600}
              alt="Fashion brand illustration"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative rounded-2xl bg-white border border-[#E1E4E5] flex flex-col lg:flex-row flex-[55.8] justify-between overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 flex flex-col justify-center items-start lg:items-start w-full"
          >
            <h2 className="text-xl font-semibold">
              You&apos;re Just a Few Clicks Away!
            </h2>
            <div className="text-[#6F7071] max-w-xs lg:max-w-[224px]">
              <p className="text-sm mt-4">
                Threadflow is not your regular D2C platform, everything is
                minimal and straightforward. Get your big brand with a few
                button clicks.
              </p>
              <p className="text-sm mt-4">
                Just sign up and start creating your own clothing brand. We
                handle production, fulfillment, and global sales so you can
                focus entirely on designing.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                className="px-6 text-black hover:text-white h-12 rounded-2xl border border-black bg-transparent hover:bg-black/90 w-fit mt-8"
              >
                Get Started <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 absolute hidden md:hidden lg:block lg:w-[70%] xl:w-[400px] bottom-0 right-0"
          >
            <Image
              src="/banner2.webp"
              width={700}
              height={600}
              alt="Happy customer with shopping bags"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
