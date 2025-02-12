import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LongCourses from "@/components/academics/LongCourses";
import React from "react";

const LongCourse = () => {
  return (
    <div>
      <Header />
      <section className="relative">
        <img
          src="/images/long.jpg"
          alt="About Us Banner"
          className="w-full h-80 md:h-[500px] object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Long Courses Offered
          </h1>
        </div>
      </section>
      <LongCourses />
      <Footer />
    </div>
  );
};

export default LongCourse;
