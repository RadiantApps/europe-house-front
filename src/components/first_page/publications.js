"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import Img1 from "../../assets/publications/2.png";
import Image from "next/image";

export default function PublicationsShowcase() {
  const languages = ["ENG", "ALB", "SRB"];
  const items = [
    {
      id: 1,
      image: Img1,
      title: "SCHENGEN:",
      subtitle: "YOUR GATEWAY TO FREE MOVEMENT IN EUROPE",
      date: "Feb 2024",
      backgroundType: "schengen",
    },
    {
      id: 2,
      image: Img1,
      title: "EU FUNDING:",
      subtitle: "Opportunities for local development",
      date: "Mar 2024",
      backgroundType: "default",
    },
    {
      id: 3,
      image: Img1,
      title: "TRADE POLICY:",
      subtitle: "Strengthening Kosovo's economic ties",
      date: "Jan 2024",
      backgroundType: "default",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = items[currentIndex];

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  return (
    <div className="px-6 lg:px-[74px] py-8 lg:py-[64px] bg-[#EDF5FF]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start md:mt-[66px]">
        {/* Left Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Explore Our Publications
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Explore our reports, research papers, and policy briefs on
              European integration, governance, and local development. Stay
              informed with expert insights from Europe House Kosovo and our
              partners on Europe's evolving impact on Kosovo.
            </p>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-200 font-medium">
            See all Publications
          </button>
        </div>

        {/* Publications Card */}
        <div className="w-full rounded-xl overflow-hidden shadow-md">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className={`bg-indigo-600 text-white`}>
              {/* Mobile Header */}
              <div className="p-6 pb-4">
                <h2 className="text-xl font-bold uppercase leading-tight tracking-wide mb-2">
                  {currentItem.title}
                </h2>

                <p className="text-sm font-light mb-9">{currentItem.date}</p>

                {/* Mobile Download and Languages */}
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white text-sm font-light flex items-center gap-2">
                    <Download size={16} /> Download PDF
                  </p>
                  <div className="flex gap-2">
                    {languages.map((lang) => (
                      <div
                        key={lang}
                        className="px-3 py-1 rounded-full bg-white/90 flex-shrink-0"
                      >
                        <p className="text-sm font-medium uppercase text-indigo-600">
                          {lang}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Image */}
              <div className="px-2 pb-7">
                <Image
                  src={Img1}
                  alt={currentItem.title}
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
            {/* Left Side - Split into two sections */}
            <div className="flex flex-col flex-1">
              {/* Top Left - Main Content Area */}
              <div
                className={`text-white p-6 relative flex-1 min-h-[243px] bg-indigo-600 border-b border-gray-300`}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <h2 className="text-xl xl:text-[26px] font-bold uppercase leading-tight tracking-wide mb-4">
                    {currentItem.title}
                    <br />
                    <span className="font-medium">{currentItem.subtitle}</span>
                  </h2>
                  <p className="text-sm font-light">{currentItem.date}</p>
                </div>
              </div>

              {/* Bottom Left - Download & Languages Section */}
              <div
                className={`text-white p-6 h-12 flex items-center justify-between bg-indigo-600 border-r border-gray-300`}
              >
                <p className="text-white text-base font-light whitespace-nowrap flex items-center gap-2">
                  Download PDF
                </p>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <div
                      key={lang}
                      className="px-3 xl:px-4 py-1 rounded-full bg-white/90 flex-shrink-0"
                    >
                      <p className="text-sm xl:text-base font-medium uppercase text-indigo-600">
                        {lang}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Image and Navigation */}
            <div className="flex flex-col flex-shrink-0 lg:w-[340px]">
              {/* Top Right - Image/Content Area */}
              <div className="flex-1">
                <Image
                  src={Img1}
                  alt={currentItem.title}
                  className="w-full h-[268px] object-cover"
                />
              </div>

              {/* Bottom Right - Navigation */}
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
