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
const react_2 = require("swiper/react");
require("swiper/css");
require("swiper/css/pagination");
require("swiper/css/navigation");
const modules_1 = require("swiper/modules");
const commentsActions_1 = require("@/app/actions/commentsActions"); // Adjust path as needed
const image_1 = __importDefault(require("next/image"));
const AddComment_1 = __importDefault(require("@/app/(dashboard)/admin/components/AddComment"));
// Utility to get initials from full name
function getInitials(name) {
    if (!name)
        return "NA";
    const names = name.trim().split(" ");
    if (names.length === 1)
        return names[0][0].toUpperCase();
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
}
function Testimonials() {
    const [testimonials, setTestimonials] = (0, react_1.useState)([]);
    const getTestimonials = (0, react_1.useCallback)(async () => {
        try {
            const data = await (0, commentsActions_1.fetchComments)();
            const formattedData = data.map((comment) => {
                var _a;
                return ({
                    message: comment.content,
                    name: comment.author,
                    whoComment: comment.whoComment,
                    photo: (_a = comment.photo) !== null && _a !== void 0 ? _a : "",
                });
            });
            setTestimonials(formattedData);
        }
        catch (error) {
            console.error("Error fetching testimonials:", error);
        }
    }, []);
    (0, react_1.useEffect)(() => {
        getTestimonials();
    }, [getTestimonials]);
    return (<section className="py-10 bg-gray-50" aria-label="Testimonials Section">
      <div className="container mx-auto px-4 text-start">
        <h2 className="text-2xl font-bold text-purple-900 mb-10">
          What people say about us
        </h2>

        <AddComment_1.default onCommentAdded={getTestimonials}/>

        {testimonials.length === 0 ? (<p className="text-gray-500 mt-6 text-center">
            No testimonials yet. Be the first to comment!
          </p>) : (<react_2.Swiper pagination={{ clickable: true }} navigation={false} autoplay={{ delay: 5000 }} modules={[modules_1.Pagination, modules_1.Navigation, modules_1.Autoplay]} className="w-full mt-8">
            {testimonials.map((testimonial, index) => {
                const initials = getInitials(testimonial.name);
                // Compose the default avatar URL with initials and your colors
                const defaultPhotoUrl = `https://ui-avatars.com/api/?name=${initials}&background=6B46C1&color=fff&size=128&font-size=0.5`;
                return (<react_2.SwiperSlide key={index}>
                  <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg">
                      <image_1.default src={testimonial.photo || defaultPhotoUrl} alt={`${testimonial.name || "User"}'s picture`} fill style={{ objectFit: "cover" }} className="rounded-full" unoptimized // Important for external URLs
                />
                    </div>

                    <div className="text-left flex-1">
                      <p className="italic text-gray-700 mb-4 break-words word-wrap">
                        &quot;{testimonial.message}&quot;
                      </p>
                      <h4 className="text-xl font-semibold text-purple-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-black">
                        {testimonial.whoComment}
                      </p>
                    </div>
                  </div>
                </react_2.SwiperSlide>);
            })}
          </react_2.Swiper>)}
      </div>
    </section>);
}
exports.default = Testimonials;
