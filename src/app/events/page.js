"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import RrotaIcon from "../../assets/events/rrota.svg";
import { getEvents } from "../../store/features/eventsSlice";
import { formatDate, formatTime, getMonthName } from "@/utils/utils";
import Footer from "@/components/footer";

export default function Events() {
  const dispatch = useDispatch();
  const { eventsData, totalEvents, eventsLoading, eventsError } = useSelector(
    (state) => state.events
  );

  const [filters, setFilters] = useState({
    year: "",
    month: "",
    location: "",
    category: "",
  });

  const [offset, setOffset] = useState(0);
  const limit = 5;

  useEffect(() => {
    dispatch(getEvents({ limit, offset, ...filters }));
  }, [offset, filters]);

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
      options: [
        "Prishtinë",
        "Prizren",
        "Peja",
        "Gjakova",
        "Mitrovica",
        "Ferizaj",
        "Gjilan",
        "Vushtrri",
        "Suhareka",
        "Lipjan",
        "Podujeva",
        "Rahovec",
        "Skenderaj",
        "Kamenica",
        "Malisheva",
        "Dragash",
        "Kacanik",
        "Kline",
        "Decan",
        "Obiliq",
        "Shtime",
        "Hani i Elezit",
        "Zubin Potok",
        "Zvecan",
        "Leposaviq",
      ],
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
    <div className="min-h-screen bg-white">
      <div className="w-full h-12 bg-blue-600 flex items-center justify-center">
        <span className="text-white text-sm font-medium">
          DISCOVER UPCOMING EVENTS THAT CELEBRATE ART, MUSIC, AND UNITY.
        </span>
      </div>

      <div className="px-[74px] pt-[43px] pb-[32px]">
        <div className="flex justify-between items-start mb-[23.8px]">
          <div className="flex items-center gap-[12px]">
            <Image
              src={RrotaIcon}
              alt="Events Icon"
              width={64}
              height={64}
              className="object-contain"
            />
            <h1
              className="text-[41px] font-semibold text-[#1C1A1A] tracking-[0%]"
              style={{
                fontFamily: "Kanit",
                fontWeight: 600,
                fontStyle: "normal",
                lineHeight: "115.99999999999999%",
              }}
            >
              EVENTS
            </h1>
          </div>
          <div className="max-w-[556px] flex items-center w-full">
            <p
              className="w-full text-[18px] font-light leading-[25px] tracking-[-0.006em] text-[#555353] text-justify"
              style={{
                fontFamily: "Kanit",
                fontWeight: 300,
                fontStyle: "normal",
                lineHeight: "25px",
                letterSpacing: "-0.6%",
              }}
            >
              Discover what's happening at Europe House Kosovo—join discussions,
              workshops, and cultural activities that inspire and engage.
            </p>
          </div>
        </div>

        <div className="w-full border-t border-[#C6C6C6]"></div>
      </div>

      <div className="px-[74px] pt-[32px] pb-[37.8px] max-w-[483px]">
        <div className="flex gap-8">
          {filterOptions.map((filter, idx) => (
            <div className="relative" key={idx}>
              <select
                value={filters[filter.key]}
                onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                className="appearance-none bg-white text-gray-700 px-0 py-2 pr-6 border-b border-gray-400 focus:outline-none focus:border-gray-600 min-w-[80px] text-sm font-medium cursor-pointer"
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

      <div className="w-full bg-[#EDF5FF] rounded-t-[36px]">
        <div className="px-[74px] space-y-6">
          {eventsData && eventsData.length > 0 ? (
            eventsData.map((event, index) => (
              <div key={index}>
                <div
                  className={`flex items-center ${
                    index === 0 ? "pt-[36.2px]" : ""
                  }`}
                >
                  {/* Left side */}
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
                      <h3 className="font-bold text-gray-900 text-xl">
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
                          <span className="font-medium">{event.location}</span>
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
                          <span className="font-medium">
                            {formatTime(event.start_time, event.end_time)}
                          </span>
                        </div>
                        <span
                          className={`${getCategoryColor(
                            event.category
                          )} text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide`}
                        >
                          {event.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="flex-1 flex items-center justify-between">
                    <div className="w-[132px] h-[116px] flex flex-col justify-center items-center gap-4">
                      <div className="text-4xl font-bold text-gray-900 leading-none">
                        {formatDate(event.day)}
                      </div>
                      <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        {getMonthName(event.month)}
                      </div>
                    </div>
                    <button
                      className="bg-white hover:bg-gray-50 text-[#4433EE] border border-[#4433EE] rounded-[50px] flex flex-row items-center gap-[10px] px-[20px] py-[18px] transition-colors font-medium"
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

                <div className="w-full mt-8 border-t border-[#C6C6C6]"></div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-gray-600 text-lg">
                No events available at the moment.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Check back later for upcoming events.
              </p>
            </div>
          )}
        </div>

        {eventsData && eventsData.length < totalEvents && (
          <div className="text-center pt-[52px] pb-12">
            <button
              onClick={handleSeeMore}
              className="bg-[#4433EE] w-[190px] text-white rounded-[56px] pt-[18px] pr-[20px] pb-[18px] pl-[20px] gap-[10px] font-semibold text-lg"
            >
              See more
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
