"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { dropdowns } from "./HeaderLinks";
import Dropdown from "./DropdownItems"; // refactored Dropdown component

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  const scrollToEvents = () => {
    const section = document.getElementById("events-and-news");
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo.png"
            width={scrolled ? 40 : 48}
            height={scrolled ? 40 : 48}
            alt="DB Logo"
            className="rounded-full border-2 border-gray-300 shadow-md transition-all"
          />
          <span
            className={`font-bold tracking-wide transition-all ${
              scrolled ? "text-lg" : "text-xl"
            } text-gray-800`}
          >
            DBYTC - Iringa
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 font-medium text-gray-800">
          <li>
            <Link
              href="/"
              className="relative px-2 py-1 group hover:text-amber-500 transition"
            >
              Home
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          {dropdowns.map((d) => (
            <Dropdown key={d.key} label={d.label} items={d.items} />
          ))}

          <li>
            <button
              onClick={scrollToEvents}
              className="px-6 py-2 rounded-lg font-semibold bg-red-600 text-white shadow-md hover:bg-red-700 transition"
            >
              FORM 2026
            </button>
          </li>

          <li>
            <Link
              href="/donate"
              className="px-6 py-2 bg-amber-500 text-purple-900 font-semibold rounded-lg shadow-md hover:bg-amber-600 transition"
            >
              Donate
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-purple-900 shadow-xl z-50 flex flex-col p-6 md:hidden"
          >
            <button
              className="self-end mb-6 text-white text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>

            <ul className="space-y-4 text-white">
              <li>
                <Link
                  href="/"
                  className="block text-lg font-medium hover:text-amber-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>

              {dropdowns.map((d) => (
                <Dropdown
                  key={d.key}
                  label={d.label}
                  items={d.items}
                  isMobile
                  onLinkClick={() => setIsMenuOpen(false)}
                />
              ))}

              <li>
                <button
                  onClick={scrollToEvents}
                  className="w-full px-4 py-2 bg-red-600 rounded-lg text-white font-semibold shadow-md hover:bg-red-700 transition"
                >
                  Application Form 2026
                </button>
              </li>

              <li>
                <Link
                  href="/donate"
                  className="block w-full px-4 py-2 bg-amber-500 text-purple-900 font-semibold rounded-lg shadow-md hover:bg-amber-600 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Donate
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
