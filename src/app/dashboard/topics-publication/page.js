"use client";

import { CreateBlogCategoryModal, CreateTopicsPulication } from "@/components";
import {
  deleteTopicsPublication,
  getAllTopicsPublication,
} from "@/store/features/categoryPublicationSlice";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TopicsPublication = () => {
  const dispatch = useDispatch();
  const topicCategoryData =
    useSelector((state) => state.categoryPublication.topicsCategoryData) || [];
  const createTopicCategoryLoading = useSelector(
    (state) => state.categoryPublication.createTopicsPublicationLoading
  );
  const deleteTopicCategoryLoading = useSelector(
    (state) => state.categoryPublication.deleteTopicsPublicationLoading
  );
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    dispatch(getAllTopicsPublication());
  }, [createTopicCategoryLoading, deleteTopicCategoryLoading]);
  return (
    <div className="m-2 md:m-10 mt-24 p-2">
      <div className="flex flex-col md:flex-row md:justify-between md:mb-10 mt-5">
        <div className="relative">
          <input
            type="text"
            id="table-search"
            className="block p-5 text-sm text-gray-900 border border-[#888888] rounded-lg w-80 bg-transparent focus:ring-[#888888] focus:border-[#888888] dark:border-dark dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#888888] dark:focus:border-[#888888] h-[50px]"
            placeholder="Search"
          />
        </div>
        <button
          className="bg-[#B8F900] w-[283px] font-medium py-2 px-4 rounded h-[50px] text-[#121212] text-[18px] leading-[22px]"
          onClick={openModal}
        >
          Add Topics Category Filter
        </button>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="bg-[#fff]">
            <tr>
              <th scope="col" className="px-6 py-6">
                Slug
              </th>
              <th scope="col" className="px-6 py-6">
                Name English
              </th>
              <th scope="col" className="px-6 py-6">
                Name Albania
              </th>
              <th scope="col" className="px-6 py-6">
                Name Serbian
              </th>

              <th scope="col" className="px-6 py-6">
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
            {topicCategoryData.map((item, index) => (
              <tr
                key={item.id}
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700`}
              >
                <td className="px-6 py-6">{item.slug}</td>
                <td className="px-6 py-6">{item?.translations?.en}</td>
                <td className="px-6 py-6">{item?.translations?.sq}</td>
                <td className="px-6 py-6">{item?.translations?.sr}</td>

                <td className="px-6 py-6 flex   ">
                  <button
                    onClick={() => dispatch(deleteTopicsPublication(item.id))}
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
      {isOpen && <CreateTopicsPulication openModal={openModal} />}
    </div>
  );
};

export default TopicsPublication;
