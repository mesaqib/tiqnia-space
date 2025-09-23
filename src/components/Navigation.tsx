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
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      {/* Floating container with margins and rounded corners */}
      <div className="mx-3 my-3 md:mx-6 md:my-4 lg:mx-8">
        <div
          className={`rounded-2xl shadow-lg transition-all duration-300 ${
            isMounted && isScrolled
              ? 'backdrop-blur bg-gray-950/80 border border-gray-800'
              : 'bg-gray-950/90 border border-gray-900'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 items-center h-12">
              {/* Logo (left) */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-3 group">
                  <Image
                    src="/image/white-logo.svg"
                    alt="TiqniaSpace"
                    width={36}
                    height={36}
                    priority
                    className='w-[100px]'
                  />
                </Link>
              </div>

              {/* Desktop Navigation (center) */}
              <div className="hidden lg:flex items-center justify-center space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-gray-300 hover:text-white font-medium text-sm transition-all duration-300 group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>

              {/* Right CTA + Mobile toggle */}
              <div className="flex items-center justify-end">
                <div className="hidden lg:block">
                  <Link
                    href="https://cal.com/tiqniaspace/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sm text-white font-semibold bg-gradient-to-r from-[#2831BC] to-[#3d47e8] hover:from-[#1f27a6] hover:to-[#313ce0] shadow-lg shadow-indigo-900/30"
                  >
                    Book a Call
                  </Link>
                </div>
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
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`lg:hidden fixed inset-0 z-50 bg-gray-950 transition-opacity duration-300 ${isMounted && isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="pt-3 px-3">
          <div className="flex items-center justify-between h-10">
            <span className="text-sm text-gray-300">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-md hover:bg-gray-900 transition-colors">
              <X className="w-5 h-5 text-gray-300" />
            </button>
          </div>
          <div className="mt-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-3 text-base font-medium text-white hover:text-[#8ea0ff] rounded-md transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://cal.com/tiqniaspace/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-2 mt-3 text-white px-4 py-2 rounded-md text-center transition-all duration-300 font-semibold text-sm bg-gradient-to-r from-[#2831BC] to-[#3d47e8] shadow-lg shadow-indigo-900/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
