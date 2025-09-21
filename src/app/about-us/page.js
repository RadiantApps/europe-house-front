"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

import Map from "../../assets/about-us/map.svg";
import Footer from "@/components/footer";
import { content, servicesData } from "@/data/about";
import { useGetTeamQuery } from "@/store/services/aboutApi";
import { imageUrl } from "@/config";

// Social icon components (make sure these are React components, not JSX)
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "@/assets/about-us/socials";

const WhoWeAre = () => {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );

  const { data: teams } = useGetTeamQuery();

  // Map of social icon components
  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    linkedin: Linkedin,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* About Section */}
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

      {/* Services Section */}
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

      {/* Team Section */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-3xl lg:text-4xl kanit-bold text-center text-gray-900 mb-12">
            OUR TEAM
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ">
            {teams?.map((member) => {
              const position = member?.positions.find(
                (item) => item?.language_code === selectedLanguage
              );

              return (
                <div key={member?.id} className="mt-[76px]">
                  <div>
                    <img
                      src={`${imageUrl}/${member?.photo}`}
                      alt={member.name}
                      className="w-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-[20px] kanit-semibold mt-[29px]">
                      {member.name} {member.surname}
                    </h3>
                    <p className="kanit-light text-[16px] text-[#8E8D8D]">
                      {position?.position}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-[#4433EE] text-[16px] kanit-light"
                    >
                      {member.email}
                    </a>

                    {/* Social Links */}
                    <div className="flex space-x-3 mt-4">
                      {Object.entries(member?.socials || {}).map(
                        ([key, value]) => {
                          if (key === "id" || !value) return null;

                          const IconComponent = socialIcons[key];
                          if (!IconComponent) return null;

                          return (
                            <a
                              key={key}
                              href={value}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-700 hover:text-blue-500"
                            >
                              <IconComponent width={20} height={20} />
                            </a>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
