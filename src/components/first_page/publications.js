"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { translations } from "@/data/home";
import { useRouter } from "next/navigation";
import { useGetLatestPublicationQuery } from "@/store/services/homeApi";
import { formatDateInLanguages } from "@/utils/utils";
import { imageUrl } from "@/config";
import ArrowLeft from "@/assets/home/ArrowLeft";
import ArrowRight from "@/assets/home/ArrowRight";

export default function PublicationsShowcase() {
  const router = useRouter();
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const languages = ["ENG", "ALB", "SRB"];

  const { data: items } = useGetLatestPublicationQuery();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = items ? items[currentIndex] : null;
  const date = currentItem
    ? formatDateInLanguages(currentItem?.created_at)
    : null;

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  const translationsArray = Object.entries(currentItem?.translations ?? {}).map(
    ([lang, data]) => ({
      lang,
      ...data,
    })
  );

  return (
    <div className=" mx-auto px-6 lg:px-[74px] py-8 lg:py-[64px] bg-[#F1F6F8] ">
      <div className="flex md:flex-row flex-col space-y-[28px] md:space-y-0 justify-between">
        {/* Left Content */}
        <div className="space-y-6 md:w-[40%]">
          <div>
            <h2 className="w-[60%] text-[#1C1A1A] kanit-semibold text-[34px] leading-[42px]">
              {translations[selectedLanguage].title_publication}
            </h2>
            <p className="text-[#8E8D8D] kanit-light text-[22px]  mt-[32px]">
              {translations[selectedLanguage]?.description_publication}
            </p>
          </div>
          <button
            onClick={() => router.push("/publications")}
            className="w-[209px] bg-[#4433EE] rounded-[56px] h-[46px] text-[#F7F0F0] kanit-medium text-[16px]"
          >
            {translations[selectedLanguage]?.seeallpublication}
          </button>
        </div>

        <div className="w-[765px]  overflow-hidden rounded-[12px] ">
          {/* Desktop Layout */}
          <div className="hidden lg:flex">
            <div className="w-full h-[436px] bg-[#4433EE]">
              <div className="flex justify-between w-full ">
                {/* Text on the left */}
                <div className="flex flex-col px-[46px] h-[334px] justify-between ">
                  <p className="text-[#F7F0F0] kanit-medium text-[26px] leading-[34px] mt-[44px] w-[60%]">
                    {currentItem?.translations[selectedLanguage]?.title}
                  </p>
                  {date && (
                    <p className="text-[#B7A0F8] kanit-regular text-[14px] leading-[34px]">
                      {date[selectedLanguage]}
                    </p>
                  )}
                </div>

                {/* Image on the right */}
                <div className="w-[236px] h-[344px] flex-shrink-0 mr-[1px] ">
                  <Image
                    src={`${imageUrl}/${currentItem?.translations[selectedLanguage]?.photo}`}
                    alt={currentItem?.translations[selectedLanguage]?.title}
                    width={236}
                    height={334}
                    className="w-full h-full object-cover rounded-r-[12px]"
                  />
                </div>
              </div>
              <div className=" flex justify-between min-h-[220px]">
                <div className="flex items-center w-full border-r-[1px] border-t-[1px] border-[#B7A0F8] px-[46px] h-[100px]">
                  <div className="flex items-center  space-x-[21px]">
                    <p className="kanit-light font-light text-[16px] leading-[42px] text-[#fff]">
                      Download PDF
                    </p>
                    <div className="flex gap-2">
                      {translationsArray?.map((lang) => {
                        return (
                          <a
                            key={lang.lang}
                            href={`${imageUrl}/${lang?.filepath}`}
                            target="_blank" // open in new tab
                            rel="noopener noreferrer"
                            className="w-[62px] h-[30px] flex items-center justify-center rounded-[42px] bg-[#f7f0f0] flex-shrink-0"
                          >
                            <p className="kanit-light text-[16px] leading-[42px] text-[#4433EE] uppercase">
                              {lang.lang}
                            </p>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="w-[236px] flex-shrink-0 mt-[25px]">
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={handlePrev}
                      className="w-[70px] h-[35px] rounded-[100px] border border-[2px] border-[#F7F0F0] flex items-center justify-center"
                    >
                      <ArrowLeft />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-[70px] h-[35px] rounded-[100px] border border-[2px] border-[#F7F0F0] flex items-center justify-center"
                    >
                      <ArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className={`bg-[#4433EE] rounded-[12px]`}>
            {/* Mobile Header */}
            <div className="px-[16px] ">
              <h2 className="text-[26px] leading-[34px] kanit-medium text-[#F7F0F0] pt-[28px]">
                {currentItem?.translations[selectedLanguage]?.title}
              </h2>

              <p className="text-[#B7A0F8] kanit-regular text-[14px] leading-[34px] mb-2">
                {" "}
                {date && date[selectedLanguage]}
              </p>

              {/* Mobile Download and Languages */}
              <div className="flex items-center justify-between mt-[38px] ">
                <p className="text-[#fff] text-[16px] kanit-light laeding-[42px] flex items-center ">
                  Download PDF
                </p>
                <div className="flex space-x-[9px]">
                  {translationsArray.map((lang) => (
                    <a
                      key={lang.lang}
                      href={`${imageUrl}/${lang?.filepath}`}
                      target="_blank" // open in new tab
                      rel="noopener noreferrer"
                      className="w-[58px] h-[29px] rounded-[42px] bg-[#F7F0F0] flex items-center justify-center "
                    >
                      <p className="text-sm xl:text-base kanit-regular uppercase text-[#4343ee]">
                        {lang.lang}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Image */}
            <div className="px-2 pb-7 mt-[28px]">
              <Image
                src={`${imageUrl}/${currentItem?.translations[selectedLanguage]?.photo}`}
                alt={currentItem?.translations[selectedLanguage]?.title}
                width={500}
                height={500}
                className="w-full h-[375px] object-cover "
              />
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center justify-center pb-6">
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={handlePrev}
                  className="flex items-center justify-center w-[70px] h-[35px] border-2 border-white rounded-full text-white hover:bg-white hover:text-indigo-600 transition"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center justify-center w-[70px] h-[35px] border-2 border-white rounded-full text-white hover:bg-white hover:text-indigo-600 transition"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
