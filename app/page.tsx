"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MessageFromRector from "@/components/about/MessageFromRector";
import AboutDb from "@/components/about/AboutDb";
import Courses from "@/components/academics/Courses";
import EventsAndNews from "@/components/EventsAndNews";
import OurSponsors from "@/components/about/OurSponsers";
import Footer from "@/components/Footer";
import VisitorLogger from "@/components/VisitorLogger";
import { motion } from "framer-motion";

// Animation settings
const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function LandingPage() {
  return (
    <>
      {/* Fix header at the top */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md h-16">
        <Header />
      </div>

      {/* Responsive padding-top for Hero */}
      <main>
        <Hero />

        <div className="bg-gray-50">
          <VisitorLogger />

          {/* Animated Sections */}
          <motion.section
            className="py-12 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="container mx-auto">
              <MessageFromRector />
            </div>
          </motion.section>

          <motion.section
            className="bg-white py-12 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="container mx-auto">
              <AboutDb />
            </div>
          </motion.section>

          <motion.section
            className="py-12 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="container mx-auto">
              <Courses />
            </div>
          </motion.section>

          <motion.section
            className="bg-gray-100 py-12 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="container mx-auto">
              <EventsAndNews />
            </div>
          </motion.section>

          <motion.section
            className="bg-gray-100 py-12 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="container mx-auto">
              <OurSponsors />
            </div>
          </motion.section>

          <Footer />
        </div>
      </main>
    </>
  );
}
