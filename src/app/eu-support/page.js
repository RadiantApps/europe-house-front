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
          <div className="flex flex-col md:flex-row">
            <div className="space-y-6 md:space-y-[46px]">
              <h1 className="text-[#1C1A1A] kanit-semibold text-[36px] md:text-[40px]  lg:text-[64px] leading-[1.1]">
                {translationsEuprogrammes[selectedLanguage]?.title}
              </h1>
              <p className="text-[#8E8D8D] kanit-leight text-[16px] md:text-[22px]  md:w-[75%]">
                {translationsEuprogrammes[selectedLanguage]?.description}
              </p>
            </div>

            <div className="flex flex-col space-y-[28px] lg:flex-row lg:space-y-0 lg:space-x-[28px] mt-[32px] lg:mt-0">
              {/* CARD 1 */}
              <div className="w-full md:w-[236px] h-[283px] md:h-[155px] rounded-[12px] ">
                <div>
                  <Image
                    src={Img3}
                    alt="Tower"
                    className="w-full h-full object-cover rounded-t-[12px]"
                  />
                </div>

                <div className="bg-[#4433EE] kanit-medium text-[20px] leading-[20px] h-[63px] px-[22px] flex items-center justify-between text-[#F7F0F0] rounded-b-[12px]">
                  Erasmus + <ArrowRightEuSupport />
                </div>
              </div>

              {/* CARD 2 */}
              <div className="w-full md:w-[236px] h-[283px] md:h-[155px] rounded-[12px] mt-[52px]">
                <div>
                  <Image
                    src={Img2}
                    alt="Creative Europe"
                    className="w-full h-[201px] md:h-[155px]  object-cover rounded-t-[12px]"
                  />
                </div>

                <div className="bg-[#4433EE] kanit-medium text-[20px] leading-[20px] h-[63px] px-[22px] flex items-center justify-between text-[#F7F0F0] rounded-b-[12px]">
                  Creative Europe <ArrowRightEuSupport />
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

            <div className="w-full md:w-[236px] h-[283px] md:h-[155px] rounded-[12px] ">
              <div>
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
