"use client";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import MessageFromRector from "@/components/about/MessageFromRector";
import AboutDb from "@/components/about/AboutDb";
import Courses from "@/components/academics/Courses";
import EventsAndNews from "@/components/EventsAndNews";
import Footer from "@/components/Footer";
import VisitorLogger from "@/components/VisitorLogger";
import OurSponsors from "@/components/about/OurSponsers";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const sectionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
  variants: fadeInUp,
};

export default function LandingPage() {
  return (
    <>
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <Hero />

        <div className="bg-gray-50">
          <VisitorLogger />

          {/* Rector Message */}
          <motion.section
            aria-labelledby="rector-heading"
            {...sectionProps}
            className="py-12 px-6"
          >
            <div className="container mx-auto">
              <MessageFromRector />
            </div>
          </motion.section>

          {/* About Don Bosco */}
          <motion.section
            aria-labelledby="about-heading"
            {...sectionProps}
            className="bg-white py-12 px-6"
          >
            <div className="container mx-auto">
              <AboutDb />
            </div>
          </motion.section>

          {/* Courses */}
          <motion.section
            aria-labelledby="courses-heading"
            {...sectionProps}
            className="py-12 px-6 relative"
          >
            <div className="container mx-auto">
              <h2
                id="courses-heading"
                className="text-2xl font-bold text-center mb-6"
              >
                Our Courses
              </h2>
              <Courses />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-gray-50 to-transparent" />
          </motion.section>

          {/* Events and News */}
          <motion.section
            id="events-and-news"
            aria-labelledby="events-heading"
            {...sectionProps}
            className="bg-gray-100 py-12 px-6"
          >
            <div className="container mx-auto">
              <h2
                id="events-heading"
                className="text-2xl font-bold text-center mb-6"
              >
                Events & News
              </h2>
              <EventsAndNews />
            </div>
          </motion.section>

          {/* Sponsors Carousel */}
          <motion.section
            aria-label="Our Sponsors"
            className="bg-gray-100 py-12 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            {" "}
            <div className="container mx-auto">
              {" "}
              <OurSponsors />{" "}
            </div>{" "}
          </motion.section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  );
}
