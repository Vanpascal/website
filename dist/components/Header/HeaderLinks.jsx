"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropdowns = void 0;
// Helper: mark external links
const withExternalFlag = (items) => items.map((item) => (Object.assign(Object.assign({}, item), { isExternal: item.href.startsWith("http") })));
exports.dropdowns = [
    {
        label: "About Us",
        key: "about",
        items: withExternalFlag([
            { href: "/about", label: "About DB-Iringa" },
            { href: "/about/management", label: "Management & Staff" },
            { href: "/about/policies", label: "Our Policies" },
        ]),
    },
    {
        label: "Admission",
        key: "admission",
        items: withExternalFlag([
            { href: "/admission", label: "Admission Information" },
            { href: "https://oas.donboscoiringa.org", label: "Online Admission System" },
        ]),
    },
    {
        label: "Courses Offered",
        key: "courses",
        items: withExternalFlag([
            { href: "/programs/long-courses", label: "Long Courses" },
            { href: "/programs/short-courses", label: "Short Courses" },
        ]),
    },
    {
        label: "Production Units",
        key: "production",
        items: withExternalFlag([
            { href: "/production-units/motor-vehicle", label: "Motor Vehicle Mechanics" },
            { href: "/production-units/carpentry", label: "Carpentry & Joinery" },
            { href: "/production-units/printing", label: "Offset Machine Printing" },
            { href: "/production-units/welding", label: "Welding & Metal Fabrication" },
            { href: "/production-units/masonry", label: "Masonry & Bricklaying" },
            { href: "/production-units/tailoring", label: "DSCT (Tailoring)" },
        ]),
    },
    {
        label: "ICT Services",
        key: "ict",
        items: withExternalFlag([
            { href: "https://oas.donboscoiringa.org", label: "Online Admission System" },
            { href: "https://domis.donboscoiringa.org", label: "Don Bosco Iringa MIS (DOMIS)" },
            { href: "/admin", label: "Contents Management" },
        ]),
    },
];
