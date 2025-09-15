"use client";

import { CreateEuSupportModal, UpdateEuSupportModal } from "@/components";
import { imageUrl } from "@/config";
import {
  deleteEuSupport,
  getAllEuSupport,
} from "@/store/features/eusupportSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
const EuSupport = () => {
  const dispatch = useDispatch();
  const euSupportData =
    useSelector((state) => state.eusupport.euSupportData) || [];
  const createEuSupportLoading = useSelector(
    (state) => state.eusupport.createEuSupportLoading
  );
  const deleteEuSupportLoading = useSelector(
    (state) => state.eusupport.deleteEuSupportLoading
  );
  const updateEuSupportLoading = useSelector(
    (state) => state.eusupport.updateEuSupportLoading
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [itemEdit, setItemEdit] = useState(null);

  const openModal = () => setIsOpen(!isOpen);
  const openEditModal = () => setIsOpenEdit(!isOpenEdit);
  const openEdit = (item) => {
    setIsOpenEdit(!isOpenEdit);
    setItemEdit(item);
  };
  useEffect(() => {
    dispatch(getAllEuSupport());
  }, [createEuSupportLoading, deleteEuSupportLoading, updateEuSupportLoading]);
  return (
    <div className="mt-20">
      <div className="mb-10">
        <div className="flex justify-between">
          <button
            className="bg-[#B8F900] w-[283px] font-medium py-2 px-4 rounded h-[50px] text-[#121212] text-[18px] leading-[22px]"
            onClick={openModal}
          >
            Add Eu Support
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
            {euSupportData.map((item) => (
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
                      dispatch(deleteEuSupport(item.id));
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
      {isOpen && <CreateEuSupportModal openModal={openModal} />}
      {isOpenEdit && (
        <UpdateEuSupportModal openModal={openEditModal} editData={itemEdit} />
      )}
    </div>
  );
};

export default EuSupport;
