'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Get current path to determine active nav item
  const currentPath = router.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with their paths
  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Vehicles', path: '/vehicles' },
    { name: 'News', path: '/news' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" passHref>
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            {/* Logo placeholder - in a real project, use an actual logo file */}
            <div className="w-10 h-10 rounded-full bg-[#fdbd53] flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">
              <span className="text-[#fdbd53]">Pioneer</span> Orbitals
            </span>
          </motion.div>
        </Link>
        
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => {
            // Check if this nav item is active
            const isActive = currentPath === item.path || 
                             (currentPath === '/' && item.path === '/') ||
                             (currentPath && item.path !== '/' && currentPath.startsWith(item.path));
            
            return (
              <Link href={item.path} key={item.name} passHref>
                <motion.a
                  className={`transition-colors ${
                    isActive 
                      ? 'text-[#fdbd53] font-semibold' 
                      : 'text-white hover:text-[#fdbd53]'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                  {isActive && (
                    <motion.div 
                      className="h-0.5 bg-[#fdbd53] mt-1" 
                      layoutId="navbar-underline"
                    />
                  )}
                </motion.a>
              </Link>
            );
          })}
        </div>
        
        <div className="hidden md:flex space-x-4">
          <Link href="/book" passHref>
            <motion.button 
              className="bg-transparent border-2 border-[#fdbd53] text-[#fdbd53] hover:bg-[#fdbd53] hover:text-gray-900 font-semibold py-2 px-4 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book your Flight
            </motion.button>
          </Link>
          
          <Link href="/join" passHref>
            <motion.button 
              className="bg-[#fdbd53] hover:bg-[#cc7900] text-gray-900 font-semibold py-2 px-4 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Mission
            </motion.button>
          </Link>
        </div>
        
        {/* Mobile menu button - only shown on small screens */}
        <motion.button 
          className="md:hidden text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;