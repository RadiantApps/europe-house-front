"use client";

import PublicationsIcon from "../../assets/publications/publications.svg";
import { useState } from "react";
import Image from "next/image";
import { SlidersHorizontal } from "lucide-react";

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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

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
      title: "Future of Europe:",
      subtitle: "Challenges and opportunities",
      date: "Dec 2023",
      languages: ["ENG", "DEU"],
    },
    {
      id: 4,
      image: "/assets/publications/test.svg",
      title: "Cultural Heritage:",
      subtitle: "Preserving our history",
      date: "Nov 2023",
      languages: ["ENG", "ITA"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="px-6 md:px-[74px] pt-8 md:pt-[43px] pb-4 md:pb-[32px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div className="flex items-center gap-3 flex-shrink-0">
            <Image
              src={PublicationsIcon}
              alt="Publications Icon"
              width={64}
              height={64}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
            <h1
              className="font-semibold text-[#1C1A1A] leading-[1.1]"
              style={{
                fontFamily: "Kanit",
                fontSize: "clamp(28px, 4vw, 64px)",
              }}
            >
              PUBLICATIONS
            </h1>
          </div>
          <div className="lg:max-w-xl min-w-0">
            <p
              className="text-[16px] sm:text-[18px] font-light leading-relaxed text-[#555353] text-left lg:text-justify"
              style={{ fontFamily: "Kanit" }}
            >
              Leaf through our latest publications.
            </p>
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="w-full bg-[#EDF5FF] rounded-t-[36px]">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[74px] pt-8 sm:pt-12 md:pt-[66px] pb-8 sm:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-[28px] max-w-[1340px] mx-auto">
            {items.map((item) => (
              <div
                key={item.id}
                className="w-full max-w-[632px] mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-md"
              >
                {/* Mobile Layout */}
                <div className="flex flex-col bg-[#dbdde0] lg:hidden">
                  <div className="p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-medium uppercase text-[#1c1a1a] leading-tight">
                      {item.title}
                      <br />
                      <span className="normal-case">{item.subtitle}</span>
                    </h2>
                    <p className="text-sm text-[#8e8d8d] mt-3">{item.date}</p>
                  </div>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[200px] sm:h-[250px] object-cover"
                  />

                  <div className="flex flex-col sm:flex-row sm:justify-between items-center bg-[#4343ee] px-4 sm:px-6 py-3 gap-3 w-full">
                    <p className="text-white text-base font-light">
                      Download PDF
                    </p>
                    <div className="flex gap-2 flex-wrap justify-center sm:justify-end">
                      {item.languages.map((lang) => (
                        <div
                          key={lang}
                          className="px-3 sm:px-4 py-1 rounded-[42px] bg-[#f7f0f0]"
                        >
                          <p className="text-sm sm:text-base font-light uppercase text-[#4343ee]">
                            {lang}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex flex-row bg-[#dbdde0]">
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex flex-col justify-center p-6 flex-1">
                      <h2 className="text-xl xl:text-[26px] font-medium uppercase text-[#1c1a1a] leading-tight">
                        {item.title}
                        <br />
                        <span className="normal-case">{item.subtitle}</span>
                      </h2>
                      <p className="text-sm text-[#8e8d8d] mt-3">{item.date}</p>
                    </div>

                    <div className="flex flex-row justify-between items-center bg-[#4343ee] px-6 py-3 gap-3">
                      <p className="text-white text-base font-light whitespace-nowrap">
                        Download PDF
                      </p>
                      <div className="flex gap-2 flex-wrap justify-end">
                        {item.languages.map((lang) => (
                          <div
                            key={lang}
                            className="px-3 xl:px-4 py-1 rounded-[42px] bg-[#f7f0f0] flex-shrink-0"
                          >
                            <p className="text-sm xl:text-base font-light uppercase text-[#4343ee]">
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
                    className="w-[200px] xl:w-[236px] h-[240px] xl:h-[264px] object-cover flex-shrink-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
