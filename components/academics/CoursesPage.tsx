"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  fetchLongCourse,
  fetchShortCourse,
} from "@/app/actions/coursesActions";

// Course type
type Course = {
  name: string;
  duration: string;
  image: string;
  description: string;
  type: "long" | "short";
};

// Reusable Course Card
const CourseCard = ({
  course,
  onApply,
}: {
  course: Course;
  onApply: () => void;
}) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden group flex flex-col"
  >
    <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
      <Image
        src={course.image}
        alt={course.name}
        fill
        style={{ objectFit: "cover" }}
        className="group-hover:scale-110 transition-transform duration-500 rounded-t-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
    </div>
    <div className="p-6 space-y-2 flex-1">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-900 group-hover:text-purple-700 transition-colors">
        {course.name}
      </h2>
      <p className="text-sm sm:text-base font-medium text-purple-600">
        Duration: {course.duration}
      </p>
      <p className="text-gray-700 text-justify line-clamp-4 text-sm sm:text-base">
        {course.description}
      </p>
    </div>

    {/* Apply Button */}
    <div className="mt-4 w-full sm:w-auto sm:absolute sm:bottom-4 sm:right-4 px-6">
      <button
        onClick={onApply}
        className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-medium rounded-xl shadow-md 
                   opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                   transform translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0
                   transition-all text-sm sm:text-base"
      >
        Apply
      </button>
    </div>
  </motion.div>
);

const CoursesPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filter, setFilter] = useState<"all" | "long" | "short">("all");
  const [showFilters, setShowFilters] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const longData = await fetchLongCourse();
        const shortData = await fetchShortCourse();

        const formattedLong: Course[] = longData.map((c) => ({
          name: c.coursename,
          duration: c.duration,
          image: c.photo ? c.photo : "/images/default-course.jpg",
          description: c.description,
          type: "long",
        }));

        const formattedShort: Course[] = shortData.map((c) => ({
          name: c.coursename,
          duration: c.duration,
          image: c.photo ? c.photo : "/images/default-course.jpg",
          description: c.description,
          type: "short",
        }));

        setCourses([...formattedLong, ...formattedShort]);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    getCourses();
  }, []);

  // Open admission system in a new tab
  const redirectToAdmissionSystem = () => {
    window.open("https://oas.donboscoiringa.org", "_blank");
  };

  const filteredCourses =
    filter === "all"
      ? courses
      : courses.filter((course) => course.type === filter);

  // Scroll effect for showing/hiding filters
  useEffect(() => {
    const rightPanel = document.getElementById("coursesPanel");
    if (!rightPanel) return;

    const handleScroll = () => {
      const scrollTop = rightPanel.scrollTop;
      setShowFilters(scrollTop < lastScrollTop || scrollTop === 0);
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    rightPanel.addEventListener("scroll", handleScroll);
    return () => rightPanel.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <section className="bg-gray-50 min-h-screen flex flex-col lg:flex-row">
      {/* Left Lottie Banner */}
      <div className="lg:w-1/3 bg-purple-900 text-white flex flex-col items-center justify-center p-6 lg:p-12">
        <Player
          autoplay
          loop
          src="/animations/reading-boy.json"
          className="w-full h-64 sm:h-80 md:h-96"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 text-orange-500 text-center">
          Unlock Your Potential
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-purple-100 text-center">
          Explore long-term professional programs or short, impactful courses
          that transform your future.
        </p>
        <button
          onClick={redirectToAdmissionSystem}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-xl shadow-lg"
        >
          Apply Now
        </button>
      </div>

      {/* Right Courses Panel */}
      <div
        id="coursesPanel"
        className="lg:w-2/3 p-6 sm:p-6 md:p-8 overflow-y-auto max-h-screen"
      >
        {/* Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-6 mb-8 sticky top-0 bg-gray-50 z-10 py-4 px-4 sm:px-6 shadow-sm rounded-b-xl transition-all duration-300 ${
            showFilters ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
          }`}
        >
          {["all", "long", "short"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab as "all" | "long" | "short")}
              className={`px-8 py-3 rounded-full font-medium text-base sm:text-lg transition-colors ${
                filter === tab
                  ? "bg-purple-700 text-white shadow-md"
                  : "bg-white text-purple-700 border border-purple-200 hover:bg-purple-50"
              }`}
            >
              {tab === "all"
                ? "All Courses"
                : tab === "long"
                ? "Long Courses"
                : "Short Courses"}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {filteredCourses.map((course, idx) => (
            <CourseCard
              key={idx}
              course={course}
              onApply={redirectToAdmissionSystem}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesPage;
