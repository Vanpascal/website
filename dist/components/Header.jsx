"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
const react_1 = require("react");
const solid_1 = require("@heroicons/react/20/solid");
// CSS for blinking animation
const blinkStyle = `
@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}
.blink {
  animation: blink 1.5s infinite;
}
`;
const Dropdown = ({ label, items, isOpen, setIsOpen, }) => (<li className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
    <button className="flex items-center space-x-1 hover:text-blue-400" aria-expanded={isOpen}>
      <span>{label}</span>
      <solid_1.ChevronDownIcon className="w-5 h-5"/>
    </button>
    {isOpen && (<ul className="absolute bg-purple-800 text-white py-2 rounded shadow-lg w-48 text-sm">
        {items.map(({ href, label }) => (<li key={label}>
            <link_1.default href={href} className="px-4 py-2 block hover:bg-purple-700">
              {label}
            </link_1.default>
          </li>))}
      </ul>)}
  </li>);
function Header() {
    const [isMenuOpen, setIsMenuOpen] = (0, react_1.useState)(false);
    const [dropdownState, setDropdownState] = (0, react_1.useState)({
        about: false,
        admission: false,
        courses: false,
        projects: false,
        production: false,
        ict: false,
    });
    const toggleDropdown = (key) => {
        setDropdownState((prev) => (Object.assign(Object.assign({}, prev), { [key]: !prev[key] })));
    };
    // scroll to events section on page
    const scrollToEvents = () => {
        const section = document.getElementById("events-and-news");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    const dropdowns = [
        {
            label: "About Us",
            key: "about",
            items: [
                { href: "/about", label: "About DB-Iringa" },
                { href: "/about/management", label: "Management & Staff" },
                { href: "/about/policies", label: "Our Policies" },
            ],
        },
        {
            label: "Admission",
            key: "admission",
            items: [
                { href: "/admission", label: "Admission Information" },
                { href: "/oas.donboscoiringa.org", label: "Online Admission System" },
            ],
        },
        {
            label: "Courses Offered",
            key: "courses",
            items: [
                { href: "/programs/long-courses", label: "Long Courses" },
                { href: "/programs/short-courses", label: "Short Courses" },
            ],
        },
        {
            label: "Production Units",
            key: "production",
            items: [
                {
                    href: "/production-units/motor-vehicle",
                    label: "Motor Vehicle Mechanics",
                },
                { href: "/production-units/carpentry", label: "Carpentry & Joinery" },
                {
                    href: "/production-units/printing",
                    label: "Offset Machine Printing",
                },
                {
                    href: "/production-units/welding",
                    label: "Welding & Metal Fabrication",
                },
                { href: "/production-units/masonry", label: "Masonry & Bricklaying" },
                { href: "/production-units/tailoring", label: "DSCT (Tailoring)" },
            ],
        },
        {
            label: "ICT Services",
            key: "ict",
            items: [
                { href: "oas.donboscoiringa.org", label: "Online Admission System" },
                {
                    href: "domis.donboscoiringa.org",
                    label: "Don Bosco Iringa Management Information System (DOMIS)",
                },
                { href: "/admin", label: "Contents Management" },
            ],
        },
    ];
    return (<>
      <style>{blinkStyle}</style>
      <header className="fixed top-0 w-full bg-purple-900 text-white py-2 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <link_1.default href="/" className="flex items-center space-x-3">
              <image_1.default src="/images/logo.png" width={48} height={48} alt="DB Logo" className="w-12 h-12 rounded-full"/>
              <span className="font-bold text-lg md:text-xl">
                DBYTC - Iringa
              </span>
            </link_1.default>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-6">
              <li>
                <link_1.default href="/" className="hover:text-blue-400">
                  Home
                </link_1.default>
              </li>
              {dropdowns.map(({ label, key, items }) => (<Dropdown key={key} label={label} items={items} isOpen={dropdownState[key]} setIsOpen={() => toggleDropdown(key)}/>))}
              {/* Blinking Button */}
              <li>
                <button onClick={scrollToEvents} className="blink px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition">
                  Events & News
                </button>
              </li>
              <li>
                <link_1.default href="/donate" className="px-6 py-2 bg-amber-500 text-purple-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition">
                  Donate
                </link_1.default>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (<ul className="absolute top-full left-0 w-full bg-purple-800 text-white flex flex-col shadow-lg md:hidden">
            <li>
              <link_1.default href="/" className="block px-4 py-2 hover:bg-purple-700">
                Home
              </link_1.default>
            </li>
            {dropdowns.map(({ label, key, items }) => (<li key={key}>
                <button onClick={() => toggleDropdown(key)} className="w-full text-left px-4 py-2 hover:bg-purple-700 flex justify-between">
                  <span>{label}</span>
                  <solid_1.ChevronDownIcon className="w-5 h-5"/>
                </button>
                {dropdownState[key] && (<ul className="bg-purple-700">
                    {items.map(({ href, label }) => (<li key={label}>
                        <link_1.default href={href} className="px-4 py-2 block hover:bg-purple-600">
                          {label}
                        </link_1.default>
                      </li>))}
                  </ul>)}
              </li>))}
            {/* Mobile Blinking Button */}
            <li>
              <button onClick={scrollToEvents} className="blink block w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition">
                APPLICATION FORM FOR 2026
              </button>
            </li>
            <li>
              <link_1.default href="/donate" className="block px-4 py-2 bg-yellow-600 text-purple-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition mx-4 my-2">
                Donate
              </link_1.default>
            </li>
          </ul>)}
      </header>
    </>);
}
exports.default = Header;
