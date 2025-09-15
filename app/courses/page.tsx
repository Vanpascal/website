import CoursesPage from "@/components/academics/CoursesPage";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import React from "react";

const Courses = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Scrollable main content */}
      <main className="flex-1 pt-[45px] pb-24 overflow-hidden">
        <div className="h-full overflow-y-auto">
          <CoursesPage />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
