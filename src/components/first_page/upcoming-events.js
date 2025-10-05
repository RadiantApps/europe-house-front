"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import UpcomingEventsImg from "../../assets/events/upcoming-events.svg";
import { translations } from "@/data/home";
import { useSelector } from "react-redux";
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
    <section className="bg-white  rounded-t-[36px] py-10 px-6 lg:pl-[74px]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
        {/* Left Side Content */}
        <div className="space-y-6">
          <Image src={UpcomingEventsImg} alt="UpcomingEventsImg" />

          <p className="kanit-semibold text-[34px] laeding-[30px] text-[#1C1A1A]">
            {translations[selectedLanguage].upcomingEventTitle}
          </p>
          <p className="text-[#8E8D8D] kanit-light text-[22px]">
            {translations[selectedLanguage].upcomingEventDescription}
          </p>
          <button className="bg-[#4433EE] text-[#F7F0F0] w-[190px] h-[50px] text-[16px] kanit-medium rounded-[56px] flex items-center justify-center">
            {translations[selectedLanguage].upcomingEventButton}
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
                    <video
                      src={src} // <-- directly on video
                      className="w-full h-[268px] object-cover rounded-2xl"
                      autoPlay // <-- autoplay
                      muted // <-- required for autoplay
                      loop // <-- loop
                      playsInline // <-- mobile support
                    />
                  </div>
                ))}
              </div>

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
                  {translations[selectedLanguage].eventSlideTitle}{" "}
                  {currentIndex + 1}/{images.length}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden relative h-[420px] rounded-tl-[24px] rounded-bl-[24px]">
            {/* Gray background */}
            <div
              className="absolute bg-[#F7F0F0] "
              style={{
                left: "15%",
                top: "-20px",
                height: "520px", // increased height
                width: "90%",
                zIndex: 0,
              }}
            ></div>

            {/* Carousel + controls */}
            <div className="relative z-10 p-6 h-[350px] flex flex-col justify-between mt-[21px]">
              {/* Image area */}
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-full rounded-2xl px-1 overflow-hidden shadow-lg"
                  >
                    <video
                      src={src} // <-- directly on video
                      className="w-full h-[268px] object-cover rounded-2xl"
                      autoPlay // <-- autoplay
                      muted // <-- required for autoplay
                      loop // <-- loop
                      playsInline // <-- mobile support
                    />
                  </div>
                ))}
              </div>

              {/* Buttons + counter anchored at bottom */}
              <div className="flex items-center justify-between ml-16 mt-[30px]">
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
                  {translations[selectedLanguage].eventSlideTitle}{" "}
                  {currentIndex + 1}/{images.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
