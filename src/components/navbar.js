"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../store/features/languageSlice";
import Logo from "../../public/logo.svg"

export default function Navbar() {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.selectedLanguage);

  const handleLanguageChange = (event) => {
    dispatch(setLanguage(event.target.value));
  };

  return (
    <header className="h-[90.5px] w-full border-b border-gray-200 px-[74px] flex items-center justify-between">

        <Image
          src={Logo} 
          alt="Europe House Logo"
          width={120}
          height={32}
          className="mr-[50px]"
        />
        <nav className="flex flex-row gap-[30px] h-[32px] items-center">
          <Link href="/events" className="text-sm text-black">Events</Link>
          <Link href="/news" className="text-sm text-black">News/blog</Link>
          <Link href="/campaigns" className="text-sm text-black">Campaigns</Link>
          <Link href="/publications" className="text-sm text-black">Publications</Link>
          <Link href="/about" className="text-sm text-black">About</Link>
          <Link href="/eu-support" className="text-sm text-black">EU Support</Link>
          <Link href="/contact" className="text-sm text-black">Contact</Link>
        </nav>

        <select
        className="h-[32px] w-[130px] border border-gray-300 rounded-[6px] text-sm px-[12px] py-[4px] bg-white focus:outline-none"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="al">Shqip</option>
        <option value="sr">Sb</option>
      </select>
    </header>
  );
}
