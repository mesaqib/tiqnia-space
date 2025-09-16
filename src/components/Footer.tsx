import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/image/white-logo.svg" alt="TiqniaSpace" width={36} height={36} className='w-[100px]' />
              {/* <span className="text-xl font-display font-bold">TiqniaSpace</span> */}
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              A global UI/UX design agency that boosts brand value with user-friendly, effective designs for web, mobile, and SaaS platforms.
            </p>
            
            {/* Contact Info */}
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-[#6ea8ff] to-[#a5b4fc]" />
              <a href="mailto:saqib@tiqniaspace.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                saqib@tiqniaspace.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors duration-300">Disclaimer</Link></li>
              <li><Link href="/sitemap.xml" className="text-gray-400 hover:text-white transition-colors duration-300">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 TiqniaSpace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
