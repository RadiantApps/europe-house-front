import Image from "next/image";
import Logo from "../../public/logo.svg"
export default function Navbar() {
  return (
    <header className="h-[90.5px] w-full border-b border-gray-200 px-[32px] flex items-center justify-between">

        <Image
          src={Logo} 
          alt="Europe House Logo"
          width={120}
          height={32}
          className="mr-[50px]"
        />
        <nav className="flex flex-row gap-[30px] h-[32px] items-center">
          <a href="#" className="text-sm text-black">Events</a>
          <a href="#" className="text-sm text-black">News/blog</a>
          <a href="#" className="text-sm text-black">Campaigns</a>
          <a href="#" className="text-sm text-black">Publications</a>
          <a href="#" className="text-sm text-black">About</a>
          <a href="#" className="text-sm text-black">EU Support</a>
          <a href="#" className="text-sm text-black">Contact</a>
        </nav>

      <button className="h-[32px] w-[91px] border border-gray-300 rounded-[6px] text-sm px-[12px] py-[4px] flex items-center justify-between gap-[10px]">
        English
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </header>
  );
}
