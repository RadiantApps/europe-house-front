"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "@/components/footer";
import CampaignLogo from "../../assets/campaigns/campaign.svg";
import Img1 from "../../assets/campaigns/2.png";
import Img2 from "../../assets/campaigns/3.png";

import Image from "next/image";

export default function Campaigns() {
  const dispatch = useDispatch();
  // const { campaignsData, totalCampaigns, campaignsLoading, campaignsError } =
  //   useSelector((state) => state.campaigns);

  const [offset, setOffset] = useState(0);
  const limit = 5;

  // useEffect(() => {
  //   dispatch(getCampaigns({ limit, offset }));
  // }, [offset]);

  const handleSeeMore = () => {
    setOffset((prev) => prev + limit);
  };

  // if (campaignsLoading) {
  //   return (
  //     <div className="min-h-screen bg-white flex items-center justify-center">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
  //         <p className="mt-4 text-gray-600">Loading campaigns...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (campaignsError) {
  //   return (
  //     <div className="min-h-screen bg-white flex items-center justify-center">
  //       <div className="text-center">
  //         <p className="text-red-600">
  //           Error loading campaigns: {campaignsError}
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

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
            <h1
              className="kanit-semibold text-[#1C1A1A] leading-[1.1]"
              style={{
                fontSize: "clamp(28px, 4vw, 64px)", // pak ma i butë
              }}
            >
              CAMPAIGNS
            </h1>
          </div>

          {/* Right side: Description */}
          <div className="lg:max-w-xl min-w-0">
            <p className="kanit-light  text-[16px] sm:text-[18px]  leading-relaxed text-[#555353] text-left lg:text-justify">
              Have a look at our campaigns on different topics that link Kosovo
              and the EU.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#EDF5FF] rounded-t-[36px]">
        <div className="px-6 md:px-[74px] pt-[43px] pb-[32px] space-y-8">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row  overflow-hidden">
            {/* Image */}
            <div className="w-full md:w-80 md:h-auto relative bg-gradient-to-br from-purple-600 to-blue-700 flex items-center justify-center text-white flex-shrink-0">
              <div className="text-center p-4">
                <div className="text-xs uppercase tracking-wide mb-2">
                  Europe Day 2024
                </div>
                <h1 className="text-2xl md:text-3xl kanit-bold  mb-3">
                  EXPERIENCE
                  <br />
                  EUROPE
                </h1>
                <div className="flex justify-center space-x-2 mb-3">
                  <div className="flex space-x-1">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-5 bg-black bg-opacity-40 rounded-t-full"
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center space-x-1">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-3 bg-black bg-opacity-40 rounded-t-full"
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col md:flex-row flex-1 md:px-6 py-2 md:py-0 gap-4 md:gap-8 min-w-0">
              <h2 className="text-xl kanit-bold  text-blue-600 md:w-1/3 flex-shrink-0">
                CELEBRATING EUROPE DAY 2024
              </h2>
              <div className="flex-1 flex flex-col min-w-0 break-words">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed break-words kanit-light">
                  The EU in Kosovo organised a series of activities in Pristina,
                  Mitrovica North, and Prizren to mark Europe Day under the
                  motto "Experience Europe".
                </p>
                <button className="kanit-medium bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors self-start">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row  overflow-hidden">
            {/* Image */}
            <div className="w-full md:w-80 md:h-auto relative bg-gradient-to-br from-purple-600 to-blue-700 flex items-center justify-center text-white flex-shrink-0">
              <Image src={Img1} alt="" />
            </div>

            {/* Text */}
            <div className="flex flex-col md:flex-row flex-1 md:px-6 py-2 md:py-0 gap-4 md:gap-8">
              <h2 className="text-xl kanit-bold  text-blue-600 md:w-1/3 flex-shrink-0">
                CELEBRATING EUROPE DAY 2024
              </h2>
              <div className="flex-1 flex flex-col ">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed kanit-light">
                  The EU in Kosovo organised a series of activities in Pristina,
                  Mitrovica North, and Prizren to mark Europe Day under the
                  motto "Experience Europe".
                </p>
                <button className=" kanit-medium bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors self-start">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col md:flex-row  overflow-hidden">
            {/* Image */}
            <div className="w-full md:w-80 md:h-auto relative bg-gradient-to-br from-purple-600 to-blue-700 flex items-center justify-center text-white flex-shrink-0">
              <Image src={Img2} alt="" />
            </div>

            {/* Text */}
            <div className="flex flex-col md:flex-row flex-1 md:px-6 py-2 md:py-0 gap-4 md:gap-8">
              <h2 className="text-xl kanit-bold  text-blue-600 md:w-1/3 flex-shrink-0">
                CELEBRATING EUROPE DAY 2024
              </h2>
              <div className="flex-1 flex flex-col ">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed kanit-light">
                  The EU in Kosovo organised a series of activities in Pristina,
                  Mitrovica North, and Prizren to mark Europe Day under the
                  motto "Experience Europe".
                </p>
                <button className="kanit-medium bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors self-start">
                  Learn more
                </button>
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
