"use client";

import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CKEditorClient from "@/utils/editor";
import { toast } from "react-toastify";
import { createEventDetails } from "@/store/features/eventDetailSlice";

const CreateEventDetailsAdmin = ({ openModal, id }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState("text");

  const [text, setText] = useState({
    en: { title: "", content: "" },
    sq: { title: "", content: "" },
    sr: { title: "", content: "" },
  });

  // Photo / Gallery / Video
  const [photo, setPhoto] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const handleTextChange = (lang, field, value) => {
    setText((prev) => ({
      ...prev,
      [lang]: { ...prev[lang], [field]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("type", type);

    if (type === "text") {
      formData.append("text", JSON.stringify(text));
    } else if (type === "photo" && photo) {
      formData.append("photo", photo);
    } else if (type === "gallery" && gallery.length > 0) {
      Array.from(gallery).forEach((file) => formData.append("gallery", file));
    } else if (type === "video") {
      formData.append("youtube_url", youtubeUrl);
    }
    dispatch(createEventDetails({ id, data: formData }))
      .uwrap()
      .then(() => {
        toast.success("Event Details added successfull");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gray-900 bg-opacity-40"
        onClick={openModal}
      ></div>

      {/* Modal */}
      <div
        className="relative bg-[#EFEFEF] pl-[65px] pr-[65px] rounded-lg shadow-lg hide-scrollbar"
        style={{ width: "60%", height: "70%", overflowY: "auto" }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-normal text-gray-500 text-center flex-1 mt-[10px]">
            Create Blog Detail
          </h3>
          <button onClick={openModal} className="ml-4">
            <IoIosCloseCircle size={24} />
          </button>
        </div>

        {/* Type selector */}
        <div className="mt-[33px] mb-[33px]">
          <label className="block mb-2 text-[18px] font-medium">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
          >
            <option value="text">Text</option>
            <option value="photo">Photo</option>
            <option value="gallery">Gallery</option>
            <option value="video">YouTube Video</option>
          </select>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Text type */}
          {type === "text" &&
            ["en", "sq", "sr"].map((lang) => (
              <div key={lang} className="mt-[33px]">
                <h3 className="font-semibold mb-2">
                  {lang.toUpperCase()} Text
                </h3>

                <div>
                  <label className="block mb-2 text-[18px] font-medium">
                    Content
                  </label>
                  <CKEditorClient
                    value={text[lang].content}
                    onChange={(data) => handleTextChange(lang, "content", data)}
                  />
                </div>
              </div>
            ))}

          {/* Video type */}
          {type === "video" && (
            <div className="mb-4">
              <label className="block mb-2 text-[18px] font-medium">
                YouTube URL
              </label>
              <input
                type="text"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
                placeholder="Youtube"
              />
            </div>
          )}

          {/* Photo type */}
          {type === "photo" && (
            <div className="mb-4">
              <label className="block mb-2 text-[18px] font-medium">
                Photo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]
                   file:bg-transparent file:rounded-[10px] file:border-[#767676]
                   file:border-1 file:mt-[12px]"
              />
            </div>
          )}

          {/* Gallery type */}
          {type === "gallery" && (
            <div className="mb-4">
              <label className="block mb-2 text-[18px] font-medium">
                Gallery Photos
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setGallery(e.target.files)}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]
                   file:bg-transparent file:rounded-[10px] file:border-[#767676]
                   file:border-1 file:mt-[12px]"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full h-[50px] bg-[#B8F900] rounded-[10px] text-[18px] font-medium leading-[22px] text-[#000] mb-[67px] mt-[40px]"
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEventDetailsAdmin;
