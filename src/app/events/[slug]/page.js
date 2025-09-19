"use client";
import { useState } from "react";
import { Copy, Facebook, Linkedin, X } from "lucide-react";
import TestImg from "../../../assets/events/test.svg";
import Image from "next/image";

export default function EventPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full font-sans">
      {/* Main Section */}
      <main className="">
        <div className="px-[24px] lg:px-[74px] pt-[70px]">
          <h1 className="text-3xl font-bold mb-6 lg:mb-10">URBAN YOGA</h1>

          <div className="flex flex-col lg:flex-row lg:gap-[28px] gap-6">
            {/* Left (Image + Content) */}
            <div className="flex-1 order-2 lg:order-1">
              <div className="bg-green-900 rounded-2xl overflow-hidden">
                <Image
                  src={TestImg}
                  alt="Urban Yoga"
                  className="w-full object-cover lg:h-[516px] h-[350px]"
                />
              </div>

              {/* Copy + Social */}
              <div className="flex gap-3 mt-6 lg:mt-11">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm"
                >
                  <Copy size={16} /> {copied ? "Copied!" : "Copy link"}
                </button>
                <button className="p-2 border rounded-lg">
                  <Facebook size={16} />
                </button>
                <button className="p-2 border rounded-lg">
                  <X size={16} />
                </button>
                <button className="p-2 border rounded-lg">
                  <Linkedin size={16} />
                </button>
              </div>

              {/* Description */}
              <p className="mt-6 lg:mt-11 text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              <button className="mt-6 lg:mt-8 w-[190px] h-[50px] flex items-center justify-center gap-[10px] bg-indigo-600 text-white font-medium rounded-[56px]">
                Join Us
              </button>
            </div>

            {/* Right (Event Details) */}
            <aside className="lg:w-72 space-y-8 order-1 lg:order-2">
              <div className="space-y-[6px]">
                <p className="font-semibold">Event Type</p>
                <p>Exhibition</p>
              </div>
              <div>
                <p className="font-semibold">Date</p>
                <p>7 August 2024</p>
              </div>
              <div>
                <p className="font-semibold">Time</p>
                <p>13:00 - 17:00</p>
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p>Prishtinë</p>
              </div>
              <div>
                <p className="font-semibold">Language</p>
                <p>English</p>
              </div>
            </aside>
          </div>
        </div>

        {/* Upcoming Events */}
        <section className="mt-9 lg:mt-[70px] bg-[#EDF5FF] px-[24px] lg:px-[74px] py-9 lg:py-[70px]">
          <h2 className="text-2xl font-bold  mb-6 lg:mb-5 ">
            Upcoming Events
          </h2>
          <p className="text-gray-500 pb-8">The latest events.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="">
              <Image
                src={TestImg}
                alt="Experience Europe"
                className="w-full h-auto"
              />
              <div className="pt-[18px] lg:pt-8">
                <h3 className="font-semibold mb-[18px] lg:mb-[22px]">Experience Europe</h3>
                <a href="#" className="text-indigo-600 text-sm">
                  Learn more →
                </a>
              </div>
            </div>

            <div className="">
              <Image
                src={TestImg}
                alt="Plant a tree"
                className="w-full h-auto"
              />
              <div className="pt-[18px] lg:pt-8">
              <h3 className="font-semibold mb-[18px] lg:mb-[22px]">Plant a tree day</h3>
                <a href="#" className="text-indigo-600 text-sm">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
