"use client";
import { useDispatch, useSelector } from "react-redux";
import { FiSettings } from "react-icons/fi";
import DashboardNavbar from "./DashboardNavbar"; // renamed
import Sidebar from "./sidebar";
import { setToggle } from "../../store/features/toggleSlice";

export default function DashboardLayout({ children }) {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.toggle.isToggle);

  return (
    <div className="flex flex-col relative bg-gray-100 min-h-screen">
      {/* Settings Button */}
      <div className="fixed right-4 bottom-4 z-50">
        <button
          className="text-3xl text-white p-3 bg-gray-500 rounded-full hover:drop-shadow-xl hover:bg-gray-600"
          aria-label="Settings"
        >
          <FiSettings />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 transition-all duration-300 shadow-md ${
          isSidebarOpen ? "w-[80%] sm:w-[383px]" : "w-0"
        } overflow-hidden`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "sm:ml-[383px]" : "ml-0"
        }`}
      >
        {/* Only dashboard-specific navbar */}
        <DashboardNavbar />

        {/* Page content */}
        <div className="pt-16">{children}</div>
      </div>

      {/* Mobile overlay when sidebar open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => dispatch(setToggle(false))}
        />
      )}
    </div>
  );
}
