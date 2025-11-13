"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "@/components/footer";
import CampaignLogo from "../../assets/campaigns/campaign.svg";

import Image from "next/image";
import { translations } from "@/data/campaings";
import { useGetCampaingsApiQuery } from "@/store/services/campaingsApi";
import { imageUrl } from "@/config";
import { useRouter } from "next/navigation";

export default function Campaigns() {
  const router = useRouter();
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );

  const { data } = useGetCampaingsApiQuery();
  const [offset, setOffset] = useState(0);

  const limit = 5;

  const handleSeeMore = () => {
    setOffset((prev) => prev + limit);
  };

  const campaigns = Array.isArray(data) ? data : [];

  return (
    <div className="min-h-screen bg-white">
      {/* Video Banner */}
      <div className="w-full h-8 relative overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/slider-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Header */}
      <div className="px-6 md:px-[74px] pt-8 md:pt-[43px] pb-4 md:pb-[32px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          {/* Left side: Icon + Title */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Image
              src={CampaignLogo}
              alt="Campaigns Icon"
              width={64}
              height={64}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
            <h1 className="text-[#1C1A1A] leading-[1.1] text-[52px] kanit-semibold">
              {translations[selectedLanguage].title}
            </h1>
          </div>

          {/* Right side: Description */}
          <div className="lg:max-w-xl min-w-0">
            <p className="kanit-light w-[70%] text-[16px] sm:text-[18px] leading-relaxed text-[#555353] text-left lg:text-justify">
              {translations[selectedLanguage].description}
            </p>
          </div>
        </div>
      </div>

      {/* Campaigns List */}
      <div className="w-full bg-[#EDF5FF] rounded-t-[36px]">
        <div className="px-6 md:px-[74px] pt-[43px] pb-[32px] space-y-8">
          {campaigns.slice(0, offset + limit).map((item) => {
            const camp = item?.translations[selectedLanguage];
            return (
              <div key={item.id}>
                <div className="flex flex-col md:flex-row w-full justify-between gap-6">
                  {/* Image Section */}
                  <div className="relative w-full md:w-[40%] h-[304px]">
                    <Image
                      src={`${imageUrl}/${camp?.photo}`}
                      alt={camp?.title || "Campaign photo"}
                      fill
                      className="object-cover rounded-[12px]"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="md:flex w-full md:w-[55%]">
                    <h2 className="kanit-medium text-[#4433EE] text-[24px] leading-[28px] md:w-[48%]">
                      {camp?.title}
                    </h2>
                    <div className="md:w-[50%]">
                      <p className="text-[16px] kanit-light leading-[24px] text-[#4433EE]">
                        {camp?.content}
                      </p>
                      <button
                        onClick={() => router.push(`/campaigns/${item?.id}`)}
                        className="bg-[#4433EE] h-[46px] w-[190px] rounded-[56px] mt-[32px] kanit-medium text-[#F7F0F0] text-[16px]"
                      >
                        {translations[selectedLanguage].button}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full h-px bg-gray-300 my-5" />
              </div>
            );
          })}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleSeeMore}
              className="bg-[#4433EE] text-[#F7F0F0] w-[190px] h-[50px] rounded-[56px] kanit-medium text-[16px]  "
            >
              {translations[selectedLanguage].seeMore}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
