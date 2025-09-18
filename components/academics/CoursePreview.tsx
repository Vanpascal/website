"use client";

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

// Premium preview courses data
const previewCourses = [
  {
    title: "Long Courses",
    description:
      "Our long courses are comprehensive training programs designed to equip students with both theoretical knowledge and hands-on practical experience. These programs run over an extended period, allowing learners to master their craft and develop professional competencies that employers demand. They are ideal for those seeking nationally recognized qualifications, career stability, and opportunities for advancement in technical and vocational fields.",
    highlights: [
      "Nationally recognized certifications upon completion",
      "Extensive hands-on workshops and practical sessions",
      "Mentorship from experienced industry professionals",
      "Strong foundation for long-term career growth or further studies",
    ],
    animation: "/animations/reading-boy.json",
    link: "/courses?filter=long",
    bg: "from-purple-50 to-white",
  },
  {
    title: "Short Courses",
    description:
      "Our short courses are intensive, skills-focused training sessions tailored to meet the demands of today’s fast-paced job market. They are designed for individuals who want to quickly acquire new skills, sharpen existing abilities, or explore specific areas of interest without committing to a full program. With a strong emphasis on practical application, learners can immediately put their knowledge to use in real-world scenarios.",
    highlights: [
      "Fast-track learning in just weeks or months",
      "Practical training with real-world tools and techniques",
      "Flexible schedules suitable for working professionals",
      "Boost employability and career opportunities instantly",
    ],
    animation: "/animations/plumbers.json",
    link: "/courses?filter=short",
    bg: "from-orange-50 to-white",
  },
];

export default function CoursesPreview() {
  return (
    <section className="space-y-20">
      {previewCourses.map((course, index) => {
        const listVariants = {
          hidden: { opacity: 0, y: 20 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.5, type: "spring" },
          }),
        };

        return (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-r ${
              course.bg
            } rounded-3xl shadow-md p-10 md:p-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-purple-800 text-justify">
                {course.title}
              </h3>
              <p className="text-gray-700 text-justify leading-relaxed">
                {course.description}
              </p>

              {/* Highlights list with staggered animation */}
              <ul className="space-y-3 text-gray-700 text-base">
                {course.highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={listVariants}
                  >
                    <CheckCircle2 className="w-6 h-6 text-purple-700 shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Link
                href={course.link}
                className="inline-block mt-6 px-10 py-4 bg-gradient-to-r from-purple-700 to-purple-900 text-white rounded-full font-semibold shadow-lg hover:from-purple-800 hover:to-purple-950 transition"
              >
                Learn More
              </Link>
            </div>

            {/* Animation */}
            <div className="flex-1 flex justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96">
                <Player autoplay loop src={course.animation} />
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Special Free Programs Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-yellow-50 to-white rounded-3xl shadow-md p-10 md:p-16 space-y-8"
      >
        {/* Header */}
        <h3 className="text-3xl md:text-4xl font-bold text-orange-700 text-center">
          🎉 Special Free Programs Just For You!
        </h3>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center md:text-justify">
          Take advantage of our{" "}
          <strong className="text-orange-600">exclusive free programs</strong>{" "}
          offered in collaboration with our development partners. Stay updated
          by following our social channels — new sessions, especially{" "}
          <strong>ATC Programs</strong> and <strong>SET Programs</strong>, are
          announced regularly. Don’t miss our{" "}
          <strong className="text-orange-600">
            Special Short Course Programs
          </strong>{" "}
          designed to jumpstart your skills at no cost!
        </p>

        {/* Free Programs Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              name: "Apprenticeship Skills - ATC Program ",
              description:
                "Free training sessions focusing on technical and vocational skills.",
              animation: "/animations/sparkle.json",
              link: "/courses?filter=atc",
              color: "from-yellow-100 to-yellow-50",
            },
            {
              name: "Skills For Employment Tanzania - SET Program",
              description:
                "Special sessions to empower learners with essential tech skills.",
              animation: "/animations/sewing.json",
              link: "/courses?filter=set",
              color: "from-orange-100 to-yellow-50",
            },
            {
              name: "Short Course Program",
              description:
                "Quick, practical courses designed to improve your employability.",
              animation: "/animations/digital-marketing.json",
              link: "/courses?filter=special-short",
              color: "from-yellow-200 to-white",
            },
          ].map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${program.color} rounded-2xl p-6 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform`}
            >
              {/* Animation */}
              <div className="w-24 h-24 md:w-28 md:h-28 mb-4">
                <Player autoplay loop src={program.animation} />
              </div>

              {/* Program Name */}
              <h4 className="font-semibold text-lg md:text-xl text-orange-700 mb-2">
                {program.name}
              </h4>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base">
                {program.description}
              </p>

              {/* Learn More Button */}
              <Link
                href={program.link}
                className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Social Media Links CTA */}
        <p className="mt-6 text-gray-700 text-center">
          Stay updated on new free programs — follow us on our social media
          platforms!
        </p>
        <div className="flex justify-center items-center gap-6 mt-2">
          <Link
            href="https://twitter.com"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <Twitter className="w-8 h-8 text-gray-700" />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            className="hover:text-blue-600 transition"
          >
            <Facebook className="w-8 h-8 text-gray-700" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="hover:text-pink-500 transition"
          >
            <Instagram className="w-8 h-8 text-gray-700" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-blue-700 transition"
          >
            <Linkedin className="w-8 h-8 text-gray-700" />
          </Link>
        </div>
      </motion.section>
    </section>
  );
}
