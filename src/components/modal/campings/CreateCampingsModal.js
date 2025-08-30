"use client";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createCampings } from "@/store/features/campaingsSlice";

const CreateCampingsModal = ({ openModal }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    slug: "",
    sq: "",
    en: "",
    sr: "",
    text_al: "",
    text_en: "",
    text_sr: "",
    photo_sq: null,
    photo_en: null,
    photo_sr: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const translations = [
      { title: formData.sq, text: formData.text_al, language: "sq" },
      { title: formData.en, text: formData.text_en, language: "en" },
      { title: formData.sr, text: formData.text_sr, language: "sr" },
    ];

    const data = new FormData();
    data.append("slug", formData.slug);
    data.append("translations", JSON.stringify(translations));

    if (formData.photo_sq) data.append("photo_sq", formData.photo_sq);
    if (formData.photo_en) data.append("photo_en", formData.photo_en);
    if (formData.photo_sr) data.append("photo_sr", formData.photo_sr);

    try {
      await dispatch(createCampings(data)).unwrap();
      toast.success("Campaign created successfully!");
    } catch (err) {
      setError(err);
      toast.error("Failed to create campaign");
    }
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
              Add Campaign
            </h3>
            <button onClick={openModal}>
              <IoIosCloseCircle />
            </button>
          </div>

          <form autoComplete="off" onSubmit={onSubmit}>
            {/* Slug */}
            <div className="mt-[33px]">
              <label
                htmlFor="slug"
                className="block mb-2 text-[18px] font-medium"
              >
                Slug
              </label>
              <input
                type="text"
                name="slug"
                id="slug"
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
                placeholder="Slug"
                value={formData.slug}
                onChange={handleChange}
              />
              {error && error.slug && (
                <span className="text-red-500">{error.slug}</span>
              )}
            </div>

            {/* Name Albania */}
            <div className="mt-[33px]">
              <label
                htmlFor="sq"
                className="block mb-2 text-[18px] font-medium"
              >
                Name Albania
              </label>
              <input
                type="text"
                name="sq"
                id="sq"
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
                placeholder="Name Albania"
                value={formData.sq}
                onChange={handleChange}
              />
              {error && error.sq && (
                <span className="text-red-500">{error.sq}</span>
              )}
            </div>

            {/* Text Albania */}
            <div className="mt-[33px]">
              <label
                htmlFor="text_al"
                className="block mb-2 text-[18px] font-medium"
              >
                Text Albania
              </label>
              <textarea
                name="text_al"
                id="text_al"
                className="bg-[#FFF] w-full rounded-[10px] pl-[16px] py-2"
                placeholder="Text Albania"
                value={formData.text_al}
                onChange={handleChange}
              />
              {error && error.text_al && (
                <span className="text-red-500">{error.text_al}</span>
              )}
            </div>

            {/* Photo Albania */}
            <div className="mt-5">
              <label
                htmlFor="photo_sq"
                className="block mb-2 text-[18px] font-medium"
              >
                Photo Albania
              </label>
              <input
                type="file"
                name="photo_sq"
                onChange={handleFileChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]
               file:bg-transparent file:rounded-[10px] file:border-[#767676]
               file:border-1 file:mt-[12px]"
              />
            </div>

            {/* Name English */}
            <div className="mt-[33px]">
              <label
                htmlFor="en"
                className="block mb-2 text-[18px] font-medium"
              >
                Name English
              </label>
              <input
                type="text"
                name="en"
                id="en"
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
                placeholder="Name English"
                value={formData.en}
                onChange={handleChange}
              />
              {error && error.en && (
                <span className="text-red-500">{error.en}</span>
              )}
            </div>

            {/* Text English */}
            <div className="mt-[33px]">
              <label
                htmlFor="text_en"
                className="block mb-2 text-[18px] font-medium"
              >
                Text English
              </label>
              <textarea
                name="text_en"
                id="text_en"
                className="bg-[#FFF] w-full rounded-[10px] pl-[16px] py-2"
                placeholder="Text English"
                value={formData.text_en}
                onChange={handleChange}
              />
              {error && error.text_en && (
                <span className="text-red-500">{error.text_en}</span>
              )}
            </div>

            {/* Photo English */}
            <div className="mt-5">
              <label
                htmlFor="photo_en"
                className="block mb-2 text-[18px] font-medium"
              >
                Photo English
              </label>
              <input
                type="file"
                name="photo_en"
                onChange={handleFileChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]
               file:bg-transparent file:rounded-[10px] file:border-[#767676]
               file:border-1 file:mt-[12px]"
              />
            </div>

            {/* Name Serbian */}
            <div className="mt-[33px]">
              <label
                htmlFor="sr"
                className="block mb-2 text-[18px] font-medium"
              >
                Name Serbian
              </label>
              <input
                type="text"
                name="sr"
                id="sr"
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
                placeholder="Name Serbian"
                value={formData.sr}
                onChange={handleChange}
              />
              {error && error.sr && (
                <span className="text-red-500">{error.sr}</span>
              )}
            </div>

            {/* Text Serbian */}
            <div className="mt-[33px]">
              <label
                htmlFor="text_sr"
                className="block mb-2 text-[18px] font-medium"
              >
                Text Serbian
              </label>
              <textarea
                name="text_sr"
                id="text_sr"
                className="bg-[#FFF] w-full rounded-[10px] pl-[16px] py-2"
                placeholder="Text Serbian"
                value={formData.text_sr}
                onChange={handleChange}
              />
              {error && error.text_sr && (
                <span className="text-red-500">{error.text_sr}</span>
              )}
            </div>

            {/* Photo Serbian */}
            <div className="mt-5">
              <label
                htmlFor="photo_sr"
                className="block mb-2 text-[18px] font-medium"
              >
                Photo Serbian
              </label>
              <input
                type="file"
                name="photo_sr"
                onChange={handleFileChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]
               file:bg-transparent file:rounded-[10px] file:border-[#767676]
               file:border-1 file:mt-[12px]"
              />
            </div>

            {/* Submit */}
            <div className="flex items-center justify-center mt-5">
              <button
                type="submit"
                className="w-full h-[50px] bg-[#B8F900] rounded-[10px] text-[18px] font-medium leading-[22px] text-[#000] mb-[67px]"
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCampingsModal;
