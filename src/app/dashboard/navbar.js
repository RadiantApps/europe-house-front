import React, { useState, useEffect } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setToggle, setToggleManual } from "../../store/features/toggleSlice";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      dispatch(setToggleManual(false));
    } else {
      dispatch(setToggleManual(true));
    }
  }, [screenSize, setToggleManual]);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <button
        onClick={() => dispatch(setToggle())}
        type="button"
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        {/* <span
          style={{ background: "#03C9D7" }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        /> */}
        <AiOutlineBars style={{ color: "#1A97F5" }} />
      </button>
      {/* <div className="flex">
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <p>
            <span className="text-gray-400 font-bold ml-1 text-14"></span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
      </div>
      {isOpen && <UserProfile data={userData} />} */}
    </div>
  );
};

export default Navbar;
