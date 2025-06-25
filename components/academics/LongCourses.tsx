"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchLongCourse } from "@/app/actions/coursesActions";

type Course = {
  name: string;
  duration: string;
  image: string;
  description: string;
};

const LongCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const data = await fetchLongCourse();
        const formattedData: Course[] = data.map((course) => ({
          name: course.coursename,
          duration: course.duration,
          image: course.photo ? course.photo : "/images/default-course.jpg",
          description: course.description,
        }));
        setCourses(formattedData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    getCourses();
  }, []);

  const redirectToAdmissionSystem = () => {
    window.location.href = "https://admission.example.com";
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-xl"
                />
              </div>
              {/* Content */}
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold text-purple-800">
                  {course.name}
                </h2>
                <p className="text-gray-600 mt-2">
                  Duration: {course.duration}
                </p>
                <p className="text-gray-700 mt-4 text-justify">
                  {course.description}
                </p>
              </div>
              {/* Button */}
              <div className="p-6 bg-gray-100">
                <button
                  onClick={redirectToAdmissionSystem}
                  className="w-full px-4 py-3 bg-purple-700 text-white font-medium rounded-xl hover:bg-purple-800 transition-colors duration-300"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LongCourses;
