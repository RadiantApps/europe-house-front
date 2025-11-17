"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import UpcomingEventsImg from "../../assets/events/upcoming-events.svg";
import { translations } from "@/data/home";
import { useSelector } from "react-redux";
import LeftArrow from "@/assets/home/LeftArrow";
import RightArrow from "@/assets/home/RightArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const UpcomingEvents = () => {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );

  const [visibleSlides, setVisibleSlides] = useState(5.5);
  const [countIndex, setCountIndex] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 339) {
        setVisibleSlides(1.1);
      } else if (width >= 339 && width < 400) {
        setVisibleSlides(1.4);
      } else if (width >= 400 && width < 450) {
        setVisibleSlides(1.6);
      } else if (width >= 480 && width < 569) {
        setVisibleSlides(2.1);
      } else if (width >= 570 && width < 630) {
        setVisibleSlides(3);
      } else if (width >= 631 && width < 720) {
        setVisibleSlides(4);
      } else if (width >= 1029 && width < 1200) {
        setVisibleSlides(3.3);
      } else if (width >= 1201 && width < 1300) {
        setVisibleSlides(3.8);
      } else if (width >= 1301 && width < 1400) {
        setVisibleSlides(3.8);
      } else if (width >= 1401 && width < 1500) {
        setVisibleSlides(4.6);
      } else if (width >= 1501 && width < 1600) {
        setVisibleSlides(5);
      } else if (width >= 1920) {
        setVisibleSlides(10);
      } else {
        setVisibleSlides(8);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    "/assets/events/event1.mp4",
    "/assets/events/event2.mp4",
    "/assets/events/event3.mp4",
    "/assets/events/event4.mp4",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length) {
      setCurrentIndex(currentIndex + 2);
      setCountIndex(countIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 2);
      setCountIndex(countIndex - 1);
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start pb-[50px mt-[102px]">
        {/* Left Side Content */}
        <div className="space-y-6 pl-6 lg:pl-[74px]">
          <div className="ml-[-20px] mb-[-30px] relative w-[240px] h-[280px] flex items-center justify-center">
            {/* GIF background */}
            <Image
              src="/staricon.gif"
              alt="Upcoming Events"
              fill
              unoptimized
              className="object-contain"
            />

            {/* Centered text overlay */}
            <span className="absolute w-[77px] kanit-medium text-[14px] leading-[17px] text-center">
              {translations[selectedLanguage].upcomingEventIconTitle}
            </span>
          </div>
          <p className="kanit-semibold text-[34px] leading-[42px] text-[#1C1A1A]">
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
                  transform: `translateX(-${
                    currentIndex * (100 / visibleSlides)
                  }%)`,
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
                    onClick={() => {
                      if (currentIndex > 0) {
                        setCurrentIndex(currentIndex - 2);
                        setCountIndex(countIndex - 1);
                      }
                    }}
                    className="border border-[2px] border-[#4433EE] w-[70px] h-[35px] rounded-[100px] flex items-center justify-center "
                  >
                    <LeftArrow />
                  </button>
                  <button
                    onClick={() => {
                      if (currentIndex < images.length) {
                        setCurrentIndex(currentIndex + 2);
                        setCountIndex(countIndex + 1);
                      }
                    }}
                    className="border border-[2px] border-[#4433EE] w-[70px] h-[35px] rounded-[100px] flex items-center justify-center "
                  >
                    <RightArrow />
                  </button>
                </div>
                <span className="kanit-light text-[20px] leading-[42px] text-[#8E8D8D] mr-[40px]">
                  {translations[selectedLanguage].eventSlideTitle} {countIndex}/
                  {images.length}
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
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / visibleSlides)
                  }%)`,
                }}
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
                    onClick={() => {
                      if (currentIndex > 0) {
                        setCurrentIndex(currentIndex - 5);
                        setCountIndex(countIndex - 1);
                      }
                    }}
                    className="border border-[2px] border-[#4433EE] w-[70px] h-[35px] rounded-[100px] flex items-center justify-center "
                  >
                    <LeftArrow />
                  </button>
                  <button
                    onClick={() => {
                      if (currentIndex < images.length) {
                        setCurrentIndex(currentIndex + 1);
                        setCountIndex(countIndex + 1);
                      }
                    }}
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
