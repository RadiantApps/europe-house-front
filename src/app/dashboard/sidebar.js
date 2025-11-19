"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineCancel } from "react-icons/md";
import { setToggle } from "../../store/features/toggleSlice";
import { links } from "../../data/link";

const Sidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const toggle = useSelector((state) => state.toggle.isToggle);

  const activeLink =
    "flex items-center pl-[57px] h-[50px] text-[18px] leading-[22px] text-[#000] font-bold bg-[#F5F5F5]";
  const normalLink =
    "flex items-center pl-[57px] h-[50px] text-[18px] leading-[22px] text-[#000] font-normal";

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/auth");
  };

  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 w-[383px] hide-scrollbar">
      {toggle && (
        <>
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="items-center gap-3 pl-[57px] mt-4 flex text-xl font-extrabold tracking-tight text-slate-900"
            >
              {/* <LogoDashboard /> */}
              Europe House
            </Link>
            <button
              type="button"
              onClick={() => dispatch(setToggle())}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4"
            >
              <MdOutlineCancel />
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="mt-10">
            {links.map((item, index) => (
              <div key={index}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links
                  .filter((link) => link.roles.includes("admin"))
                  .map((link) => {
                    const isActive = pathname === link.url;
                    return (
                      <button
                        onClick={() => router.push(link.url)}
                        key={link.name}
                        className={isActive ? activeLink : normalLink}
                      >
                        {link.icon}
                        <span className="capitalize ml-2">{link.name}</span>
                      </button>
                    );
                  })}
              </div>
            ))}
          </div>

          {/* Logout */}
          <div className="mt-auto">
            <button
              onClick={logout}
              className="flex mt-10 items-center pl-[57px] text-left underline underline-offset-2 text-[18px] font-[400] leading-[22.49px] font-inter text-[#000]"
            >
              Log Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
