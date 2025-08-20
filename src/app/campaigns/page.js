"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampaigns } from "../../store/features/campaignsSlice";
import Footer from "@/components/footer";

export default function Campaigns() {
  const dispatch = useDispatch();
  const { campaignsData, totalCampaigns, campaignsLoading, campaignsError } = useSelector(
    (state) => state.campaigns
  );

  const [offset, setOffset] = useState(0);
  const limit = 5;

  useEffect(() => {
    dispatch(getCampaigns({ limit, offset }));
  }, [offset]);

  console.log("campaignsData", campaignsData);

  const handleSeeMore = () => {
    setOffset((prev) => prev + limit);
  };

  if (campaignsLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading campaigns...</p>
        </div>
      </div>
    );
  }

  if (campaignsError) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Error loading campaigns: {campaignsError}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
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
      
      <div className="px-[74px] pt-[43px] pb-[32px]">
      <div className="space-y-8">
        
        <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="w-80 h-48 relative bg-gradient-to-br from-purple-600 to-blue-700 flex items-center justify-center text-white flex-shrink-0">
            <div className="text-center">
              <div className="text-xs uppercase tracking-wide mb-2">Europe Day 2024</div>
              <h1 className="text-2xl font-bold mb-3">EXPERIENCE<br />EUROPE</h1>
              <div className="flex justify-center space-x-2 mb-3">
                <div className="flex space-x-1">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-2 h-5 bg-black bg-opacity-40 rounded-t-full"></div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center space-x-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1.5 h-3 bg-black bg-opacity-40 rounded-t-full"></div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 p-6">
            <div className="flex gap-8">
              <h2 className="text-xl font-bold text-blue-600 w-1/3 flex-shrink-0">CELEBRATING EUROPE DAY 2024</h2>
              <div className="flex-1">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  The EU in Kosovo organised a series of activities in Pristina, Mitrovica North, and Prizren to mark Europe Day under the motto "Experience Europe".
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="w-80 h-48 relative bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center flex-shrink-0">
            <div className="relative">
              <div className="flex space-x-2 mb-4 justify-center">
                <div className="w-8 h-12 bg-blue-600 rounded-sm transform -rotate-12"></div>
                <div className="w-8 h-12 bg-blue-600 rounded-sm transform rotate-6"></div>
                <div className="w-8 h-12 bg-blue-600 rounded-sm transform -rotate-3"></div>
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-bold text-center">
                EXPLORE<br />EUROPE!
                <div className="text-xs mt-1">Visa liberalisation</div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-yellow-400 rounded"></div>
            </div>
          </div>
          <div className="flex-1 p-6">
            <div className="flex gap-8">
              <h2 className="text-xl font-bold text-blue-600 w-1/3 flex-shrink-0">EXPLORE EUROPE – VISA LIBERALISATION CAMPAIGN</h2>
              <div className="flex-1">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  The long-awaited visa liberalisation for Kosovo is finally becoming a reality. As of 1 January 2024, the holders of Kosovo passports will be able to travel to Europe for short-term stays of 90 days without having to apply for a visa.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="w-80 h-48 relative bg-gradient-to-br from-green-200 to-blue-200 flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-green-300 to-blue-300 flex items-end justify-center pb-8">
              <div className="flex space-x-2 items-end">
                <div className="w-4 h-10 bg-black bg-opacity-50 rounded-t-full transform -rotate-12"></div>
                <div className="w-4 h-12 bg-black bg-opacity-50 rounded-t-full transform rotate-6"></div>
                <div className="w-4 h-11 bg-black bg-opacity-50 rounded-t-full transform -rotate-6"></div>
                <div className="w-4 h-13 bg-black bg-opacity-50 rounded-t-full transform rotate-12"></div>
                <div className="w-4 h-10 bg-black bg-opacity-50 rounded-t-full transform -rotate-3"></div>
              </div>
            </div>
          </div>
          <div className="flex-1 p-6">
            <div className="flex gap-8">
              <h2 className="text-xl font-bold text-blue-600 w-1/3 flex-shrink-0">FOR GOOD ENERGY</h2>
              <div className="flex-1">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Starting September 2022 an awareness campaign was organised to promote and raise awareness about Kosovo's potential for renewable and sustainable energy.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">
                  Learn more
                </button>
              </div>
            </div>
          </div>
          </div>

        </div>

        
      </div>

      {/* <div className="w-full bg-[#EDF5FF] rounded-t-[36px]">
  <div className="flex flex-wrap px-[74px] pt-[66px] gap-[28px]">
    {campaignsData && campaignsData.length > 0 ? (
      campaignsData.map((campaign, idx) => (
        <div
          key={campaign.id || idx}
          className="flex flex-col gap-[34px] pt-[34px] rounded-tl-xl rounded-tr-xl bg-[#edf5ff] w-full relative"
        >
          <div className="h-[304.68px] relative flex">
            <img
              src={campaign.image || "/placeholder.png"}
              alt={campaign.title || "Campaign Image"}
              className="w-[528.62px] h-[304.68px] rounded-xl object-cover absolute left-0 top-[33.5px]"
            />
            <div
              className="flex flex-col justify-start items-start w-[365.93px] absolute left-[927.07px] top-[44.96px] gap-8"
            >
              <p className="w-[365.93px] text-base font-light text-left text-[#43e]">
                {campaign.description || "No description available."}
              </p>
              <button
                className="flex justify-center items-center w-[190px] gap-2.5 px-5 py-[18px] rounded-[56px] bg-[#43e] text-[#f7f0f0] text-base font-medium"
              >
                Learn more
              </button>
            </div>
            <p
              className="w-[263.29px] absolute left-[616.93px] top-[44.96px] text-2xl font-medium uppercase text-[#43e]"
            >
              {campaign.title || "Campaign Title"}
            </p>
          </div>
          <svg
            width={1294}
            height={2}
            viewBox="0 0 1294 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="self-stretch"
          >
            <line
              x1="0.441406"
              y1="1"
              x2="1293.44"
              y2="1"
              stroke="#B7A0F8"
            />
          </svg>
        </div>
      ))
    ) : (
      <p className="text-center py-16 text-gray-600">
        No campaigns available at the moment.
      </p>
    )}
  </div>
</div> */}



      <Footer />
    </div>
  );
}
