"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MessageFromRector from "@/components/about/MessageFromRector";
import AboutDb from "@/components/about/AboutDb";
import Courses from "@/components/academics/Courses";
import EventsAndNews from "@/components/EventsAndNews";
import Footer from "@/components/Footer";
import VisitorLogger from "@/components/VisitorLogger";
import { motion } from "framer-motion";
import OurSponsors from "@/components/about/OurSponsers";

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
      <Header />

      <main className="pt-16">
        <Hero />
        <div className="bg-gray-50">
          <VisitorLogger />

          <motion.section
            aria-label="Message from the Rector"
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
            aria-label="About Don Bosco"
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
            aria-label="Courses offered"
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
            id="events-and-news" // Make sure this id matches what Header scrolls to
            aria-label="Events and News"
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
            aria-label="Our Sponsors"
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
