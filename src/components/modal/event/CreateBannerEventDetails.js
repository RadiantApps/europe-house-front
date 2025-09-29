"use client";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createEventBanner } from "@/store/features/eventDetailSlice";
import { data } from "autoprefixer";

const CreateBannerEventDetails = ({ openModal, eventId }) => {
  const dispatch = useDispatch();
  const [banners, setBanners] = useState({
    banner_en: null,
    banner_sq: null,
    banner_sr: null,
  });
  const handleChange = (e) => {
    setBanners({ ...banners, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!banners.banner_en && !banners.banner_sq && !banners.banner_sr) {
      toast.error("Please upload at least one banner");
      return;
    }

    const formData = new FormData();
    formData.append("eventId", eventId);
    if (banners.banner_en) formData.append("banner_en", banners.banner_en);
    if (banners.banner_sq) formData.append("banner_sq", banners.banner_sq);
    if (banners.banner_sr) formData.append("banner_sr", banners.banner_sr);
    dispatch(createEventBanner({ id: eventId, data: formData }))
      .unwrap()
      .then(() => {
        toast.success("Banner added successfull");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-15">
      <div
        className="bg-gray-900 bg-opacity-40 absolute inset-0"
        onClick={openModal}
      ></div>
      <div
        className="relative bg-[#EFEFEF] pl-[65px] pr-[65px] rounded-lg shadow-lg hide-scrollbar"
        style={{ width: "514px", height: "70%", overflowY: "auto" }}
      >
        <div className="p-6 ">
          <div className="flex items-center justify-between">
            <h3 className="mb-1 text-xl font-normal text-center text-gray-500 dark:text-gray-400">
              Create Event Banner
            </h3>
            <button onClick={openModal}>
              <IoIosCloseCircle />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mt-[33px]">
              <label
                htmlFor="banner_en"
                className="block mb-2 text-[18px] font-medium"
              >
                Banner (EN)
              </label>
              <input
                type="file"
                name="banner_en"
                accept="image/*"
                onChange={handleChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]
               file:bg-transparent file:rounded-[10px] file:border-[#767676]
               file:border-1 file:mt-[12px]"
              />
            </div>

            <div className="mt-[33px]">
              <label
                htmlFor="banner_en"
                className="block mb-2 text-[18px] font-medium"
              >
                Banner (SQ)
              </label>
              <input
                type="file"
                name="banner_sq"
                accept="image/*"
                onChange={handleChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]
               file:bg-transparent file:rounded-[10px] file:border-[#767676]
               file:border-1 file:mt-[12px]"
              />
            </div>

            <div className="mt-[33px]">
              <label
                htmlFor="banner_en"
                className="block mb-2 text-[18px] font-medium"
              >
                Banner (SR)
              </label>
              <input
                type="file"
                name="banner_sr"
                accept="image/*"
                onChange={handleChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]
               file:bg-transparent file:rounded-[10px] file:border-[#767676]
               file:border-1 file:mt-[12px]"
              />
            </div>

            <button
              type="submit"
              className="w-full h-[50px] bg-[#B8F900] rounded-[10px] text-[18px] font-medium leading-[22px] text-[#000] mb-[67px]"
            >
              Publish Banner
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBannerEventDetails;
