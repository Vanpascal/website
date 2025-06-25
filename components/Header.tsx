"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// Define types for dropdown items
type DropdownItem = {
  href: string;
  label: string;
};

type DropdownProps = {
  label: string;
  items: DropdownItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

// Dropdown component
const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  isOpen,
  setIsOpen,
}) => (
  <li
    className="relative group"
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
  >
    <button
      className="flex items-center space-x-1 hover:text-blue-400"
      aria-expanded={isOpen}
    >
      <span>{label}</span>
      <ChevronDownIcon className="w-5 h-5" />
    </button>
    {isOpen && (
      <ul className="absolute bg-purple-800 text-white py-2 rounded shadow-lg w-48 text-sm">
        {items.map(({ href, label }) => (
          <li key={label}>
            <Link href={href} className="px-4 py-2 block hover:bg-purple-700">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </li>
);

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownState, setDropdownState] = useState<Record<string, boolean>>({
    about: false,
    admission: false,
    courses: false,
    projects: false,
    production: false,
    ict: false,
  });

  const toggleDropdown = (key: string) => {
    setDropdownState((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const dropdowns: {
    label: string;
    key: string;
    items: DropdownItem[];
  }[] = [
    {
      label: "About Us",
      key: "about",
      items: [
        { href: "/about", label: "About DB-Iringa" },
        { href: "/about/management", label: "Management & Staff" },
        { href: "/about/policies", label: "Our Policies" },
      ],
    },
    {
      label: "Admission",
      key: "admission",
      items: [
        { href: "/admission", label: "Admission Information" },
        { href: "/online-admission", label: "Online Admission System" },
      ],
    },
    {
      label: "Courses Offered",
      key: "courses",
      items: [
        { href: "/programs/long-courses", label: "Long Courses" },
        { href: "/programs/short-courses", label: "Short Courses" },
      ],
    },
    {
      label: "Production Units",
      key: "production",
      items: [
        {
          href: "/production-units/motor-vehicle",
          label: "Motor Vehicle Mechanics",
        },
        { href: "/production-units/carpentry", label: "Carpentry & Joinery" },
        {
          href: "/production-units/printing",
          label: "Offset Machine Printing",
        },
        {
          href: "/production-units/welding",
          label: "Welding & Metal Fabrication",
        },
        {
          href: "/production-units/masonry",
          label: "Masonry & Bricklaying",
        },
        { href: "/production-units/tailoring", label: "DSCT (Tailoring)" },
      ],
    },
    {
      label: "ICT Services",
      key: "ict",
      items: [
        { href: "/oas", label: "Online Application System (OAS)" },
        { href: "/sims", label: "Student Information System (SIMS)" },
        { href: "/admin", label: "Contents Management" },
      ],
    },
  ];

  return (
    <header className="fixed top-0 w-full bg-purple-900 text-white py-2 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              width={48}
              height={48}
              alt="DB Logo"
              className="w-12 h-12 rounded-full"
            />
            <span className="font-bold text-lg md:text-xl">DBYTC - Iringa</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            {dropdowns.map(({ label, key, items }) => (
              <Dropdown
                key={key}
                label={label}
                items={items}
                isOpen={dropdownState[key]}
                setIsOpen={() => toggleDropdown(key)}
              />
            ))}
            <li>
              <Link
                href="/donate"
                className="px-6 py-2 bg-amber-500 text-purple-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition"
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
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-purple-800 text-white flex flex-col shadow-lg md:hidden">
          <li>
            <Link href="/" className="block px-4 py-2 hover:bg-purple-700">
              Home
            </Link>
          </li>
          {dropdowns.map(({ label, key, items }) => (
            <li key={key}>
              <button
                onClick={() => toggleDropdown(key)}
                className="w-full text-left px-4 py-2 hover:bg-purple-700 flex justify-between"
              >
                <span>{label}</span>
                <ChevronDownIcon className="w-5 h-5" />
              </button>
              {dropdownState[key] && (
                <ul className="bg-purple-700">
                  {items.map(({ href, label }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="px-4 py-2 block hover:bg-purple-600"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link
              href="/contacts"
              className="block px-4 py-2 hover:bg-purple-700"
            >
              Contacts
            </Link>
          </li>
          <li>
            <Link
              href="/donate"
              className="block px-4 py-2 bg-yellow-600 text-purple-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition mx-4 my-2"
            >
              Donate
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
