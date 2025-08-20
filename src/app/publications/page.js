"use client";

import PublicationsIcon from "../../assets/publications/publications.svg";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PublicationsPage() {
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
  const [filters, setFilters] = useState({
    year: "",
    month: "",
    location: "",
    category: "",
  });
   const items = [
    {
      id: 1,
      image: "/assets/publications/test.svg",
      title: "Schengen:",
      subtitle: "Your gateway to free movement in Europe",
      date: "Feb 2024",
      languages: ["ENG", "ALB", "SRB"],
    },
    {
      id: 2,
      image: "/assets/publications/test.svg",
      title: "EU Policies:",
      subtitle: "What you need to know",
      date: "Jan 2024",
      languages: ["ENG", "FR"],
    },
    {
      id: 3,
      image: "/assets/publications/test.svg",
      title: "EU Policies:",
      subtitle: "What you need to know",
      date: "Jan 2024",
      languages: ["ENG", "FR"],
    },
    {
      id: 4,
      image: "/assets/publications/test.svg",
      title: "EU Policies:",
      subtitle: "What you need to know",
      date: "Jan 2024",
      languages: ["ENG", "FR"],
    },
    {
      id: 5,
      image: "/assets/publications/test.svg",
      title: "EU Policies:",
      subtitle: "What you need to know",
      date: "Jan 2024",
      languages: ["ENG", "FR"],
    },
  ];

  return (
    <div className="min-h-screen bg-white ">
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
      <div className="px-[74px] pt-[43px] pb-[32px]">
        <div className="flex justify-between items-start mb-[23.8px]">
          <div className="flex items-center gap-[12px]">
            <Image
              src={PublicationsIcon}
              alt="Events Icon"
              width={64}
              height={64}
              className="object-contain"
            />
           <p className="text-[64px] font-semibold text-left text-[#1c1a1a]">PUBLCIATIONS</p>

          </div>
          <div className="max-w-[556px] flex items-center w-full">
          <p className="text-lg font-light text-right text-[#555353]">
  Leaf through our latest publications.
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
        <div className="flex flex-wrap px-[74px] pt-[66px] gap-[28px]">
          {items.map((item) => (
            <div
              key={item.id}
              className="w-[632px] rounded-xl overflow-hidden shadow-md"
            >
              <div className="flex bg-[#dbdde0]">
                <div className="flex-1 flex flex-col">
                  <div className="flex flex-col justify-center p-6 flex-1">
                    <p className="text-[26px] font-medium uppercase text-[#1c1a1a] leading-tight">
                      {item.title}
                      <br />
                      <span className="normal-case">{item.subtitle}</span>
                    </p>
                    <p className="text-sm text-[#8e8d8d] mt-3">{item.date}</p>
                  </div>

                  <div className="flex justify-between items-center bg-[#43e] px-6 py-3">
                    <p className="text-white text-base font-light">
                      Download PDF
                    </p>
                    <div className="flex gap-2">
                      {item.languages.map((lang) => (
                        <div
                          key={lang}
                          className="px-4 py-1 rounded-[42px] bg-[#f7f0f0]"
                        >
                          <p className="text-base font-light uppercase text-[#43e]">
                            {lang}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[236px] h-[264px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
