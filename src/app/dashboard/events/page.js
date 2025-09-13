"use client";

import { CreateEventCategoryModal } from "@/components";
import { getAllCategoryEvent } from "@/store/features/categoryEventSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Events = () => {
  const router = useRouter();
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
      <div className="mb-10">
        <button
          onClick={() => router.push("/dashboard/category-event")}
          className=" font-bold underline"
        >
          MANAGE CATEGORY FILTERS
        </button>
      </div>
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
          Add Event
        </button>
      </div>
    </div>
  );
};

export default Events;
