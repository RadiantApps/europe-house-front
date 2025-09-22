"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlidersHorizontal } from "lucide-react";
import NewsIcon from "../../assets/news/news.svg";
import { filterOptions, translations } from "@/data/news";
import Image from "next/image";
import Footer from "@/components/footer";
import { getAllBlogCategory } from "@/store/features/blogCategorySlice";
import { useGetBlogsQuery } from "@/store/services/blogApi";
import { imageUrl } from "@/config";
import { formatDateInLanguages } from "@/utils/utils";

export default function NewsBlog() {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const categoryData =
    useSelector((state) => state.blogCategory.blogCategoryData) || [];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const [filters, setFilters] = useState({
    year: "",
    month: "",
    category: "",
  });

  const { data } = useGetBlogsQuery({
    year: filters.year,
    month: filters.month,
    category: filters.category,
  });

  // frontend "See more"
  const [visibleCount, setVisibleCount] = useState(8); // how many to show initially
  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 8); // load 8 more
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    setVisibleCount(8); // reset on filter change
  };

  useEffect(() => {
    dispatch(getAllBlogCategory());
  }, [dispatch]);

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
          <div className="flex flex-col w-[55%]">
            <div className="flex items-end space-x-[15px]">
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
                {translations[selectedLanguage].title}
              </h1>
            </div>
            <div className="w-full hidden lg:flex border-t border-[#C6C6C6]"></div>
          </div>

          <div className="w-[35%]">
            <p className="kanit-light text-[18px] leading-[25px] text-[#555353]">
              {translations[selectedLanguage].description}
            </p>
            <button className=" kanit-medium  mt-6 lg:mt-8 w-[190px] h-[50px] flex items-center justify-center gap-[10px] bg-indigo-600 text-white font-medium rounded-[56px]">
              {translations[selectedLanguage].subscribe}
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

          {/* Category Filter */}
          <div className="relative flex-shrink-0">
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange("category", e.target.value)}
              className="kanit-regular appearance-none bg-white text-gray-700 px-0 py-2 pr-6 border-b border-gray-400 focus:outline-none focus:border-gray-600 min-w-[80px] w-full md:w-auto text-sm font-medium cursor-pointer"
            >
              <option value="">Category</option>
              {categoryData?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item?.translations[selectedLanguage] || "No Name"}
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

      {/* News Articles Grid */}
      <div className="w-full bg-[#EDF5FF] rounded-t-[36px]">
        <div className="px-6 md:px-[74px] pt-[43px] pb-[32px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {data?.slice(0, visibleCount).map((item) => {
              const article = item?.translations[selectedLanguage];
              const photo = JSON.parse(article.photo || "{}");
              const formatData = formatDateInLanguages(item.created_at);

              return (
                <div
                  key={item.blog_id}
                  className="overflow-hidden gap-9 lg:gap-11"
                >
                  <div className="relative">
                    <div className="w-full h-[230px]">
                      <Image
                        src={`${imageUrl}/${photo?.path}`}
                        alt={article?.title}
                        fill
                        className="object-cover rounded-[12px]"
                      />
                    </div>
                  </div>
                  <div className="mt-[20px]">
                    <span className="text-[#8E8D8D] kanit-light text-[14px]">
                      {formatData[selectedLanguage]}
                    </span>
                    <h3 className="kanit-semibold text-[#1C1A1A] text-[20px] mt-[12px]">
                      {article.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* See more button */}
          <div className="text-center">
            <button
              onClick={handleSeeMore}
              className="bg-[#4433EE] text-white w-[190px] h-[50px]  rounded-[56px] text-[#F7F0F0] kanit-medium text-[16px] "
            >
              {translations[selectedLanguage].button}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
