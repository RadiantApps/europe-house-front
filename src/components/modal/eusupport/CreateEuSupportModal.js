"use client";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createEuSupport } from "@/store/features/eusupportSlice";

const CreateEuSupportModal = ({ openModal }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        photo: file,
        preview: URL.createObjectURL(file),
      }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) {
      setError("Name is required");
      return;
    }

    const form = new FormData();
    form.append("name", formData.name);
    if (formData.photo) form.append("photo", formData.photo);

    dispatch(createEuSupport(form))
      .unwrap()
      .then(() => {
        toast.success("Programme created successfully!");
      })
      .catch((err) => {
        setError(err.message || "Failed to create programme.");
      });
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
        className="relative bg-[#EFEFEF] pl-[40px] pr-[40px] rounded-lg shadow-lg hide-scrollbar"
        style={{ width: "514px", height: "70%", overflowY: "auto" }}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="mb-1 text-xl font-normal text-gray-700">
              Add Programme
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
            {/* Name */}
            <div>
              <label className="block mb-2 text-[18px] font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white h-[45px] w-full rounded-[10px] pl-[12px]"
              />
            </div>

            {/* Photo */}
            <div>
              <label className="block mb-2 text-[18px] font-medium">
                Photo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="bg-white h-[45px] w-full rounded-[10px] pl-[12px] pt-[8px]"
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center mt-5">
              <button
                type="submit"
                className="w-full h-[50px] bg-[#B8F900] rounded-[10px] text-[18px] font-medium text-black"
              >
                Publish
              </button>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEuSupportModal;
