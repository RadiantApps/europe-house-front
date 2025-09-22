"use client";
import { IoIosCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllBlogCategory } from "@/store/features/blogCategorySlice";
import { createBlogs } from "@/store/features/blogSlice";

const CreateBlogModal = ({ openModal }) => {
  const dispatch = useDispatch();
  const blogCategoryData =
    useSelector((state) => state.blogCategory.blogCategoryData) || [];

  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    category_blog_id: "",
    slug: "",
    sq: "",
    sr: "",
    en: "",
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
    const translations = [
      { title: formData.sq, language: "sq" },
      { title: formData.en, language: "en" },
      { title: formData.sr, language: "sr" },
    ];
    const data = new FormData();
    data.append("category_blog_id", formData.category_blog_id);

    data.append("translations", JSON.stringify(translations));
    if (formData.photo_sq) data.append("photo_sq", formData.photo_sq);
    if (formData.photo_en) data.append("photo_en", formData.photo_en);
    if (formData.photo_sr) data.append("photo_sr", formData.photo_sr);

    dispatch(createBlogs(data))
      .unwrap()
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    dispatch(getAllBlogCategory());
  }, [dispatch]);

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
              <label
                htmlFor="category_blog_id"
                className="block mb-2 text-[18px] font-medium"
              >
                Blog Category
              </label>
              <select
                name="category_blog_id"
                id="category_blog_id"
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
                value={formData.category_blog_id}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                {blogCategoryData.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat?.translations?.en}
                  </option>
                ))}
              </select>
              {error && error.category_blog_id && (
                <span className="text-red-500">{error.category_blog_id}</span>
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

export default CreateBlogModal;
