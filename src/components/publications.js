'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

export default function PublicationsShowcase() {
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
      image: "/assets/main-page/4.png",
      title: "EU Funding:",
      subtitle: "Opportunities for local development",
      date: "Mar 2024",
      languages: ["ENG", "ALB"],
    },
    {
      id: 3,
      image: "/assets/main-page/2.png",
      title: "Trade Policy:",
      subtitle: "Strengthening Kosovo's economic ties",
      date: "Jan 2024",
      languages: ["ENG", "SRB"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = items[currentIndex];

  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  return (
    <div className="mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start md:mt-[66px]">
        
        {/* Left Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Explore Our Publications
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Explore our reports, research papers, and policy 
              briefs on European integration, governance, and 
              local development. Stay informed with expert 
              insights from Europe House Kosovo and our 
              partners on Europe's evolving impact on Kosovo.
            </p>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-200 font-medium">
            See all Publications
          </button>
        </div>

        {/* Publications Card */}
        <div className="w-full rounded-t-[36px]">
  <div className="">
    <div className="w-full rounded-xl overflow-hidden shadow-md lg:flex bg-[#dbdde0]">

      {/* Desktop Left Info */}
      <div className="hidden lg:flex flex-col justify-between flex-1 bg-indigo-600 text-white p-6">
        <div>
          <h2 className="text-xl xl:text-[26px] font-medium uppercase leading-tight">
            {currentItem.title}
            <br />
            <span className="normal-case">{currentItem.subtitle}</span>
          </h2>
          <p className="text-sm mt-3">{currentItem.date}</p>
        </div>

        {/* Download & Languages */}
        <div className="flex flex-row justify-between items-center gap-3 mt-12">
          <p className="text-white text-base font-light whitespace-nowrap flex items-center gap-2">
            <Download size={16} /> Download PDF
          </p>
          <div className="flex gap-2 flex-wrap justify-end">
            {currentItem.languages.map((lang) => (
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

      {/* Image & Slider */}
      <div className="flex flex-col justify-between flex-shrink-0 lg:w-[340px]">
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="w-full h-[200px] sm:h-[250px] lg:h-[320px] object-cover"
        />
        <div className="hidden lg:flex justify-between items-center bg-[#4343ee] px-6 h-12">
          
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-10 h-10 bg-white text-[#4343ee] rounded-full hover:bg-gray-100"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-10 h-10 bg-white text-[#4343ee] rounded-full hover:bg-gray-100"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
