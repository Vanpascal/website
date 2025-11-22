"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const image_1 = __importDefault(require("next/image"));
const framer_motion_1 = require("framer-motion");
function OurSponsors() {
    const sponsors = [
        {
            name: "Polish Aid",
            logo: "/images/sponsors/polish.jpeg",
            link: "https://www.gov.pl/web/polishaid",
        },
        {
            name: "Charles Stewart MOTT Foundation",
            logo: "/images/sponsors/charles.png",
            link: "https://www.mott.org/",
        },
        {
            name: "Don Bosco",
            logo: "/images/sponsors/don-bosco.png",
            link: "http://donboscointernational.eu/",
        },
        {
            name: "Via Don Bosco",
            logo: "/images/sponsors/via.jpg",
            link: "https://www.viadonbosco.org/en/",
        },
        {
            name: "Swiss Contacts",
            logo: "/images/sponsors/swisscontact.png",
            link: "https://www.swisscontact.org/en",
        },
    ];
    return (<section className="bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="container mx-auto px-6">
        <framer_motion_1.motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl font-bold text-center text-purple-900 mb-12">
          Our Development Partners
        </framer_motion_1.motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor, index) => (<framer_motion_1.motion.div key={index} whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-shadow duration-300 w-full max-w-xs">
              <div className="relative w-28 h-28 mb-4">
                <image_1.default src={sponsor.logo} alt={sponsor.name} fill style={{ objectFit: "contain" }} className="rounded-lg"/>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
                {sponsor.name}
              </h3>
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="mt-3 text-purple-900 font-medium text-sm sm:text-base underline hover:text-blue-700">
                Visit Website
              </a>
            </framer_motion_1.motion.div>))}
        </div>
      </div>
    </section>);
}
exports.default = OurSponsors;
