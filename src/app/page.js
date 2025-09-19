'use client'
import "./globals.css";

import { MapPin } from "lucide-react";
import Img from "../assets/events/test.svg";
import Image from "next/image";
import { useState } from "react";
import CampaignsView from "@/components/campgain-item";
import PublicationsShowcase from "@/components/publications";
import Img1 from "../assets/main-page/1.png"
import Img2 from "../assets/main-page/2.png"
import Img3 from "../assets/main-page/3.png"
import Img4 from "../assets/main-page/4.png"
import Img5 from "../assets/main-page/5.png"
import Img6 from "../assets/main-page/6.png"
import Img7 from "../assets/main-page/7.png"
import Img8 from "../assets/main-page/8.png"
import Img9 from "../assets/main-page/9.png"

export default function Home() {
  const [expandedCampaign, setExpandedCampaign] = useState(null);

  const data = [
    {
      category: "CAMPAIGNS",
      title: "Celebrating Europe Day 2025",
      date: "MAY 16, 2024",
      image: Img1,
    },
    {
      category: "BLOG",
      title: "“For Good Environment”",
      date: "MAY 16, 2024",
      image: Img2,
    },
    {
      category: "EVENTS",
      title: "Exhibition opening “Silence is not the answer”",
      date: "MAY 16, 2024",
      image: Img3,
    },
    {
      category: "PUBLICATIONS",
      title: "Funded by the EU as part of the “Innovation. Media. Minds”",
      date: "MAY 16, 2024",
      image: Img4,
    },
  ];

  return (
    <div className="bg-[#D9EBFF] py-6 px-[24px] lg:px-[74px]">
      <div className="flex  justify-between flex-col lg:flex-row">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
          Latest from EU House
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <MapPin size={16} className="text-blue-600" />
          <span>Pristina & North Mitrovica</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 lg:hidden">
        {data.map((item, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden shadow bg-white">
            <div className={`relative ${idx === 0 ? "h-72" : "h-52"}`}>
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                {item.category}
              </span>
              <h3 className="absolute bottom-5 left-2 font-semibold text-white">{item.title}</h3>
              <p className="absolute bottom-2 left-2 text-xs text-white">{item.date}</p>
            </div>
            
          </div>
        ))}
      </div>

      <div className="hidden lg:flex gap-4 mt-6">
        {data.map((item, idx) => (
         <div
         key={idx}
         className={`rounded-xl overflow-hidden shadow bg-white flex-shrink-0 ${
           idx === 0 ? "flex-[1.52]" : "flex-1"
         }`}
         style={{ height: "440px" }}
       >
         <div className="relative h-full">
           <Image
             src={item.image}
             alt={item.title}
             className="w-full h-full object-cover"
           />
           <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
             {item.category}
           </span>
           <h3 className="absolute bottom-5 left-2 font-semibold text-white">{item.title}</h3>
           <p className="absolute bottom-2 left-2 text-xs text-white">{item.date}</p>
         </div>
       </div>
        ))}
      </div>

      <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Latest News</h2>
            <button className="text-blue-600 hover:text-blue-800 flex items-center gap-2 text-sm font-medium border border-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition-colors">
              See all News
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col gap-4 lg:hidden">
            <div className="">
              <div className="relative h-64">
                <Image src={Img5} alt="s" />
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-2">JULY 11, 2024</p>
                <h3 className="font-semibold text-gray-900 mb-2">This is what the first night of Mitrovica International Jazz Days looked like!</h3>
              </div>
            </div>

            <div className="">
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-2">AUGUST 5, 2024</p>
                <h3 className="font-semibold text-gray-900 mb-2">Everyone has the right to be vaccinated!</h3>
              </div>
            </div>

            <div className="">
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-2">JULY 11, 2024</p>
                <h3 className="font-semibold text-gray-900 mb-2">Kosovo Demining Action – Ensuring safety and opening tourism development paths</h3>
              </div>
            </div>

            <div className="">
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-2">AUGUST 5, 2024</p>
                <h3 className="font-semibold text-gray-900 mb-2">Peer-led Quality Assurance Model for Improved Education</h3>
              </div>
            </div>

           
          </div>

          {/* Desktop Layout - Matching the exact design */}
        {/* Desktop Layout - Featured left, 4 right in 2x2 */}
{/* Desktop Layout - Featured left, 4 right in 2x2 */}
<div className="hidden lg:grid grid-cols-3 gap-4">
  {/* Left Side - Main Featured Article */}
  <div className="col-span-1 row-span-2 ">
    <div className="relative min-h-[500px]">
      {/* Image */}
      <Image
        src={Img5}
        alt="Jazz Performance"
        fill
        className="object-cover"
      />
    </div>
    {/* Text Under Image */}
    <div className="py-4">
      <p className="text-xs text-gray-500 mb-2">JULY 11, 2024</p>
      <h3 className="text-xl font-bold text-gray-900">
        This is what the first night of Mitrovica International Jazz Days looked like!
      </h3>
    </div>
  </div>

  {/* Right Side - 4 Articles in 2x2 */}
  <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
    {/* Top Left */}
    <div className="">
      <div className="relative h-52">
        <Image
          src={Img6}
          alt="EU Conference"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-1">
        <p className="text-xs text-gray-500 mb-1">AUGUST 5, 2024</p>
        <h3 className="font-semibold text-gray-900 text-sm">
          Everyone has the right to be vaccinated!
        </h3>
      </div>
    </div>

    {/* Top Right */}
    <div className="">
      <div className="relative h-52">
        <Image
          src={Img7}
          alt="EU Award Ceremony"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-1">
        <p className="text-xs text-gray-500 mb-1">AUGUST 5, 2024</p>
        <h3 className="font-semibold text-gray-900 text-sm">
          Peer-led Quality Assurance Model for Improved Education
        </h3>
      </div>
    </div>

    {/* Bottom Left */}
    <div className="">
      <div className="relative h-52">
        <Image
          src={Img8}
          alt="Safety Initiative"
          fill
          className="object-cover"
        />
      </div>
      <div className="">
        <p className="text-xs text-gray-500 mb-1">JULY 11, 2024</p>
        <h3 className="font-semibold text-gray-900 text-sm">
          Kosovo Demining Action – Ensuring safety and opening tourism development paths
        </h3>
      </div>
    </div>

    {/* Bottom Right */}
    <div className="">
      <div className="relative h-52">
        <Image
          src={Img9}
          alt="Lequ Zemër"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <p className="text-xs text-gray-500 mb-1">JULY 3, 2024</p>
        <h3 className="font-semibold text-gray-900 text-sm">"Lequ Zemër"</h3>
      </div>
    </div>
  </div>
</div>


        </div>
        <div>
          <CampaignsView />
        </div>
        <div>
        <PublicationsShowcase />
        </div>
        
        
      </div>
  );
}
