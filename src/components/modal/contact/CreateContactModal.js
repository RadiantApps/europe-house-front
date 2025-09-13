"use client";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createLocation } from "@/store/features/locationSlice";

const CreateContactModal = ({ openModal }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    slug: "",
    email: "",
    location_name_al: "",
    location_name_en: "",
    location_name_sr: "",
    street_al: "",
    street_en: "",
    street_sr: "",
    phone_numbers: [""],
  });

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (name === "phone_numbers" && index !== null) {
      const updatedNumbers = [...formData.phone_numbers];
      updatedNumbers[index] = value;
      setFormData({ ...formData, phone_numbers: updatedNumbers });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addPhoneNumber = () => {
    setFormData({
      ...formData,
      phone_numbers: [...formData.phone_numbers, ""],
    });
  };

  const removePhoneNumber = (index) => {
    const updatedNumbers = formData.phone_numbers.filter((_, i) => i !== index);
    setFormData({ ...formData, phone_numbers: updatedNumbers });
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.slug) tempErrors.slug = "Slug is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.location_name_al)
      tempErrors.location_name_al = "Albanian name is required";
    if (!formData.phone_numbers || formData.phone_numbers.length === 0)
      tempErrors.phone_numbers = "At least one phone number is required";

    setError(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const translations = [
      {
        location_name: formData.location_name_al,
        street: formData.street_al,
        language: "sq",
      },
      {
        location_name: formData.location_name_en,
        street: formData.street_en,
        language: "en",
      },
      {
        location_name: formData.location_name_sr,
        street: formData.street_sr,
        language: "sr",
      },
    ];

    const data = {
      slug: formData.slug,
      email: formData.email,
      translations: JSON.stringify(translations),
      phone_numbers: JSON.stringify(formData.phone_numbers), // send as array
    };

    dispatch(createLocation(data));
    toast.success("Location added successfully!");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="bg-gray-900 bg-opacity-40 absolute inset-0"
        onClick={openModal}
      ></div>

      {/* Modal */}
      <div
        className="relative bg-[#EFEFEF] pl-[65px] pr-[65px] rounded-lg shadow-lg hide-scrollbar"
        style={{ width: "514px", height: "70%", overflowY: "auto" }}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="mb-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              Add Location
            </h3>
            <button onClick={openModal}>
              <IoIosCloseCircle size={24} />
            </button>
          </div>

          {/* Form */}
          <form autoComplete="off" onSubmit={onSubmit}>
            {/* Slug */}
            <div className="mt-4">
              <label className="block mb-2 text-[12px] font-medium">Slug</label>
              <input
                type="text"
                name="slug"
                className="bg-white h-[50px] w-full rounded-[10px] pl-[16px]"
                placeholder="Slug"
                value={formData.slug}
                onChange={handleChange}
              />
              {error.slug && (
                <span className="text-red-500 text-sm">{error.slug}</span>
              )}
            </div>

            {/* Email */}
            <div className="mt-4">
              <label className="block mb-2 text-[12px] font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="bg-white h-[50px] w-full rounded-[10px] pl-[16px]"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {error.email && (
                <span className="text-red-500 text-sm">{error.email}</span>
              )}
            </div>

            {/* Location Names */}
            {["al", "en", "sr"].map((lang) => (
              <div className="mt-4" key={`location_name_${lang}`}>
                <label className="block mb-2 text-[12px] font-medium">
                  Location Name ({lang.toUpperCase()})
                </label>
                <input
                  type="text"
                  name={`location_name_${lang}`}
                  className="bg-white h-[50px] w-full rounded-[10px] pl-[16px]"
                  placeholder={`Location Name (${lang.toUpperCase()})`}
                  value={formData[`location_name_${lang}`]}
                  onChange={handleChange}
                />
              </div>
            ))}

            {/* Street Names */}
            {["al", "en", "sr"].map((lang) => (
              <div className="mt-4" key={`street_${lang}`}>
                <label className="block mb-2 text-[12px] font-medium">
                  Street ({lang.toUpperCase()})
                </label>
                <input
                  type="text"
                  name={`street_${lang}`}
                  className="bg-white h-[50px] w-full rounded-[10px] pl-[16px]"
                  placeholder={`Street (${lang.toUpperCase()})`}
                  value={formData[`street_${lang}`]}
                  onChange={handleChange}
                />
              </div>
            ))}

            {/* Phone Number */}
            <div className="mt-4">
              <label className="block mb-2 text-[12px] font-medium">
                Phone Numbers
              </label>
              {formData.phone_numbers.map((number, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    name="phone_numbers"
                    className="bg-white h-[50px] w-full rounded-[10px] pl-[16px]"
                    placeholder="Phone Number"
                    value={number}
                    onChange={(e) => handleChange(e, index)}
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removePhoneNumber(index)}
                      className="text-red-500 font-bold"
                    >
                      X
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addPhoneNumber}
                className="mt-2 text-[#121212] font-medium underline"
              >
                + Add Phone Number
              </button>
              {error.phone_numbers && (
                <span className="text-red-500 text-sm">
                  {error.phone_numbers}
                </span>
              )}
            </div>
            {/* Submit Button */}
            <div className="mt-6 mb-4">
              <button
                type="submit"
                className="bg-[#B8F900] w-full font-medium py-2 px-4 rounded h-[50px] text-[#121212] text-[18px] leading-[22px]"
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateContactModal;
