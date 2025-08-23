"use client";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createBlogCategory } from "@/store/features/blogCategorySlice";

const CreateBlogCategoryModal = ({ openModal }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    slug: "",
    sq: "",
    sr: "",
    en: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.slug || !formData.sq || !formData.en || !formData.sr) {
      toast.error("Please fill all fields");
      return;
    }
    const data = {
      slug: formData.slug,
      translations: {
        sq: formData.sq,
        en: formData.en,
        sr: formData.sr,
      },
    };

    dispatch(createBlogCategory(data))
      .unwrap()
      .then(() => {
        toast.success("Category added successfull");
        setFormData({
          slug: "",
          sq: "",
          sr: "",
          en: "",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong!, try again.");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-15">
      <div
        className="bg-gray-900 bg-opacity-40 absolute inset-0"
        onClick={openModal}
      ></div>
      <div
        className="relative bg-[#EFEFEF] pl-[65px] pr-[65px] rounded-lg shadow-lg hide-scrollbar "
        style={{ width: "514px", height: "70%", overflowY: "auto" }}
      >
        <div className="p-6 ">
          <div className="flex items-center justify-between">
            <h3 className="mb-1 text-xl font-normal text-center text-gray-500 dark:text-gray-400">
              Add Blog Cateogry
            </h3>
            <button onClick={openModal}>
              <IoIosCloseCircle />
            </button>
          </div>

          <form autoComplete="off" onSubmit={onSubmit}>
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
              {error && error.name && (
                <span className="text-red-500">{error.name}</span>
              )}
            </div>

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

            <div className="flex items-center justify-center mt-5">
              <button
                type="submit"
                className="
                w-full 
                h-[50px] 
                bg-[#B8F900] 
                rounded-[10px] 
                text-[18px] 
                font-medium 
                leading-[22px] 
                text-[#000] 
                mb-[67px]
                "
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

export default CreateBlogCategoryModal;
