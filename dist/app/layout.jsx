"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const google_1 = require("next/font/google");
require("./globals.css");
const poppins = (0, google_1.Poppins)({
    weight: ["400", "700"],
    variable: "--poppins",
    display: "swap",
    subsets: ["latin"],
});
const fontHeading = (0, google_1.Nunito)({
    variable: "--font-heading",
    subsets: ["latin"],
});
exports.metadata = {
    metadataBase: new URL("https://donboscoiringa.org"),
    title: {
        default: "Don Bosco Youth Training Center - Iringa",
        template: "%s | Don Bosco Youth Training Center - Iringa",
    },
    description: "Don Bosco Youth Training Center in Iringa provides vocational training, technical education, and youth development programs. Established in 1981, we empower young people with essential skills.",
    keywords: "Don Bosco Iringa, Vocational Training, Technical Education, Youth Center, Skills Development, Training Center",
    openGraph: {
        title: "Don Bosco Youth Training Center - Iringa",
        type: "website",
        siteName: "Don Bosco Youth Training Center",
        url: "https://donboscoiringa.org",
        description: "Empowering young people with vocational skills and technical education since 1981.",
        images: [
            {
                url: "https://donboscoiringa.org/images/logo.png",
                width: 1200,
                height: 630,
                alt: "Don Bosco Youth Training Center Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Don Bosco Youth Training Center - Iringa",
        description: "Empowering young people with vocational skills and technical education since 1981.",
        images: ["https://donboscoiringa.org/images/logo.png"],
        creator: "@DonBoscoIringa",
    },
    alternates: {
        canonical: "https://donboscoiringa.org",
    },
    robots: "index, follow",
};
function RootLayout({ children, }) {
    return (<html lang="en">
      <head>
        <link rel="canonical" href="https://donboscoiringa.org"/>
      </head>
      <body suppressHydrationWarning className={`${fontHeading.className} ${poppins.className}`}>
        {children}
        <react_toastify_1.ToastContainer />
      </body>
    </html>);
}
