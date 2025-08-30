"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { CreateTeamModal } from "@/components";
const About = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(!isOpen);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2">
      <div className="flex justify-between mb-10">
        <div>
          <button
            className="bg-[#B8F900] w-[283px]  font-medium py-2 px-4 rounded h-[50px] text-[#121212] text-[18px] leading-[22px]"
            onClick={openModal}
          >
            Add Team
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
                Postion
              </th>
              <th scope="col" className="px-4 py-4">
                Photo
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
            {[]?.map((item) => (
              <tr
                key={item.blog_id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-4 py-4">{item?.translations?.sq?.title}</td>
                <td className="px-4 py-4">{item?.translations?.en?.title}</td>
                <td className="px-4 py-4">{item?.translations?.sr?.title}</td>
                <td className="px-4 py-4 flex space-x-2">
                  <button
                    onClick={() => openModalUpdate(item)}
                    className="bg-[#F5F5F5] rounded-[10px] w-[93px] h-[32px] flex items-center justify-center text-[#888] text-[16px] leading-[22px]"
                  >
                    Edit
                  </button>
                  <Link
                    href="/"
                    className="bg-[#F5F5F5] rounded-[10px] w-[93px] h-[32px] flex items-center justify-center text-[#888] text-[16px] leading-[22px]"
                  >
                    Go to blog
                  </Link>
                  <button
                    onClick={() => {
                      dispatch(deleteBlogs(item.blog_id));
                    }}
                    className="bg-[#F5F5F5] rounded-[10px] w-[93px] h-[32px] flex items-center justify-center text-[#888] text-[16px] leading-[22px]"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpen && <CreateTeamModal openModal={openModal} />}
    </div>
  );
};

export default About;
