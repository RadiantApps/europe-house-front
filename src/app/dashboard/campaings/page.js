"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { CreateCampingsModal, EditCampaingsModal } from "@/components";
import {
  deleteCampings,
  getAllCampaings,
} from "@/store/features/campaingsSlice";
import Link from "next/link";

const CampaingsDash = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const campaingData =
    useSelector((state) => state.campaing.getAllCampaingsData) || [];
  const createCampaingLoading = useSelector(
    (state) => state.campaing.createCampingsLoading
  );
  const deleteCampaingLoading = useSelector(
    (state) => state.campaing.deleteCampingsLoading
  );
  const updateCampingLoading = useSelector(
    (state) => state.campaing.updateCampaingsLoading
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [itemEdit, setItemEdit] = useState(null);

  const openModalEdit = (item) => {
    setItemEdit(item);
    setIsOpenEdit(!isOpenEdit);
  };
  const openModal = () => setIsOpen(!isOpen);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(getAllCampaings());
  }, [createCampaingLoading, deleteCampaingLoading, updateCampingLoading]);
  return (
    <div className="m-2 md:m-10 mt-24 p-2">
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
            Add Campaings
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
            {campaingData?.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-4 py-4">{item?.translations?.sq?.title}</td>
                <td className="px-4 py-4">{item?.translations?.en?.title}</td>
                <td className="px-4 py-4">{item?.translations?.sr?.title}</td>
                <td className="px-4 py-4 flex space-x-2">
                  <button
                    onClick={() => {
                      openModalEdit(item);
                    }}
                    className="bg-[#F5F5F5] rounded-[10px] w-[93px] h-[32px] flex items-center justify-center text-[#888] text-[16px] leading-[22px]"
                  >
                    Edit
                  </button>
                  <Link
                    href={`/dashboard/campaings/${item?.id}`}
                    className="bg-[#F5F5F5] rounded-[10px] w-[153px] h-[32px] flex items-center justify-center text-[#888] text-[16px] leading-[22px]"
                  >
                    Go to Campaing
                  </Link>
                  <button
                    onClick={() => dispatch(deleteCampings(item?.id))}
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
      {isOpen && <CreateCampingsModal openModal={openModal} />}
      {isOpenEdit && (
        <EditCampaingsModal openModal={openModalEdit} editData={itemEdit} />
      )}
    </div>
  );
};

export default CampaingsDash;
