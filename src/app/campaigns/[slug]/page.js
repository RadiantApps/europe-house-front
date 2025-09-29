"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { formatDateInLanguages } from "@/utils/utils";
import { imageUrl } from "@/config";
import { Copy, Facebook, Linkedin, X } from "@/assets/events/icons";
import Footer from "@/components/footer";
import { useState } from "react";
import { LeftIcon, RightIcon } from "@/assets/news";
import { useGetCampaingsDetailApiQuery } from "@/store/services/campaingsApi";

function GalleryCarousel({ gallery }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[443px]  overflow-hidden">
      <Image
        src={`${imageUrl}/${gallery[currentIndex]?.path}`}
        alt=""
        fill
        className="object-cover rounded-[12px]"
      />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#fff] w-[70px] h-[35px] rounded-[100px] flex justify-center items-center"
      >
        <LeftIcon />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#fff] w-[70px] h-[35px] rounded-[100px] flex justify-center items-center"
      >
        <RightIcon />
      </button>
    </div>
  );
}

const CampaingsDetail = () => {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );

  const { slug } = useParams();
  const { data, isLoading, isError } = useGetCampaingsDetailApiQuery({
    id: slug,
  });

  const blog = Array.isArray(data) ? data[0] : data;

  const date = blog?.blog_created_at
    ? formatDateInLanguages(blog.blog_created_at)
    : "";

  const translation = blog?.translations?.find(
    (t) => t.language_code === selectedLanguage
  );

  const banner = blog?.banners?.find(
    (b) => b.language_code === selectedLanguage
  );
  const parsedDetails = blog?.details
    ?.map((item) => {
      if (item.type === "video" && typeof item.content === "string") {
        return { ...item, content: JSON.parse(item.content) };
      }
      return item;
    })
    ?.sort((a, b) => a.order - b.order);
  const getContent = (item) => {
    if (!item?.content) return null;
    if (typeof item.content === "string") {
      try {
        return JSON.parse(item.content);
      } catch {
        return null;
      }
    }
    return item.content; // already parsed
  };
  return (
    <>
      <div className="px-6 md:px-[74px] bg-white">
        {/* Header */}
        <div className="md:max-w-4xl md:mx-auto md:text-center mb-8">
          <p className="mt-[51px] md:mt-[96px] kanit-regular text-[12px] leading-[24px] md:text-[24px] text-[#4433EE] ">
            {date[selectedLanguage] || ""}
          </p>

          <h1 className="mt-[12px] text-[#1C1A1A] kanit-semibold  text-[36px] leading-[44px] md:text-[48px] md:leading-[60px]">
            {translation?.title || ""}
          </h1>
        </div>

        {/* Main Banner */}
        {banner && (
          <div className="mt-[64px] relative w-full h-[204px] md:h-[516px]">
            <Image
              src={`${imageUrl}/${banner.image_path}`}
              alt="Blog banner"
              fill
              className="object-cover md:rounded-[12px]"
            />
          </div>
        )}

        {/* Share Buttons */}
        <div className="flex mt-[40px] space-x-[12px] md:justify-center">
          <div className="w-[123px] border border-[#B7A0F8] rounded-[8px] h-[40px] flex justify-center items-center cursor-pointer space-x-[8px]">
            <Copy />
            <span className="text-[#344054] kanit-semibold text-[14px] leading-[25px]">
              Copy link
            </span>
          </div>
          <div className="w-[40px] border border-[#B7A0F8] rounded-[8px] h-[40px] flex justify-center items-center cursor-pointer">
            <Facebook />
          </div>
          <div className="w-[40px] border border-[#B7A0F8] rounded-[8px] h-[40px] flex justify-center items-center cursor-pointer">
            <X />
          </div>
          <div className="w-[40px] border border-[#B7A0F8] rounded-[8px] h-[40px] flex justify-center items-center cursor-pointer">
            <Linkedin />
          </div>
        </div>

        {/* Blog Details */}
        <div className="max-w-4xl mx-auto mt-12 space-y-8 mb-[51px]">
          {parsedDetails?.map((item) => {
            const content = getContent(item);

            if (item.type === "text") {
              return (
                <div
                  className="kanit-regular text-[#555353]"
                  key={item.id}
                  dangerouslySetInnerHTML={{
                    __html: content?.[selectedLanguage]?.content,
                  }}
                />
              );
            }

            if (item.type === "photo") {
              return (
                <div key={item.id} className="relative w-full h-[443px]">
                  <Image
                    src={`${imageUrl}/${content?.path}`}
                    alt=""
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              );
            }

            if (item.type === "video") {
              return (
                <div key={item.id} className="relative w-full h-0 pb-[56.25%]">
                  <iframe
                    src={content?.youtube_url}
                    title="YouTube video"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-md"
                  />
                </div>
              );
            }

            if (item.type === "gallery") {
              return <GalleryCarousel key={item.id} gallery={content} />;
            }

            return null;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CampaingsDetail;
