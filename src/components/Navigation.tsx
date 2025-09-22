'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isMounted]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMounted && isScrolled ? 'backdrop-blur bg-gray-950/80 border-b border-gray-800' : 'bg-gray-950 border-b border-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <Image
              src="/image/white-logo.svg"
              alt="TiqniaSpace"
              width={36}
              height={36}
              priority
              className='w-[100px]'
            />
            {/* <span className="text-xl font-display font-bold text-gray-900 group-hover:text-[#2831BC] transition-colors duration-300">
              TiqniaSpace
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-white font-medium transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="https://cal.com/tiqniaspace/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 bg-gradient-to-r from-[#2831BC] to-[#3d47e8] hover:from-[#1f27a6] hover:to-[#313ce0] shadow-lg shadow-indigo-900/30"
            >
              <span>Chat Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-900 transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`lg:hidden fixed inset-0 z-50 bg-gray-950 transition-opacity duration-300 ${isMounted && isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="pt-20 px-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-4 text-2xl font-semibold text-white hover:text-[#8ea0ff] rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://cal.com/tiqniaspace/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-6 text-white px-6 py-4 rounded-full text-center transition-all duration-300 font-semibold text-lg bg-gradient-to-r from-[#2831BC] to-[#3d47e8] shadow-lg shadow-indigo-900/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Schedule Call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
