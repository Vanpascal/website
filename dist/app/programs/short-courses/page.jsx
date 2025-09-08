"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const image_1 = __importDefault(require("next/image"));
const Footer_1 = __importDefault(require("@/components/Footer"));
const Header_1 = __importDefault(require("@/components/Header"));
const ShortCourses_1 = __importDefault(require("@/components/academics/ShortCourses"));
const react_1 = __importDefault(require("react"));
exports.metadata = {
    title: "Short Courses",
    description: "Discover short-term vocational courses at Don Bosco Youth Training Center-Iringa. Gain essential skills and hands-on training for career advancement. Our short courses are tailored to meet the demands of modern professionals, offering concise and impactful learning.",
    keywords: "Short Courses, Vocational Training, Technical Skills, Don Bosco Iringa, Career Development, Hands-on Training",
    openGraph: {
        title: "Short Courses | Don Bosco Youth Training Center-Iringa",
        description: "Discover short-term vocational courses at Don Bosco Youth Training Center-Iringa. Gain essential skills and hands-on training for career advancement.",
        url: "https://donboscoiringa.org/programs/short-courses",
        type: "website",
        images: [
            {
                url: "https://donboscoiringa.org/images/short.jpg",
                width: 1200,
                height: 630,
                alt: "Short Courses Banner",
            },
        ],
    },
};
const ShortCourse = () => {
    return (<div>
      <Header_1.default />
      <section className="relative">
        <image_1.default src="/images/courses.jpg" alt="Short Courses Banner" width={1200} height={630} className="w-full h-80 md:h-[400px] object-cover"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Short Courses Offered
          </h1>
        </div>
      </section>
      <ShortCourses_1.default />
      <Footer_1.default />
    </div>);
};
exports.default = ShortCourse;
