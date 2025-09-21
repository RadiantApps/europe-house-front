"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateTeamModal,
  EditTeamPositonModal,
  EditSocialMediaModal,
  EditTeamModal,
} from "@/components";
import { deleteTeams, getAllTeams } from "@/store/features/teamSlice";
import Image from "next/image";
import { imageUrl } from "@/config";
const About = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const teamsData = useSelector((state) => state.team.allTeamsData) || [];
  const createTeamLoading = useSelector(
    (state) => state.team.createTeamLoading
  );
  const deleteTeamLoading = useSelector(
    (state) => state.team.deleteTeamLoading
  );
  const updatePositionTeamLoading = useSelector(
    (state) => state.team.updatePositionTeamLoading
  );
  const updateSocialMediaLoading = useSelector(
    (state) => state.team.updateSocialMediaLoading
  );
  const updateTeamInfoLoading = useSelector(
    (state) => state.team.updateTeamInfoLoading
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditPosition, setIsOpenEditPosition] = useState(false);
  const [itemEditPosition, setItemEditPosition] = useState(null);
  const [itemEditSocialMedia, setItemEditSocialMedia] = useState(null);
  const [isOpenEditSocialMedia, setIsOpenEditSocialMedia] = useState(false);
  const [itemEditMain, setItemEditMain] = useState(null);
  const [isOpenEditMain, setIsOpenEditMain] = useState(false);

  const openModal = () => setIsOpen(!isOpen);

  const openEditPositionModal = (item) => {
    setItemEditPosition(item);
    setIsOpenEditPosition(!isOpenEditPosition);
  };

  const openEditSocialMediaModal = (item) => {
    setItemEditSocialMedia(item);
    setIsOpenEditSocialMedia(!isOpenEditSocialMedia);
  };

  const openEditMainModal = (item) => {
    setItemEditMain(item);
    setIsOpenEditMain(!isOpenEditMain);
  };

  useEffect(() => {
    dispatch(getAllTeams());
  }, [
    createTeamLoading,
    deleteTeamLoading,
    updatePositionTeamLoading,
    updateSocialMediaLoading,
    updateTeamInfoLoading,
  ]);

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
                Email
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
            {teamsData?.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-4 py-4">{item?.name}</td>
                <td className="px-4 py-4">{item?.surname}</td>
                <td className="px-4 py-4">{item?.email}</td>
                <td className="px-4 py-4">
                  <Image
                    src={`${imageUrl}/${item?.photo}`}
                    alt="item name"
                    width={100}
                    height={100}
                  />
                </td>
                <td className="px-4 py-4 flex space-x-2">
                  <button
                    onClick={() => {
                      openEditMainModal(item);
                    }}
                    className="bg-[#F5F5F5] rounded-[10px] w-[93px] h-[32px] flex items-center justify-center text-[#888] text-[16px] leading-[22px]"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      openEditPositionModal(item);
                    }}
                    className="bg-[#F5F5F5] rounded-[10px] w-[93px] h-[32px] flex items-center justify-center text-[#888] text-[16px] leading-[22px]"
                  >
                    Edit Position
                  </button>
                  <button
                    onClick={() => {
                      openEditSocialMediaModal(item);
                    }}
                    className="bg-[#F5F5F5] rounded-[10px] w-[150px] h-[32px] flex items-center justify-center text-[#888] text-[16px] leading-[22px]"
                  >
                    Edit Social media
                  </button>
                  <button
                    onClick={() => {
                      dispatch(deleteTeams(item.id));
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
      {isOpenEditPosition && (
        <EditTeamPositonModal
          openModal={() => setIsOpenEditPosition(!isOpenEditPosition)}
          data={itemEditPosition}
        />
      )}
      {isOpenEditSocialMedia && (
        <EditSocialMediaModal
          openModal={() => setIsOpenEditSocialMedia(!isOpenEditSocialMedia)}
          data={itemEditSocialMedia}
        />
      )}
      {isOpenEditMain && (
        <EditTeamModal
          openModal={() => setIsOpenEditMain(!isOpenEditMain)}
          data={itemEditMain}
        />
      )}
    </div>
  );
};

export default About;
