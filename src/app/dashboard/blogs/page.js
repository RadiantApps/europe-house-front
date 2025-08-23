"use client";
import { getAllBlogs } from "@/store/features/blogSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { CreateBlogModal } from "@/components";
const pages = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const blogData = useSelector((state) => state.blog.blogsData) || [];
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(!isOpen);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);
  return (
    <div className="m-2 md:m-10 mt-24 p-2">
      <div className="mb-10">
        <button
          onClick={() => router.push("/dashboard/category-blog")}
          className=" font-bold underline"
        >
          MANAGE CATEGORY FILTERS
        </button>
      </div>
      <div className="flex justify-between">
        <div className="mb-10">
          <input
            type="text"
            id="table-search"
            className="block p-5 text-sm text-gray-900 border border-[#888888] rounded-lg w-80 bg-transparent focus:ring-[#888888] focus:border-[#888888]  dark:border-dark dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#888888] dark:focus:border-[#888888] h-[50px]"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div>
          <button
            className="bg-[#B8F900] w-[283px]  font-medium py-2 px-4 rounded h-[50px] text-[#121212] text-[18px] leading-[22px]"
            onClick={openModal}
          >
            Add Blog
          </button>
        </div>
      </div>

      <div
        className="relative overflow-x-auto shadow-md sm:rounded-lg"
        style={{ borderRadius: 1 }}
      >
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="bg-[#fff]">
            <tr>
              <th scope="col" className="px-4 py-4">
                Name
              </th>
              <th scope="col" className="px-4 py-4">
                Surname
              </th>
              <th scope="col" className="px-4 py-4">
                Email
              </th>
              <th scope="col" className="px-4 py-4">
                Role
              </th>
              <th scope="col" className="px-4 py-4">
                Date created
              </th>
              <th scope="col" className="px-4 py-4 ">
                Action
              </th>
            </tr>
            <tr>
              <td colSpan="6">
                <hr className="border-t border-gray-300" />
              </td>
            </tr>
          </thead>
          <tbody>
            {[].map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-4 py-4">{item.name}</td>
                <td className="px-4 py-4">{item.surname}</td>
                <td className="px-4 py-4">{item.email}</td>
                <td className="px-4 py-4">{item.role}</td>
                <td className="px-4 py-4 flex space-x-2">
                  {/* <button
                    onClick={() => openModalUpdate(item)}
                    className="bg-[#F5F5F5] rounded-[10px] w-[93px] h-[32px] flex items-center justify-center text-[#888] text-[16px] leading-[22px]"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDeleteUser(item.id);
                    }}
                    className="bg-[#F5F5F5] rounded-[10px] w-[93px] h-[32px] flex items-center justify-center text-[#888] text-[16px] leading-[22px]"
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpen && <CreateBlogModal openModal={openModal} />}
    </div>
  );
};

export default pages;
