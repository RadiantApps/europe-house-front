import { IoIosCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updatePositionTeam } from "@/store/features/teamSlice";
const EditTeamPositonModal = ({ openModal, data }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    if (data) {
      setFormData(data?.positions);
    }
  }, [data]);

  const handleChange = (id, value) => {
    setFormData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, position: value } : item))
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(updatePositionTeam({ positions: formData }))
      .unwrap()
      .then(() => {
        toast.success("Team positions updated successfully!");
      })
      .catch((err) => {
        setError(err.message || "Failed to update team positions.");
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
              Edit Team Position
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
            {formData.map((item) => (
              <div className="mt-[33px]">
                <label className="block mb-2 text-[18px] font-medium">
                  Position ({item.language_code.toUpperCase()})
                </label>
                <input
                  type="text"
                  value={item.position}
                  onChange={(e) => handleChange(item.id, e.target.value)}
                  className="bg-white h-[45px] w-full rounded-[10px] pl-[12px]"
                />
              </div>
            ))}

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

export default EditTeamPositonModal;
