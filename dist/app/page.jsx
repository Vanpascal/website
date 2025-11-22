"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LandingPage;
const dynamic_1 = __importDefault(require("next/dynamic"));
const framer_motion_1 = require("framer-motion");
// Dynamic imports for client-only components
const Header = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require("@/components/Header/Header"))), {
    ssr: false,
});
const Hero = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require("@/components/Hero"))), { ssr: false });
const MessageFromRector = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require("@/components/about/MessageFromRector"))), { ssr: false });
const AboutDb = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require("@/components/about/AboutDb"))), {
    ssr: false,
});
const EventsAndNews = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require("@/components/EventsAndNews"))), {
    ssr: false,
});
const Footer = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require("@/components/Footer"))), { ssr: false });
const VisitorLogger = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require("@/components/VisitorLogger"))), {
    ssr: false,
});
const OurSponsors = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require("@/components/about/OurSponsers"))), {
    ssr: false,
});
const PublicationsSection = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require("@/components/about/Publications"))), { ssr: false });
const CoursesPreview = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require("@/components/academics/CoursePreview"))), { ssr: false });
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
function LandingPage() {
    return (<>
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <Hero />

        <div className="bg-gray-50">
          <VisitorLogger />

          {/* Rector Message */}
          <framer_motion_1.motion.section aria-labelledby="rector-heading" {...sectionProps} className="py-12 px-6">
            <div className="container mx-auto">
              <h2 id="rector-heading" className="sr-only">
                Message from Rector
              </h2>
              <MessageFromRector />
            </div>
          </framer_motion_1.motion.section>

          {/* Courses */}
          <framer_motion_1.motion.section aria-labelledby="courses-heading" {...sectionProps} className="py-12 px-6 relative">
            <div className="container mx-auto">
              <CoursesPreview />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-gray-50 to-transparent"/>
          </framer_motion_1.motion.section>

          {/* Publications */}
          <PublicationsSection />

          {/* About Don Bosco */}
          <framer_motion_1.motion.section aria-labelledby="about-heading" {...sectionProps} className="bg-white py-12 px-6">
            <div className="container mx-auto">
              <h2 id="about-heading" className="sr-only">
                About Don Bosco
              </h2>
              <AboutDb />
            </div>
          </framer_motion_1.motion.section>

          {/* Events and News */}
          <framer_motion_1.motion.section id="events-and-news" aria-labelledby="events-heading" {...sectionProps} className="bg-gray-100 py-12 px-6">
            <div className="container mx-auto">
              <EventsAndNews />
            </div>
          </framer_motion_1.motion.section>

          {/* Sponsors Carousel */}
          <framer_motion_1.motion.section aria-label="Our Sponsors" className="bg-gray-100 py-12 px-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
            <div className="container mx-auto">
              <OurSponsors />
            </div>
          </framer_motion_1.motion.section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>);
}
