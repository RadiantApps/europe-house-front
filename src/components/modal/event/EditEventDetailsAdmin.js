"use client";

import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Image from "next/image";
import { imageUrl } from "@/config";
import { deletePhotoGalery } from "@/store/features/eventDetailSlice";
import CKEditorClient from "@/utils/editor";
import { toast } from "react-toastify";
import { updateEventDetail } from "@/store/features/eventDetailSlice";

const EditEventDetailsAdmin = ({ openModal, item }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(item);
  const [newFiles, setNewFiles] = useState([]);

  const handleContentChange = (lang, data) => {
    setFormData((prev) => ({
      ...prev,
      contentParsed: {
        ...prev.contentParsed,
        [lang]: { ...prev.contentParsed[lang], content: data },
      },
    }));
  };
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewPath = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        contentParsed: { ...prev.contentParsed, path: previewPath, file },
      }));
      setNewFiles([file]);
    }
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => ({
      id: crypto.randomUUID(),
      path: URL.createObjectURL(file),
      filename: file.name,
      file,
    }));

    setFormData((prev) => ({
      ...prev,
      contentParsed: [...prev.contentParsed, ...previews],
    }));
    setNewFiles((prev) => [...prev, ...files]);
  };

  const handleDeleteGalleryImage = (index) => {
    const imgToDelete = formData.contentParsed[index];
    dispatch(deletePhotoGalery({ id: formData?.id, data: imgToDelete }));

    setFormData((prev) => ({
      ...prev,
      contentParsed: prev.contentParsed.filter((_, i) => i !== index),
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    let payload;

    switch (formData.type) {
      case "text":
        payload = {
          id: formData.id,
          blog_id: formData.blog_id,
          type: "text",
          content: JSON.stringify(formData.contentParsed),
        };
        break;

      case "photo":
        payload = new FormData();
        payload.append("id", formData.id);
        payload.append("blog_id", formData.blog_id);
        payload.append("type", "photo");

        if (formData.contentParsed.file) {
          payload.append("photo", formData.contentParsed.file); // ✅ matches multer field
        } else {
          payload.append("content", JSON.stringify(formData.contentParsed));
        }
        break;

      case "gallery":
        payload = new FormData();
        payload.append("id", formData.id);
        payload.append("blog_id", formData.blog_id);
        payload.append("type", "gallery");

        // keep existing gallery items without files
        const existing = formData.contentParsed.filter((img) => !img.file);
        payload.append("existing", JSON.stringify(existing));

        // append only new images with correct field name
        formData.contentParsed.forEach((img) => {
          if (img.file) {
            payload.append("gallery", img.file); // ✅ FIXED field name
          }
        });
        break;
      case "video":
        payload = {
          id: formData.id,
          blog_id: formData.blog_id,
          type: "video",
          content: JSON.stringify(formData.contentParsed),
        };
        break;
      default:
        console.warn("Unknown type:", formData.type);
    }

    dispatch(updateEventDetail(payload))
      .unwrap()
      .then(() => {
        toast.success("Event details updated successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong");
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
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-normal text-gray-500 text-center flex-1 mt-[10px]">
            Edit Blog Detail
          </h3>
          <button onClick={openModal} className="ml-4">
            <IoIosCloseCircle size={24} />
          </button>
        </div>

        {/* TEXT TYPE */}
        {formData.type === "text" && (
          <div className="space-y-6">
            {Object.entries(formData.contentParsed).map(
              ([lang, langContent]) => (
                <div key={lang}>
                  <h4 className="text-lg font-semibold mb-2">
                    {lang.toUpperCase()}
                  </h4>
                  <CKEditorClient
                    value={langContent.content}
                    onChange={(data) => handleContentChange(lang, data)}
                  />
                </div>
              )
            )}
          </div>
        )}

        {/* PHOTO TYPE */}
        {formData.type === "photo" && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold mb-2">Current Photo</h4>
            <Image
              src={
                formData.contentParsed.path.startsWith("blob:")
                  ? formData.contentParsed.path
                  : `${imageUrl}/${formData.contentParsed.path}`
              }
              alt="Blog Detail"
              width={400}
              height={300}
              className="rounded-md"
            />

            <div className="mt-4">
              <label className="block mb-2 font-medium">Replace Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]
                    file:bg-transparent file:rounded-[10px] file:border-[#767676]
                    file:border-1 file:mt-[12px]"
              />
            </div>
          </div>
        )}

        {/* GALLERY TYPE */}
        {formData.type === "gallery" && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold mb-2">Gallery</h4>

            <div className="grid grid-cols-3 gap-4">
              {formData.contentParsed.map((img, index) => (
                <div key={img.id || index} className="relative">
                  <Image
                    src={
                      img.path.startsWith("blob:")
                        ? img.path
                        : `${imageUrl}/${img.path}`
                    }
                    alt={img.filename || "Gallery image"}
                    width={150}
                    height={150}
                    className="rounded-md object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteGalleryImage(index)}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full px-2"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <label className="block mb-2 font-medium">Add New Images</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleGalleryChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]
                    file:bg-transparent file:rounded-[10px] file:border-[#767676]
                    file:border-1 file:mt-[12px]"
              />
            </div>
          </div>
        )}

        {formData?.type === "video" && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold mb-2">Video</h4>
            <div className="mb-4">
              <label className="block mb-2 text-[18px] font-medium">
                YouTube URL
              </label>
              <input
                type="text"
                value={formData.contentParsed.youtube_url || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    contentParsed: {
                      ...prev.contentParsed,
                      youtube_url: e.target.value,
                    },
                  }))
                }
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
                placeholder="https://www.youtube.com/embed/xxxxxx"
              />
            </div>

            {formData.contentParsed.youtube_url && (
              <div className="aspect-video w-full">
                <iframe
                  src={formData.contentParsed.youtube_url}
                  title="YouTube video preview"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        )}

        {/* SAVE BUTTON */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={handleSave}
            className="w-full h-[50px] bg-[#B8F900] rounded-[10px] text-[18px] font-medium leading-[22px] text-[#000] mb-[67px]"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEventDetailsAdmin;
