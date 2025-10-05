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
    <section className="bg-white py-10 px-6 lg:pl-[74px]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
        {/* Left Side Content */}
        <div className="space-y-6">
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

        <div className="w-full h-full overflow-hidden relative flex flex-col justify-center">
          <div className="absolute z-50"></div>

          <div className="hidden lg:block relative">
            <div
              className="absolute bg-[#F7F0F0] rounded-tl-[24px] rounded-bl-[24px]"
              style={{
                left: "20%",
                top: "-5px",
                height: "517px",
                width: "85%",
                zIndex: 0,
              }}
            ></div>

            {/* Carousel + controls */}
            <div className="relative z-10 mt-[40px] ">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 2.2)}%)`,
                }}
              >
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-[40%] mr-4 rounded-2xl overflow-hidden shadow-lg"
                  >
                    <Image
                      src={src}
                      alt={`Europe House ${idx + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-[268px] object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Buttons + counter inside gray area */}
              <div className="absolute left-[22%] mt-[30px] right-6 flex items-center justify-between">
                <div className="flex gap-4">
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

          {/* Mobile */}
          {/* Mobile */}
          <div className="lg:hidden relative h-[406px] rounded-tl-[24px] rounded-bl-[24px]">
            {/* Gray background */}
            <div
              className="absolute bg-[#F7F0F0] "
              style={{
                left: "15%",
                top: "-20px",
                height: "406px", // increased height
                width: "90%",
                zIndex: 0,
              }}
            ></div>

            {/* Carousel + controls */}
            <div className="relative z-10 p-6 h-[350px] flex flex-col justify-between">
              {/* Image area */}
              <div
                className="flex transition-transform duration-500 space-x-2"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-full rounded-[11px]  overflow-hidden shadow-lg"
                  >
                    <Image
                      src={src}
                      alt={`Europe House ${idx + 1}`}
                      width={800}
                      height={500}
                      className="w-full h-[297px] object-cover"
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
