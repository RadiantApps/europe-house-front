"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { translations } from "@/data/home";
import { useRouter } from "next/navigation";
import { useGetLatestPublicationQuery } from "@/store/services/homeApi";
import { formatDateInLanguages } from "@/utils/utils";
import { imageUrl } from "@/config";
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
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start md:mt-[66px]">
        {/* Left Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-[#1C1A1A] kanit-semibold text-[34px] leading-[42px]">
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

        {/* Publications Card */}
        <div className="w-full rounded-xl overflow-hidden shadow-md">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className={`bg-indigo-600 text-white`}>
              {/* Mobile Header */}
              <div className="p-6 pb-4">
                <h2 className="text-[26px] leading-[34px] kanit-medium text-[#F7F0F0] tracking-wide mb-2">
                  {currentItem?.translations[selectedLanguage]?.title}
                </h2>

                <p className="text-[#B7A0F8] kanit-regular text-[14px] leading-[34px] mb-2">
                  {" "}
                  {date && date[selectedLanguage]}
                </p>

                {/* Mobile Download and Languages */}
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[#fff] text-[16px] kanit-light laeding-[42px] flex items-center gap-2">
                    Download PDF
                  </p>
                  <div className="flex gap-2">
                    {translationsArray.map((lang) => (
                      <a
                        key={lang.lang}
                        href={`${imageUrl}/${lang?.filepath}`}
                        target="_blank" // open in new tab
                        rel="noopener noreferrer"
                        className="px-3 xl:px-4 py-1 rounded-[42px] bg-[#f7f0f0] flex-shrink-0"
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
              <div className="px-2 pb-7">
                <Image
                  src={`${imageUrl}/${currentItem?.translations[selectedLanguage]?.photo}`}
                  alt={currentItem?.translations[selectedLanguage]?.title}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover rounded-lg"
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

          {/* Desktop Layout */}
          <div className="hidden lg:flex">
            <div className="flex flex-col flex-1">
              <div
                className={`text-white p-6 relative flex-1 min-h-[243px] bg-indigo-600 border-b border-gray-300`}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <h2 className="kanit-medium text-[26px] leading-[34px] text-[#F7F0F0]">
                    {currentItem?.translations[selectedLanguage]?.title}
                  </h2>
                  <p className="text-[#B7A0F8] text-[14px] kanit-regular leading-[34px]">
                    {date && date[selectedLanguage]}
                  </p>
                </div>
              </div>

              {/* Bottom Left - Download & Languages Section */}
              <div
                className={`text-white p-6 h-12 flex items-center justify-between bg-indigo-600 border-r border-gray-300`}
              >
                <p className="text-white text-[#fff] kanit-regular text-[16px] leading-[42px] whitespace-nowrap flex items-center gap-2">
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
                        className="px-3 xl:px-4 py-1 rounded-[42px] bg-[#f7f0f0] flex-shrink-0"
                      >
                        <p className="text-sm xl:text-base kanit-regular uppercase text-[#4343ee]">
                          {lang.lang}
                        </p>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-shrink-0 lg:w-[340px]">
              <div className="flex-1 ">
                <Image
                  src={`${imageUrl}/${currentItem?.translations[selectedLanguage]?.photo}`}
                  alt={currentItem?.translations[selectedLanguage]?.title}
                  width={340}
                  height={334}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className={`h-12 flex items-center justify-center px-6 bg-indigo-600`}
              >
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
    </div>
  );
}
