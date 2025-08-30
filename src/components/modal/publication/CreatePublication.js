"use client";
import { IoIosCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllTopicsPublication } from "@/store/features/categoryPublicationSlice";
import { createPublication } from "@/store/features/publicationSlice";

const CreatePublication = ({ openModal }) => {
  const dispatch = useDispatch();
  const topicCategoryData =
    useSelector((state) => state.categoryPublication.topicsCategoryData) || [];

  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    publication_blog_id: "",
    slug: "",
    sq: "",
    sr: "",
    en: "",
    photo_sq: null,
    photo_en: null,
    photo_sr: null,
    pdf_sq: null,
    pdf_en: null,
    pdf_sr: null,
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
      { title: formData.sq, language: "sq" },
      { title: formData.en, language: "en" },
      { title: formData.sr, language: "sr" },
    ];

    const data = new FormData();
    data.append("publication_blog_id", formData.publication_blog_id);
    data.append("slug", formData.slug);
    data.append("translations", JSON.stringify(translations));

    // Photos
    if (formData.photo_sq) data.append("photo_sq", formData.photo_sq);
    if (formData.photo_en) data.append("photo_en", formData.photo_en);
    if (formData.photo_sr) data.append("photo_sr", formData.photo_sr);

    // PDFs
    if (formData.pdf_sq) data.append("pdf_sq", formData.pdf_sq);
    if (formData.pdf_en) data.append("pdf_en", formData.pdf_en);
    if (formData.pdf_sr) data.append("pdf_sr", formData.pdf_sr);
    dispatch(createPublication(data));
  };

  useEffect(() => {
    dispatch(getAllTopicsPublication());
  }, []);

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
              Add Blog
            </h3>
            <button onClick={openModal}>
              <IoIosCloseCircle />
            </button>
          </div>

          <form autoComplete="off" onSubmit={onSubmit}>
            {/* Blog Category */}
            <div className="mt-[33px]">
              <label className="block mb-2 text-[18px] font-medium">
                Publication Category
              </label>
              <select
                name="publication_blog_id"
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
                value={formData.publication_blog_id}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                {topicCategoryData.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat?.translations?.en}
                  </option>
                ))}
              </select>
            </div>

            {/* ===== Albania ===== */}
            <div className="mt-[33px]">
              <label className="block mb-2 text-[18px] font-medium">
                Name Albania
              </label>
              <input
                type="text"
                name="sq"
                placeholder="Name Albania"
                value={formData.sq}
                onChange={handleChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
              />
            </div>
            <div className="mt-5">
              <label className="block mb-2 text-[18px] font-medium">
                Photo Albania
              </label>
              <input
                type="file"
                name="photo_sq"
                accept="image/*"
                onChange={handleFileChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]
               file:bg-transparent file:rounded-[10px] file:border-[#767676]
               file:border-1 file:mt-[12px]"
              />
            </div>
            <div className="mt-5">
              <label className="block mb-2 text-[18px] font-medium">
                PDF Albania
              </label>
              <input
                type="file"
                name="pdf_sq"
                accept="application/pdf"
                onChange={handleFileChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]
               file:bg-transparent file:rounded-[10px] file:border-[#767676]
               file:border-1 file:mt-[12px]"
              />
            </div>

            {/* ===== English ===== */}
            <div className="mt-[33px]">
              <label className="block mb-2 text-[18px] font-medium">
                Name English
              </label>
              <input
                type="text"
                name="en"
                placeholder="Name English"
                value={formData.en}
                onChange={handleChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
              />
            </div>
            <div className="mt-5">
              <label className="block mb-2 text-[18px] font-medium">
                Photo English
              </label>
              <input
                type="file"
                name="photo_en"
                accept="image/*"
                onChange={handleFileChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]
               file:bg-transparent file:rounded-[10px] file:border-[#767676]
               file:border-1 file:mt-[12px]"
              />
            </div>
            <div className="mt-5">
              <label className="block mb-2 text-[18px] font-medium">
                PDF English
              </label>
              <input
                type="file"
                name="pdf_en"
                accept="application/pdf"
                onChange={handleFileChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]
               file:bg-transparent file:rounded-[10px] file:border-[#767676]
               file:border-1 file:mt-[12px]"
              />
            </div>

            {/* ===== Serbian ===== */}
            <div className="mt-[33px]">
              <label className="block mb-2 text-[18px] font-medium">
                Name Serbian
              </label>
              <input
                type="text"
                name="sr"
                placeholder="Name Serbian"
                value={formData.sr}
                onChange={handleChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
              />
            </div>
            <div className="mt-5">
              <label className="block mb-2 text-[18px] font-medium">
                Photo Serbian
              </label>
              <input
                type="file"
                name="photo_sr"
                accept="image/*"
                onChange={handleFileChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]
               file:bg-transparent file:rounded-[10px] file:border-[#767676]
               file:border-1 file:mt-[12px]"
              />
            </div>
            <div className="mt-5">
              <label className="block mb-2 text-[18px] font-medium">
                PDF Serbian
              </label>
              <input
                type="file"
                name="pdf_sr"
                accept="application/pdf"
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

export default CreatePublication;
