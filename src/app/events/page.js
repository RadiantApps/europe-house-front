"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import RrotaIcon from "../../assets/events/rrota.svg";
import { useRouter } from "next/navigation";

import { formatTimeString, getDayAndMonth } from "@/utils/utils";
import Footer from "@/components/footer";
import { SlidersHorizontal } from "lucide-react";
import { filterOptions, translations } from "@/data/event";
import { useSelector, useDispatch } from "react-redux";
import { getLocation } from "@/store/features/locationSlice";
import { getAllCategoryEvent } from "@/store/features/categoryEventSlice";
import { useGetEventApiQuery } from "@/store/services/eventApi";
import { imageUrl } from "@/config";
import {
  Location,
  MoreButton,
  MoreButtonMobile,
  Time,
} from "@/assets/events/icons";

export default function Events() {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const locationData =
    useSelector((state) => state.location.getLocationData) || [];
  const categoryData =
    useSelector((state) => state.categoryevent.getAllCategoryEventData) || [];

  const [filters, setFilters] = useState({
    year: "",
    month: "",
    location: "",
    category: "",
  });

  const [offset, setOffset] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const limit = 5;

  const { data } = useGetEventApiQuery({
    year: filters.year,
    month: filters.month,
    location: filters.location,
    category: filters.category,
  });
  const event = data ? data : [];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    setOffset(0);
  };

  const getCategoryColor = (category) => {
    switch (category?.toUpperCase()) {
      case "EXHIBITION":
        return "bg-yellow-400";
      case "EDUCATION":
        return "bg-purple-500";
      case "CULTURE":
        return "bg-blue-600";
      case "MUSIC":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  useEffect(() => {
    dispatch(getLocation());
    dispatch(getAllCategoryEvent());
  }, []);

  const handleClick = (id) => {
    router.push(`/events/${id}`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Video Header */}
      <div className="w-full h-8 relative overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/slider-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Header Section */}
      <div className="px-6 md:px-[74px] pt-8 md:pt-[43px] pb-4 md:pb-[32px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8 xl:max-w-[1500px] xl:mx-auto">
          <div className="flex items-center gap-3 flex-shrink-0">
            <Image
              src={RrotaIcon}
              alt="Events Icon"
              width={64}
              height={64}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
            <h1
              className="font-semibold text-[#1C1A1A] leading-[1.1] kanit-semibold"
              style={{
                fontFamily: "Kanit",
                fontSize: "clamp(28px, 4vw, 64px)",
              }}
            >
              {translations[selectedLanguage]?.title}
            </h1>
          </div>

          <div className="lg:max-w-xl min-w-0">
            <p className="text-[16px] sm:text-[18px] font-light leading-relaxed text-[#555353] text-left lg:text-justify kanit-light">
              {translations[selectedLanguage]?.description}
            </p>
          </div>
        </div>

        <div className="w-full border-t border-[#C6C6C6]"></div>
      </div>

      {/* Filters Section */}
      <div className="px-4 sm:px-6 md:px-[74px] pt-4 sm:pt-6 md:pt-[32px] pb-6 sm:pb-8 md:pb-[37.8px]">
        <div className="md:hidden mb-4 flex justify-end">
          <button
            onClick={toggleSidebar}
            className="flex items-center gap-3 px-6 py-3 bg-[#1c1a1a] text-white rounded-lg hover:bg-[#2a2828] transition-colors font-medium"
          >
            <span className="text-base font-bold">Filter</span>
            <SlidersHorizontal className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="hidden md:flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 max-w-full overflow-x-auto">
          {filterOptions.map((filter, idx) => (
            <div className="relative flex-shrink-0" key={idx}>
              <select
                value={filters[filter.key]}
                onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                className="kanit-regular appearance-none bg-white text-gray-700 px-0 py-2 pr-6 border-b border-gray-400 focus:outline-none focus:border-gray-600 min-w-[80px] w-full md:w-auto text-sm font-medium cursor-pointer"
              >
                <option value="">{filter.label}</option>
                {filter.options.map((opt, i) =>
                  typeof opt === "string" ? (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ) : (
                    <option key={i} value={opt.value}>
                      {opt.label}
                    </option>
                  )
                )}
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
          ))}

          {/* Location Filter */}
          <div className="relative flex-shrink-0">
            <select
              value={filters.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
              className="kanit-regular appearance-none bg-white text-gray-700 px-0 py-2 pr-6 border-b border-gray-400 focus:outline-none focus:border-gray-600 min-w-[80px] w-full md:w-auto text-sm font-medium cursor-pointer"
            >
              <option value="">Location</option>
              {locationData?.map((item) => {
                const translation = item?.translations?.find(
                  (tran) => tran.language_code === selectedLanguage
                );
                return (
                  <option key={item.location_id} value={item.location_id}>
                    {translation?.location_name || "No Name"}
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

          {/* Category Filter */}
          <div className="relative flex-shrink-0">
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange("category", e.target.value)}
              className="kanit-regular appearance-none bg-white text-gray-700 px-0 py-2 pr-6 border-b border-gray-400 focus:outline-none focus:border-gray-600 min-w-[80px] w-full md:w-auto text-sm font-medium cursor-pointer"
            >
              <option value="">Category</option>
              {categoryData?.map((item) => (
                <option
                  key={item.category_event_id}
                  value={item.category_event_id}
                >
                  {item?.translations[selectedLanguage]?.name}
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
        </div>
      </div>

      {/* Events List Section */}
      <div className="w-full bg-[#EDF5FF] rounded-t-[36px] flex-1 xl:max-w-[1500px] xl:mx-auto">
        <div className="px-4 md:px-[74px] space-y-6">
          {event.slice(0, offset + limit).map((eventItem, index) => {
            const inner_photo =
              eventItem?.event_translations[selectedLanguage]?.inner_photo;
            const title =
              eventItem?.event_translations[selectedLanguage]?.title;
            const date = getDayAndMonth(eventItem?.event_date);
            const photo =
              eventItem?.event_translations[selectedLanguage]?.photo;

            return (
              <div key={eventItem?.event_id}>
                {/* Desktop Layout */}
                <div
                  className={`hidden md:flex items-center ${
                    index === 0 ? "pt-[36.2px]" : ""
                  }`}
                >
                  <div className="w-[59%] flex items-center gap-6">
                    <div className="w-[132px] h-[132px] bg-gray-300 rounded-md flex-shrink-0 relative overflow-hidden">
                      {inner_photo ? (
                        <Image
                          src={`${imageUrl}/${inner_photo}`}
                          alt={title}
                          width={132}
                          height={132}
                          className="w-full h-full object-cover rounded-md"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-md flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 flex flex-col h-[132px] justify-between">
                      <h3 className="kanit-semibold text-[24px] text-[#1C1A1A]">
                        {title}
                      </h3>
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Location />
                          <span className="kanit-light text-[#555353] text-[16px]">
                            {
                              eventItem?.location_translations[selectedLanguage]
                                ?.location_name
                            }
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Time />
                          <span className="font-medium kanit-light">
                            {formatTimeString(eventItem.start_time)} -{" "}
                            {formatTimeString(eventItem.end_time)}
                          </span>
                        </div>
                        <span
                          className={`${getCategoryColor(
                            eventItem?.category_translations[selectedLanguage]
                              ?.name
                          )} kanit-light text-[#fff] text-[11px] px-3 py-1.5 rounded-full uppercase tracking-wide`}
                        >
                          {
                            eventItem?.category_translations[selectedLanguage]
                              ?.name
                          }
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-between">
                    <div className="w-[132px] h-[116px] flex flex-col justify-center items-center gap-4">
                      <div className="text-[84px] text-[#1C1A1A] leading-none kanit-semibold">
                        {date.day}
                      </div>
                      <div className="uppercase tracking-wide kanit-regular text-[20px] text-[#555353]">
                        {date?.month[selectedLanguage]}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        handleClick(eventItem.event_id);
                      }}
                      className="kanit-regular bg-white hover:bg-gray-50 text-[#4433EE] border border-[#4433EE] rounded-[50px] flex flex-row items-center gap-[10px] px-[20px] py-[18px] transition-colors font-medium"
                      style={{ height: "49.1607px" }}
                    >
                      {translations[selectedLanguage].button}
                      <MoreButton />
                    </button>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className={`md:hidden ${index === 0 ? "mt-6" : ""}`}>
                  <div className="w-full h-[354px] relative overflow-hidden">
                    <Image
                      src={`${imageUrl}/${photo}`}
                      alt={title}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex justify-between mt-[24px]">
                    <div>
                      <span className="kanit-semibold text-[#1B1B1B] text-[24px]">
                        {title}
                      </span>

                      <div className="flex space-x-[22px] mt-[24px]">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Location />
                          <span className="font-medium">
                            {
                              eventItem?.location_translations[selectedLanguage]
                                ?.location_name
                            }
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Time />
                          <span className="font-medium">
                            {formatTimeString(eventItem.start_time)} -{" "}
                            {formatTimeString(eventItem.end_time)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[-12px]">
                      <div className="text-[84px] text-[#1C1A1A] leading-none kanit-semibold">
                        {date.day}
                      </div>
                      <div className="uppercase tracking-wide kanit-regular text-[20px] text-[#1B1B1B]">
                        {date?.month[selectedLanguage]}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center md:hidden">
                  <button
                    onClick={() => {
                      handleClick(eventItem.event_id);
                    }}
                    className="mt-[24px] w-[150px] bg-[#4433EE] hover:bg-[#3628c7] text-white rounded-full py-3 flex items-center justify-center gap-2 transition-colors font-medium"
                  >
                    {" "}
                    {translations[selectedLanguage].button} <MoreButtonMobile />
                  </button>
                </div>
                <div className="w-full border-t border-[#C6C6C6] mt-6 md:mt-8"></div>
              </div>
            );
          })}

          {/* See More Button */}
          <div className="flex justify-center ">
            <button
              onClick={() => setOffset((prev) => prev + limit)}
              className="w-[150px] bg-[#4433EE] hover:bg-[#3628c7] text-white rounded-full py-3 flex items-center justify-center gap-2 transition-colors font-medium mt-[52px] mb-[52px]"
            >
              {translations[selectedLanguage].seebutton}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
