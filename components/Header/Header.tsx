"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { dropdowns } from "./HeaderLinks";
import Dropdown from "./DropdownItems";

const blinkStyle = `
@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}
.blink {
  animation: blink 1.5s infinite;
}
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLUListElement>(null);

  const scrollToEvents = () => {
    const section = document.getElementById("events-and-news");
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const handleDropdownToggle = (key: string) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <style>{blinkStyle}</style>
      <header className="fixed top-0 w-full bg-gradient-to-r from-purple-900 to-purple-700 text-white py-3 z-50 shadow-md backdrop-blur">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              width={48}
              height={48}
              alt="DB Logo"
              className="w-12 h-12 rounded-full border-2 border-white shadow-md"
            />
            <span className="font-bold text-lg md:text-xl tracking-wide">
              DBYTC - Iringa
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-amber-300 relative after:block after:h-[2px] after:w-0 after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </Link>
            </li>
            {dropdowns.map((d) => (
              <Dropdown
                key={d.key}
                label={d.label}
                items={d.items}
                isOpen={activeDropdown === d.key}
                setIsOpen={() => handleDropdownToggle(d.key)}
              />
            ))}
            <li>
              <button
                onClick={scrollToEvents}
                className="blink px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
              >
                APPLICATION FORM FOR 2026
              </button>
            </li>
            <li>
              <Link
                href="/donate"
                className="px-6 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-purple-900 font-semibold rounded-lg shadow-md hover:from-amber-500 hover:to-orange-600 transition"
              >
                Donate
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-7 h-7 text-white"
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-purple-800 text-white flex flex-col shadow-lg md:hidden"
            >
              <li>
                <Link
                  href="/"
                  className="block px-4 py-2 hover:bg-purple-700"
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
                  isOpen={activeDropdown === d.key}
                  setIsOpen={() => handleDropdownToggle(d.key)}
                  onLinkClick={() => setIsMenuOpen(false)}
                />
              ))}
              <li>
                <button
                  onClick={scrollToEvents}
                  className="blink block w-full px-4 py-2 bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                >
                  APPLICATION FORM 2026
                </button>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="block px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-purple-900 font-semibold hover:from-amber-500 hover:to-orange-600 transition mx-4 my-2 rounded-lg text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Donate
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;
