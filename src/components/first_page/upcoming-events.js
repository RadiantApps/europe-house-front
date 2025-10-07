"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import UpcomingEventsImg from "../../assets/events/upcoming-events.svg";
import { translations } from "@/data/home";
import { useSelector } from "react-redux";
import LeftArrow from "@/assets/home/LeftArrow";
import RightArrow from "@/assets/home/RightArrow";

const UpcomingEvents = () => {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );

  const images = [
    "/assets/events/event1.mp4",
    "/assets/events/event2.mp4",
    "/assets/events/event3.mp4",
    "/assets/events/event4.mp4",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));

  const nextSlide = () =>
    setCurrentIndex((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start pb-[50px mt-[102px]">
        {/* Left Side Content */}
        <div className="space-y-6 pl-6 lg:pl-[74px]">
          <Image src={UpcomingEventsImg} alt="UpcomingEventsImg" />
          <p className="kanit-semibold text-[34px] leading-[30px] text-[#1C1A1A]">
            {translations[selectedLanguage].upcomingEventTitle}
          </p>
          <p className="text-[#8E8D8D] kanit-light text-[22px]">
            {translations[selectedLanguage].upcomingEventDescription}
          </p>
          <button className="bg-[#4433EE] text-[#F7F0F0] w-[190px] h-[50px] text-[16px] kanit-medium rounded-[56px] flex items-center justify-center">
            {translations[selectedLanguage].upcomingEventButton}
          </button>
        </div>

        <div className="w-full h-full overflow-hidden relative flex flex-col h-[600px] md:h-[520px]">
          {/* Desktop */}
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
                    <video
                      src={src}
                      className="w-[367px] h-[368px] object-cover rounded-[12px]"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                ))}
              </div>

              {/* Controls */}
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
                  {translations[selectedLanguage].eventSlideTitle}{" "}
                  {currentIndex + 1}/{images.length}
                </span>
              </div>
            </div>
          </div>

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
                    <video
                      src={src}
                      className="w-[298px] h-[298px] object-contain rounded-[12px]"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                ))}
              </div>

              {/* Controls + counter */}
              <div className="flex items-center justify-between ml-16 mt-[30px] gap-6">
                <div className="flex gap-3">
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
                <span className="text-[#8E8D8D] kanit-light text-[16px]">
                  {translations[selectedLanguage].eventSlideTitle}{" "}
                  {currentIndex + 1}/{images.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-[74px] mx-auto mt-[50px]">
        <div className="bg-[#B7A0F8] h-[1px] w-full mb-[50px] " />
      </div>
    </section>
  );
};

export default UpcomingEvents;
