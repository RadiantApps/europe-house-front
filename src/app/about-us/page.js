"use client";
import React from "react";

import Map from "../../assets/about-us/map.svg";
import Image from "next/image";
import Footer from "@/components/footer";
import { useSelector } from "react-redux";
import { content, servicesData } from "@/data/about";

const WhoWeAre = () => {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 md:px-[74px] xl:max-w-[1500px] xl:mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12">
          <div
            className="w-full md:max-w-2xl 2xl:max-w-3xl"
            key={selectedLanguage}
          >
            <h1 className="text-4xl lg:text-5xl kanit-bold text-gray-900 mb-6">
              {content[selectedLanguage]?.title}
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed kanit-light">
              {content[selectedLanguage]?.paragraphs[0]}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {content[selectedLanguage]?.paragraphs[1]}
            </p>
          </div>

          <div className="w-full md:flex md:justify-center">
            <div className="w-full h-[400px] md:h-[580px] md:max-w-md flex items-center justify-center">
              <Image src={Map} alt="map" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 lg:py-24 bg-[#EDF5FF]">
        <div className="w-full px-6 md:px-[74px] xl:max-w-[1500px] xl:mx-auto mt-[88px] mb-[88px]">
          <h2 className="text-3xl lg:text-[48px] kanit-bold text-center text-gray-900 ">
            BOTH CENTRES OFFER:
          </h2>
          <div className="flex flex-wrap gap-6 justify-center mt-[46px]">
            {servicesData[selectedLanguage].map((service, index) => (
              <div
                key={index}
                className="flex items-start bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 px-6 py-5 w-full sm:w-[48%] lg:w-[32%]"
              >
                <div
                  className={`${service.bgColor} w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0`}
                >
                  {service.icon}
                </div>
                <p className="text-gray-700 leading-relaxed mt-2 md:mt-0 line-clamp-2">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-3xl lg:text-4xl kanit-bold text-center text-gray-900 mb-12">
            OUR TEAM
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-w-4 aspect-h-5 bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {member.position}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:text-blue-800 text-sm transition-colors duration-200"
                  >
                    {member.email}
                  </a>

                  {/* Social Links */}
                  <div className="flex space-x-3 mt-4">
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                      >
                        <span className="text-xs kanit-bold">f</span>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-200"
                      >
                        <span className="text-xs kanit-bold">X</span>
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-200"
                      >
                        <span className="text-xs kanit-bold">in</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
