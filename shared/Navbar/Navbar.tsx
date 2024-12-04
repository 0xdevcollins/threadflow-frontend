'use client';

import React, { useState } from 'react';
import Top from './Top';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#', label: 'Solution' },
    { href: '#', label: 'Features' },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'Resources' },
    { href: '#', label: 'Contact' },
  ];

  return (
    <div className="bg-white">
      <Top />
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="Logo"
          className="w-24 h-auto"
        />

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="text-black">
            Login
          </Button>
          <Button>
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-6">
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src="/logo.svg"
                      width={100}
                      height={100}
                      alt="Logo"
                      className="w-24 h-auto"
                      loading="lazy"
                    />
                  </SheetTitle>
                </SheetHeader>
                {/* <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X />
                </Button> */}
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto space-y-4">
                <Button variant="outline" className="w-full text-black">
                  Login
                </Button>
                <Button className="w-full">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
