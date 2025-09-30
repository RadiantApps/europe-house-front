"use client";
// import { CreateContactModal } from "@/components";
import { deleteLocation, getLocation } from "@/store/features/locationSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateContactModal from "@/components/modal/contact/CreateContactModal";

const Contact = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const locationData =
    useSelector((state) => state.location.getLocationData) || [];
  const createLocationLoading = useSelector(
    (state) => state.location.createLocationLoading
  );
  const deleteLocationLoading = useSelector(
    (state) => state.location.deleteLocationLoading
  );
  const openModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch, createLocationLoading, deleteLocationLoading]);

  const formattedLocationData = locationData.map((loc) => {
    const translationsMap = {};
    loc.translations?.forEach((t) => {
      translationsMap[t.language_code] = t.location_name;
    });
    return { ...loc, translationsMap };
  });

  return (
    <div className="m-2 md:m-10 mt-24 p-2">
      <div className="mb-10">
        <div className="flex justify-between">
          <button
            className="bg-[#B8F900] w-[283px] font-medium py-2 px-4 rounded h-[50px] text-[#121212] text-[18px] leading-[22px]"
            onClick={openModal}
          >
            Add Location
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
                Email
              </th>
              <th scope="col" className="px-4 py-4">
                Name Albania
              </th>
              <th scope="col" className="px-4 py-4">
                Name English
              </th>
              <th scope="col" className="px-4 py-4">
                Name Serbian
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
            {formattedLocationData?.map((item) => (
              <tr
                key={item.location_id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-4 py-4">{item.email}</td>
                <td className="px-4 py-4">{item.translationsMap?.sq || "-"}</td>
                <td className="px-4 py-4">{item.translationsMap?.en || "-"}</td>
                <td className="px-4 py-4">{item.translationsMap?.sr || "-"}</td>
                <td className="px-4 py-4 flex space-x-2">
                  <button
                    onClick={() => {
                      dispatch(deleteLocation(item?.location_id));
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

      {isOpen && <CreateContactModal openModal={openModal} />}
    </div>
  );
};

export default Contact;
