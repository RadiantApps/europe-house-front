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
import ArrowRightEuSupport from "@/assets/eu-support/ArrowRightEuSupport";
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
          <div className="flex">
            <div className="space-y-6 md:space-y-[46px]">
              <h1 className="text-[#1C1A1A] kanit-semibold text-[36px] md:text-[64px] leading-[1.1]">
                {translationsEuprogrammes[selectedLanguage]?.title}
              </h1>
              <p className="text-[#8E8D8D] kanit-leight text-[16px] md:text-[22px]  md:w-[75%]">
                {translationsEuprogrammes[selectedLanguage]?.description}
              </p>
            </div>

            <div className="flex space-x-[28px]">
              <div className="w-[236px] h-[155px] rounded-[12px]">
                <Image
                  src={Img3}
                  alt="Tower"
                  className="w-full h-full object-cover rounded-t-[12px]"
                />
                <div className="bg-[#4433EE] kanit-medium text-[20px] leading-[20px] w-full mt-[0px] h-[63px] rounded-b-[12px] px-[22px] flex items-center justify-between text-[#F7F0F0]">
                  Erasmus + <ArrowRightEuSupport />
                </div>
              </div>

              <div className="w-[236px] h-[155px] rounded-[12px]">
                <Image
                  src={Img2}
                  alt="Creative Europe"
                  className="w-full h-full object-cover rounded-t-[12px]"
                />
                <div className="bg-[#4433EE] kanit-medium text-[20px] leading-[20px] w-full mt-[0px] h-[63px] rounded-b-[12px] px-[22px] flex items-center justify-between text-[#F7F0F0]">
                  Creative Europe
                  <ArrowRightEuSupport />
                </div>
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

            <div className="w-[236px] h-[155px] rounded-[12px]">
              <div className="">
                <Image
                  src={Img1}
                  alt="Kosovo Projects"
                  className="w-full h-full object-cover rounded-t-[12px]"
                />
              </div>
              <div className="bg-[#4433EE] kanit-medium text-[20px] leading-[20px] w-full mt-[0px] h-[63px] rounded-b-[12px] px-[22px] flex items-center justify-between text-[#F7F0F0]">
                Kosovo Projects
                <ArrowRightEuSupport />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
