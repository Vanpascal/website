"use client";

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

// Courses Data
const courses = [
  {
    title: "Long Courses",
    description:
      "Our long courses provide in-depth training designed to equip students with the skills needed for professional excellence.",
    animation: "/animations/reading-boy.json",
    link: "/programs/long-courses",
    buttonText: "Read More",
  },
  {
    title: "Short Courses",
    description:
      "Our short courses are tailored to meet the demands of modern professionals, offering concise and impactful learning.",
    animation: "/animations/plumbers.json",
    link: "/programs/short-courses",
    buttonText: "Learn More",
  },
];

// Scroll animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.25, type: "spring", stiffness: 100 },
  }),
};

export default function Courses() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-purple-50 to-white">
      {/* Animated Background Shapes */}
      <motion.div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200 rounded-full opacity-30 -z-10 animate-spin-slow" />
      <motion.div className="absolute bottom-10 right-1/3 w-56 h-56 bg-purple-300 rounded-full opacity-20 -z-10 animate-pulse-slow" />
      <motion.div className="absolute top-1/3 right-1/4 w-40 h-40 bg-purple-100 rounded-full opacity-25 -z-10 animate-bounce-slow" />

      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-5xl font-extrabold text-purple-900 mb-16 text-center md:text-left">
          Courses We Offer
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-3xl hover:-translate-y-1 transition-all duration-500"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              {/* Animated Illustration */}
              <div className="w-full md:w-52 flex-shrink-0">
                <Player
                  autoplay
                  loop
                  keepLastFrame
                  src={course.animation}
                  className="w-full h-52"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-purple-800 mb-4">
                  {course.title}
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  {course.description}
                </p>
                <a
                  href={course.link}
                  className="inline-block bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold px-6 py-3 rounded-xl hover:from-purple-800 hover:to-purple-950 transition-all shadow-lg"
                >
                  {course.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
