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
      <div className="px-6 md:px-[74px] ">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12 mt-[32px]">
          <div
            className="w-full md:max-w-2xl 2xl:max-w-3xl"
            key={selectedLanguage}
          >
            <h1 className="text-[46px] text-[#1C1A1A] kanit-semibold md:text-[64px]">
              {content[selectedLanguage]?.title}
            </h1>
            <p className="mt-[24px] md:mt-0 text-[16px] text-[#8E8D8D] md:text-[22px] kanit-light">
              {content[selectedLanguage]?.paragraphs[0]}
            </p>
            <p className="mt-[24px] md:mt-0 text-[16px] text-[#8E8D8D] md:text-[22px] kanit-light md:mt-5">
              {content[selectedLanguage]?.paragraphs[1]}
            </p>
          </div>

          <div className="w-full md:flex md:justify-center">
            <div className="w-full h-[400px] md:h-[580px] md:max-w-md flex items-center justify-center mb-[44px] md:mb-0">
              <Image src={Map} alt="map" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 lg:py-24 bg-[#EDF5FF]">
        <div className="w-full px-6 md:px-[74px]  mt-[45px] md:mt-[88px] md:mb-[88px] ">
          <h2 className="text-[32px] text-[#1C1A1A] kanit-semibold w-[70%] mx-auto text-center">
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
                <p className="text-[#555353] text-[16px] kanit-leight leading-[23px]">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="px-6 md:px-[74px] ">
          <h2 className="text-[32px] text-[#1C1A1A] kanit-semibold w-[70%] md:w-full md:text-[48px]  mx-auto text-center">
            {content[selectedLanguage]?.about}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ">
            {teams?.map((member) => {
              const position = member?.positions.find(
                (item) => item?.language_code === selectedLanguage
              );

              return (
                <div key={member?.id} className="mt-[26px]">
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
