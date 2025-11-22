"use client";

import React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

// Dynamically import CoursesPage for client-side rendering
const CoursesPage = dynamic(
  () => import("@/components/academics/CoursesPage"),
  { ssr: false }
);

const Courses = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main scrollable content */}
      <main className="flex-1 pt-[45px] pb-24 overflow-hidden">
        <div className="h-full overflow-y-auto">
          <CoursesPage />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Courses;
