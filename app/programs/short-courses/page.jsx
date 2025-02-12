import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ShortCourses from "@/components/academics/ShortCourses";
import React from "react";

const ShortCourse = () => {
  return (
    <div>
      <Header />
      <section className="relative">
        <img
          src="/images/long.jpg" // Replace with your image path
          alt="About Us Banner"
          className="w-full h-80 md:h-[500px] object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Short Courses Offered
          </h1>
        </div>
      </section>
      <ShortCourses />
      <Footer />
    </div>
  );
};

export default ShortCourse;
