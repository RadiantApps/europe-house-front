"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Tower from "../../assets/eu-support/tower.svg";
import Img1 from "../../assets/eu-support/1.png";

import Img2 from "../../assets/eu-support/2.png";

import Img3 from "../../assets/eu-support/3.jpg";

import Image from "next/image";
import Footer from "@/components/footer";
import { useSelector } from "react-redux";

import { supportTranslations, translationsEuprogrammes } from "@/data/euspport";
export default function EuropeHouseMainContent() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  return (
    <div className="min-h-screen bg-[#EDF5FF]">
      <div className="pt-[54px] px-6 md:px-[74px]">
        <Image
          src={Tower}
          alt="Tower"
          className="w-full h-[300px] md:h-[580px] rounded-xl object-cover"
        />
      </div>

      <div className="px-6 md:px-[74px] ">
        <section className="py-8 md:py-[54px]">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6 md:space-y-[46px]">
              <h1 className="text-[#1C1A1A] kanit-semibold text-[36px] md:text-[64px] leading-[1.1]">
                {translationsEuprogrammes[selectedLanguage]?.title}
              </h1>
              <p className="text-[#8E8D8D] kanit-leight text-[16px] md:text-[22px]  md:w-[75%]">
                {translationsEuprogrammes[selectedLanguage]?.description}
              </p>
            </div>

            <div className="grid gap-4 md:gap-7 lg:grid-cols-1 xl:grid-cols-2">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-[200px] md:h-32 md:h-40 lg:h-56 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative">
                  <Image
                    src={Img3}
                    alt="Tower"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="kanit-medium w-full bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-3 md:py-4 font-semibold text-base md:text-lg flex items-center justify-between transition-colors duration-200 group-hover:scale-[1.02]">
                  Erasmus +
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-[200px] md:h-32 md:h-40 lg:h-56 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center relative">
                  <Image
                    src={Img2}
                    alt="Creative Europe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className=" kanit-medium  w-full bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-3 md:py-4 font-semibold text-base md:text-lg flex items-center justify-between transition-colors duration-200 group-hover:scale-[1.02]">
                  Creative Europe
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-[54px]">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start justify-between">
            <div className="space-y-6 md:space-y-[46px]">
              <h1 className="text-[#1C1A1A] kanit-semibold text-[36px] md:text-[64px] leading-[1.1]">
                {supportTranslations[selectedLanguage]?.title}
              </h1>
              <p className="text-[#8E8D8D] kanit-leight text-[16px] md:text-[22px] md:w-[55%]">
                {supportTranslations[selectedLanguage]?.description}
              </p>
            </div>

            <div className="lg:max-w-md flex justify-end">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group w-full">
                <div className="md:h-[200px] md:h-32 md:h-40 lg:h-56 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center relative">
                  <Image
                    src={Img1}
                    alt="Kosovo Projects"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="kanit-medium w-full bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-3 md:py-4 font-semibold text-base md:text-lg flex items-center justify-between transition-colors duration-200 group-hover:scale-[1.02]">
                  Kosovo Projects
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
