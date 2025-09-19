import Logo from "../../public/logo.svg"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      {/* Main footer content */}
      <div className="px-4 md:px-[74px] pt-[40px] pb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-4">
          
          {/* Left section - Join Community */}
          <div className="flex flex-col lg:max-w-[400px]">
            <h3 className="text-lg font-semibold text-black pb-[18px]">
              Join the Community
            </h3>
            <p className="text-sm text-gray-600 pb-[22px] leading-relaxed">
              Become an active participant in shaping the future of our community.
            </p>
            
            {/* Email signup */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-[12px] pb-[30px]">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm outline-none focus:border-[#4433EE] transition-colors"
              />
              <button className="bg-[#4433EE] hover:bg-[#3322DD] transition-colors text-white px-6 py-2 rounded-full font-semibold text-sm whitespace-nowrap">
                Join Us
              </button>
            </div>
            
            {/* Logo and social icons */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-[41px]">
              <div className="flex-shrink-0">
                <Image
                  src={Logo} 
                  alt="Europe House Logo"
                  className="h-8 w-auto"
                />
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-600 hover:text-[#4433EE] transition-colors">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#4433EE] transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#4433EE] transition-colors">
                  <i className="fab fa-tiktok text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#4433EE] transition-colors">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#4433EE] transition-colors">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right section - Navigation and scroll button */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between lg:items-center gap-8 lg:gap-12">
            
            {/* Navigation links */}
            <div className="flex flex-col space-y-3 text-black">
              <a href="#" className="hover:text-[#4433EE] transition-colors text-sm font-medium">Events</a>
              <a href="#" className="hover:text-[#4433EE] transition-colors text-sm font-medium">Blog</a>
              <a href="#" className="hover:text-[#4433EE] transition-colors text-sm font-medium">Campaigns</a>
              <a href="#" className="hover:text-[#4433EE] transition-colors text-sm font-medium">Publications</a>
              <a href="#" className="hover:text-[#4433EE] transition-colors text-sm font-medium">About</a>
              <a href="#" className="hover:text-[#4433EE] transition-colors text-sm font-medium">EU Support</a>
              <a href="#" className="hover:text-[#4433EE] transition-colors text-sm font-medium">Contact</a>
            </div>

            {/* Scroll to top button */}
            <div className="flex justify-center sm:justify-end">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-[#4433EE] hover:bg-[#3322DD] transition-colors p-3 rounded-md text-white flex items-center justify-center w-12 h-12"
                aria-label="Scroll to top"
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform rotate-180"
                >
                  <path 
                    d="M8 12L8 4M8 4L4 8M8 4L12 8" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright footer */}
      <div className="bg-[#4433EE] text-white text-center text-sm py-3">
        Copyright © 2020 Europe House. All rights reserved.
      </div>
    </footer>
  );
}