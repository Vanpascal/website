"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

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
    image: "/images/long-course.jpg",
    link: "/courses",
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
    image: "/images/short-course.jpg",
    link: "/courses",
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
            className={`bg-gradient-to-r ${course.bg} rounded-3xl shadow-lg p-8 md:p-16 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-800 text-justify">
                {course.title}
              </h3>
              <p className="text-gray-700 text-justify leading-relaxed">
                {course.description}
              </p>

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
                    <div className="bg-purple-100 rounded-full p-1">
                      <CheckCircle2 className="w-6 h-6 text-purple-700" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Link
                href={course.link}
                className="inline-block mt-6 px-10 py-4 bg-gradient-to-r from-purple-700 to-purple-900 text-white rounded-full font-semibold shadow-lg hover:from-purple-800 hover:to-purple-950 transition-transform hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-2xl shadow-xl relative">
                <motion.img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none" />
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Special Free Programs */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-yellow-50 to-white rounded-3xl shadow-lg p-10 md:p-16 space-y-8"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-orange-700 text-center">
          🎉 Special Free Programs Just For You!
        </h3>

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

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              name: "Apprenticeship Skills - ATC Program",
              description:
                "Free training sessions focusing on technical and vocational skills.",
              image: "/images/atc-program.jpg",
              link: "/courses?filter=atc",
              color: "from-yellow-100 to-yellow-50",
            },
            {
              name: "Skills For Employment Tanzania - SET Program",
              description:
                "Special sessions to empower learners with essential tech skills.",
              image: "/images/set-program.jpg",
              link: "/courses?filter=set",
              color: "from-orange-100 to-yellow-50",
            },
            {
              name: "Short Course Program",
              description:
                "Quick, practical courses designed to improve your employability.",
              image: "/images/short-course.jpg",
              link: "/courses?filter=special-short",
              color: "from-yellow-200 to-white",
            },
          ].map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${program.color} rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-transform hover:-translate-y-1`}
            >
              <div className="w-full h-44 md:h-52 overflow-hidden relative">
                <motion.img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              <div className="p-6 text-center">
                <h4 className="font-semibold text-lg md:text-xl text-orange-700 mb-2">
                  {program.name}
                </h4>

                <p className="text-gray-700 text-sm md:text-base">
                  {program.description}
                </p>

                <Link
                  href={program.link}
                  className="mt-4 inline-block px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-transform hover:-translate-y-1"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-gray-700 text-center">
          Stay updated on new free programs — follow us on our social media
          platforms!
        </p>
        <div className="flex justify-center items-center gap-6 mt-2">
          <Link
            href="https://x.com/JohnBos91710750"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <Twitter className="w-8 h-8 text-gray-700" />
          </Link>
          <Link
            href="https://www.facebook.com/Dbytciringa22"
            target="_blank"
            className="hover:text-blue-600 transition"
          >
            <Facebook className="w-8 h-8 text-gray-700" />
          </Link>
          <Link
            href="https://www.instagram.com/dbytc_iringa/"
            target="_blank"
            className="hover:text-pink-500 transition"
          >
            <Instagram className="w-8 h-8 text-gray-700" />
          </Link>
          <Link
            href="https://tz.linkedin.com/company/don-bosco-youth-training-centre-iringa"
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
