"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
const framer_motion_1 = require("framer-motion");
const solid_1 = require("@heroicons/react/20/solid");
const react_1 = require("react");
const Dropdown = ({ label, items, isMobile = false, onLinkClick, }) => {
    const pathname = (0, navigation_1.usePathname)();
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const buttonClasses = isMobile
        ? "w-full text-left px-4 py-3 flex justify-between items-center font-medium rounded-lg hover:bg-purple-800 transition shadow-md"
        : "flex items-center space-x-2 font-semibold hover:text-amber-400 transition relative cursor-pointer";
    const menuClasses = isMobile
        ? "overflow-hidden bg-purple-900 rounded-xl shadow-xl mt-2"
        : "absolute mt-2 min-w-[220px] bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl py-2 z-50 border border-white/20";
    // Desktop hover handlers
    const handleMouseEnter = () => !isMobile && setIsOpen(true);
    const handleMouseLeave = () => !isMobile && setIsOpen(false);
    return (<li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className={buttonClasses} onClick={() => isMobile && setIsOpen((prev) => !prev)}>
        <span>{label}</span>
        <solid_1.ChevronDownIcon className={`w-5 h-5 text-orange-700 transition-transform duration-300 ${isOpen ? "rotate-180 scale-110" : ""}`}/>
      </button>

      <framer_motion_1.AnimatePresence>
        {isOpen && (<framer_motion_1.motion.ul initial={isMobile
                ? { height: 0, opacity: 0 }
                : { opacity: 0, y: 8, scale: 0.95 }} animate={isMobile
                ? { height: "auto", opacity: 1 }
                : { opacity: 1, y: 0, scale: 1 }} exit={isMobile
                ? { height: 0, opacity: 0 }
                : { opacity: 0, y: 8, scale: 0.95 }} transition={{ duration: 0.25, ease: "easeInOut" }} className={menuClasses}>
            {items.map(({ href, label }) => {
                const isActive = pathname === href;
                return (<li key={label}>
                  <link_1.default href={href} onClick={() => {
                        onLinkClick === null || onLinkClick === void 0 ? void 0 : onLinkClick();
                        isMobile && setIsOpen(false);
                    }} target={href.startsWith("http") ? "_blank" : "_self"} className={`block px-4 py-2 rounded-lg transition font-medium ${isMobile
                        ? isActive
                            ? "bg-purple-700 text-amber-300"
                            : "hover:bg-purple-700 text-white"
                        : isActive
                            ? "bg-gradient-to-r from-amber-200 to-orange-200 text-purple-900 font-semibold shadow-inner"
                            : "hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 hover:text-purple-900 hover:shadow-md"}`}>
                    {label}
                  </link_1.default>
                </li>);
            })}
          </framer_motion_1.motion.ul>)}
      </framer_motion_1.AnimatePresence>
    </li>);
};
exports.default = Dropdown;
