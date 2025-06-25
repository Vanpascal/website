"use client";

import React, { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/legacy/image";
import Link from "next/link";
import { FiUser, FiLogOut, FiMenu, FiSettings } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { logoutUser, getLoggedUser } from "@/app/actions/authActions";

interface NavbarProps {
  onToggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const router = useRouter();
  const [adminName, setAdminName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const response = await getLoggedUser();
      if (response.success) {
        setAdminName(`${response.firstname} ${response.lastname}`);
      } else {
        console.error(response.error);
      }
    });
  }, []);

  const handleLogout = () => {
    startTransition(async () => {
      setLoading(true);
      const response = await logoutUser();
      setLoading(false);

      if (response.success) {
        router.push("/login");
      } else {
        console.error(response.error);
      }
    });
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 shadow-md fixed top-0 left-0 w-full z-20">
      {/* Toggle Sidebar Button (for small screens) */}
      <button
        onClick={onToggleSidebar}
        className="lg:hidden flex items-center gap-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
      >
        <FiMenu size={24} />
      </button>

      {/* Logo and Organization Name */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/logo.jpg"
          width="48"
          height="48"
          alt="DB Logo"
          className="w-12 h-12 rounded-full"
        />
        <span className="font-bold text-lg md:text-xl text-white hidden lg:inline-block">
          DBYTC-Iringa
        </span>
      </Link>

      {/* Admin Info and Actions */}
      <div className="relative group">
        {/* Admin Info */}
        <div className="flex items-center gap-2 text-white cursor-pointer">
          <FiUser size={24} />
          <span className="hidden sm:inline-block">
            {adminName || "Loading..."}
          </span>
        </div>

        {/* Dropdown Menu */}
        <div className="absolute top-full right-0 bg-gray-700 text-white rounded shadow-lg w-48 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none invisible group-hover:visible transition-all duration-200">
          <button className="w-full text-left px-4 py-2 hover:bg-gray-600 transition">
            <FiSettings className="inline mr-2" />
            Change Password
          </button>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 hover:bg-gray-600 transition flex items-center"
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="mr-2 animate-spin" />
            ) : (
              <FiLogOut className="mr-2" />
            )}
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
