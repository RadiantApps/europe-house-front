import { IoIosCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "@/store/features/userSlice";

const UpdateUserModal = ({ openModal, item }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
    phone: "",
    role: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: formData?.id, data: formData }))
      .unwrap()
      .then(() => {
        toast.success("User updated successfull");
        setError(null);
      })
      .catch((error) => {
        console.log(JSON.parse(error.message));
        setError(JSON.parse(error.message));
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFormData(item);
  }, []);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-15">
      <div
        className="bg-gray-900 bg-opacity-40 absolute inset-0"
        onClick={openModal}
      ></div>
      <div
        className="relative bg-[#EFEFEF] pl-[65px] pr-[65px] rounded-lg shadow-lg hide-scrollbar "
        style={{ width: "514px", height: "70%", overflowY: "auto" }}
      >
        <div className="p-6 ">
          <div className="flex items-center justify-between">
            <h3 className="text-center text-[20px] text-[#000] font-medium">
              Update User
            </h3>
            <button onClick={openModal}>
              <IoIosCloseCircle />
            </button>
          </div>
          <form autoComplete="off" onSubmit={onSubmit}>
            <div className="mt-[33px]">
              <label
                htmlFor="name"
                className="block mb-2 text-[18px] font-medium"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
                placeholder="Emri"
                value={formData.name || ""}
                onChange={handleChange}
              />
              {error && error.name && (
                <p className="text-red-500 mt-1">{error.name}</p>
              )}
            </div>

            <div className="mt-[33px]">
              <label
                htmlFor="surname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Surname
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px] "
                placeholder="Surname"
                value={formData.surname || ""}
                onChange={handleChange}
              />
              {error && error.surname && (
                <p className="text-red-500 mt-1">{error.surname}</p>
              )}
            </div>

            <div className="mt-[33px]">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px]"
                placeholder="Email-i"
                value={formData.email || ""}
                onChange={handleChange}
              />
              {error && error.email && (
                <p className="text-red-500 mt-1">{error.email}</p>
              )}
            </div>

            <div className="mt-[33px]">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px] "
                placeholder="Phone number"
                value={formData.phone || ""}
                onChange={handleChange}
              />
              {error && error.phone && (
                <p className="text-red-500 mt-1">{error.phone}</p>
              )}
            </div>

            <div className="mt-[33px]">
              <label
                htmlFor="role"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Role
              </label>
              <select
                name="role"
                id="role"
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px] "
                value={formData.role || ""}
                onChange={handleChange}
              >
                <option value="" className="dark:text-white" disabled>
                  Choose
                </option>
                <option value="admin" className="dark:text-white">
                  ADMIN
                </option>
                <option value="user" className="dark:text-white">
                  USER
                </option>
              </select>
              {error && error.role && (
                <p className="text-red-500 mt-1">{error.role}</p>
              )}
            </div>

            <div className="mt-[33px]">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-[#FFF] h-[50px] w-full rounded-[10px] pl-[16px] "
                placeholder="Password"
                value={formData.password || ""}
                onChange={handleChange}
              />
              {error && error.password && (
                <p className="text-red-500 mt-1">{error.password}</p>
              )}
            </div>

            <div className="flex items-center justify-center mt-[20px]">
              <button
                type="submit"
                className="w-full h-[50px] bg-[#B8F900] rounded-[10px] text-[18px] font-medium leading-[22px] text-[#000] mb-[67px]"
              >
                Update user
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserModal;
