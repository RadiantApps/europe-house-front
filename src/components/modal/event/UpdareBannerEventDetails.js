"use client";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import { imageUrl } from "@/config";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateEventBanner } from "@/store/features/eventDetailSlice";

const UpdareBannerEventDetails = ({ openModal, eventId, existingBanners }) => {
  const dispatch = useDispatch();

  const [banners, setBanners] = useState({
    en:
      existingBanners.find((b) => b.language_code === "en")?.image_path || null,
    sq:
      existingBanners.find((b) => b.language_code === "sq")?.image_path || null,
    sr:
      existingBanners.find((b) => b.language_code === "sr")?.image_path || null,
  });

  const handleBannerChange = (e) => {
    setBanners({ ...banners, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Loop through languages and attach file + id + language_code if updating
    ["en", "sq", "sr"].forEach((lang) => {
      const file = banners[lang];
      const existingBanner = existingBanners.find(
        (b) => b.language_code === lang
      );

      if (file instanceof File) {
        formData.append(`banner_${lang}`, file);
        if (existingBanner) {
          formData.append(`banner_id_${lang}`, existingBanner.id);
          formData.append(`banner_lang_${lang}`, lang);
        }
      }
    });

    dispatch(updateEventBanner({ id: eventId, data: formData }))
      .unwrap()
      .then(() => {
        toast.success("Updated successfully");
        openModal(); // Close modal after update
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="bg-gray-900 bg-opacity-40 absolute inset-0"
        onClick={openModal}
      ></div>

      <div
        className="relative bg-[#EFEFEF] pl-[65px] pr-[65px] rounded-lg shadow-lg hide-scrollbar"
        style={{ width: "514px", height: "70%", overflowY: "auto" }}
      >
        <div className="mt-[20px]">
          <div className="flex items-center justify-between">
            <h3 className="mb-1 text-xl font-normal text-center text-gray-500 dark:text-gray-400">
              Upload Event Banner
            </h3>
            <button onClick={openModal}>
              <IoIosCloseCircle />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mb-10">
          {["en", "sq", "sr"].map((lang) => (
            <div className="mt-[33px]">
              <label className="block mb-2 text-[18px] font-medium">
                Banner ({lang.toUpperCase()}):
              </label>
              <input
                type="file"
                name={lang}
                onChange={handleBannerChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]
               file:bg-transparent file:rounded-[10px] file:border-[#767676]
               file:border-1 file:mt-[12px]"
              />
              {banners[lang] && !(banners[lang] instanceof File) && (
                <img
                  src={`${imageUrl}/${banners[lang]}`}
                  alt={`banner ${lang}`}
                  className="w-full h-40 object-cover rounded mt-2"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className=" w-full h-[50px] bg-[#B8F900] rounded-[10px] text-[18px] font-medium leading-[22px] text-[#000] mb-[67px]"
          >
            Publish Banner
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdareBannerEventDetails;
