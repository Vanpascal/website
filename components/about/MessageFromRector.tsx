"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

export default function MessageFromRector() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 bg-[url('/patterns/geometry.svg')] bg-repeat"
        aria-hidden="true"
      ></div>

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start md:items-stretch">
          {/* Left Column - Rector's Message */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col space-y-6"
          >
            <div className="flex items-center space-x-6">
              <div className="relative w-32 h-32">
                <Image
                  src="/images/Principal.jpg"
                  alt="Rector"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full shadow-xl ring-4 ring-orange-400"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mt-2">
                  Fr. Josephat Utouh SDB
                </h2>
                <p className="uppercase tracking-wide text-orange-500 font-bold">
                  Fr. Rector & The Principal
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-justify flex-1">
              I’m pleased to introduce you to the Don Bosco Youth Training
              Center (DBYTC) Iringa. Choosing the right training center is a
              major decision, and it’s important to choose one that aligns with
              your aspirations. Our website provides a glimpse of what it is
              like to be a student at DBYTC Iringa through the perspectives of
              our past and present students and staff. However, a website can
              only convey so much, and the best way to truly experience the
              spirit of DBYTC is to visit us and see for yourself.
              <br />
              The center is registered by NACTVET, providing Level III
              certification. We focus on youth development through technical
              skills, life skills, and community engagement. Our graduates are
              ready to excel in their careers or start their own businesses.
              Welcome to DBYTC Iringa!
            </p>
          </motion.div>

          {/* Right Column - Rector's Welcome Video */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col justify-center items-center md:items-start space-y-4 w-full"
          >
            {/* Header Row with Subscribe Button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mb-2 gap-3"
            >
              <h3 className="text-xl text-center sm:text-left md:text-2xl font-bold text-purple-900">
                Welcoming Message from Rector
              </h3>

              {/* Responsive Subscribe Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #FF0000" }}
                animate={{
                  boxShadow: [
                    "0 0 10px #FF0000",
                    "0 0 20px #FF4500",
                    "0 0 10px #FF0000",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCFHzBoChAeE2VsKTw4apqXg?sub_confirmation=1",
                    "_blank"
                  )
                }
                className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-[#FF0000] to-[#CC0000] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                <FaYoutube className="text-lg sm:text-xl" />
                <span>Subscribe</span>
              </motion.button>
            </motion.div>

            {/* Responsive Video Container */}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl border-4 border-[#FFD700]"
                src="https://www.youtube.com/embed/PR8WqifFiZY"
                title="Welcome from Rector"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
