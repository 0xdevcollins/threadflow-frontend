import { Button } from '@/components/ui/button';
import { Phone, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const Top = () => {
  return (
    <div className="bg-black text-white text-sm flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px] h-10">
      <div className="flex items-center gap-2">
        <Phone size={16} />
        <span>+234 9031824914</span>
      </div>

      <div className="hidden sm:flex items-center">
        <span className="text-gray-300">Get 50% Off on Selected Items</span>
        <span className="mx-2">|</span>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button
            variant="outline"
            className="text-black border-white px-3 py-1 h-8"
          >
            View Shops
          </Button>
        </motion.div>
      </div>

      <div className="flex items-center gap-3">
        <motion.div whileTap={{ scale: 0.95 }}>
          <span className="text-sm">EN</span>
          <ChevronDown size={16} />
        </motion.div>

        <div className="flex items-center gap-1">
          <Image src="/nigeria.svg" alt="Nigeria" width={20} height={15} />
          <span>Nigeria</span>
          <motion.div whileTap={{ scale: 0.95 }}>
            <ChevronDown size={16} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Top;
