"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Mail } from "lucide-react";

export default function OASComingSoon() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#fafafa] to-[#f0f0f0] overflow-hidden">
      {/* Soft floating background shapes */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl"
      />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-8 w-24 h-24 flex items-center justify-center bg-white/70 backdrop-blur-xl shadow-xl rounded-3xl border border-white/30"
        >
          <Clock className="w-12 h-12 text-blue-600" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
        >
          Online Admission System (OAS) <br /> Coming Soon
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-10"
        >
          Our Online Admission System (OAS) is being developed to provide a smooth, secure, and efficient application process for prospective students.  
          <br />
          <span className="font-semibold text-gray-900">
            Stay tuned for updates or reach out for early guidance.
          </span>
        </motion.p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/about"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-700 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Contact Support
          </Link>
          <Link
            href="mailto:info@example.com"
            className="inline-flex items-center gap-2 px-6 py-4 bg-gray-200 text-gray-900 font-semibold rounded-xl shadow hover:bg-gray-300 transition-all duration-300"
          >
            <Mail className="w-5 h-5" /> Notify Me
          </Link>
        </div>

        {/* Small note */}
        <p className="text-sm text-gray-500 mt-12">
          You’ll be notified as soon as the Online Admission System opens. Stay connected!
        </p>
      </div>
    </section>
  );
}
