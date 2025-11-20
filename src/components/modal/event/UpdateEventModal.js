"use client";

import { IoIosCloseCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { imageUrl } from "@/config";
import { getLocation } from "@/store/features/locationSlice";
import { getAllCategoryEvent } from "@/store/features/categoryEventSlice";
import { updateEvent } from "@/store/features/eventsSlice";
import CKEditorClient from "@/utils/editor";

const UpdateEventModal = ({ openModal, editData }) => {
  const dispatch = useDispatch();
  const locationData =
    useSelector((state) => state.location.getLocationData) || [];
  const categoryEventData =
    useSelector((state) => state.categoryevent.getAllCategoryEventData) || [];

  const [formData, setFormData] = useState({
    eventId: "",
    location_id: "",
    category_id: "",
    date: "",
    start_time: "",
    end_time: "",
    language: "",
    translations: {
      sq: {
        id: null,
        title: "",
        description: "",
        photo: null,
        inner_photo: null,
        preview: null,
        inner_preview: null,
      },
      en: {
        id: null,
        title: "",
        description: "",
        photo: null,
        inner_photo: null,
        preview: null,
        inner_preview: null,
      },
      sr: {
        id: null,
        title: "",
        description: "",
        photo: null,
        inner_photo: null,
        preview: null,
        inner_preview: null,
      },
    },
  });

  // Populate formData when editing an existing event
  useEffect(() => {
    if (!editData) return;

    const translations = { sq: {}, en: {}, sr: {} };
    if (editData.translations && Array.isArray(editData.translations)) {
      editData.translations.forEach((tr) => {
        translations[tr.language_code] = {
          id: tr.id,
          title: tr.title || "",
          description: tr.description || "",
          photo: null,
          inner_photo: null,
          preview: tr.photo
            ? `${imageUrl}/${tr.photo.replace(/\\/g, "/")}`
            : null,
          inner_preview: tr.inner_photo
            ? `${imageUrl}/${tr.inner_photo.replace(/\\/g, "/")}`
            : null,
        };
      });
    }

    setFormData((prev) => ({
      ...prev,
      eventId: editData.event_id || "",
      location_id: editData.location_id || "",
      category_id: editData.category_id || "",
      date: editData.event_date ? editData.event_date.split("T")[0] : "",
      start_time: editData.start_time || "",
      end_time: editData.end_time || "",
      language: editData.language || "",
      translations,
    }));
  }, [editData]);

  const handleFileChange = (e, lang, type = "photo") => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        translations: {
          ...prev.translations,
          [lang]: {
            ...prev.translations[lang],
            [type]: file,
            [`${type === "photo" ? "preview" : "inner_preview"}`]:
              URL.createObjectURL(file),
          },
        },
      }));
    }
  };

  const handleChangeEditor = (lang, field, value) => {
    setFormData((prev) => ({
      ...prev,
      translations: {
        ...prev.translations,
        [lang]: {
          ...prev.translations[lang],
          [field]: value,
        },
      },
    }));
  };

  const handleChange = (e, lang, field) => {
    const { name, value } = e.target;

    if (lang) {
      setFormData((prev) => ({
        ...prev,
        translations: {
          ...prev.translations,
          [lang]: {
            ...prev.translations[lang],
            [field]: value,
          },
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!formData.location_id || !formData.category_id) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("event_id", formData.eventId);
    formDataToSend.append("location_id", formData.location_id);
    formDataToSend.append("category_id", formData.category_id);
    formDataToSend.append("date", formData.date);
    formDataToSend.append("start_time", formData.start_time);
    formDataToSend.append("end_time", formData.end_time);
    formDataToSend.append("language", formData.language);

    // Build translations array including translation ID
    const translationsArray = Object.keys(formData.translations).map((lang) => {
      const { id, title, description } = formData.translations[lang];
      return {
        id, // translation id for backend update
        language: lang,
        title,
        description,
      };
    });

    formDataToSend.append("translations", JSON.stringify(translationsArray));

    // Append photos & inner_photos separately if user uploaded new files
    Object.keys(formData.translations).forEach((lang) => {
      const { photo, inner_photo } = formData.translations[lang];
      if (photo) formDataToSend.append(`photo_${lang}`, photo);
      if (inner_photo)
        formDataToSend.append(`inner_photo_${lang}`, inner_photo);
    });

    dispatch(updateEvent(formDataToSend))
      .unwrap()
      .then(() => toast.success("Event updated successfully"))
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };

  useEffect(() => {
    dispatch(getLocation());
    dispatch(getAllCategoryEvent());
  }, [dispatch]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="bg-gray-900 bg-opacity-40 absolute inset-0"
        onClick={openModal}
      ></div>

      {/* Modal */}
      <div
        className="relative bg-[#EFEFEF] pl-[40px] pr-[40px] rounded-lg shadow-lg hide-scrollbar"
        style={{ width: "514px", height: "70%", overflowY: "auto" }}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="mb-1 text-xl font-normal text-gray-700">
              Update Event
            </h3>
            <button onClick={openModal}>
              <IoIosCloseCircle size={24} className="text-gray-600" />
            </button>
          </div>

          <form
            autoComplete="off"
            onSubmit={onSubmit}
            className="space-y-5 mt-5"
          >
            {/* Location select */}
            <div>
              <label className="block mb-2 text-[18px] font-medium">
                Location *
              </label>
              <select
                name="location_id"
                value={formData.location_id}
                onChange={handleChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
              >
                <option value="">Select a location</option>
                {locationData.map((loc) => {
                  const location = loc?.translations.find(
                    (tr) => tr.language_code === "en"
                  );
                  return (
                    <option key={loc.location_id} value={loc.location_id}>
                      {location?.location_name}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Category select */}
            <div>
              <label className="block mb-2 text-[18px] font-medium">
                Category *
              </label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
              >
                <option value="">Select a category</option>
                {categoryEventData.map((cat) => (
                  <option
                    key={cat.category_event_id}
                    value={cat.category_event_id}
                  >
                    {cat?.translations?.en?.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Language */}
            <div>
              <label className="block mb-2 text-[18px] font-medium">
                Language Speak *
              </label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
              >
                <option value="">Select a Language</option>
                <option value="sq">Shqip (sq)</option>
                <option value="en">English (en)</option>
                <option value="sr">Srpski (sr)</option>
              </select>
            </div>

            {/* Date & Time */}
            <div>
              <label className="block mb-2 text-[18px] font-medium">
                Event Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-[18px] font-medium">
                  Start Time *
                </label>
                <input
                  type="time"
                  name="start_time"
                  value={formData.start_time}
                  onChange={handleChange}
                  className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
                />
              </div>
              <div>
                <label className="block mb-2 text-[18px] font-medium">
                  End Time *
                </label>
                <input
                  type="time"
                  name="end_time"
                  value={formData.end_time}
                  onChange={handleChange}
                  className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
                />
              </div>
            </div>

            {/* Translations */}
            {["sq", "en", "sr"].map((lang) => (
              <div key={lang}>
                <div className="mt-[33px]">
                  <label className="block mb-2 text-[18px] font-medium">
                    Title{" "}
                    {lang === "sq"
                      ? "Albanian"
                      : lang === "en"
                      ? "English"
                      : "Serbian"}
                  </label>
                  <input
                    type="text"
                    value={formData.translations[lang].title}
                    onChange={(e) => handleChange(e, lang, "title")}
                    className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
                  />
                </div>

                <div className="mt-5">
                  <label className="block mb-2 text-[18px] font-medium">
                    Photo{" "}
                    {lang === "sq"
                      ? "Albanian"
                      : lang === "en"
                      ? "English"
                      : "Serbian"}
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, lang, "photo")}
                    className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px] file:bg-transparent file:rounded-[10px] file:border-[#767676] file:border-1 file:mt-[12px]"
                  />
                  {formData.translations[lang].preview && (
                    <img
                      src={formData.translations[lang].preview}
                      alt="Preview"
                      className="mt-2 h-20 object-cover rounded-md"
                    />
                  )}
                </div>

                <div className="mt-5">
                  <label className="block mb-2 text-[18px] font-medium">
                    Inner Photo{" "}
                    {lang === "sq"
                      ? "Albanian"
                      : lang === "en"
                      ? "English"
                      : "Serbian"}
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, lang, "inner_photo")}
                    className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px] file:bg-transparent file:rounded-[10px] file:border-[#767676] file:border-1 file:mt-[12px]"
                  />
                  {formData.translations[lang].inner_preview && (
                    <img
                      src={formData.translations[lang].inner_preview}
                      alt="Preview"
                      className="mt-2 h-20 object-cover rounded-md"
                    />
                  )}
                </div>

                <div className="mt-[33px]">
                  <label className="block mb-2 text-[18px] font-medium">
                    Description{" "}
                    {lang === "sq"
                      ? "Albanian"
                      : lang === "en"
                      ? "English"
                      : "Serbian"}
                  </label>
                  <CKEditorClient
                    value={formData.translations[lang].description}
                    onChange={(data) =>
                      handleChangeEditor(lang, "description", data)
                    }
                  />
                </div>
              </div>
            ))}

            <button
              type="submit"
              className="w-full h-[50px] bg-[#B8F900] rounded-[10px] text-[18px] font-medium leading-[22px] text-[#000] mb-[67px]"
            >
              Update Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEventModal;
