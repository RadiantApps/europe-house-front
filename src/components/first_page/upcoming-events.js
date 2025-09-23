"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import event1 from "../../assets/events/1.png";
import event2 from "../../assets/events/2.png";
import event3 from "../../assets/events/3.png";
import event4 from "../../assets/events/4.png";
import event5 from "../../assets/events/5.png";
import UpcomingEventsImg from "../../assets/events/upcoming-events.svg";

const UpcomingEvents = () => {
  const images = [event1, event2, event3, event4, event5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));

  const nextSlide = () =>
    setCurrentIndex((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <section className="bg-white rounded-t-[36px] py-10 px-6 lg:px-[74px]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
        {/* Left Side Content */}
        <div className="space-y-6">
          <Image src={UpcomingEventsImg} alt="UpcomingEventsImg" />
          <h2 className="text-3xl font-bold text-gray-900">
            Be part of our upcoming Events and Activities
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Discover what's happening at Europe House Kosovo—join discussions,
            workshops, and cultural activities that inspire and engage.
          </p>
          <button className="bg-indigo-600 text-white w-[190px] h-[46px] rounded-[56px] px-[20px] font-semibold shadow hover:bg-indigo-700 transition flex items-center justify-center">
            Explore all Events{" "}
          </button>
        </div>

        {/* Right Side Card */}
        <div className="w-full h-full overflow-hidden relative flex flex-col justify-center">
          {/* Decorative border frame */}
          <div className="absolute -top-16 left-50 right-0 h-12 border-t border-r border-gray-300 z-50"></div>

          {/* Desktop */}
          {/* Desktop */}
          <div className="hidden lg:block relative">
            {/* Gray background */}
            <div
              className="absolute bg-gray-100 rounded-2xl"
              style={{
                left: "20%",
                top: "-5px",
                height: "350px",
                width: "85%",
                zIndex: 0,
              }}
            ></div>

            {/* Carousel + controls */}
            <div className="relative z-10 p-6">
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
              <div className="absolute left-[22%] mt-3 right-6 flex items-center justify-between">
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
          <div className="lg:hidden relative">
            {/* Gray background */}
            <div
              className="absolute bg-gray-100"
              style={{
                left: "15%",
                top: "-20px",
                height: "350px", // increased height
                width: "90%",
                zIndex: 0,
                borderTopLeftRadius: "24px",
                borderBottomLeftRadius: "24px",
              }}
            ></div>

            {/* Carousel + controls */}
            <div className="relative z-10 p-6 h-[350px] flex flex-col justify-between">
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
                    <Image
                      src={src}
                      alt={`Europe House ${idx + 1}`}
                      width={800}
                      height={500}
                      className="w-full h-[250px] object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Buttons + counter anchored at bottom */}
              <div className="flex items-center justify-between ml-16">
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
};

export default UpcomingEvents;
