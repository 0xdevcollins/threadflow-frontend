'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Top from './Top';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    'Solutions',
    'How It Works',
    'Shops',
    'Pricing',
    'Support',
  ];

  return (
    <header className="w-full relative">
      <Top />

      <nav className="bg-white shadow-md relative">
        <div className="flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px] h-16 relative z-50">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Threadflow" width={150} height={50} />
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {menuItems.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1, color: '#333' }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-gray-700"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium hover:text-gray-700"
            >
              Log in
            </Link>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button className="bg-black text-white hover:bg-gray-900 px-5 py-2 flex items-center gap-2">
                Get Started <ChevronRight size={16} />
              </Button>
            </motion.div>
          </div>

          <motion.button
            className="md:hidden flex items-center justify-center p-2 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isOpen ? 90 : 0 }}
          >
            {isOpen ? (
              <X
                size={28}
                className="text-black transition-transform duration-300"
              />
            ) : (
              <Menu
                size={28}
                className="text-black transition-transform duration-300"
              />
            )}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full z-40"
            >
              <div className="flex flex-col items-start p-4 space-y-4 text-sm">
                {menuItems.map((item) => (
                  <motion.div
                    key={item}
                    whileTap={{ scale: 0.95 }}
                    className="w-full"
                  >
                    <Link
                      href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}

                <div className="flex flex-col gap-3 mt-4 w-full">
                  <Link
                    href="/login"
                    className="text-sm font-medium w-full text-center py-2"
                  >
                    Log in
                  </Link>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button className="bg-black text-white hover:bg-gray-900 w-full py-2">
                      Get Started
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
