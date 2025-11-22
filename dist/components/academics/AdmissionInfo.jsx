"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const image_1 = __importDefault(require("next/image"));
const AdmissionInfo = () => {
    return (<div className="bg-gray-100">
      {/* Banner Section */}
      <section className="relative">
        <div className="relative w-full h-80 md:h-[400px]">
          <image_1.default src="/images/about.jpg" alt="About Us Banner" fill style={{ objectFit: "cover" }}/>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Admission Information
          </h1>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Section */}
          <div className="lg:w-3/4 space-y-6">
            {/* Introductory Paragraphs */}
            <div className="space-y-6 text-gray-700">
              <p className="text-justify ">
                Don Bosco Vocational Training Center is a Catholic institution
                in the Diocese of Iringa, managed by the international religious
                congregation of the Salesians of Don Bosco. The center is a day
                school only! This technical training center is registered under
                NACTVET with registration number{" "}
                <strong>REG/NACTVET/0526</strong>. During their studies,
                students will prepare for government exams at levels I, II, and
                III.
              </p>
              <p className="text-justify ">
                We admit students of all genders and religions in all fields. In
                the Competence-Based Assessment (CBA) training system, each
                student is closely monitored, and their progress depends greatly
                on their effort. Vocational training aimed at obtaining a
                National NACTVET certificate at level III takes three (3) years.
              </p>
              <p className="">
                To learn more about the entry qualification points, please visit
                <a href="/programs/long-courses" className="text-purple-900 font-semibold hover:underline ml-1" aria-label="Long-term courses page">
                  this page for long courses
                </a>
                and
                <a href="/programs/short-courses" className="text-purple-900 font-semibold hover:underline ml-1" aria-label="Short-term courses page">
                  this page for short courses
                </a>
                . You can find more details about the entry qualifications and
                other important information.
              </p>
            </div>

            {/* Long-Term Courses Section */}
            <CoursesSection title="Long-Term Courses" description="These are courses offered for a period of three years:" courses={[
            "Electrical Installation",
            "Offset Machine Printing",
            "Motor Vehicle Mechanics",
            "Design, Sewing, and Cloth Technology",
            "Carpentry and Joinery",
            "Welding and Metal Fabrication",
            "Masonry and Bricklaying",
            "Plumbing and Pipe Fitting",
        ]}/>

            {/* Short-Term Courses Section */}
            <CoursesSection title="Short-Term Courses" description="These are courses offered for a period of 6 months to 1 year, except for the computer course, which is offered for a minimum of 3 months:" courses={[
            "Plumbing and Pipe Fitting",
            "Electrical Installation",
            "Motor Vehicle Mechanics",
            "Welding and Metal Fabrication",
            "Carpentry and Joinery",
            "Design, Sewing, and Cloth Technology",
            "Masonry and Bricklaying",
        ]}/>
          </div>

          {/* Sidebar Section */}
          <div className="lg:w-1/4 bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-900 mb-4">
              Related Links
            </h3>
            <ul className="space-y-3  text-gray-700">
              <li>
                <a href="#" className="text-purple-900 hover:underline" aria-label="About Don Bosco Iringa">
                  Long Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-900 hover:underline" aria-label="Admission Requirements">
                  Short Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-900 hover:underline" aria-label="Fee Structure">
                  Fee Structure
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-900 hover:underline" aria-label="Contact Us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>);
};
// Reusable Courses Section Component
const CoursesSection = ({ title, description, courses, }) => (<div className="mt-12">
    <h3 className="text-xl font-semibold text-purple-900 mb-4">{title}</h3>
    <p className=" text-gray-700 mb-4">{description}</p>
    <ul className="list-disc list-inside space-y-3  text-gray-700">
      {courses.map((course, index) => (<li key={index}>{course}</li>))}
    </ul>
  </div>);
exports.default = AdmissionInfo;
