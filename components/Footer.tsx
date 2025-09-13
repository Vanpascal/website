"use client";
import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
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
      Icon: FaInstagram,
      label: "Instagram",
    },
    { href: "https://www.facebook.com", Icon: FaFacebook, label: "Facebook" },
    { href: "https://www.linkedin.com", Icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://twitter.com", Icon: FaTwitter, label: "Twitter" },
    { href: "https://www.youtube.com", Icon: FaYoutube, label: "YouTube" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100 pt-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Connect With Us */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-orange-500 mb-3">
              Connect With Us
            </h3>
            <ul className="flex space-x-4">
              {socialLinks.map(({ href, Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit us on ${label}`}
                    className="text-gray-100 hover:text-orange-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="w-7 h-7" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-orange-500 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-100 hover:text-orange-500 transition-colors duration-300 hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
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
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-gray-900 font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
              >
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
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange-500 text-gray-900 p-3 rounded-full shadow-lg hover:bg-orange-600 hover:scale-110 transition-all duration-300 z-50"
          aria-label="Back to Top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}

export default Footer;
