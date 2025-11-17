"use client";

import PublicationsIcon from "../../assets/publications/publications.svg";
import { useEffect, useState } from "react";
import Image from "next/image";
import { SlidersHorizontal } from "lucide-react";
import Footer from "@/components/footer";
import { translationTitlePublic } from "@/data/publication";
import { useDispatch, useSelector } from "react-redux";
import { useGetPublicationApiQuery } from "@/store/services/publicationApi";
import { formatDate } from "@/utils/utils";
import { imageUrl } from "@/config";
import { getPublicationCategory } from "@/store/features/publicationSlice";
export default function PublicationsPage() {
  const dispatch = useDispatch();
  const categoryPublicationData =
    useSelector((state) => state.publication.getPublicationCategoryData) || [];
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const currentYear = new Date().getFullYear();

  const yearOptions = Array.from(
    { length: currentYear - 2015 + 1 },
    (_, i) => 2015 + i
  );

  const [filters, setFilters] = useState({});
  const [tempFilters, setTempFilters] = useState({});
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

  const toggleFilterSidebar = () => {
    if (!isFilterSidebarOpen) {
      // When opening sidebar, copy current filters to temp filters
      setTempFilters(filters);
    }
    setIsFilterSidebarOpen(!isFilterSidebarOpen);
  };

  const closeFilterSidebar = () => {
    setIsFilterSidebarOpen(false);
  };

  const handleTempFilterChange = (key, value) => {
    setTempFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const applyFilters = () => {
    setFilters(tempFilters);
    closeFilterSidebar();
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const { data: publication } = useGetPublicationApiQuery({
    year: filters.year,
    topic: filters.topic,
    language: selectedLanguage,
  });
  console.log(publication);
  useEffect(() => {
    dispatch(getPublicationCategory());
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="px-6 md:px-[74px] pt-8 md:pt-[43px] pb-4 md:pb-[32px] ">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div className="flex items-center gap-3 flex-shrink-0">
            <Image
              src={PublicationsIcon}
              alt="Publications Icon"
              width={64}
              height={64}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
            <h1 className="text-[#1C1A1A]  text-[44px] md:text-[52px] kanit-semibold">
              {translationTitlePublic[selectedLanguage].title}
            </h1>
          </div>
          <div className="lg:max-w-xl min-w-0">
            <p className="text-[16px] sm:text-[18px] font-light leading-relaxed text-[#555353] text-left lg:text-justify kanit-light">
              {translationTitlePublic[selectedLanguage].description}
            </p>
          </div>
        </div>

        <div className="w-full border-t border-[#C6C6C6]"></div>
      </div>

      {/* Filters Section */}
      <div className="px-4 sm:px-6 md:px-[74px] pt-4 sm:pt-[18px] md:pt-[32px] pb-6 sm:pb-8 md:pb-[37.8px] ">
        <div className="md:hidden flex justify-end">
          <button
            onClick={toggleFilterSidebar}
            className="flex items-center gap-2 text-[#4433EE] font-medium"
          >
            <span className="text-sm font-semibold">Filter</span>
            <SlidersHorizontal className="w-5 h-5 text-[#4433EE]" />
          </button>
        </div>

        <div className="hidden md:flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 max-w-full overflow-x-auto">
          {/* Year Filter */}
          <div className="relative flex-shrink-0">
            <select
              value={filters.year}
              onChange={(e) => handleFilterChange("year", e.target.value)}
              className="kanit-regular appearance-none bg-white text-gray-700 px-0 py-2 pr-6 border-b border-gray-400 focus:outline-none focus:border-gray-600 min-w-[80px] w-full md:w-auto text-sm font-medium cursor-pointer"
            >
              <option value="">Year</option>
              {yearOptions.map((year, i) => (
                <option key={i} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-3 h-3 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <select
              value={filters.topic}
              onChange={(e) => handleFilterChange("topic", e.target.value)}
              className="kanit-regular appearance-none bg-white text-gray-700 px-0 py-2 pr-6 border-b border-gray-400 focus:outline-none focus:border-gray-600 min-w-[80px] w-full md:w-auto text-sm font-medium cursor-pointer"
            >
              <option value="">Topic</option>
              {categoryPublicationData.map((opt) => {
                return (
                  <option key={opt.id} value={opt.id}>
                    {opt.translations[selectedLanguage]}
                  </option>
                );
              })}
            </select>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-3 h-3 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="w-full bg-[#EDF5FF] rounded-t-[36px]">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[74px] pt-8 sm:pt-12 md:pt-[66px] pb-8 sm:pb-12">
          <div className="flex flex-wrap justify-between gap-[27px]">
            {publication?.map((item) => {
              const translation = item?.translations[selectedLanguage];
              const translationsArray = Object.entries(item?.translations).map(
                ([lang, data]) => ({
                  lang,
                  ...data,
                })
              );
              return (
                <div
                  key={item.publication_id}
                  className=" w-[49%] mx-auto lg:mx-0 rounded-xl overflow-hidden "
                >
                  <div className="flex flex-col bg-[#dbdde0] lg:hidden">
                    <div className="p-4 sm:p-6">
                      <h2 className="text-[26px] kanit-medium text-[#1C1A1A]">
                        {translation.title}
                      </h2>
                      <p className="text-[14px] leading-[34px] kanit-regular text-[#8E8D8D]">
                        {formatDate(item.created_at, selectedLanguage)}
                      </p>
                    </div>

                    <img
                      src={`${imageUrl}/${translation?.photo}`}
                      alt={item.title}
                      className="w-full h-[200px] sm:h-[250px] object-cover"
                    />

                    <div className="flex justify-center  items-center  space-x-[21px] bg-[#4433EE] h-[70px]">
                      <p className="kanit-light text-[#FFFFFF] text-[16px] leading-[42px]">
                        Download PDF
                      </p>
                      <div className="flex space-x-[8px]">
                        {translationsArray.map((lang) => {
                          return (
                            <a
                              key={lang.lang}
                              href={`${imageUrl}/${lang?.filepath}`}
                              target="_blank" // open in new tab
                              rel="noopener noreferrer"
                              className="w-[50px] h-[24px] rounded-[34px] bg-[#F7F0F0] flex justify-center items-center"
                            >
                              <p className="text-[14px] text-[#4433EE] kanit-light uppercase">
                                {lang.lang}
                              </p>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden lg:flex flex-row bg-[#dbdde0]">
                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="flex flex-col justify-center flex-1 ml-[36px]">
                        <h2 className="text-xl xl:text-[26px] kanit-medium uppercase text-[#1c1a1a] leading-tight ">
                          {translation.title}
                        </h2>
                        <p className="text-sm text-[#8e8d8d] mt-3 kanit-regular">
                          {formatDate(item.created_at, selectedLanguage)}
                        </p>
                      </div>

                      <div className="flex flex-row justify-between items-center bg-[#4343ee] px-6 py-3 gap-3 h-[69px]">
                        <p className="text-white text-base kanit-regular whitespace-nowrap kanit-regular">
                          Download PDF
                        </p>
                        <div className="flex gap-2 flex-wrap justify-end">
                          {translationsArray.map((lang) => {
                            return (
                              <a
                                key={lang.lang}
                                href={`${imageUrl}/${lang?.filepath}`}
                                target="_blank"
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

                    <img
                      src={`${imageUrl}/${translation?.photo}`}
                      alt={item.title}
                      className="w-[200px] xl:w-[236px] h-[240px] xl:h-[334px] object-cover flex-shrink-0"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {isFilterSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeFilterSidebar}
        />
      )}

      <div
        className={`md:hidden fixed top-0 right-0 max-w-xs w-full h-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out overflow-auto ${
          isFilterSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <button
            onClick={closeFilterSidebar}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800"
            aria-label="Close filter menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Filter Title */}
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-[20px] font-semibold text-gray-800 kanit-semibold">
              Filter Publications
            </h2>
          </div>

          {/* Filter Options */}
          <div className="space-y-6">
            {/* Year Filter */}
            <div className="relative">
              <select
                value={tempFilters.year || ""}
                onChange={(e) => handleTempFilterChange("year", e.target.value)}
                className="kanit-regular appearance-none bg-white text-gray-700 px-0 py-2 pr-6 border-b border-gray-400 focus:outline-none focus:border-gray-600 min-w-[80px] w-full text-sm font-medium cursor-pointer"
              >
                <option value="">Year</option>
                {yearOptions.map((year, i) => (
                  <option key={i} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-3 h-3 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Topic Filter */}
            <div className="relative">
              <select
                value={tempFilters.topic || ""}
                onChange={(e) =>
                  handleTempFilterChange("topic", e.target.value)
                }
                className="kanit-regular appearance-none bg-white text-gray-700 px-0 py-2 pr-6 border-b border-gray-400 focus:outline-none focus:border-gray-600 min-w-[80px] w-full text-sm font-medium cursor-pointer"
              >
                <option value="">Topic</option>
                {categoryPublicationData.map((opt) => {
                  return (
                    <option key={opt.id} value={opt.id}>
                      {opt.translations[selectedLanguage]}
                    </option>
                  );
                })}
              </select>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-3 h-3 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Apply Filters Button */}
          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={applyFilters}
              className="w-full bg-[#4433EE] hover:bg-[#3628c7] text-white rounded-full py-3 flex items-center justify-center transition-colors font-medium kanit-regular"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
