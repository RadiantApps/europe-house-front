"use client";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const CreateTeamModal = ({ openModal }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    position_al: "",
    position_en: "",
    position_sr: "",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    photo: null,
  });

  const handleFileChange = (e) => {
    const { files } = e.target;
    setFormData({
      ...formData,
      photo: files[0],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const translations = [
      { language: "sq", position: formData.position_al },
      { language: "en", position: formData.position_en },
      { language: "sr", position: formData.position_sr },
    ];

    const data = new FormData();
    data.append("name", formData.name);
    data.append("surname", formData.surname);
    data.append("translations", JSON.stringify(translations));
    data.append("facebook", formData.facebook);
    data.append("instagram", formData.instagram);
    data.append("twitter", formData.twitter);
    data.append("linkedin", formData.linkedin);

    if (formData.photo) data.append("photo", formData.photo);

    try {
      // Example: dispatch to Redux thunk or make direct fetch call
      // await dispatch(addTeamMember(data));
      toast.success("Team member created successfully!");
      openModal(); // close modal
    } catch (err) {
      console.error(err);
      toast.error("Failed to create team member");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-15">
      <div
        className="bg-gray-900 bg-opacity-40 absolute inset-0"
        onClick={openModal}
      ></div>
      <div
        className="relative bg-[#EFEFEF] pl-[40px] pr-[40px] rounded-lg shadow-lg hide-scrollbar"
        style={{ width: "514px", height: "80%", overflowY: "auto" }}
      >
        <div className="p-6 ">
          <div className="flex items-center justify-between">
            <h3 className="mb-1 text-xl font-normal text-gray-700">
              Add Team Member
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
            {/* Name */}
            <div>
              <label className="block mb-2 text-[16px] font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="bg-white h-[45px] w-full rounded-[10px] pl-[12px]"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Surname */}
            <div>
              <label className="block mb-2 text-[16px] font-medium">
                Surname
              </label>
              <input
                type="text"
                name="surname"
                className="bg-white h-[45px] w-full rounded-[10px] pl-[12px]"
                placeholder="Enter surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>

            {/* Position translations */}
            <div>
              <label className="block mb-2 text-[16px] font-medium">
                Position (Albanian)
              </label>
              <input
                type="text"
                name="position_al"
                className="bg-white h-[45px] w-full rounded-[10px] pl-[12px]"
                placeholder="Pozita në shqip"
                value={formData.position_al}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-2 text-[16px] font-medium">
                Position (English)
              </label>
              <input
                type="text"
                name="position_en"
                className="bg-white h-[45px] w-full rounded-[10px] pl-[12px]"
                placeholder="Position in English"
                value={formData.position_en}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-2 text-[16px] font-medium">
                Position (Serbian)
              </label>
              <input
                type="text"
                name="position_sr"
                className="bg-white h-[45px] w-full rounded-[10px] pl-[12px]"
                placeholder="Pozicija na srpskom"
                value={formData.position_sr}
                onChange={handleChange}
              />
            </div>

            {/* Socials */}
            <div>
              <label className="block mb-2 text-[16px] font-medium">
                Facebook
              </label>
              <input
                type="text"
                name="facebook"
                className="bg-white h-[45px] w-full rounded-[10px] pl-[12px]"
                placeholder="Facebook link"
                value={formData.facebook}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-2 text-[16px] font-medium">
                Instagram
              </label>
              <input
                type="text"
                name="instagram"
                className="bg-white h-[45px] w-full rounded-[10px] pl-[12px]"
                placeholder="Instagram link"
                value={formData.instagram}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-2 text-[16px] font-medium">
                Twitter
              </label>
              <input
                type="text"
                name="twitter"
                className="bg-white h-[45px] w-full rounded-[10px] pl-[12px]"
                placeholder="Twitter link"
                value={formData.twitter}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-2 text-[16px] font-medium">
                LinkedIn
              </label>
              <input
                type="text"
                name="linkedin"
                className="bg-white h-[45px] w-full rounded-[10px] pl-[12px]"
                placeholder="LinkedIn link"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>

            {/* Photo */}
            <div>
              <label className="block mb-2 text-[16px] font-medium">
                Photo
              </label>
              <input
                type="file"
                name="photo"
                onChange={handleFileChange}
                className="bg-white h-[45px] w-full rounded-[10px] pl-[12px]
                  file:bg-transparent file:rounded-[10px] file:border-gray-400
                  file:border file:mt-2"
              />
            </div>

            {/* Submit */}
            <div className="flex items-center justify-center mt-5">
              <button
                type="submit"
                className="w-full h-[50px] bg-[#B8F900] rounded-[10px] text-[18px] font-medium text-black mb-[30px]"
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

export default CreateTeamModal;
