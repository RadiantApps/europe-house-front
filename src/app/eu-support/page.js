'use client'
import React from "react";
import { ArrowRight } from "lucide-react";
import Tower from "../../assets/eu-support/tower.svg";
import Img1 from "../../assets/eu-support/1.png";

import Img2 from "../../assets/eu-support/2.png";

import Img3 from "../../assets/eu-support/3.jpg";

import Image from "next/image";
import Footer from "@/components/footer";

export default function EuropeHouseMainContent() {
  return (
    <div className="min-h-screen bg-[#EDF5FF]">
      <div className="pt-[54px] px-6 md:px-[74px]">
        <Image
          src={Tower}
          alt="Tower"
          className="w-full h-[300px] md:h-[580px] rounded-xl object-cover"
        />
      </div>

      <div className="px-6 md:px-[74px]">
        <section className="py-8 md:py-[54px]">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6 md:space-y-[46px]">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                EU PROGRAMMES
              </h1>
              <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
                Choose the EU Programme that interests you,
                <br className="hidden md:block" />
                to find out more about funding opportunities.
              </p>
            </div>

            <div className="grid gap-4 md:gap-7 lg:grid-cols-1 xl:grid-cols-2">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-32 md:h-40 lg:h-56 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative">
                  <Image
                    src={Img3}
                    alt="Tower"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-3 md:py-4 font-semibold text-base md:text-lg flex items-center justify-between transition-colors duration-200 group-hover:scale-[1.02]">
                  Erasmus +
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-32 md:h-40 lg:h-56 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center relative">
                  <Image
                    src={Img2}
                    alt="Creative Europe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-3 md:py-4 font-semibold text-base md:text-lg flex items-center justify-between transition-colors duration-200 group-hover:scale-[1.02]">
                  Creative Europe
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-[54px]">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6 md:space-y-[46px]">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                EU SUPPORT
              </h2>
              <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
                Click the following link to find out more about
                <br className="hidden md:block" />
                EU-funded projects implemented in Kosovo.
              </p>
            </div>

            <div className="lg:max-w-md">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-32 md:h-40 lg:h-56 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center relative">
                  <Image
                    src={Img1}
                    alt="Kosovo Projects"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-3 md:py-4 font-semibold text-base md:text-lg flex items-center justify-between transition-colors duration-200 group-hover:scale-[1.02]">
                  Kosovo Projects
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}