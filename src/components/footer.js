import Logo from "../../public/logo.svg"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="">
      <div className="px-[74px] pt-[40px] flex flex-wrap justify-between items-start">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-black pb-[18px]">
            Join the Community
          </h3>
          <p className="text-sm text-gray-600 pb-[22px]">
            Become an active participant in shaping the future of our community.
          </p>
          <div className="flex items-center gap-[12px] pb-[30px]">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm outline-none"
            />
            <button className="bg-[#4433EE] text-white px-6 py-2 rounded-full font-semibold text-sm">
              Join Us
            </button>
          </div>
          <div className="flex items-center gap-[140px] pb-[41px]">
          <Image
          src={Logo} 
          alt="Europe House Logo"
         
        />
        <div>
        <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-tiktok"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-linkedin"></i>
        </div>
          </div>
        </div>
        <div>

        </div>
        <div className="flex gap-4">
        <div className="flex flex-col space-y-2 text-black mt-6 md:mt-0">
          <a href="#">Events</a>
          <a href="#">Blog</a>
          <a href="#">Campaigns</a>
          <a href="#">Publications</a>
          <a href="#">About</a>
          <a href="#">EU Support</a>
          <a href="#">Contact</a>
        </div>

        </div>
        <div className="flex items-center justify-center mt-6 md:mt-0">
          <button className="bg-[#4433EE] p-3 rounded-md text-white">↑</button>
        </div>
      </div>
      <div className="bg-[#4433EE] text-white text-center text-sm py-3">
        Copyright © 2020 Europe House. All rights reserved.
      </div>
    </footer>
  );
 
}
