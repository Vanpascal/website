"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamic imports for client-only components
const Header = dynamic(() => import("@/components/Header/Header"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const MessageFromRector = dynamic(
  () => import("@/components/about/MessageFromRector"),
  { ssr: false }
);
const AboutDb = dynamic(() => import("@/components/about/AboutDb"), {
  ssr: false,
});
const EventsAndNews = dynamic(() => import("@/components/EventsAndNews"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const VisitorLogger = dynamic(() => import("@/components/VisitorLogger"), {
  ssr: false,
});
const OurSponsors = dynamic(() => import("@/components/about/OurSponsers"), {
  ssr: false,
});
const PublicationsSection = dynamic(
  () => import("@/components/about/Publications"),
  { ssr: false }
);
const CoursesPreview = dynamic(
  () => import("@/components/academics/CoursePreview"),
  { ssr: false }
);

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
              <h2 id="rector-heading" className="sr-only">
                Message from Rector
              </h2>
              <MessageFromRector />
            </div>
          </motion.section>

          {/* Courses */}
          <motion.section
            aria-labelledby="courses-heading"
            {...sectionProps}
            className="py-12 px-6 relative"
          >
            <div className="container mx-auto">
              <CoursesPreview />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-gray-50 to-transparent" />
          </motion.section>

          {/* About Don Bosco */}
          <motion.section
            aria-labelledby="about-heading"
            {...sectionProps}
            className="bg-white py-12 px-6"
          >
            <div className="container mx-auto">
              <h2 id="about-heading" className="sr-only">
                About Don Bosco
              </h2>
              <AboutDb />
            </div>
          </motion.section>

          {/* Publications */}
          <motion.section
            aria-labelledby="about-heading"
            {...sectionProps}
            className="bg-white py-12 px-6"
          >
            <div className="container mx-auto">
              <h2 id="about-heading" className="sr-only">
               Publications
              </h2>
              <PublicationsSection />
            </div>
          </motion.section>



          {/* Events and News */}
          <motion.section
            id="events-and-news"
            aria-labelledby="events-heading"
            {...sectionProps}
            className="bg-gray-100 py-12 px-6"
          >
            <div className="container mx-auto">
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
            <div className="container mx-auto">
              <OurSponsors />
            </div>
          </motion.section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  );
}
