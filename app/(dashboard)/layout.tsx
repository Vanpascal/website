"use client";

import React, { useState, ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="lg:pl-64 flex-1 bg-gray-100 overflow-hidden flex flex-col">
        {/* Sticky Navbar */}
        <div className="sticky top-0 z-30 bg-white shadow-md">
          <Navbar onToggleSidebar={toggleSidebar} />
        </div>

        {/* Children content */}
        <div className="p-6 mt-10 overflow-auto flex-1">{children}</div>
      </div>
    </div>
  );
}
