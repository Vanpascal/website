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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const fa_1 = require("react-icons/fa");
function Footer() {
    const currentYear = new Date().getFullYear();
    const [showTopButton, setShowTopButton] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const handleScroll = () => {
            setShowTopButton(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const socialLinks = [
        {
            href: "https://www.instagram.com/dbytc_iringa",
            Icon: fa_1.FaInstagram,
            label: "Instagram",
        },
        { href: "https://www.facebook.com", Icon: fa_1.FaFacebook, label: "Facebook" },
        { href: "https://www.linkedin.com", Icon: fa_1.FaLinkedin, label: "LinkedIn" },
        { href: "https://twitter.com", Icon: fa_1.FaTwitter, label: "Twitter" },
        { href: "https://www.youtube.com", Icon: fa_1.FaYoutube, label: "YouTube" },
    ];
    const quickLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Our Services" },
        { href: "/events", label: "Events" },
        { href: "/contact", label: "Contact Us" },
    ];
    return (<footer className="bg-gray-900 text-gray-100 pt-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Connect With Us */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-orange-500 mb-3">
              Connect With Us
            </h3>
            <ul className="flex space-x-4">
              {socialLinks.map(({ href, Icon, label }) => (<li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visit us on ${label}`} className="text-gray-100 hover:text-orange-500 transition-all duration-300 transform hover:scale-110">
                    <Icon className="w-7 h-7"/>
                  </a>
                </li>))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-orange-500 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (<li key={label}>
                  <a href={href} className="text-gray-100 hover:text-orange-500 transition-colors duration-300 hover:underline">
                    {label}
                  </a>
                </li>))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-orange-500 mb-3">
              Contact Us
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <span className="font-semibold text-gray-100">Phone:</span> +255
                (0)763601355
              </li>
              <li>
                <span className="font-semibold text-gray-100">Email:</span>{" "}
                info@donboscoiringa.org
              </li>
              <li>
                <span className="font-semibold text-gray-100">Address:</span>{" "}
                Iringa, Tanzania
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-orange-500 mb-3">
              Subscribe to Our Newsletter
            </h3>
            <form className="space-y-4">
              <input type="email" placeholder="Enter your email" className="w-full p-3 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"/>
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-gray-900 font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-700 opacity-50"></div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-gray-400 text-sm space-y-1">
          <p>© {currentYear} Don Bosco Iringa. All rights reserved.</p>
          <p>Designed and maintained by Don Bosco Iringa ICT Department.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showTopButton && (<button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-orange-500 text-gray-900 p-3 rounded-full shadow-lg hover:bg-orange-600 hover:scale-110 transition-all duration-300 z-50" aria-label="Back to Top">
          <fa_1.FaArrowUp className="w-5 h-5"/>
        </button>)}
    </footer>);
}
exports.default = Footer;
