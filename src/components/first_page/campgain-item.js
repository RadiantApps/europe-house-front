"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { translations } from "@/data/home";
import { useGetLatestCampaingsQuery } from "@/store/services/homeApi";
import { imageUrl } from "@/config";
import { CloseIcon, OpenIcon } from "@/assets/home";
import { useRouter } from "next/navigation";
const CampaignsView = () => {
  const router = useRouter();
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );

  const { data } = useGetLatestCampaingsQuery();
  const campaigns = data ? data[0] : null;
  const campaingsData = campaigns?.latest_3_campaigns;

  const [openId, setOpenId] = useState(
    campaingsData && campaingsData.length > 0 ? campaingsData[0].id : null
  );
  useEffect(() => {
    if (campaingsData && campaingsData.length > 0) {
      setOpenId(campaingsData[0].id);
    }
  }, [campaingsData]);
  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };
  const handleChangeRoute = () => {
    router.push("/campaigns");
  };
  return (
    <div className=" mx-auto bg-white px-6 lg:px-[74px] py-8 lg:py-[66px] ">
      <div className="lg:p-10 px-4 py-8 bg-[#EDF5FF] rounded-[12px]">
        <div className="mb-8">
          <h1 className="text-[#1C1A1A] kanit-medium text-[34px] leading-[42px]">
            {translations[selectedLanguage].title_campaings}
          </h1>
          <div className="w-full h-px bg-[#B7A0F8] mt-[26px]"></div>
        </div>
        <div className="md:hidden">
          <div>
            {campaingsData?.map((item) => {
              const camp = item?.translations[selectedLanguage];
              const isOpen = openId === item.id;

              return (
                <div key={item?.id}>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-start gap-4">
                      {/* Photo - collapsible */}
                      <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden`}
                        style={{
                          maxHeight: isOpen ? "169px" : "0px",
                          opacity: isOpen ? 1 : 0,
                          width: isOpen ? "70%" : "0%",
                        }}
                      >
                        <div className="relative h-[169px] w-full rounded overflow-hidden">
                          <Image
                            src={`${imageUrl}/${camp?.photo.replace(
                              /\\/g,
                              "/"
                            )}`}
                            alt={camp?.title}
                            fill
                            className="object-contain rounded"
                          />
                        </div>
                      </div>

                      {/* Title + Content inline when closed */}
                      {!isOpen && (
                        <div className="flex flex-col" style={{ width: "70%" }}>
                          <span className="kanit-medium text-[20px] leading-[24px] text-[#4433EE]">
                            {camp?.title}
                          </span>
                          <span className="kanit-light text-[14px] leading-[20px] text-[#4433EE] mt-1">
                            {camp?.content}
                          </span>
                        </div>
                      )}

                      {/* Toggle Button */}
                      <div>
                        <button
                          onClick={() => handleToggle(item.id)}
                          className="border border-[#4433EE] rounded-full w-[56px] h-[56px] flex justify-center items-center shrink-0 relative overflow-hidden"
                        >
                          {/* Open Icon */}
                          <span
                            className={`absolute transition-all duration-300 ease-in-out ${
                              isOpen
                                ? "opacity-0 scale-75 rotate-90"
                                : "opacity-100 scale-100 rotate-0"
                            }`}
                          >
                            <OpenIcon />
                          </span>
                          {/* Close Icon */}
                          <span
                            className={`absolute transition-all duration-300 ease-in-out ${
                              isOpen
                                ? "opacity-100 scale-100 rotate-0"
                                : "opacity-0 scale-75 -rotate-90"
                            }`}
                          >
                            <CloseIcon />
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Details when open */}
                    {isOpen && (
                      <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden`}
                        style={{
                          maxHeight: "300px",
                          opacity: 1,
                        }}
                      >
                        <div className="flex flex-col mt-[26px]">
                          <span className="kanit-medium text-[24px] leading-[28px] text-[#4433EE]">
                            {camp?.title}
                          </span>
                          <span className="kanit-light text-[16px] leading-[23px] text-[#4433EE] mt-[24px]">
                            {isOpen
                              ? camp?.content
                              : camp?.content.slice(0, 100)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <hr className="bg-[#B7A0F8] h-[2px] w-full mt-[36px] mb-[36px]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="mb-6 flex flex-col gap-4">
            {campaingsData?.map((item) => {
              const camp = item?.translations[selectedLanguage];
              const isOpen = openId === item.id;

              return (
                <div key={item.id}>
                  <div className="flex gap-6">
                    <div className="flex space-x-[36px] w-3/5">
                      {/* Toggle Button */}
                      <button
                        onClick={() => handleToggle(item.id)}
                        className="border border-[#4433EE] rounded-full w-[56px] h-[56px] flex justify-center items-center shrink-0 relative overflow-hidden"
                      >
                        {/* Open Icon */}
                        <span
                          className={`absolute transition-all duration-300 ease-in-out ${
                            isOpen
                              ? "opacity-0 scale-75 rotate-90"
                              : "opacity-100 scale-100 rotate-0"
                          }`}
                        >
                          <OpenIcon />
                        </span>

                        {/* Close Icon */}
                        <span
                          className={`absolute transition-all duration-300 ease-in-out ${
                            isOpen
                              ? "opacity-100 scale-100 rotate-0"
                              : "opacity-0 scale-75 -rotate-90"
                          }`}
                        >
                          <CloseIcon />
                        </span>
                      </button>

                      {/* LEFT SIDE: IMAGE OR TITLE */}
                      <div className="flex-1">
                        {/* When closed → TITLE instead of image */}
                        {!isOpen && (
                          <div
                            className={`
    transition-all duration-500 ease-out
    ${isOpen ? "translate-x-20" : "translate-x-0"}
  `}
                          >
                            <span className="kanit-medium text-[24px] text-[#4433EE]">
                              {camp?.title}
                            </span>
                          </div>
                        )}

                        {/* When open → IMAGE */}
                        <div
                          className={`transition-all duration-500 ease-in-out overflow-hidden`}
                          style={{
                            maxHeight: isOpen ? "400px" : "0px",
                            opacity: isOpen ? 1 : 0,
                          }}
                        >
                          {isOpen && (
                            <div className="relative h-[320px] rounded overflow-hidden">
                              <Image
                                src={`${imageUrl}/${camp?.photo.replace(
                                  /\\/g,
                                  "/"
                                )}`}
                                alt={camp?.title}
                                fill
                                className="object-cover rounded"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* RIGHT SIDE ALWAYS VISIBLE */}
                    <div className="w-3/5 transition-all duration-500 ease-in-out">
                      <div className="flex gap-6">
                        <span className="w-1/2 kanit-medium text-[24px] leading-[28px] text-[#4433EE] ">
                          {isOpen && camp?.title}
                        </span>
                        <span className="w-1/2 kanit-light text-[16px] leading-[23px] text-[#4433EE]">
                          {isOpen
                            ? camp?.content
                            : camp?.content.slice(0, 70) + " ..."}
                        </span>
                      </div>
                    </div>
                  </div>

                  <hr className="bg-[#B7A0F8] h-[2px] w-full mt-[36px] mb-[36px]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* See All Button */}
        <div className="text-center">
          <button
            onClick={handleChangeRoute}
            className="bg-[#4433EE] w-[246px] h-[56px] rounded-[56px] kanit-medium text-[16px] text-[#F7F0F0]"
          >
            {translations[selectedLanguage].seeallcampaings}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignsView;
