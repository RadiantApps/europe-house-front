"use client";
import Image from "next/image";
import { footerLinks } from "@/data/link";
import { useSelector } from "react-redux";
import Link from "next/link";
import { communityContent, footerContent } from "@/data/footerData";
import { UpIcon, X, YouTube } from "@/assets/footer";
import LogoFooter from "@/assets/footer/LogoFooter.jpg";
import { Facebook, Instagram } from "@/assets/footer";
import Linkedin from "@/assets/footer/Linkedin";
export default function Footer() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-white">
      <div className="px-4 md:px-[74px] pt-[40px] pb-8 ">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-4">
          <div className="flex flex-col lg:max-w-[500px]">
            <h3 className="text-[22px] kanit-semibold text-[#1C1A1A] ">
              {communityContent[selectedLanguage]?.title}
            </h3>
            <p className=" text-[#555353] kanit-light text-[15px]">
              {communityContent[selectedLanguage]?.description}
            </p>

            {/* Email signup */}
            <div className="flex flex-col sm:flex-row  sm:items-center gap-3 sm:gap-[12px] mt-[22px]">
              <input
                type="email"
                placeholder="Email address"
                className="
                    flex-1
                    border
                    border-[#B7A0F8] 
                    rounded-[56px] 
                    h-[46px]
                    px-4
                    outline-none
                    bg-[#F1F6F8]
                    placeholder-[#B7A0F8]
                    transition
                    duration-300
                    hover:border-[#7F5AF0] 
                    focus:border-[#5A31F4] 
                    focus:ring-2 
                    focus:ring-[#5A31F4]
                  "
              />

              <button className="bg-[#4433EE] w-[155px] h-[46px] rounded-[56px] text-[#F7F0F0]">
                {communityContent[selectedLanguage]?.button}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-[30px]">
              <div className="flex-shrink-0">
                <Image src={LogoFooter} alt="Europe House Logo" className="" />
              </div>

              <div className="flex space-x-[12px]">
                <div>
                  <Facebook />
                </div>
                <div>
                  <Instagram />
                </div>
                <div>
                  <X />
                </div>
                <div>
                  <YouTube />
                </div>
                <div>
                  <Linkedin />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between lg:items-center gap-8 lg:gap-12">
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
