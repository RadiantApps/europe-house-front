"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";

import Image from "next/image";
import { imageUrl } from "@/config";
import CreateBannerEventDetails from "@/components/modal/event/CreateBannerEventDetails";
import {
  deleteEventDetails,
  getEventBanner,
  getEventDetails,
  updateOrder,
} from "@/store/features/eventDetailSlice";
import UpdareBannerEventDetails from "@/components/modal/event/UpdareBannerEventDetails";
import CreateEventDetailsAdmin from "@/components/modal/event/CreateEventDetailsAdmin";
import EditEventDetailsAdmin from "@/components/modal/event/EditEventDetailsAdmin";

const EventDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const bannerData =
    useSelector((state) => state.eventDetails.getBannerData) || [];
  const eventDetailsData =
    useSelector((state) => state.eventDetails.eventDetailsData) || [];
  const createBannerLoading = useSelector(
    (state) => state.eventDetails.createBannerDetailLoading
  );

  const createEventDetailsLoading = useSelector(
    (state) => state.eventDetails.createEventDetailsLoading
  );

  const updateBannerLoading = useSelector(
    (state) => state.eventDetails.updateBannerLoading
  );

  const deleteEventDetailsLoading = useSelector(
    (state) => state.eventDetails.deleteEventDetailsLoading
  );
  const updateEventDetailsLoading = useSelector(
    (state) => state.eventDetails.updateEventDetailLoading
  );
  const [isOpenCreateBanner, setIsOpenCreateBanner] = useState(false);
  const [isOpenUpdateBanner, setIsOpenUpdateBanner] = useState(false);
  const [isOpenCreateEventModal, setIsOpenCreateEventModal] = useState(false);
  const [isOpenEditItemModal, setIsOpenEditItemModal] = useState(false);
  const [editDataItem, setEditDataItem] = useState(null);

  const [items, setItems] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const openCreateEventModal = () =>
    setIsOpenCreateEventModal(!isOpenCreateEventModal);

  const handleOpenCreateBaner = () =>
    setIsOpenCreateBanner(!isOpenCreateBanner);

  const openEditBanner = () => setIsOpenUpdateBanner(!isOpenUpdateBanner);

  const openEditItemModal = (item) => {
    setEditDataItem(item);
    setIsOpenEditItemModal(!isOpenEditItemModal);
  };

  const bannersExist = bannerData.length > 0;

  useEffect(() => {
    const parsedItems = eventDetailsData.map((item) => ({
      ...item,
      contentParsed:
        typeof item.content === "string"
          ? JSON.parse(item.content)
          : item.content,
    }));

    parsedItems.sort((a, b) => a.order - b.order);

    setItems(parsedItems);
  }, [eventDetailsData]);

  useEffect(() => {
    dispatch(getEventBanner(id));
    dispatch(getEventDetails(id));
  }, [
    dispatch,
    id,
    createBannerLoading,
    updateBannerLoading,
    createEventDetailsLoading,
    deleteEventDetailsLoading,
    updateEventDetailsLoading,
  ]);

  const onDragStart = (index) => setDraggedIndex(index);
  const onDragOver = (e) => e.preventDefault();
  const onDrop = (index) => {
    if (draggedIndex === null) return;

    const newItems = [...items];
    const [movedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(index, 0, movedItem);

    setItems(newItems);
    setDraggedIndex(null);

    const updatedOrders = newItems.map((item, idx) => ({
      id: item.id,
      order: idx + 1,
    }));

    console.log(updatedOrders);
    dispatch(updateOrder({ items: JSON.stringify(updatedOrders) }));
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2">
      <div className="mb-10">
        {!bannersExist ? (
          <button
            className="bg-[#B8F900] w-[283px] font-medium py-2 px-4 rounded h-[50px] text-[#121212] text-[18px] leading-[22px]"
            onClick={handleOpenCreateBaner}
          >
            Add Banner
          </button>
        ) : (
          <button
            className="bg-[#FFA500] w-[283px] font-medium py-2 px-4 rounded h-[50px] text-[#121212] text-[18px] leading-[22px]"
            onClick={openEditBanner}
          >
            Update Banner
          </button>
        )}
      </div>

      {isOpenCreateBanner && (
        <CreateBannerEventDetails
          openModal={handleOpenCreateBaner}
          eventId={id}
        />
      )}

      {isOpenUpdateBanner && (
        <UpdareBannerEventDetails
          openModal={openEditBanner}
          eventId={id}
          existingBanners={bannerData}
        />
      )}

      {bannersExist && (
        <div className="grid grid-cols-3 gap-4 mt-4">
          {bannerData.map((banner) => (
            <div key={banner.id} className="flex flex-col items-center">
              <img
                src={`${imageUrl}/${banner.image_path}`}
                alt={`Banner ${banner.language_code}`}
                className="w-full h-40 object-cover rounded"
              />
              <span className="mt-1 text-sm font-medium">
                {banner.language_code.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-20 mb-10">
        <button
          className="bg-[#B8F900] w-[283px] font-medium py-2 px-4 rounded h-[50px] text-[#121212] text-[18px] leading-[22px]"
          onClick={openCreateEventModal}
        >
          Add Event Details
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => {
          const { type, contentParsed } = item;

          return (
            <div
              key={item.id}
              draggable
              onDragStart={() => onDragStart(index)}
              onDragOver={onDragOver}
              onDrop={() => onDrop(index)}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col"
            >
              {type === "text" && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: contentParsed?.en?.content,
                  }}
                />
              )}

              {type === "photo" && (
                <Image
                  src={`${imageUrl}/${contentParsed?.path}`}
                  alt=""
                  width={300}
                  height={300}
                  className="rounded-md"
                />
              )}

              {type === "gallery" && (
                <div className="flex space-x-2 overflow-x-auto">
                  {contentParsed?.map((img) => (
                    <Image
                      key={img.id}
                      src={`${imageUrl}/${img.path}`}
                      width={200}
                      height={200}
                      className="rounded-md"
                    />
                  ))}
                </div>
              )}

              {type === "video" && (
                <iframe
                  width="300"
                  height="200"
                  src={contentParsed?.youtube_url}
                  title="YouTube video"
                  allowFullScreen
                  className="rounded-md"
                />
              )}

              <div className="flex space-x-2 mb-2">
                <button
                  className="bg-[#B8F900] text-white px-3 py-1 rounded text-[20px] mt-10 w-full h-[50px]"
                  onClick={() => openEditItemModal(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded text-[20px] mt-10 w-full h-[50px]"
                  onClick={() => dispatch(deleteEventDetails(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {isOpenCreateEventModal && (
        <CreateEventDetailsAdmin openModal={openCreateEventModal} id={id} />
      )}

      {isOpenEditItemModal && (
        <EditEventDetailsAdmin
          openModal={openEditItemModal}
          item={editDataItem}
        />
      )}
    </div>
  );
};

export default EventDetails;
