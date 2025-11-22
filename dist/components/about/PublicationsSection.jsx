"use strict";
// app/components/about/PublicationsSection.tsx
"use client"; // motion, Swiper are client-side
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PublicationsSection;
const framer_motion_1 = require("framer-motion");
const react_1 = require("swiper/react");
const modules_1 = require("swiper/modules");
require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/pagination");
function PublicationsSection({ publications, }) {
    if (!publications || publications.length === 0) {
        return (<div className="text-center text-gray-500 py-10">
        No publications yet.
      </div>);
    }
    const top = publications.slice(0, 3);
    const rest = publications.slice(3);
    return (<section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-purple-900 mb-10">
        Latest Publications
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {top.map((pub, idx) => (<framer_motion_1.motion.div key={pub.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.2 }} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 relative">
            <div className="relative w-full aspect-video">
              <iframe className="absolute top-0 left-0 w-full h-full rounded-t-3xl" src={`https://www.youtube.com/embed/${pub.youtubeId}`} title={pub.title} allowFullScreen/>
            </div>
            <div className="p-5">
              <h3 className="text-lg sm:text-xl font-bold text-purple-900 line-clamp-2">
                {pub.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Published on {new Date(pub.createdAt).toLocaleDateString()}
              </p>
            </div>
          </framer_motion_1.motion.div>))}
      </div>

      {rest.length > 0 && (<react_1.Swiper modules={[modules_1.Pagination, modules_1.Navigation, modules_1.Autoplay]} slidesPerView={1} spaceBetween={16} pagination={{ clickable: true }} navigation autoplay={{ delay: 6000 }} loop breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
            }}>
          {rest.map((pub) => (<react_1.SwiperSlide key={pub.id}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative">
                <div className="relative w-full aspect-video">
                  <iframe className="absolute top-0 left-0 w-full h-full rounded-t-2xl" src={`https://www.youtube.com/embed/${pub.youtubeId}`} title={pub.title} allowFullScreen/>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-purple-900 line-clamp-2">
                    {pub.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Published on {new Date(pub.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </react_1.SwiperSlide>))}
        </react_1.Swiper>)}
    </section>);
}
