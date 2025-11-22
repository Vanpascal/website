"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeroCarousel;
const react_1 = require("react");
const image_1 = __importDefault(require("next/image"));
const framer_motion_1 = require("framer-motion");
const bannerActions_1 = require("@/app/actions/bannerActions");
const AnimatedNumber = ({ value }) => {
    const [count, setCount] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        let start = 0;
        const duration = 1500;
        const stepTime = Math.max(Math.floor(duration / value), 1);
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= value)
                clearInterval(timer);
        }, stepTime);
        return () => clearInterval(timer);
    }, [value]);
    return (<div className="font-bold text-3xl sm:text-4xl md:text-5xl text-orange-400">
      {count}+
    </div>);
};
function HeroCarousel() {
    var _a;
    const [banners, setBanners] = (0, react_1.useState)([]);
    const [activeIndex, setActiveIndex] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        async function getBanners() {
            const data = await (0, bannerActions_1.fetchBanners)();
            setBanners(data);
        }
        getBanners();
    }, []);
    // Auto-rotate banners every 5 seconds
    (0, react_1.useEffect)(() => {
        if (banners.length === 0)
            return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [banners]);
    const handleDragEnd = (_, info) => {
        const offset = info.offset.x;
        if (offset > 50) {
            setActiveIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
        }
        else if (offset < -50) {
            setActiveIndex((prev) => (prev + 1) % banners.length);
        }
    };
    const goTo = (index) => setActiveIndex(index);
    const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % banners.length);
    if (banners.length === 0)
        return null;
    const currentBanner = banners[activeIndex];
    return (<div className="relative w-full bg-purple-900">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[600px] lg:h-[650px] overflow-hidden">
        {/* Mobile Carousel */}
        <div className="md:hidden w-full h-full relative overflow-hidden">
          <framer_motion_1.AnimatePresence>
            <framer_motion_1.motion.div key={currentBanner.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} drag="x" dragConstraints={{ left: 0, right: 0 }} onDragEnd={handleDragEnd} className="absolute inset-0 w-full h-full cursor-grab">
              <image_1.default src={(_a = currentBanner.link) !== null && _a !== void 0 ? _a : "/placeholder.jpg"} alt={currentBanner.title} fill className="object-cover w-full h-full brightness-90"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 flex flex-col justify-end">
                <h1 className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-md leading-snug">
                  {currentBanner.title}
                </h1>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href="/apply" className="px-3 py-2 sm:px-4 sm:py-2.5 bg-gradient-to-r from-orange-400 to-orange-500 text-purple-900 font-semibold rounded-md shadow-lg hover:scale-105 transition-transform duration-300 text-xs sm:text-sm">
                    Apply Now
                  </a>
                  <a href="/about" className="px-3 py-2 sm:px-4 sm:py-2.5 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-purple-900 transition-all duration-300 text-xs sm:text-sm">
                    Learn More
                  </a>
                </div>
                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {banners.map((_, idx) => (<button key={idx} className={`w-2 h-2 rounded-full ${idx === activeIndex ? "bg-orange-400" : "bg-white/50"}`} onClick={() => goTo(idx)}/>))}
                </div>
              </div>
            </framer_motion_1.motion.div>
          </framer_motion_1.AnimatePresence>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block w-full h-full relative">
          <framer_motion_1.AnimatePresence>
            {banners.map((banner, idx) => {
            var _a;
            return idx === activeIndex ? (<framer_motion_1.motion.div key={banner.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 w-full h-full">
                  <image_1.default src={(_a = banner.link) !== null && _a !== void 0 ? _a : "/placeholder.jpg"} alt={banner.title} fill className="object-cover w-full h-full brightness-90"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-10 lg:px-16 pb-10 flex flex-col justify-end">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-snug max-w-3xl">
                      {banner.title}
                    </h1>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <a href="/apply" className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-purple-900 font-semibold rounded-md shadow-lg hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
                        Apply Now
                      </a>
                      <a href="/about" className="px-5 py-2.5 sm:px-6 sm:py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-purple-900 transition-all duration-300 text-sm sm:text-base">
                        Learn More
                      </a>
                    </div>
                    {/* Dots */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                      {banners.map((_, idx) => (<button key={idx} className={`w-3 h-3 rounded-full ${idx === activeIndex
                        ? "bg-orange-400"
                        : "bg-white/50"}`} onClick={() => goTo(idx)}/>))}
                    </div>
                    {/* Arrows */}
                    <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition" onClick={prevSlide}>
                      &#10094;
                    </button>
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition" onClick={nextSlide}>
                      &#10095;
                    </button>
                  </div>
                </framer_motion_1.motion.div>) : null;
        })}
          </framer_motion_1.AnimatePresence>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative mt-8">
        <div className="container mx-auto bg-purple-900/90 rounded-xl shadow-lg p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="hover:scale-105 transition-transform duration-300">
            <AnimatedNumber value={450}/>
            <p className="text-gray-200 mt-2">Youth Under Training</p>
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <AnimatedNumber value={10}/>
            <p className="text-gray-200 mt-2">Technical Courses Offered</p>
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <AnimatedNumber value={15}/>
            <p className="text-gray-200 mt-2">Qualified Instructors</p>
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <AnimatedNumber value={40}/>
            <p className="text-gray-200 mt-2">Years of Service Since 1981</p>
          </div>
        </div>
      </div>
    </div>);
}
