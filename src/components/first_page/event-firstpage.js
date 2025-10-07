"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import event1 from "../../assets/joinushome/1.png";
import event2 from "../../assets/joinushome/2.png";
import event3 from "../../assets/joinushome/3.png";
import event4 from "../../assets/joinushome/4.png";
import event5 from "../../assets/joinushome/5.png";
import Star from "../../assets/events/star.svg";
import LeftArrow from "@/assets/home/LeftArrow";
import RightArrow from "@/assets/home/RightArrow";
import { translations } from "@/data/home";
import { useSelector } from "react-redux";
export default function EuropeHouse() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const images = [event1, event2, event3, event4, event5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));

  const nextSlide = () =>
    setCurrentIndex((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <section className="bg-white  ">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start md:h-[600px] h-[950px] ">
        {/* Left Side Content */}
        <div className="space-y-6 pl-6 lg:pl-[74px]">
          <Image src={Star} alt="Star" />
          <p className="kanit-semibold text-[34px] laeding-[30px] text-[#1C1A1A]">
            {translations[selectedLanguage].join_us_event}
          </p>
          <p className="text-[#8E8D8D] kanit-light text-[22px]">
            {translations[selectedLanguage].join_us_event_description}
          </p>
          <button className="bg-[#4433EE] text-[#F7F0F0] w-[190px] h-[50px] text-[16px] kanit-medium rounded-[56px] flex items-center justify-center">
            {translations[selectedLanguage].visit_us_event}
          </button>
        </div>

        <div className="w-full h-full overflow-hidden relative flex flex-col ">
          <div className="hidden lg:block relative">
            <div
              className="absolute bg-[#F7F0F0] rounded-tl-[24px] rounded-bl-[24px]"
              style={{
                right: 0,
                height: "517px",
                width: "85%",
                zIndex: 0,
              }}
            ></div>

            <div className="relative z-10 mt-[40px]">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 2.2)}%)`,
                }}
              >
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-[367px] mr-[28px] rounded-[12px] overflow-hidden "
                  >
                    <Image
                      src={src}
                      alt={`Europe House ${idx + 1}`}
                      width={367}
                      height={368}
                      lassName="w-[367px] h-[368px] object-cover rounded-[12px]"
                    />
                  </div>
                ))}
              </div>

              {/* Buttons + counter inside gray area */}
              <div className="absolute left-[22%] mt-[30px] right-6 flex items-center justify-between gap-8">
                <div className="flex gap-4">
                  <button
                    onClick={prevSlide}
                    className="border border-[2px] border-[#4433EE] w-[70px] h-[35px] rounded-[100px] flex items-center justify-center "
                  >
                    <LeftArrow />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="border border-[2px] border-[#4433EE] w-[70px] h-[35px] rounded-[100px] flex items-center justify-center "
                  >
                    <RightArrow />
                  </button>
                </div>
                <span className="kanit-light text-[20px] leading-[42px] text-[#8E8D8D] mr-[40px]">
                  Events {currentIndex + 1}/{images.length}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile */}
          {/* Mobile */}
          <div className="lg:hidden relative h-[406px] rounded-tl-[24px] rounded-bl-[24px]">
            {/* Gray background */}
            <div
              className="absolute bg-[#F7F0F0] rounded-tl-[24px] rounded-bl-[24px]"
              style={{
                right: 0,
                height: "406px",
                width: "85%",
                zIndex: 0,
              }}
            ></div>

            {/* Carousel + controls */}
            <div className="relative z-10 px-6 flex flex-col justify-between mt-[21px] ">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 flex items-center justify-center w-[298px] h-[298px] rounded-[12px] mr-[28px] bg-white overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={`Europe House ${idx + 1}`}
                      width={298}
                      height={298}
                      className="w-[298px] h-[298px] object-contain rounded-[12px]"
                    />
                  </div>
                ))}
              </div>

              {/* Buttons + counter anchored at bottom */}
              <div className="flex items-center justify-between ml-16 mt-[20px]">
                <div className="flex gap-3">
                  <button
                    onClick={prevSlide}
                    className="flex items-center justify-center w-[70px] h-[35px] border-2 border-indigo-600 rounded-full text-indigo-600 hover:bg-indigo-50 transition"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="flex items-center justify-center w-[70px] h-[35px] border-2 border-indigo-600 rounded-full text-indigo-600 hover:bg-indigo-50 transition"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
                <span className="text-gray-500 text-sm">
                  Events {currentIndex + 1}/{images.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
