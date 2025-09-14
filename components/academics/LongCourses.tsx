"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
    <section className="bg-gradient-to-b from-purple-50 to-white min-h-screen py-16 px-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-900">
          Our Long Courses
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Explore our comprehensive programs designed to shape your career and
          future with practical, hands-on learning.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring" }}
            >
              {/* Image with overlay */}
              <div className="relative h-52 w-full">
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <span className="absolute bottom-3 left-3 bg-purple-700 text-white text-sm font-medium px-3 py-1 rounded-full shadow-md">
                  {course.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold text-purple-800 mb-3 group-hover:text-purple-900 transition-colors">
                  {course.name}
                </h2>
                <p className="text-gray-600 text-justify flex-grow">
                  {course.description.length > 140
                    ? course.description.substring(0, 140) + "..."
                    : course.description}
                </p>
              </div>

              {/* Button */}
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <button
                  onClick={redirectToAdmissionSystem}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold rounded-xl hover:shadow-lg hover:from-purple-800 hover:to-purple-950 transition-all duration-300"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No long courses available at the moment. Please check back later.
          </p>
        )}
      </div>
    </section>
  );
};

export default LongCourses;
