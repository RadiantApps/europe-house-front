"use client";

import { deleteUser, getUser } from "@/store/features/userSlice";
import { formatYear } from "@/utils/utils";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { CreateUserModal, UpdateUserModal } from "@/components";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.usersData) || [];
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [itemUser, setItemUser] = useState(null);
  const createUserLoading = useSelector(
    (state) => state.user.createUserLoading
  );
  const deleteUserLoading = useSelector(
    (state) => state.user.deleteUserLoading
  );
  const updateUserLoading = useSelector(
    (state) => state.user.updateUserLoading
  );

  const filterUserData = userData.filter((item) => {
    const name =
      item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const surname =
      item.surname &&
      item.surname.toLowerCase().includes(searchTerm.toLowerCase());
    const email =
      item.email && item.email.toLowerCase().includes(searchTerm.toLowerCase());
    const role =
      item.role && item.role.toLowerCase().includes(searchTerm.toLowerCase());
    return name || surname || email || role;
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const openModalUpdate = (item) => {
    setItemUser(item);
    setIsOpenUpdate(!isOpenUpdate);
  };

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    dispatch(getUser());
  }, [createUserLoading, deleteUserLoading, updateUserLoading]);

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
            Add user
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
            {filterUserData.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-4 py-4">{item.name}</td>
                <td className="px-4 py-4">{item.surname}</td>
                <td className="px-4 py-4">{item.email}</td>
                <td className="px-4 py-4">{item.role}</td>
                <td className="px-4 py-4">{formatYear(item.created_at)}</td>
                <td className="px-4 py-4 flex space-x-2">
                  <button
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
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpen && <CreateUserModal openModal={openModal} />}
      {isOpenUpdate && (
        <UpdateUserModal
          openModal={() => setIsOpenUpdate(!isOpenUpdate)}
          item={itemUser}
        />
      )}
    </div>
  );
};

export default page;
