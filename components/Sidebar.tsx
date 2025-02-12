"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiUsers,
  FiSettings,
  FiBarChart2,
  FiChevronDown,
  FiChevronUp,
  FiBriefcase,
  FiBook,
} from "react-icons/fi";

interface SidebarProps {
  isOpen: boolean;
  onToggleSidebar: () => void; // Include the onToggleSidebar prop
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggleSidebar }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <>
      <aside
        className={`${
          isOpen ? "w-64" : "w-0"
        } lg:w-64 bg-gray-800 mt-16 text-white h-screen fixed top-0 left-0 transition-all duration-300 overflow-hidden z-10`}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          <nav className="flex-1 px-2 mt-6">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/admin"
                  className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition"
                >
                  <FiBarChart2 size={24} />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/users"
                  className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition"
                >
                  <FiUsers size={24} />
                  <span>Manage Users</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/courses"
                  className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition"
                >
                  <FiBook size={24} />
                  <span>Courses</span>
                </Link>
              </li>

              <li>
                <div
                  onClick={() => {
                    setSettingsOpen(!settingsOpen);
                    onToggleSidebar(); // Add this line to handle sidebar toggle
                  }}
                  className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition cursor-pointer"
                >
                  <FiSettings size={24} />
                  <span>General</span>
                  {settingsOpen ? (
                    <FiChevronUp size={20} className="ml-2" />
                  ) : (
                    <FiChevronDown size={20} className="ml-2" />
                  )}
                </div>
                {settingsOpen && (
                  <ul className="space-y-2 pl-8 mt-2">
                    <li>
                      <Link
                        href="/admin/settings/staff"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>Management & Staff</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/settings/banners"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>Banners</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/settings/comments"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>Comments</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/settings/recent-updates"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>Updates</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/settings/announcements"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>Announcements</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/settings/documents"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>Documents Center</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <div
                  onClick={() => {
                    setProjectsOpen(!projectsOpen);
                    onToggleSidebar(); // Add this line to handle sidebar toggle
                  }}
                  className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition cursor-pointer"
                >
                  <FiBriefcase size={24} />
                  <span>Projects</span>
                  {projectsOpen ? (
                    <FiChevronUp size={20} className="ml-2" />
                  ) : (
                    <FiChevronDown size={20} className="ml-2" />
                  )}
                </div>
                {projectsOpen && (
                  <ul className="space-y-2 pl-8 mt-2">
                    <li>
                      <Link
                        href="/admin/projects/ongoing"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>On-going Projects</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/projects/completed"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>Completed Projects</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  href="/admin/production"
                  className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition"
                >
                  <FiBarChart2 size={24} />
                  <span>Products</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
