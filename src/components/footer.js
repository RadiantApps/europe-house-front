"use client";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import { footerLinks } from "@/data/link";
import { useSelector } from "react-redux";
import Link from "next/link";
import { communityContent, footerContent } from "@/data/footerData";
import { UpIcon } from "@/assets/footer";
export default function Footer() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      {/* Main footer content */}
      <div className="px-4 md:px-[74px] pt-[40px] pb-8 xl:max-w-[1500px] xl:mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-4">
          {/* Left section - Join Community */}
          <div className="flex flex-col lg:max-w-[400px]">
            <h3 className="text-[22px] kanit-semibold text-black pb-[18px]">
              {communityContent[selectedLanguage]?.title}
            </h3>
            <p className="text-[15px] text-gray-600 pb-[22px] leading-relaxed kanit-light">
              {communityContent[selectedLanguage]?.description}
            </p>

            {/* Email signup */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-[12px] pb-[30px]">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm outline-none focus:border-[#4433EE] transition-colors"
              />
              <button className="bg-[#4433EE] hover:bg-[#3322DD] transition-colors text-white px-6 py-2 rounded-full kanit-medium  text-sm whitespace-nowrap">
                {communityContent[selectedLanguage]?.button}
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
            </div>
          </div>

          {/* Right section - Navigation and scroll button */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between lg:items-center gap-8 lg:gap-12">
            {/* Navigation links */}
            <div className="flex flex-col space-y-3 text-black">
              {footerLinks[selectedLanguage]?.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:text-[#4433EE] transition-colors text-[15px] kanit-regular"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Scroll to top button */}
            <div className="flex justify-center sm:justify-end">
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="bg-[#4433EE] hover:bg-[#3322DD] transition-colors p-3 rounded-md text-white flex items-center justify-center w-12 h-12"
                aria-label="Scroll to top"
              >
                <UpIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright footer */}
      <div className="bg-[#4433EE] text-white text-center text-sm py-3">
        &copy; {currentYear} {footerContent[selectedLanguage]}
      </div>
    </footer>
  );
}
