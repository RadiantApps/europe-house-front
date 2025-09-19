import React from 'react';
import { Play, Share2, Copy, Facebook, Twitter } from 'lucide-react';
import Img from "../../../assets/news/9.png"
import Image from 'next/image';
export default function EuropeDayComponent() {
  return (
    <div className=" px-[74px] bg-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <p className="text-sm text-gray-600 mb-2">EU Delegation to the UN</p>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
          Celebrating Europe Day 2024
        </h1>
      </div>

      {/* Main Banner */}
      <div className="bg-blue-600 rounded-lg p-8 lg:p-16 text-center mb-8 lg:mx-[-1.5rem] lg:rounded-none">
        <div className="text-white mb-4">
          <p className="text-lg lg:text-xl font-medium mb-4">9-12 MAY 2024</p>
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            EXPERIENCE
          </h2>
          <div className="flex items-center justify-center gap-2 text-4xl lg:text-6xl font-bold">
            <span className="text-green-400">🍀</span>
            <span>EUROPE</span>
            <span className="text-orange-400">✨</span>
          </div>
        </div>
      </div>

      {/* Desktop Content (lg and up) */}
      <div className="max-w-4xl mx-auto hidden lg:block">
        {/* Social Share Icons */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <Facebook className="w-5 h-5 text-blue-600" />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <Twitter className="w-5 h-5 text-blue-400" />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Main Content */}
        <div className="prose max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            The EU in Kosovo organized a series of activities in Pristina, Mitrovica North, and Prizren 
            to mark Europe Day under the motto "Experience Europe". This motto continues the 
            tradition of the European Forum to celebrate EU celebration, which stands as one of the 
            brightest moments in EU-Kosovo relations in the past year.
          </p>
        </div>

        {/* Video Section */}
        {/* <div className="bg-blue-600 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 fill-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">EXPERIENCE</h3>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">🍀</span>
                  <span className="text-xl font-bold">EUROPE</span>
                  <span className="text-orange-400">✨</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Facebook Watch</p>
            </div>
          </div>
        </div> */}

        <div className="prose max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            To mark Europe Day, the EU in Kosovo also organized two art exhibitions at its Europe 
            Houses in Pristina and Mitrovica North. These exhibitions showcased 50 themed art works 
            created by students from the 12 schools visited by representatives from the EU in 
            Kosovo, EULEX, and EU Member States over the past three weeks.
          </p>
        </div>

        {/* School Activities Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            SCHOOL OUTREACH ACTIVITIES TO MARK EUROPE DAY
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            As the aim of the representatives was to foster and promote European values, these were 
            the key of their representative events of engaging visits to 12 schools during the last period 
            to both in primary and secondary education in different municipalities and such different 
            audiences visits were characterized precisely variety of efforts.
          </p>
        </div>

        {/* School Event Image */}
        <div className="mb-8">
          <Image 
            src={Img}
            alt="School children participating in Europe Day activities"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Starting from Sveçani region, Pejdred, the EU family representatives in Kosovo visit 
            typical Primary School, Ferizaj, Kamenica, Gjilan, Dragashnica, Mitrovica South, Deçan's 
            high school, Pristina, Suhareka, Klina, and also Mitrovica North Primary School, with the 
            aim to promote European values and European values that are the foundations to 
            connect directly with this family of people who have children Europe most promising future 
            and the role in the region.
          </p>
        </div>
      </div>

      {/* Mobile Content (below lg) */}
      <div className="block lg:hidden">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600 mb-4">Published 9 May 2024</p>
          
          {/* Mobile Social Share */}
          <div className="flex justify-center gap-3 mb-6">
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              <Copy className="w-4 h-4" />
              <span className="text-sm">Copy link</span>
            </button>
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              <Facebook className="w-4 h-4 text-blue-600" />
            </button>
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              <Twitter className="w-4 h-4 text-blue-400" />
            </button>
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              <Share2 className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="prose prose-sm max-w-none mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            The EU in Kosovo organized a series of activities in Pristina, Mitrovica North, and 
            Prizren to mark Europe Day under the motto "Experience Europe". This motto continues the 
            tradition of European celebration, which stands as one of the brightest moments in EU-Kosovo relations in 
            the past year.
          </p>
        </div>

        {/* Mobile Video Section */}
        <div className="bg-blue-600 rounded-lg p-4 mb-6">
          <div className="text-white text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Play className="w-8 h-8 fill-white" />
            </div>
            <h3 className="text-lg font-bold mb-1">EXPERIENCE</h3>
            <div className="flex items-center justify-center gap-2 text-lg font-bold mb-2">
              <span className="text-green-400">🍀</span>
              <span>EUROPE</span>
              <span className="text-orange-400">✨</span>
            </div>
            <p className="text-xs opacity-90">Facebook Watch</p>
          </div>
        </div>

        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 leading-relaxed">
            To mark Europe Day, the EU in Kosovo also organized two art exhibitions at its Europe 
            Houses in Pristina and Mitrovica North. These exhibitions showcased 50 themed art works 
            created by students from the 12 schools visited by representatives from the EU in 
            Kosovo, EULEX, and EU Member States over the past three weeks.
          </p>
        </div>
      </div>
    </div>
  );
}