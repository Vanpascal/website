import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  variable: "--poppins",
  display: "swap",
  subsets: ["latin"],
});

const fontHeading = Nunito({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Don Bosco Iringa",
  description: "Empowering youth with education and technical skills.",
  keywords: "Don Bosco, Iringa, Youth Center, Education, Skills Training",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${fontHeading.className} ${poppins.variable} ${fontHeading.variable}`}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
