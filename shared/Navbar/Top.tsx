import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { Phone, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Top = () => {
  return (
    <div className="container mx-auto bg-black px-4 py-2 md:px-8 md:py-4 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className="flex gap-1 items-center text-white/70 text-sm">
          <Phone size="16" /> <span>+234 9065377671</span>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <p className="text-white/70 text-sm text-center md:text-left">
            Get 50% Off on Selected Items
          </p>
          <Separator
            orientation="vertical"
            className="hidden md:block h-5 bg-white/20"
          />
          <Button size="sm" className="bg-white text-black hover:bg-gray-200">
            View Shops
          </Button>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" size="sm" className="text-white">
                <Image
                  src="/nigeria.svg"
                  width={20}
                  height={20}
                  alt="Nigeria flag"
                />
                <span className="ml-2">Nigeria</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Image
                  src="/nigeria.svg"
                  width={20}
                  height={20}
                  alt="Nigeria flag"
                />
                <span className="ml-2">Nigeria</span>
              </DropdownMenuItem>
              {/* Add more countries here */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Top;
