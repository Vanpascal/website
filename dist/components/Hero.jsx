"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ResponsiveCarousel;
const react_1 = require("react");
const image_1 = __importDefault(require("next/image"));
const react_2 = require("swiper/react");
require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/pagination");
const modules_1 = require("swiper/modules");
const bannerActions_1 = require("@/app/actions/bannerActions");
function ResponsiveCarousel() {
    const [banners, setBanners] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        async function getBanners() {
            const data = await (0, bannerActions_1.fetchBanners)();
            setBanners(data);
        }
        getBanners();
    }, []);
    return (<div className="relative w-full">
      <react_2.Swiper modules={[modules_1.Navigation, modules_1.Pagination, modules_1.Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 5000 }} loop className="w-full">
        {banners.map((banner) => {
            var _a;
            return (<react_2.SwiperSlide key={banner.id}>
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
              <image_1.default src={(_a = banner.link) !== null && _a !== void 0 ? _a : "/placeholder.jpg"} alt={banner.title} layout="fill" objectFit="contain" className="w-full h-full"/>
              {/* Gradient Overlay for Better Readability */}
              <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-1 bg-black/40 sm:bg-black/60 text-white text-left px-2 py-1 sm:px-4 sm:py-2 rounded-lg w-[90%] md:w-auto">
                  <h2 className="text-sm sm:text-lg md:text-xl font-semibold">
                    {banner.title}
                  </h2>
                </div>
              </div>

              {/* Left-Aligned Title */}
            </div>
          </react_2.SwiperSlide>);
        })}
      </react_2.Swiper>
    </div>);
}
