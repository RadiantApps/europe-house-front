import React from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import Img1 from "../../assets/main-page/1.png";
import Img2 from "../../assets/main-page/2.png";
import Img3 from "../../assets/main-page/3.png";
import Img4 from "../../assets/main-page/4.png";
import Pin from "../../assets/main-page/pin.svg";

import Image from "next/image";

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

const LatestEU = () => {
  return (
    <div className="px-6 lg:px-[74px] py-8 lg:py-[64px] bg-[#D2E6FF]">
      <div className="flex  justify-between flex-col lg:flex-row">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
          Latest from EU House
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-700">
        <Image src={Pin} alt="Pin" />
        <span>Pristina & North Mitrovica</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:hidden">
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
              <h3 className="absolute bottom-5 left-2 font-semibold text-white">
                {item.title}
              </h3>
              <p className="absolute bottom-2 left-2 text-xs text-white">
                {item.date}
              </p>
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
 {/* Category badge */}
 <div className="absolute top-4 left-4">
                <span className="bg-white text-[#4433EE] text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                  {item.category}
                </span>
              </div>
              <div 
      className="absolute top-4 right-4 inline-flex items-center justify-center"
      style={{
        width: '38px',
        height: '38px',
        backgroundColor: '#F7F0F0',
        borderRadius: '38px',
        marginLeft: '426px',
        transform: 'rotate(0deg)',
        opacity: 1
      }}
    >
      <ArrowUpRight 
        size={20} 
        color="blue"
        strokeWidth={2}
      />
    </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-bold mb-1 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 font-medium">
                  {item.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestEU;
