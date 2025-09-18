"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

export default function MessageFromRector() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      {/* Background Pattern with animation */}
      <motion.div
        initial={{ backgroundPosition: "0px 0px" }}
        animate={{ backgroundPosition: "200px 200px" }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-10 bg-[url('/patterns/geometry.svg')] bg-repeat bg-[length:220px_220px] mix-blend-multiply"
        aria-hidden="true"
      />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />

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
                {/* Motto */}
                <p className="italic text-purple-700 font-semibold mt-1">
                  “Tulenge Juu Daima”
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-justify flex-1">
              I’m pleased to welcome you to the Don Bosco Youth Training Center
              (DBYTC) Iringa. Choosing the right training center is an important
              step toward shaping your future, and at DBYTC we are committed to
              helping young people discover their potential and grow into
              responsible, skilled, and value-driven members of society.
              <br />
              <br />
              Our center is officially registered by NACTVET and provides Level
              III certification that meets national standards. But beyond
              technical skills, we place strong emphasis on life skills,
              discipline, creativity, and community spirit. Here, you will not
              only learn a trade but also grow in confidence, character, and
              leadership. Many of our graduates have successfully advanced into
              further studies, secured meaningful employment, or even started
              their own businesses.
              <br />
              <br />
              Welcome to DBYTC Iringa, a place where young people are empowered
              to dream, to achieve, and to serve. Together, let us build a
              brighter future filled with hope, skills, and opportunities for
              every young person who walks through our doors.
            </p>

            {/* Call to Action Button */}
            <motion.a
              href="/admissions"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="self-start inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-purple-700 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Visit Us & Learn More →
            </motion.a>
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
                Karibu Don Bosco Iringa!
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
                src="https://www.youtube.com/embed/YwXBjKqBrxQ?list=RDYwXBjKqBrxQ"
                title="TULENGE JUU DAIMA | KARIBU DON BOSCO IRINGA"
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
