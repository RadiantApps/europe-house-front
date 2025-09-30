"use client";

import { getProgrammes } from "@/store/features/programmesSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProgrammes } from "@/store/features/programmesSlice";
import Image from "next/image";
import { imageUrl } from "@/config";
import EuSupport from "./EuSupport";
import CreateProgrammeModal from "@/components/modal/programme/CreateProgrammeModal";
import EditProgrammeModal from "@/components/modal/programme/EditProgrammeModal";
const Support = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const programmeData =
    useSelector((state) => state.programme.programmeData) || [];
  const deleteProgrammeLoading = useSelector(
    (state) => state.programme.deleteProgrammeLoading
  );
  const createProgrammeLoading = useSelector(
    (state) => state.programme.createProgrammeLoading
  );

  const updateProgrammeLoading = useSelector(
    (state) => state.programme.updateProgrammeLoading
  );

  const openEdit = (item) => {
    setIsOpenEdit(!isOpenEdit);
    setEditData(item);
  };

  const openModal = () => setIsOpen(!isOpen);
  useEffect(() => {
    dispatch(getProgrammes());
  }, [deleteProgrammeLoading, createProgrammeLoading, updateProgrammeLoading]);
  return (
    <div className="m-2 md:m-10 mt-24 p-2">
      <div className="mb-10">
        <div className="flex justify-between">
          <button
            className="bg-[#B8F900] w-[283px] font-medium py-2 px-4 rounded h-[50px] text-[#121212] text-[18px] leading-[22px]"
            onClick={openModal}
          >
            Add Programmes
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
                photo
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
            {programmeData.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-4 py-4">{item.name}</td>
                <td className="px-4 py-4">
                  <Image
                    src={`${imageUrl}/${item.url}`}
                    width={100}
                    height={100}
                    alt={item.name}
                  />
                </td>

                <td className="px-4 py-4 flex space-x-2">
                  <button
                    onClick={() => {
                      openEdit(item);
                    }}
                    className="bg-[#F5F5F5] rounded-[10px] w-[93px] h-[32px] flex items-center justify-center text-[#888] text-[16px] leading-[22px]"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      dispatch(deleteProgrammes(item.id));
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
      {isOpen && <CreateProgrammeModal openModal={openModal} />}

      {isOpenEdit && (
        <EditProgrammeModal openModal={openEdit} editData={editData} />
      )}
      <EuSupport />
    </div>
  );
};

export default Support;
