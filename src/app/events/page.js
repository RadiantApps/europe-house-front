"use client";

import { useState } from "react";
import Image from "next/image";
import RrotaIcon from "../../assets/events/rrota.svg";
import Img1 from "../../assets/events/1.png";

import Img2 from "../../assets/events/2.png";

import Img3 from "../../assets/events/3.png";

import { formatDate, formatTime, getMonthName } from "@/utils/utils";
import Footer from "@/components/footer";
import { SlidersHorizontal } from "lucide-react";

export default function Events() {
  const [filters, setFilters] = useState({
    year: "",
    month: "",
    location: "",
    category: "",
  });

  const [offset, setOffset] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const limit = 5;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const clearFilters = () => {
    setFilters({
      year: "",
      month: "",
      location: "",
      category: "",
    });
  };

  // 🔹 Dummy events data
  const dummyEvents = [
    {
      name: "Art Exhibition: Colors of Europe",
      location: "Prishtinë",
      start_time: "10:00",
      end_time: "14:00",
      day: 12,
      month: 5,
      category: "Exhibition",
      image: Img1,
    },
    {
      name: "Cultural Music Night",
      location: "Prizren",
      start_time: "18:00",
      end_time: "22:00",
      day: 24,
      month: 6,
      category: "Music",
      image: Img2,
    },
    {
      name: "Education Workshop: Future Leaders",
      location: "Gjakova",
      start_time: "09:00",
      end_time: "12:00",
      day: 3,
      month: 7,
      category: "Education",
      image: Img3,
    },
  ];

  const eventsData = dummyEvents;
  const totalEvents = dummyEvents.length;
  const eventsLoading = false;
  const eventsError = null;

  const handleSeeMore = () => {
    setOffset((prev) => prev + limit);
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

  const filterOptions = [
    { label: "Year", key: "year", options: ["2024", "2023", "2022", "2021"] },
    {
      label: "Month",
      key: "month",
      options: [
        { label: "January", value: 1 },
        { label: "February", value: 2 },
        { label: "March", value: 3 },
        { label: "April", value: 4 },
        { label: "May", value: 5 },
        { label: "June", value: 6 },
        { label: "July", value: 7 },
        { label: "August", value: 8 },
        { label: "September", value: 9 },
        { label: "October", value: 10 },
        { label: "November", value: 11 },
        { label: "December", value: 12 },
      ],
    },
    {
      label: "Location",
      key: "location",
      options: ["Prishtinë", "Prizren", "Peja", "Gjakova", "Mitrovica"],
    },
    {
      label: "Category",
      key: "category",
      options: ["Exhibition", "Education", "Culture", "Music", "Workshop"],
    },
  ];

  if (eventsLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  if (eventsError) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Error loading events: {eventsError}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div className="flex items-center gap-3 flex-shrink-0">
            <Image
              src={RrotaIcon}
              alt="Events Icon"
              width={64}
              height={64}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
            <h1
              className="font-semibold text-[#1C1A1A] leading-[1.1] kanit-semibold "
              style={{
                fontFamily: "Kanit",
                fontSize: "clamp(28px, 4vw, 64px)",
              }}
            >
              EVENTS
            </h1>
          </div>

          <div className="lg:max-w-xl min-w-0">
            <p className="text-[16px] sm:text-[18px] font-light leading-relaxed text-[#555353] text-left lg:text-justify kanit-light">
              Discover what's happening at Europe House Kosovo—join discussions,
              workshops, and cultural activities that inspire and engage.
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
                className="kanit-regular  appearance-none bg-white text-gray-700 px-0 py-2 pr-6 border-b border-gray-400 focus:outline-none focus:border-gray-600 min-w-[80px] w-full md:w-auto text-sm font-medium cursor-pointer"
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
        </div>
      </div>

      {/* Events List Section */}
      <div className="w-full bg-[#EDF5FF] rounded-t-[36px] flex-1">
        <div className="px-4 md:px-[74px] space-y-6">
          {eventsData && eventsData.length > 0 ? (
            eventsData.map((event, index) => (
              <div key={index}>
                {/* Desktop Layout */}
                <div
                  className={`hidden md:flex items-center ${
                    index === 0 ? "pt-[36.2px]" : ""
                  }`}
                >
                  <div className="w-[59%] flex items-center gap-6">
                    <div className="w-[132px] h-[132px] bg-gray-300 rounded-md flex-shrink-0 relative overflow-hidden">
                      {event.image ? (
                        <Image
                          src={event.image}
                          alt={event.name}
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
                    <div className="flex-1 flex flex-col h-[132px] py-2 justify-between">
                      <h3 className="font-bold text-gray-900 text-xl kanit-semibold">
                        {event.name}
                      </h3>
                      <div className="flex items-center gap-6 text-sm text-gray-600 ">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="#4433EE"
                            stroke="#ffffff"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="font-medium kanit-light">
                            {event.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="font-medium kanit-light">
                            {formatTime(event.start_time, event.end_time)}
                          </span>
                        </div>
                        <span
                          className={`${getCategoryColor(
                            event.category
                          )} kanit-light text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide`}
                        >
                          {event.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-between">
                    <div className="w-[132px] h-[116px] flex flex-col justify-center items-center gap-4">
                      <div className="text-4xl font-bold text-gray-900 leading-none kanit-semibold ">
                        {formatDate(event.day)}
                      </div>
                      <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide kanit-semibold ">
                        {getMonthName(event.month)}
                      </div>
                    </div>
                    <button
                      className="kanit-regular bg-white hover:bg-gray-50 text-[#4433EE] border border-[#4433EE] rounded-[50px] flex flex-row items-center gap-[10px] px-[20px] py-[18px] transition-colors font-medium"
                      style={{ height: "49.1607px" }}
                    >
                      More info
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div
                  className={`md:hidden bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 ${
                    index === 0 ? "mt-6" : ""
                  }`}
                >
                  <div className="w-full h-48 bg-gray-300 relative overflow-hidden">
                    {event.image ? (
                      <Image
                        src={event.image}
                        alt={event.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-white"
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
                    <div className="absolute top-3 left-3">
                      <span
                        className={`${getCategoryColor(
                          event.category
                        )} text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide`}
                      >
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-white rounded-lg p-2 text-center min-w-[60px]">
                      <div className="text-2xl font-bold text-gray-900 leading-none">
                        {formatDate(event.day)}
                      </div>
                      <div className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                        {getMonthName(event.month)}
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2">
                      {event.name}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 text-gray-500 flex-shrink-0"
                          fill="#4433EE"
                          stroke="#ffffff"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="font-medium">{event.location}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 text-gray-500 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="font-medium">
                          {formatTime(event.start_time, event.end_time)}
                        </span>
                      </div>
                    </div>

                    <button className="w-full bg-[#4433EE] hover:bg-[#3628c7] text-white rounded-full py-3 flex items-center justify-center gap-2 transition-colors font-medium">
                      More info
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="w-full border-t border-[#C6C6C6] mt-6 md:mt-8"></div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-600">
              No events found
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
