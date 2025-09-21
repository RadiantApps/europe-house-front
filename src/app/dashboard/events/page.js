"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { CreateEventModal, UpdateEventModal } from "@/components";
import { deleteEvent, getEvents } from "@/store/features/eventsSlice";
import { formatDateYear, getLanguageLabel } from "@/utils/utils";

const Events = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [itemEdit, setItemEdit] = useState(null);
  const dataEvent = useSelector((state) => state.events.getAllEventData) || [];
  const createEventLoading = useSelector(
    (state) => state.events.createEventLoading
  );
  const deleteEventLoading = useSelector(
    (state) => state.events.deleteEventLoading
  );
  const updateEventLoading = useSelector(
    (state) => state.events.updateEventLoading
  );
  const openModal = () => setIsOpen(!isOpen);

  const openModalEdit = (item) => {
    setIsOpenEdit(!isOpenEdit);
    setItemEdit(item);
  };

  useEffect(() => {
    dispatch(getEvents());
  }, [createEventLoading, deleteEventLoading, updateEventLoading]);

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

      <div
        className="relative overflow-x-auto shadow-md sm:rounded-lg"
        style={{ borderRadius: 1 }}
      >
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="bg-[#fff]">
            <tr>
              <th scope="col" className="px-4 py-4">
                Date
              </th>
              <th scope="col" className="px-4 py-4">
                Start time
              </th>
              <th scope="col" className="px-4 py-4">
                End time
              </th>
              <th scope="col" className="px-4 py-4">
                Location
              </th>
              <th scope="col" className="px-4 py-4">
                Category Event
              </th>
              <th scope="col" className="px-4 py-4">
                Language Speak
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
            {dataEvent?.map((item) => {
              const locationName = item?.location_translations?.find(
                (loc) => loc?.language_code === "en"
              );

              const categoryName = item?.category_translations?.find(
                (cat) => cat?.language_code === "en"
              );
              return (
                <tr
                  key={item.event_id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-4 py-4">
                    {formatDateYear(item?.event_date)}
                  </td>
                  <td className="px-4 py-4">{item?.start_time}</td>
                  <td className="px-4 py-4">{item?.end_time}</td>
                  <td className="px-4 py-4">
                    {locationName?.location_name || ""}
                  </td>
                  <td className="px-4 py-4">{categoryName?.name || ""}</td>
                  <td className="px-4 py-4">
                    {getLanguageLabel(item?.language)}
                  </td>
                  <td className="px-4 py-4 flex space-x-2">
                    <button
                      onClick={() => {
                        openModalEdit(item);
                      }}
                      className="bg-[#F5F5F5] rounded-[10px] w-[93px] h-[32px] flex items-center justify-center text-[#888] text-[16px] leading-[22px]"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => {
                        dispatch(deleteEvent(item?.event_id));
                      }}
                      className="bg-[#F5F5F5] rounded-[10px] w-[93px] h-[32px] flex items-center justify-center text-[#888] text-[16px] leading-[22px]"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {isOpen && <CreateEventModal openModal={openModal} />}
      {isOpenEdit && (
        <UpdateEventModal openModal={openModalEdit} editData={itemEdit} />
      )}
    </div>
  );
};

export default Events;
