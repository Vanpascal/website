"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const image_1 = __importDefault(require("next/image"));
const Footer_1 = __importDefault(require("@/components/Footer"));
const Header_1 = __importDefault(require("@/components/Header"));
const LongCourses_1 = __importDefault(require("@/components/academics/LongCourses"));
const react_1 = __importDefault(require("react"));
exports.metadata = {
    title: "Long Courses",
    keywords: "Long Courses, Vocational Training, Technical Education, Don Bosco Iringa, Skills Training, Career Development",
    description: "Explore long-term vocational courses offered at Don Bosco Youth Training Center-Iringa. Gain practical skills and training for a brighter future. Our long courses provide in-depth training designed to equip students with the skills needed for professional excellence.",
    openGraph: {
        title: "Long Courses | Don Bosco Youth Training Center-Iringa",
        description: "Explore long-term vocational courses offered at Don Bosco Youth Training Center-Iringa. Gain practical skills and training for a brighter future.",
        url: "https://donboscoiringa.org/programs/long-courses",
        type: "website",
        images: [
            {
                url: "https://donboscoiringa.org/images/long.jpg",
                width: 1200,
                height: 630,
                alt: "Long Courses Banner",
            },
        ],
    },
};
const LongCourse = () => {
    return (<div>
      <Header_1.default />
      <section className="relative">
        <image_1.default src="/images/courses.jpg" alt="Long Courses Banner" width={1200} height={630} className="w-full h-80 md:h-[400px] object-cover"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Long Courses Offered
          </h1>
        </div>
      </section>
      <LongCourses_1.default />
      <Footer_1.default />
    </div>);
};
exports.default = LongCourse;
