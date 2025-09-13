export type DropdownItem = {
  href: string;
  label: string;
};

export const dropdowns = [
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
      { href: "/production-units/printing", label: "Offset Machine Printing" },
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
        label: "Don Bosco Iringa MIS (DOMIS)",
      },
      { href: "/admin", label: "Contents Management" },
    ],
  },
];
