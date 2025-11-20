"use client";
import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  useGetEventItemQuery,
  useGetUpcomingEventQuery,
} from "@/store/services/eventApi";
import { useSelector } from "react-redux";
import { imageUrl } from "@/config";
import { translations } from "@/data/event";
import { Copy, Facebook, Linkedin, X } from "@/assets/events/icons";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";

export default function EventPage() {
  const router = useRouter();
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const params = useParams();
  const eventId = params.slug;
  const [copied, setCopied] = useState(false);
  const { data } = useGetEventItemQuery({ id: eventId });
  const { data: updcomingEvent } = useGetUpcomingEventQuery();
  const event = data?.[0] || null;

  const handleCopy = () => {
    // navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Safe image source
  const eventPhoto = event?.event_translations?.[selectedLanguage]?.photo
    ? `${imageUrl}/${event.event_translations[
        selectedLanguage
      ].photo.replaceAll("\\", "/")}`
    : null;

  const handleClick = (id) => {
    router.push(`/events/${id}`);
  };
  console.log(eventPhoto);
  return (
    <div className="w-full font-sans">
      <main>
        <div className="px-[24px] lg:px-[74px] pt-[70px] xl:max-w-[1500px] xl:mx-auto">
          <h1 className="text-[#101828] kanit-semibold text-[48px] leading-[60px]">
            {event?.event_translations?.[selectedLanguage]?.title || ""}
          </h1>

          <div className="flex flex-col lg:flex-row lg:gap-[28px] gap-6 mt-[40px]">
            {/* Left (Image + Content) */}
            <div className="flex-1 order-2 lg:order-1">
              <div className="rounded-[12px] overflow-hidden relative w-full h-[350px] lg:h-[516px]">
                {eventPhoto ? (
                  <Image
                    src={eventPhoto}
                    alt={
                      event?.event_translations?.[selectedLanguage]?.title ||
                      "Event Image"
                    }
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span>No Image</span>
                  </div>
                )}
              </div>

              {/* Copy + Social */}
              <div className="flex gap-3 mt-6 lg:mt-11">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm"
                >
                  <Copy /> {copied ? "Copied!" : "Copy link"}
                </button>
                <button className="p-2 border rounded-lg">
                  <Facebook />
                </button>
                <button className="p-2 border rounded-lg">
                  <X />
                </button>
                <button className="p-2 border rounded-lg">
                  <Linkedin />
                </button>
              </div>

              {/* Description */}
              <p className="mt-6 lg:mt-11 text-gray-600 leading-relaxed">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      event?.event_translations?.[selectedLanguage]
                        ?.description || "No description available.",
                  }}
                />
              </p>

              <button className="mt-6 lg:mt-8 w-[190px] h-[50px] flex items-center justify-center gap-[10px] bg-indigo-600 text-white font-medium rounded-[56px]">
                {translations[selectedLanguage].joinbutton}
              </button>
            </div>

            {/* Right (Event Details) */}
            <aside className="lg:w-72 space-y-8 order-1 lg:order-2">
              <div className="space-y-[6px]">
                <p className="kanit-semibold text-[22px] leading-[32px] text-[#1C1A1A]">
                  Event Type
                </p>
                <p className="kanit-regular text-[18px] leading-[28px] text-[#555353]">
                  {event?.category_translations?.[selectedLanguage]?.name ||
                    "N/A"}
                </p>
              </div>
              <div>
                <p className="kanit-semibold text-[22px] leading-[32px] text-[#1C1A1A]">
                  Date
                </p>
                <p className="kanit-regular text-[18px] leading-[28px] text-[#555353]">
                  {event?.event_date?.split("T")[0] || "N/A"}
                </p>
              </div>
              <div>
                <p className="kanit-semibold text-[22px] leading-[32px] text-[#1C1A1A]">
                  Time
                </p>
                <p className="kanit-regular text-[18px] leading-[28px] text-[#555353]">
                  {event?.start_time || "N/A"} - {event?.end_time || "N/A"}
                </p>
              </div>
              <div>
                <p className="kanit-semibold text-[22px] leading-[32px] text-[#1C1A1A]">
                  Location
                </p>
                <p className="kanit-regular text-[18px] leading-[28px] text-[#555353]">
                  {event?.location_translations?.[selectedLanguage]
                    ?.location_name || "N/A"}
                </p>
              </div>
              <div>
                <p className="kanit-semibold text-[22px] leading-[32px] text-[#1C1A1A]">
                  Language
                </p>
                <p className="kanit-regular text-[18px] leading-[28px] text-[#555353]">
                  {selectedLanguage.toUpperCase()}
                </p>
              </div>
            </aside>
          </div>
        </div>

        {/* Upcoming Events */}
        <section className="mt-9 lg:mt-[70px] bg-[#EDF5FF] px-[24px] lg:px-[74px] py-9 lg:py-[70px] xl:max-w-[1500px] xl:mx-auto">
          <h2 className="text-[36px] text-[#101828] kanit-semibold mb-6 lg:mb-5">
            {translations[selectedLanguage].title_upcomig}
          </h2>
          <p className="text-[#475467] kanit-regular text-[20px] leading-[30px]">
            {translations[selectedLanguage].subtitle}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[30px]">
            {updcomingEvent?.map((item) => {
              const event = item?.event_translations[selectedLanguage];
              return (
                <div>
                  {event.photo ? (
                    <Image
                      src={`${imageUrl}/${event.photo}`.replace(/\\/g, "/")} // Fix backslashes
                      alt={event.title || "Event Image"}
                      className="w-full h-[280px] object-cover rounded-[12px]"
                      width={500} // specify width and height if not using `fill`
                      height={300}
                    />
                  ) : (
                    <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
                      No Image
                    </div>
                  )}
                  <div className="pt-[18px] lg:pt-8">
                    <h3 className="text-[#101828] kanit-semibold text-[24px] leading-[24px]">
                      {event?.title}
                    </h3>
                    <button
                      onClick={() => {
                        handleClick(item?.event_id);
                      }}
                      className="kanit-semibold text-[#4433EE] text-[16px] mt-[22px]"
                    >
                      {translations[selectedLanguage].upcoming_button} →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
