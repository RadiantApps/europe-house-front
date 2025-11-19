"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  const [countIndex, setCountIndex] = useState(1);
  const [visibleSlides, setVisibleSlides] = useState(5.5);
  const itemsPerSlide =
    typeof window !== "undefined" && window.innerWidth >= 1024 ? 2 : 3;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 339) {
        setVisibleSlides(1.1);
      } else if (width >= 339 && width < 392) {
        setVisibleSlides(1.2);
      } else if (width >= 393 && width < 420) {
        setVisibleSlides(1.4);
      } else if (width >= 421 && width < 439) {
        setVisibleSlides(1.5);
      } else if (width >= 440 && width < 460) {
        setVisibleSlides(1.6);
      } else if (width >= 461 && width < 500) {
        setVisibleSlides(1.7);
      } else if (width >= 501 && width < 569) {
        setVisibleSlides(2);
      } else if (width >= 570 && width < 600) {
        setVisibleSlides(2.4);
      } else if (width >= 601 && width < 650) {
        setVisibleSlides(2.6);
      } else if (width >= 651 && width < 700) {
        setVisibleSlides(2.8);
      } else if (width >= 701 && width < 750) {
        setVisibleSlides(3);
      } else if (width >= 1029 && width < 1100) {
        setVisibleSlides(2.4);
      } else if (width >= 1101 && width < 1200) {
        setVisibleSlides(2.6);
      } else if (width >= 1201 && width < 1300) {
        setVisibleSlides(8);
      } else if (width >= 1301 && width < 1400) {
        setVisibleSlides(3.2);
      } else if (width >= 1401 && width < 1500) {
        setVisibleSlides(3);
      } else if (width >= 1501 && width < 1700) {
        setVisibleSlides(3);
      } else if (width >= 1701 && width < 1919) {
        setVisibleSlides(6.5);
      } else if (width >= 1920) {
        setVisibleSlides(7);
      } else {
        setVisibleSlides(8);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < images.length) {
      setCurrentIndex(currentIndex + 1);
      setCountIndex(countIndex + 1);
    }
  };
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCountIndex(countIndex - 1);
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start md:h-[600px]  ">
        {/* Left Side Content */}
        <div className="space-y-6 pl-6 lg:pl-[74px] ">
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
              </div>
            </div>
          </div>

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
                    <Image
                      src={src}
                      alt={`Europe House ${idx + 1}`}
                      width={298}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
