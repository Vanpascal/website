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
const react_1 = __importStar(require("react"));
const image_1 = __importDefault(require("next/image"));
const coursesActions_1 = require("@/app/actions/coursesActions");
const ShortCourses = () => {
    const [courses, setCourses] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const getCourses = async () => {
            try {
                const data = await (0, coursesActions_1.fetchShortCourse)();
                const formattedData = data.map((course) => ({
                    name: course.coursename,
                    duration: course.duration,
                    image: course.photo ? course.photo : "/photos/default-course.jpg",
                    description: course.description,
                }));
                setCourses(formattedData);
            }
            catch (error) {
                console.error("Error fetching courses:", error);
            }
        };
        getCourses();
    }, []);
    const redirectToAdmissionSystem = () => {
        window.location.href = "https://admission.example.com";
    };
    return (<div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (<div key={index} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:scale-105">
              {/* Image */}
              <div className="relative w-full h-48">
                <image_1.default src={course.image} alt={course.name} fill style={{ objectFit: "cover" }} className="rounded-t-xl"/>
              </div>
              {/* Content */}
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold text-purple-800">
                  {course.name}
                </h2>
                <p className="text-gray-600 mt-2">
                  Duration: {course.duration}
                </p>
                <p className="text-gray-700 mt-4 text-justify">
                  {course.description}
                </p>
              </div>
              {/* Button */}
              <div className="p-6 bg-gray-100">
                <button onClick={redirectToAdmissionSystem} className="w-full px-4 py-3 bg-purple-700 text-white font-medium rounded-xl hover:bg-purple-800 transition-colors duration-300">
                  Apply
                </button>
              </div>
            </div>))}
        </div>
      </div>
    </div>);
};
exports.default = ShortCourses;
