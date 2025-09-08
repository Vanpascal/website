"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const image_1 = __importDefault(require("next/image"));
function Courses() {
    return (<div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-start mb-8 text-purple-900">
        Courses We Offer
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Long Courses Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-48">
            <image_1.default src="/images/long.jpg" // Replace with the actual image path
     alt="Long Courses" fill style={{ objectFit: "cover" }}/>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">
              Long Courses
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Our long courses provide in-depth training designed to equip
              students with the skills needed for professional excellence.
            </p>
            <button onClick={() => (window.location.href = "/programs/long-courses")} className="mt-6 bg-purple-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-800">
              Read More
            </button>
          </div>
        </div>

        {/* Short Courses Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-48">
            <image_1.default src="/images/long.jpg" // Replace with the actual image path
     alt="Short Courses" fill style={{ objectFit: "cover" }}/>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">
              Short Courses
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Our short courses are tailored to meet the demands of modern
              professionals, offering concise and impactful learning.
            </p>
            <button onClick={() => (window.location.href = "/programs/short-courses")} className="mt-6 bg-purple-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-800">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>);
}
exports.default = Courses;
