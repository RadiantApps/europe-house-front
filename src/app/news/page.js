"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import NewsIcon from "../../assets/news/news.svg";
import Img1 from "../../assets/news/1.png";
import Img2 from "../../assets/news/2.png";
import Img3 from "../../assets/news/3.png";
import Img4 from "../../assets/news/4.png";
import Img5 from "../../assets/news/5.png";
import Img6 from "../../assets/news/6.png";
import Img7 from "../../assets/news/7.png";
import Img8 from "../../assets/news/8.png";

import Image from "next/image";
import Footer from "@/components/footer";

const mockNewsData = [
  {
    id: 2,
    title:
      "A Summer of Joy and Learning: The SOS Children's Village Summer Camp 2024",
    date: "June 28, 2024",
    category: "Community",
    description: "Children enjoying summer activities and learning experiences",
    image: Img2,
  },
  {
    id: 3,
    title: "Promoting Sustainable and Worker Friendly Construction",
    date: "June 20, 2024",
    category: "Development",
    description: "Initiative focusing on sustainable construction practices",
    image: Img3,
  },
  {
    id: 4,
    title: "A Space for Reflection and Creativity: Rezidenca 17",
    date: "June 15, 2024",
    category: "Culture",
    description: "New creative space opens for artists and thinkers",
    image: Img4,
  },
  {
    id: 5,
    title: "Six Realities Fused in One Exhibition",
    date: "June 10, 2024",
    category: "Culture",
    description: "Contemporary art exhibition showcasing diverse perspectives",
    image: Img5,
  },
  {
    id: 6,
    title: "Struggling for Liberation",
    date: "June 5, 2024",
    category: "History",
    description: "Documentary exploring liberation movements",
    image: Img6,
  },
  {
    id: 7,
    title: "Everyone has the right to be vaccinated!",
    date: "May 28, 2024",
    category: "Health",
    description: "Public health campaign promoting vaccination access",
    image: Img7,
  },
  {
    id: 8,
    title: "Peer-led Quality Assurance Model for Improved Education",
    date: "May 20, 2024",
    category: "Education",
    description: "New educational quality assurance initiative",
    image: Img8,
  },
];

export default function NewsBlog() {
  const [newsData, setNewsData] = useState(mockNewsData);
  const [filteredNews, setFilteredNews] = useState(mockNewsData);
  const [selectedYear, setSelectedYear] = useState("Year");
  const [selectedMonth, setSelectedMonth] = useState("Month");
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [visibleItems, setVisibleItems] = useState(8);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [filters, setFilters] = useState({
    year: "",
    month: "",
    location: "",
    category: "",
  });
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

  const handleSeeMore = () => {
    setVisibleItems((prev) => Math.min(prev + 4, filteredNews.length));
  };

  const applyFilters = () => {
    let filtered = newsData;

    if (selectedCategory !== "Category") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    setFilteredNews(filtered);
    setVisibleItems(8);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedYear, selectedMonth, selectedCategory]);

  return (
    <div className="min-h-screen ">
      {/* Header Video Section */}
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
      <div className="px-6 md:px-[74px] pt-8 md:pt-[43px] pb-4 md:pb-[32px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 flex-shrink-0">
              <Image
                src={NewsIcon}
                alt="Events Icon"
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
              <h1
                className="font-semibold text-[#1C1A1A] leading-[1.1] kanit-semibold"
                style={{
                  fontSize: "clamp(28px, 4vw, 64px)",
                }}
              >
                NEWS BLOG
              </h1>
            </div>
            <div className="w-full hidden lg:flex border-t border-[#C6C6C6]"></div>
          </div>

          <div className="lg:max-w-xl min-w-0 flex flex-col">
            <p className="text-[16px] sm:text-[18px] font-light leading-relaxed text-[#555353] text-left lg:text-justify kanit-semibold ">
              Stay informed and inspired with our news section, where we bring
              you the latest updates, interviews.
            </p>
            <button className=" kanit-medium  mt-6 lg:mt-8 w-[190px] h-[50px] flex items-center justify-center gap-[10px] bg-indigo-600 text-white font-medium rounded-[56px]">
              Join Us
            </button>
          </div>
        </div>
        <div className="lg:hidden w-full border-t border-[#C6C6C6]"></div>
      </div>
      <div className="px-4 sm:px-6 md:px-[74px] pt-4 sm:pt-6 md:pt-[32px] pb-6 sm:pb-8 md:pb-[37.8px]">
        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4 flex justify-end">
          <button
            onClick={toggleSidebar}
            className="flex items-center gap-3 px-6 py-3 bg-[#1c1a1a] text-white rounded-lg hover:bg-[#2a2828] transition-colors font-medium"
          >
            <span className="text-base font-bold">Filter</span>
            <SlidersHorizontal className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Desktop Filters */}
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
        </div>
      </div>
      {/* News Articles Grid */}
      <div className="w-full bg-[#EDF5FF] rounded-t-[36px]">
        <div className="px-6 md:px-[74px] pt-[43px] pb-[32px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {filteredNews.map((article, index) => (
              <div
                key={article.id}
                className="overflow-hidden gap-9 lg:gap-11 "
              >
                {/* Article Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100">
                  {/* {article.amount && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-xs uppercase tracking-wide mb-2 text-blue-600">
                          {article.subtitle}
                        </div>
                        <h3 className="text-2xl font-bold text-blue-800 mb-2">
                          {article.amount}
                        </h3>
                        <div className="flex justify-center space-x-1 mb-2">
                          {[...Array(12)].map((_, i) => (
                            <div key={i} className="w-1.5 h-4 bg-blue-300 rounded-t-full"></div>
                          ))}
                        </div>
                        <div className="flex justify-center space-x-1">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="w-1 h-2 bg-blue-300 rounded-t-full"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )} */}

                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Image src={article.image} alt="" />
                  </div>
                </div>

                {/* Article Content */}
                <div className="pt-6 lg:pt-5 ">
                  <span className="text-xs text-gray-500 kanit-light">
                    {article.date}
                  </span>
                  <h3 className="kanit-semibold  text-gray-900 mt-[14px] lg:mt-3">
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          {/* {visibleItems < filteredNews.length && ( */}
          <div className="text-center">
            <button
              onClick={handleSeeMore}
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              See more
            </button>
          </div>
          {/* )} */}

          {/* Join Community Section */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
