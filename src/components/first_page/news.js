import React from "react";

import Image from "next/image";
import { translations } from "@/data/home";
import { useSelector } from "react-redux";
import { SeeAllNewsIcon } from "@/assets/home";
import { useGetLatestNewsQuery } from "@/store/services/homeApi";
import { imageUrl } from "@/config";
import { formatDateInLanguages } from "@/utils/utils";
import { useRouter } from "next/navigation";
const News = () => {
  const router = useRouter();
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );

  const { data } = useGetLatestNewsQuery();
  const blogs = data ? data[0] : null;
  const latest_blog = blogs?.blogs_data?.latest_blog;
  const photo_latest_blog = JSON.parse(
    latest_blog?.translations[selectedLanguage]?.photo || "{}"
  );
  const title_latest_blog = latest_blog?.translations[selectedLanguage]?.title;
  const date_latest_blog =
    latest_blog && formatDateInLanguages(latest_blog?.created_at);
  const latest_5_blog = blogs?.blogs_data?.last_5_blogs;

  return (
    <div className="px-6 lg:px-[74px] bg-[#EDF5FF] py-8 lg:py-[64px] xl:max-w-[1500px] mx-auto">
      <div className="flex justify-between items-center mb-11">
        <h2 className="kanit-medium text-[#1C1A1A] text-[34px] leading-[42px]">
          {translations[selectedLanguage].title_latest_news}
        </h2>
        <button
          onClick={() => router.push("/news")}
          className="text-[#4433EE] bg-white flex items-center gap-2  kanit-regular text-[16px] border border-blue-600 px-4 py-2 rounded-full "
        >
          {translations[selectedLanguage].title_see_all_news}
          <SeeAllNewsIcon />
        </button>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col lg:hidden">
        <div className="mb-2">
          <div className="relative h-80 rounded-lg overflow-hidden mb-4">
            <Image
              src={`${imageUrl}/${photo_latest_blog?.path}`}
              alt={title_latest_blog}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-0">
          <div className="">
            <p className="text-[#888] kanit-leight text-[12px]">
              {latest_blog?.created_at && date_latest_blog[selectedLanguage]}
            </p>
            <h3 className="kanit-semibold text-[20px] text-[#1C1A1A] mb-[20px] mt-[11px]">
              {title_latest_blog}
            </h3>
          </div>
          <hr className="border-gray-500 " />
          {latest_5_blog?.slice(0, 4)?.map((item) => {
            return (
              <div className="py-4 border-b border-gray-400">
                <p className="text-xs text-gray-500 mb-2 uppercase">
                  AUGUST 5, 2024
                </p>
                <h3 className="kanit-semibold text-[20px] text-[#1C1A1A] ">
                  {item?.translations[selectedLanguage]?.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-8">
          <button className="text-[#4433EE] bg-white flex items-center gap-2  kanit-regular text-[16px] border border-blue-600 px-4 py-2 rounded-full ">
            {translations[selectedLanguage].title_see_all_news}
            <SeeAllNewsIcon />
          </button>
        </div>
      </div>
      {/* Mobile Layout*/}
      <div className="md:hidden"></div>
      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {/* Left Side - Main Featured Article */}
        <div className="col-span-1 flex flex-col">
          <div className="relative rounded-lg min-h-[502px] mb-4 overflow-hidden">
            <Image
              src={`${imageUrl}/${photo_latest_blog?.path}`}
              alt={title_latest_blog}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-2">
              {latest_blog?.created_at && date_latest_blog[selectedLanguage]}
            </p>
            <h3 className="text-[#1C1A1A] text-[24px]  kanit-semibold">
              {title_latest_blog}
            </h3>
          </div>
        </div>

        {/* Right Side - 4 Articles in 2x2 */}
        <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
          {latest_5_blog?.slice(0, 4)?.map((news, idx) => {
            const photo = JSON.parse(
              news?.translations[selectedLanguage].photo || "{}"
            );
            const title = news?.translations[selectedLanguage]?.title;
            const date = formatDateInLanguages(news?.created_at);
            return (
              <div key={idx} className="flex flex-col">
                <div className="relative h-[196px] mb-3 rounded-lg overflow-hidden">
                  <Image
                    src={`${imageUrl}/${photo?.path}`}
                    alt={`News ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="kanit-regualr text-[12px] leading-[24px] text-[#8E8D8D]">
                    {date[selectedLanguage]}
                  </p>
                  <h3 className="kanit-semibold text-[24px] text-[#1C1A1A]">
                    {title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
