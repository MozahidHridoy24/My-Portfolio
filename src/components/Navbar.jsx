import { NavLink } from "react-router";
import { FiMenu, FiPhoneCall } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-scroll";
import logo from "../assets/logo2.png";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Nav Links
  const navLinks = (
    <>
      <li>
        <Link
          to="banner"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer"
          activeClass="active-link"
          spy={true}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer"
          activeClass="active-link"
          spy={true}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer"
          activeClass="active-link"
          spy={true}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer"
          activeClass="active-link"
          spy={true}
        >
          Skills
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black text-white px-6 sticky top-0 z-50 shadow-md border-b">
      {/* Logo */}
      <div className="flex-1 md:flex-none">
        <Link
          to="banner"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer text-3xl md:text-4xl font-extrabold tracking-tight flex gap-0 bg-gradient-to-r from-[#055780] via-[#219EBC] to-[#8ECAE6] bg-clip-text text-transparent"
        >
          <img className="w-16 h-12" src={logo} alt="" />
          {/* Mozah
          <motion.span
            className="text-orange-500 drop-shadow-sm"
            initial={{ y: -3 }}
            animate={{ y: [-3, 0, -3] }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              repeatType: "loop",
            }}
          >
            i
          </motion.span>
          d */}
        </Link>
      </div>

      {/* Center Nav Links (md and above) */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="menu menu-horizontal gap-6 text-base">{navLinks}</ul>
      </div>
      {/* Right Contact Button (md and above) */}
      <div className="hidden md:flex justify-end">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-80}
            className="btn btn-outline border-[#219EBC] text-white hover:bg-[#219EBC] hover:text-black transition flex items-center gap-2"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{
                repeat: Infinity,
                repeatDelay: 2,
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="text-lg"
            >
              <FiPhoneCall />
            </motion.span>
            Contact Now
          </Link>
        </motion.div>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden relative" ref={dropdownRef}>
        <label
          tabIndex={0}
          className="btn btn-ghost p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="text-2xl" />
        </label>

        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="absolute right-0 mt-3 z-[50] menu menu-sm p-4 shadow-lg bg-[#0f172a] text-white rounded-box w-52 text-right origin-top-right"
          >
            {navLinks}
            <li className="mt-2">
              <Link
                to="contact"
                smooth
                duration={500}
                offset={-80}
                className="cursor-pointer font-semibold hover:text-[#219EBC] transition"
              >
                Contact Now
              </Link>
            </li>
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
