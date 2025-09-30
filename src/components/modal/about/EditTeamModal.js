"use client";
import { IoIosCloseCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateTeamInfo } from "@/store/features/teamSlice";

const EditTeamInfoModal = ({ openModal, data }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    photo: null,
    preview: null,
  });

  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name || "",
        surname: data.surname || "",
        email: data.email || "",
        photo: null,
        preview: data.photo
          ? `http://localhost:5000/${data.photo.replace(/\\/g, "/")}`
          : null,
      });
    }
  }, [data]);

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

    const form = new FormData();
    form.append("id", data.id);
    form.append("name", formData.name);
    form.append("surname", formData.surname);
    form.append("email", formData.email);
    if (formData.photo) {
      form.append("photo", formData.photo);
    }

    dispatch(updateTeamInfo(form))
      .unwrap()
      .then(() => {
        toast.success("Team info updated successfully!");
      })
      .catch((err) => {
        setError(err.message || "Failed to update team info.");
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="bg-gray-900 bg-opacity-40 absolute inset-0"
        onClick={openModal}
      ></div>
      <div
        className="relative bg-[#EFEFEF] pl-[40px] pr-[40px] rounded-lg shadow-lg hide-scrollbar"
        style={{ width: "514px", height: "80%", overflowY: "auto" }}
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="mb-1 text-xl font-normal text-gray-700">
              Edit Team Info
            </h3>
            <button onClick={openModal}>
              <IoIosCloseCircle className="text-2xl text-gray-600" />
            </button>
          </div>

          <form
            autoComplete="off"
            onSubmit={onSubmit}
            className="space-y-5 mt-[33px]"
          >
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

            <div>
              <label className="block mb-2 text-[18px] font-medium">
                Surname
              </label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className="bg-white h-[45px] w-full rounded-[10px] pl-[12px]"
              />
            </div>

            <div>
              <label className="block mb-2 text-[18px] font-medium">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white h-[45px] w-full rounded-[10px] pl-[12px]"
              />
            </div>

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
              {formData.preview && (
                <a
                  href={formData.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-500 underline"
                >
                  See photo
                </a>
              )}
            </div>

            <div className="flex items-center justify-center mt-5">
              <button
                type="submit"
                className="w-full h-[50px] bg-[#B8F900] rounded-[10px] text-[18px] font-medium text-black mb-[30px]"
              >
                Publish
              </button>
            </div>
          </form>

          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditTeamInfoModal;
