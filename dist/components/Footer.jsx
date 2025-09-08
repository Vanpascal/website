"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
function Footer() {
    const currentYear = new Date().getFullYear();
    return (<footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connect With Us Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <ul className="flex space-x-4">
              {[
            {
                href: "https://www.instagram.com/dbytc_iringa",
                Icon: fa_1.FaInstagram,
                label: "Instagram",
            },
            {
                href: "https://www.facebook.com",
                Icon: fa_1.FaFacebook,
                label: "Facebook",
            },
            {
                href: "https://www.linkedin.com",
                Icon: fa_1.FaLinkedin,
                label: "LinkedIn",
            },
            {
                href: "https://twitter.com",
                Icon: fa_1.FaTwitter,
                label: "Twitter",
            },
            {
                href: "https://www.youtube.com",
                Icon: fa_1.FaYoutube,
                label: "YouTube",
            },
        ].map(({ href, Icon, label }) => (<li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visit us on ${label}`} className="text-gray-100 hover:text-gray-400 transition-colors duration-200">
                    <Icon className="w-7 h-7"/>
                  </a>
                </li>))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Our Services", "Events", "Contact Us"].map((link) => (<li key={link}>
                    <a href="#" className="text-gray-100 hover:text-gray-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Phone: +255 (0)763601355</li>
              <li>Email: info@donboscoiringa.org</li>
              <li>Address: Iringa, Tanzania</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form className="space-y-4">
              <input type="email" placeholder="Enter your email" className="w-full p-3 rounded bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-gray-100 rounded transition-all duration-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-600 opacity-50"></div>

        {/* Footer Bottom */}
        <div className="mt-4 text-center text-gray-400 text-sm">
          <p>© {currentYear} Don Bosco Iringa. All rights reserved.</p>
          <p>Designed and maintained by Don Bosco Iringa ICT Department.</p>
        </div>
      </div>
    </footer>);
}
exports.default = Footer;
