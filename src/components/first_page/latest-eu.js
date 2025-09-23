import React from "react";
import { ArrowUpRight } from "lucide-react";

import Image from "next/image";
import { PinIcon } from "@/assets/home";
import { useSelector } from "react-redux";
import { translations } from "@/data/home";
import { useGetLatestEuQuery } from "@/store/services/homeApi";
import { imageUrl } from "@/config";
import { formatDateInLanguages } from "@/utils/utils";
import { useRouter } from "next/navigation";

const LatestEU = () => {
  const router = useRouter();
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );

  const { data } = useGetLatestEuQuery();
  const items = data ? data[0].latest_items : null;
  const campaings = items?.latest_campaign;
  const title_campaings = campaings?.translations[selectedLanguage].title;
  const date_campaings =
    campaings?.created_at && formatDateInLanguages(campaings?.created_at);

  // blog
  const blog = items?.latest_blog;
  const blogPhoto = JSON.parse(
    blog?.translations[selectedLanguage]?.photo || "{}"
  );
  const blogTitle = blog?.translations[selectedLanguage].title;
  const date_blog =
    (blog?.created_at && formatDateInLanguages(blog?.created_at)) || "";

  // events
  const event = items?.latest_event;
  const eventPhoto = event?.translations[selectedLanguage]?.photo;
  const titleEvent = event?.translations[selectedLanguage]?.title;
  const dateEvent =
    event?.event_date && formatDateInLanguages(event?.event_date);

  const publication = items?.latest_publication;
  const publicationPhoto = publication?.translations[selectedLanguage]?.photo;
  const publicationTitle = publication?.translations[selectedLanguage]?.title;
  const publicationDate =
    publication?.created_at && formatDateInLanguages(publication?.created_at);
  return (
    <div className="px-6 lg:px-[74px] py-8 lg:py-[64px] bg-[#D2E6FF] xl:max-w-[1500px] mx-auto">
      <div className="flex  justify-between flex-col lg:flex-row">
        <h2 className="text-[#1C1A1A] text-[48px] kanit-medium leading-[54px]">
          {translations[selectedLanguage].main_title}
        </h2>
        <div className="flex items-center gap-2 kanit-regular text-[16px] leading-[42px] text-[#1C1A1A]">
          <PinIcon />
          <span>{translations[selectedLanguage].location}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:hidden">
        <div className="rounded-xl overflow-hidden shadow bg-white mt-[33px]">
          <div className={`relative h-[353]`}>
            <Image
              src={`${imageUrl}/${campaings?.translations[selectedLanguage].photo}`}
              alt={title_campaings}
              fill
              className="w-full h-[353px] object-cover"
            />
            <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
              {translations[selectedLanguage].campaings_category}
            </span>
            <h3 className="absolute bottom-[44px] left-2 text-[#fff] kanit-semibold text-[24px] leading-[25px]">
              {title_campaings}
            </h3>
            <p className="absolute bottom-[22px] left-2 text-[14px] text-[#D9D9D9] kanit-regular">
              {date_campaings && date_campaings[selectedLanguage]}
            </p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow bg-white mt-[16px]">
          <div className={`relative h-[190]`}>
            <Image
              src={`${imageUrl}/${blogPhoto?.path}`}
              alt={blogTitle}
              fill
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
              {translations[selectedLanguage].blog_category}
            </span>
            <h3 className="absolute bottom-[44px] left-2 text-[#fff] kanit-semibold text-[24px] leading-[25px]">
              {blogTitle}
            </h3>
            <p className="absolute bottom-[22px] left-2 text-[14px] text-[#D9D9D9] kanit-regular">
              {date_blog && date_blog[selectedLanguage]}
            </p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow bg-white mt-[16px]">
          <div className={`relative h-[190]`}>
            <Image
              src={`${imageUrl}/${eventPhoto}`}
              alt={titleEvent}
              fill
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
              {translations[selectedLanguage].event_category}
            </span>
            <h3 className="absolute bottom-[44px] left-2 text-[#fff] kanit-semibold text-[24px] leading-[25px]">
              {titleEvent}
            </h3>
            <p className="absolute bottom-[22px] left-2 text-[14px] text-[#D9D9D9] kanit-regular">
              {dateEvent && dateEvent[selectedLanguage]}
            </p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow bg-white mt-[16px]">
          <div className={`relative h-[190]`}>
            <Image
              src={`${imageUrl}/${publicationPhoto}`}
              alt={publicationTitle}
              fill
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
              {translations[selectedLanguage].publication_category}
            </span>
            <h3 className="absolute bottom-[44px] left-2 text-[#fff] kanit-semibold text-[24px] leading-[25px]">
              {blogTitle}
            </h3>
            <p className="absolute bottom-[22px] left-2 text-[14px] text-[#D9D9D9] kanit-regular">
              {publicationDate && publicationDate[selectedLanguage]}
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex gap-4 mt-6">
        <div
          className={`rounded-xl overflow-hidden shadow bg-white flex-shrink-0 
             flex-[1.52]
            `}
          style={{ height: "440px" }}
        >
          <div className="relative h-full">
            <Image
              src={`${imageUrl}/${campaings?.translations[selectedLanguage].photo}`}
              alt={title_campaings}
              fill
              className="w-full h-full object-cover"
            />
            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-white text-[#4433EE] text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                {translations[selectedLanguage].campaings_category}
              </span>
            </div>
            <div
              className="absolute top-4 right-4 inline-flex items-center justify-center"
              style={{
                width: "38px",
                height: "38px",
                backgroundColor: "#F7F0F0",
                borderRadius: "38px",
                marginLeft: "426px",
                transform: "rotate(0deg)",
                opacity: 1,
              }}
            >
              <ArrowUpRight size={20} color="blue" strokeWidth={2} />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-[#F7F0F0] text-[24px] kanit-semibold">
                {title_campaings}
              </h3>
              <p className="text-[#C6C6C6] kanit-regular text-[12px] leading-[24px]">
                {date_campaings && date_campaings[selectedLanguage]}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`rounded-xl overflow-hidden shadow bg-white flex-shrink-0 flex-1`}
          style={{ height: "440px" }}
        >
          <div className="relative h-full">
            <Image
              src={`${imageUrl}/${blogPhoto?.path}`}
              alt={blogTitle}
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white text-[#4433EE] text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                {translations[selectedLanguage].blog_category}
              </span>
            </div>
            <div
              className="absolute top-4 right-4 inline-flex items-center justify-center"
              style={{
                width: "38px",
                height: "38px",
                backgroundColor: "#F7F0F0",
                borderRadius: "38px",
                marginLeft: "426px",
                transform: "rotate(0deg)",
                opacity: 1,
              }}
            >
              <ArrowUpRight size={20} color="blue" strokeWidth={2} />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-[24px] text-[#F7F0F0] kanit-semibold">
                {blogTitle}
              </h3>
              <p className="text-sm text-gray-200 font-medium">
                {date_blog && date_blog[selectedLanguage]}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`rounded-xl overflow-hidden shadow bg-white flex-shrink-0 flex-1`}
          style={{ height: "440px" }}
        >
          <div className="relative h-full">
            <Image
              src={`${imageUrl}/${eventPhoto}`}
              alt={titleEvent}
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white text-[#4433EE] text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                {translations[selectedLanguage].event_category}
              </span>
            </div>
            <div
              className="absolute top-4 right-4 inline-flex items-center justify-center"
              style={{
                width: "38px",
                height: "38px",
                backgroundColor: "#F7F0F0",
                borderRadius: "38px",
                marginLeft: "426px",
                transform: "rotate(0deg)",
                opacity: 1,
              }}
            >
              <ArrowUpRight size={20} color="blue" strokeWidth={2} />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-[24px] text-[#F7F0F0] kanit-semibold">
                {titleEvent}
              </h3>
              <p className="text-sm text-gray-200 font-medium">
                {dateEvent && dateEvent[selectedLanguage]}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`rounded-xl overflow-hidden shadow bg-white flex-shrink-0 flex-1`}
          style={{ height: "440px" }}
        >
          <div className="relative h-full">
            <Image
              src={`${imageUrl}/${publicationPhoto}`}
              alt={publicationTitle}
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white text-[#4433EE] text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                {translations[selectedLanguage].publication_category}
              </span>
            </div>
            <div
              className="absolute top-4 right-4 inline-flex items-center justify-center"
              style={{
                width: "38px",
                height: "38px",
                backgroundColor: "#F7F0F0",
                borderRadius: "38px",
                marginLeft: "426px",
                transform: "rotate(0deg)",
                opacity: 1,
              }}
            >
              <ArrowUpRight size={20} color="blue" strokeWidth={2} />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-[24px] text-[#F7F0F0] kanit-semibold">
                {publicationTitle}
              </h3>
              <p className="text-sm text-gray-200 font-medium">
                {publicationDate && publicationDate[selectedLanguage]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestEU;
