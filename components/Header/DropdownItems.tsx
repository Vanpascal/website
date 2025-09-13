"use client";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";
import { DropdownItem } from "./HeaderLinks";

type DropdownProps = {
  label: string;
  items: DropdownItem[];
  isMobile?: boolean;
  isOpen: boolean; // now controlled externally
  setIsOpen: () => void; // toggle function from parent
  onLinkClick?: () => void; // optional callback when link clicked
};

const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  isMobile = false,
  isOpen,
  setIsOpen,
  onLinkClick,
}) => {
  const buttonClasses = isMobile
    ? "w-full text-left px-4 py-2 hover:bg-purple-700 flex justify-between items-center"
    : "flex items-center space-x-1 font-medium hover:text-yellow-300 transition-colors";

  const menuClasses = isMobile
    ? "overflow-hidden bg-purple-700"
    : "absolute mt-2 bg-white text-gray-800 py-2 rounded-lg shadow-xl w-52 text-sm z-50";

  return (
    <li className="relative">
      <button className={buttonClasses} onClick={setIsOpen}>
        <span>{label}</span>
        <ChevronDownIcon
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={
              isMobile ? { height: 0, opacity: 0 } : { opacity: 0, y: 10 }
            }
            animate={
              isMobile ? { height: "auto", opacity: 1 } : { opacity: 1, y: 0 }
            }
            exit={isMobile ? { height: 0, opacity: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className={menuClasses}
          >
            {items.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={`block px-4 py-2 rounded-md hover:text-purple-900 hover:bg-purple-100 transition ${
                    isMobile ? "hover:bg-purple-600" : ""
                  }`}
                  onClick={onLinkClick}
                >
                  {label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

export default Dropdown;
