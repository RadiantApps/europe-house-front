import React from 'react'

import Img5 from "../../assets/main-page/5.png";
import Img6 from "../../assets/main-page/6.png";
import Img7 from "../../assets/main-page/7.png";
import Img8 from "../../assets/main-page/8.png";
import Img9 from "../../assets/main-page/9.png";
import Image from 'next/image';

const News = () => {
  return (
    <div className="px-6 lg:px-[74px] bg-[#EDF5FF] py-8 lg:py-[64px]">
      <div className="flex justify-between items-center mb-11">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
          Latest News
        </h2>
        <button className="text-blue-600 bg-white flex items-center gap-2 text-sm font-medium border border-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition-colors">
          See all News
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

      {/* Mobile Layout */}
      <div className="flex flex-col lg:hidden">
        <div className="mb-2">
          <div className="relative h-80 rounded-lg overflow-hidden mb-4">
            <Image src={Img5} alt="Jazz Performance" fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-0">
          <div className="">
            <p className="text-xs text-gray-500 mb-2 uppercase">JULY 11, 2024</p>
            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-6">
              This is what the first night of Mitrovica International Jazz
              Days looked like!
            </h3>
          </div>
          <hr className="border-gray-200 mb-4" />

          <div className="py-4 border-b border-gray-200">
            <p className="text-xs text-gray-500 mb-2 uppercase">AUGUST 5, 2024</p>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">
              Everyone has the right to be vaccinated!
            </h3>
          </div>

          <div className="py-4 border-b border-gray-200">
            <p className="text-xs text-gray-500 mb-2 uppercase">JULY 11, 2024</p>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">
              Kosovo Demining Action – Ensuring safety and opening...
            </h3>
          </div>

          <div className="py-4 border-b border-gray-200">
            <p className="text-xs text-gray-500 mb-2 uppercase">SEPTEMBER 19, 2024</p>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">
              Peer-led Quality Assurance Model for Improved Education
            </h3>
          </div>

          <div className="py-4 border-b border-gray-200">
            <p className="text-xs text-gray-500 mb-2 uppercase">OCTOBER 15, 2024</p>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">
              "Lequ Zemër"
            </h3>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full flex items-center gap-3 transition-colors">
            See all News
            <svg
              className="w-5 h-5"
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

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {/* Left Side - Main Featured Article */}
        <div className="col-span-1 flex flex-col">
          <div className="relative rounded-lg min-h-[502px] mb-4 overflow-hidden">
            <Image
              src={Img5}
              alt="Jazz Performance"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-2">JULY 11, 2024</p>
            <h3 className="text-xl font-bold text-gray-900 leading-tight">
              This is what the first night of Mitrovica International Jazz
              Days looked like!
            </h3>
          </div>
        </div>

        {/* Right Side - 4 Articles in 2x2 */}
        <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
          {[Img6, Img7, Img8, Img9].map((img, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="relative h-[196px] mb-3 rounded-lg overflow-hidden">
                <Image src={img} alt={`News ${idx + 1}`} fill className="object-cover" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">DATE HERE</p>
                <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                  TITLE HERE
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default News
