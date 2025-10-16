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
import { ArrowRow } from "@/assets/home";

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

  const handleChangeRouteCampaign = (id) => {
    router.push(`/campaigns/${id}`);
  };

  const handleChangeRouteBlog = (id) => {
    router.push(`/news/${id}`);
  };

  const handleChangeRouteEvent = (id) => {
    router.push(`/events/${id}`);
  };

  const handleChangeRoutePublication = () => {
    router.push(`/publications`);
  };
  return (
    <div className="px-6 lg:px-[74px] py-8 lg:py-[64px] bg-[#D2E6FF] mx-auto">
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
        <div
          className="rounded-xl overflow-hidden shadow bg-white mt-[33px] cursor-pointer"
          onClick={() => handleChangeRouteCampaign(campaings?.id)}
        >
          <div className="relative h-[353px]">
            {campaings?.translations[selectedLanguage]?.photo ? (
              <>
                {/* Image with zoom on hover */}
                <Image
                  src={`${imageUrl}/${campaings.translations[selectedLanguage].photo}`}
                  alt={title_campaings || "Campaign image"}
                  fill
                  className="object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-500">
                Loading image...
              </div>
            )}

            {/* Category badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white text-[#4433EE] text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                {translations[selectedLanguage]?.campaings_category ||
                  "Category"}
              </span>
            </div>
            <div className="absolute top-4 right-4 inline-flex items-center justify-center w-[38px] h-[38px] bg-[#F7F0F0] rounded-full transform transition-transform duration-700 ease-in-out group-hover:rotate-15 group-hover:scale-110">
              <ArrowRow />
            </div>

            <h3 className="absolute bottom-[44px] left-2 text-[#fff] kanit-semibold text-[24px] leading-[25px] z-10">
              {title_campaings}
            </h3>

            <p className="absolute bottom-[22px] left-2 text-[14px] text-[#D9D9D9] kanit-regular z-10">
              {date_campaings && date_campaings[selectedLanguage]}
            </p>
          </div>
        </div>

        <div
          className="rounded-xl overflow-hidden shadow bg-white mt-[16px] cursor-pointer"
          onClick={() => handleChangeRouteBlog(blog?.id)}
        >
          <div className="relative h-[190px]">
            {blogPhoto?.path ? (
              <>
                {/* Blog image with smooth zoom */}
                <Image
                  src={`${imageUrl}/${blogPhoto.path}`}
                  alt={blogTitle || "Blog image"}
                  fill
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-500">
                Loading image...
              </div>
            )}

            {/* Category badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white text-[#4433EE] text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                {translations[selectedLanguage].blog_category}
              </span>
            </div>

            {/* Arrow icon with rotation and scale */}
            <div className="absolute top-4 right-4 inline-flex items-center justify-center w-[38px] h-[38px] bg-[#F7F0F0] rounded-full transform transition-transform duration-700 ease-in-out group-hover:rotate-15 group-hover:scale-110">
              <ArrowRow />
            </div>

            <h3 className="absolute bottom-[44px] left-2 text-[#fff] kanit-semibold text-[24px] leading-[25px] z-10">
              {blogTitle}
            </h3>

            <p className="absolute bottom-[22px] left-2 text-[14px] text-[#D9D9D9] kanit-regular z-10">
              {date_blog && date_blog[selectedLanguage]}
            </p>
          </div>
        </div>

        <div
          className="rounded-xl overflow-hidden shadow bg-white mt-[16px] cursor-pointer"
          onClick={() => handleChangeRouteEvent(event?.id)}
        >
          <div className="relative h-[190px]">
            {eventPhoto ? (
              <>
                {/* Event image with smooth zoom */}
                <Image
                  src={`${imageUrl}/${eventPhoto}`}
                  alt={titleEvent || "Event image"}
                  fill
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-500">
                Loading image...
              </div>
            )}

            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white text-[#4433EE] text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                {translations[selectedLanguage].event_category}
              </span>
            </div>

            {/* Arrow icon with rotation */}
            <div className="absolute top-4 right-4 inline-flex items-center justify-center w-[38px] h-[38px] bg-[#F7F0F0] rounded-full transform transition-transform duration-700 ease-in-out group-hover:rotate-15 group-hover:scale-110">
              <ArrowRow />
            </div>

            <h3 className="absolute bottom-[44px] left-2 text-[#fff] kanit-semibold text-[24px] leading-[25px] z-10">
              {titleEvent}
            </h3>

            <p className="absolute bottom-[22px] left-2 text-[14px] text-[#D9D9D9] kanit-regular z-10">
              {dateEvent && dateEvent[selectedLanguage]}
            </p>
          </div>
        </div>

        <div
          className="rounded-xl overflow-hidden shadow bg-white mt-[16px] cursor-pointer"
          onClick={handleChangeRoutePublication}
        >
          <div className="relative h-[190px]">
            {publicationPhoto ? (
              <>
                {/* Image with stronger zoom */}
                <Image
                  src={`${imageUrl}/${publicationPhoto}`}
                  alt={publicationTitle || "Publication image"}
                  fill
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-500">
                Loading image...
              </div>
            )}

            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white text-[#4433EE] text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                {translations[selectedLanguage].publication_category}
              </span>
            </div>

            {/* Arrow icon with rotation */}
            <div className="absolute top-4 right-4 inline-flex items-center justify-center w-[38px] h-[38px] bg-[#F7F0F0] rounded-full transform transition-transform duration-700 ease-in-out group-hover:rotate-15 group-hover:scale-110">
              <ArrowRow />
            </div>

            <h3 className="absolute bottom-[44px] left-2 text-[#fff] kanit-semibold text-[24px] leading-[25px] z-10">
              {publicationTitle}
            </h3>

            <p className="absolute bottom-[22px] left-2 text-[14px] text-[#D9D9D9] kanit-regular z-10">
              {publicationDate && publicationDate[selectedLanguage]}
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex gap-4 mt-6">
        <div
          onClick={() => handleChangeRouteCampaign(campaings?.id)}
          className="rounded-xl overflow-hidden shadow bg-white flex-shrink-0 flex-[1.52] cursor-pointer group"
          style={{ height: "440px" }}
        >
          <div className="relative h-full overflow-hidden">
            {campaings?.translations[selectedLanguage]?.photo ? (
              <>
                {/* Image with zoom on hover */}
                <Image
                  src={`${imageUrl}/${campaings.translations[selectedLanguage].photo}`}
                  alt={title_campaings || "Campaign image"}
                  fill
                  className="object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-500">
                Loading image...
              </div>
            )}

            {/* Category badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white text-[#4433EE] text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                {translations[selectedLanguage]?.campaings_category ||
                  "Category"}
              </span>
            </div>

            {/* Arrow icon with rotation */}
            <div className="absolute top-4 right-4 inline-flex items-center justify-center w-[38px] h-[38px] bg-[#F7F0F0] rounded-full transform transition-transform duration-700 ease-in-out group-hover:rotate-15 group-hover:scale-110">
              <ArrowRow />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
              <h3 className="text-[#F7F0F0] text-[24px] kanit-semibold">
                {title_campaings || "Untitled campaign"}
              </h3>
              <p className="text-[#C6C6C6] kanit-regular text-[13px] leading-[20px]">
                {date_campaings?.[selectedLanguage] || ""}
              </p>
            </div>
          </div>
        </div>

        <div
          className="rounded-xl overflow-hidden shadow bg-white flex-shrink-0 flex-1 cursor-pointer group"
          onClick={() => handleChangeRouteBlog(blog?.id)}
          style={{ height: "440px" }}
        >
          <div className="relative h-full overflow-hidden">
            {blogPhoto?.path ? (
              <>
                {/* Blog image with smooth zoom */}
                <Image
                  src={`${imageUrl}/${blogPhoto.path}`}
                  alt={blogTitle || "Blog image"}
                  fill
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-500">
                Loading image...
              </div>
            )}

            {/* Category badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white text-[#4433EE] text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                {translations[selectedLanguage].blog_category}
              </span>
            </div>

            {/* Arrow icon with rotation and scale */}
            <div className="absolute top-4 right-4 inline-flex items-center justify-center w-[38px] h-[38px] bg-[#F7F0F0] rounded-full transform transition-transform duration-700 ease-in-out group-hover:rotate-15 group-hover:scale-110">
              <ArrowRow />
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
              <h3 className="text-[24px] text-[#F7F0F0] kanit-semibold">
                {blogTitle}
              </h3>
              <p className="text-[#C6C6C6] kanit-regular text-[13px] leading-[20px]">
                {date_blog && date_blog[selectedLanguage]}
              </p>
            </div>
          </div>
        </div>

        <div
          className="rounded-xl overflow-hidden shadow bg-white flex-shrink-0 flex-1 cursor-pointer group"
          style={{ height: "440px" }}
          onClick={() => handleChangeRouteEvent(event?.id)}
        >
          <div className="relative h-full overflow-hidden">
            {eventPhoto ? (
              <>
                {/* Event image with smooth zoom */}
                <Image
                  src={`${imageUrl}/${eventPhoto}`}
                  alt={titleEvent || "Event image"}
                  fill
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-500">
                Loading image...
              </div>
            )}

            {/* Category badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white text-[#4433EE] text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                {translations[selectedLanguage].event_category}
              </span>
            </div>

            {/* Arrow icon with rotation */}
            <div className="absolute top-4 right-4 inline-flex items-center justify-center w-[38px] h-[38px] bg-[#F7F0F0] rounded-full transform transition-transform duration-700 ease-in-out group-hover:rotate-15 group-hover:scale-110">
              <ArrowRow />
            </div>

            {/* Text content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
              <h3 className="text-[24px] text-[#F7F0F0] kanit-semibold">
                {titleEvent}
              </h3>
              <p className="text-[#C6C6C6] kanit-regular text-[13px] leading-[20px]">
                {dateEvent && dateEvent[selectedLanguage]}
              </p>
            </div>
          </div>
        </div>

        <div
          className="rounded-xl overflow-hidden shadow bg-white flex-shrink-0 flex-1 cursor-pointer group"
          style={{ height: "440px" }}
          onClick={handleChangeRoutePublication}
        >
          <div className="relative h-full overflow-hidden">
            {publicationPhoto ? (
              <>
                {/* Image with stronger zoom */}
                <Image
                  src={`${imageUrl}/${publicationPhoto}`}
                  alt={publicationTitle || "Publication image"}
                  fill
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-500">
                Loading image...
              </div>
            )}

            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white text-[#4433EE] text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                {translations[selectedLanguage].publication_category}
              </span>
            </div>

            {/* Arrow icon with rotation */}
            <div className="absolute top-4 right-4 inline-flex items-center justify-center w-[38px] h-[38px] bg-[#F7F0F0] rounded-full transform transition-transform duration-700 ease-in-out group-hover:rotate-15 group-hover:scale-110">
              <ArrowRow />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
              <h3 className="text-[24px] text-[#F7F0F0] kanit-semibold">
                {publicationTitle}
              </h3>
              <p className="text-[#C6C6C6] kanit-regular text-[13px] leading-[20px]">
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
