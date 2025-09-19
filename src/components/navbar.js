"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../store/features/languageSlice";
import { useState } from "react";
import Logo from "../../public/logo.svg";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.selectedLanguage);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLanguageChange = (event) => {
    dispatch(setLanguage(event.target.value));
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
<header className="w-full border-b border-gray-200 px-6 lg:px-[74px] flex items-center justify-between py-4 relative">
  {/* Logo */}
  <Image
    src={Logo}
    onClick={() => router.push("/")}
    alt="Europe House Logo"
    className="w-auto h-8 cursor-pointer"
  />

  {/* Desktop Navigation (vetëm ≥1024px) */}
  <nav className="hidden lg:flex gap-8 items-center">
    <Link href="/events" className="text-sm text-black hover:text-blue-600">Events</Link>
    <Link href="/news" className="text-sm text-black hover:text-blue-600">News/blog</Link>
    <Link href="/campaigns" className="text-sm text-black hover:text-blue-600">Campaigns</Link>
    <Link href="/publications" className="text-sm text-black hover:text-blue-600">Publications</Link>
    <Link href="/about-us" className="text-sm text-black hover:text-blue-600">About</Link>
    <Link href="/eu-support" className="text-sm text-black hover:text-blue-600">EU Support</Link>
    <Link href="/contact" className="text-sm text-black hover:text-blue-600">Contact</Link>
  </nav>

  {/* Desktop Language Selector (vetëm ≥1024px) */}
  <select
    className="hidden lg:block border border-gray-300 rounded-md text-sm px-3 py-1 bg-white focus:outline-none"
    value={selectedLanguage}
    onChange={handleLanguageChange}
  >
    <option value="en">English</option>
    <option value="al">Shqip</option>
    <option value="sr">Sb</option>
  </select>

  {/* Mobile Menu Button (shfaqet <1024px) */}
  <button
    onClick={toggleMobileMenu}
    className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
    aria-label="Toggle mobile menu"
  >
    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
  </button>
</header>



      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 max-w-xs w-full h-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out overflow-auto ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 ">
          {/* Close Button */}
          <button
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800"
            aria-label="Close mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Language Selector */}
          <div className="border-b border-gray-200 pb-4 overflow-auto">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Language
            </label>
            <select
              className="w-full border border-gray-300 rounded-md text-sm px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="al">Shqip</option>
              <option value="sr">Sb</option>
            </select>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4">
            {[
              { href: "/events", label: "Events" },
              { href: "/news", label: "News/blog" },
              { href: "/campaigns", label: "Campaigns" },
              { href: "/publications", label: "Publications" },
              { href: "/about-us", label: "About" },
              { href: "/eu-support", label: "EU Support" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-base text-black hover:text-blue-600 transition-colors py-2 border-b border-gray-100 last:border-none"
                onClick={closeMobileMenu}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
