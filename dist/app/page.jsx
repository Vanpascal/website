"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LandingPage;
const Header_1 = __importDefault(require("@/components/Header"));
const Hero_1 = __importDefault(require("@/components/Hero"));
const MessageFromRector_1 = __importDefault(require("@/components/about/MessageFromRector"));
const AboutDb_1 = __importDefault(require("@/components/about/AboutDb"));
const Courses_1 = __importDefault(require("@/components/academics/Courses"));
const EventsAndNews_1 = __importDefault(require("@/components/EventsAndNews"));
const Footer_1 = __importDefault(require("@/components/Footer"));
const VisitorLogger_1 = __importDefault(require("@/components/VisitorLogger"));
const framer_motion_1 = require("framer-motion");
const OurSponsers_1 = __importDefault(require("@/components/about/OurSponsers"));
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
function LandingPage() {
    return (<>
      <Header_1.default />

      <main className="pt-16">
        <Hero_1.default />
        <div className="bg-gray-50">
          <VisitorLogger_1.default />

          <framer_motion_1.motion.section aria-label="Message from the Rector" className="py-12 px-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
            <div className="container mx-auto">
              <MessageFromRector_1.default />
            </div>
          </framer_motion_1.motion.section>

          <framer_motion_1.motion.section aria-label="About Don Bosco" className="bg-white py-12 px-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
            <div className="container mx-auto">
              <AboutDb_1.default />
            </div>
          </framer_motion_1.motion.section>

          <framer_motion_1.motion.section aria-label="Courses offered" className="py-12 px-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
            <div className="container mx-auto">
              <Courses_1.default />
            </div>
          </framer_motion_1.motion.section>

          <framer_motion_1.motion.section id="events-and-news" // Make sure this id matches what Header scrolls to
     aria-label="Events and News" className="bg-gray-100 py-12 px-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
            <div className="container mx-auto">
              <EventsAndNews_1.default />
            </div>
          </framer_motion_1.motion.section>

          <framer_motion_1.motion.section aria-label="Our Sponsors" className="bg-gray-100 py-12 px-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
            <div className="container mx-auto">
              <OurSponsers_1.default />
            </div>
          </framer_motion_1.motion.section>

          <Footer_1.default />
        </div>
      </main>
    </>);
}
