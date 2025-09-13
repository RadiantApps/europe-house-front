"use client";

import { CreateEventCategoryModal } from "@/components";
import {
  deleteCategoryEvent,
  getAllCategoryEvent,
} from "@/store/features/categoryEventSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const EventCategory = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const categoryEventData =
    useSelector((state) => state.categoryevent.getAllCategoryEventData) || [];
  const openModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    dispatch(getAllCategoryEvent());
  }, []);

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
          Add Event Category Filter
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
            {categoryEventData?.map((item, index) => (
              <tr
                key={item.category_event_id}
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700`}
              >
                <td className="px-6 py-6">{item.slug}</td>
                <td className="px-6 py-6">{item?.translations?.en?.name}</td>
                <td className="px-6 py-6">{item?.translations?.sq?.name}</td>
                <td className="px-6 py-6">{item?.translations?.sr?.name}</td>

                <td className="px-6 py-6 flex   ">
                  <button
                    onClick={() => dispatch(deleteCategoryEvent(item.id))}
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

      {isOpen && <CreateEventCategoryModal openModal={openModal} />}
    </div>
  );
};

export default EventCategory;
