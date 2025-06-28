import { NavLink } from "react-router";
import { FiMenu } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // ✅ Used to detect outside click

  // ✅ Detect clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = (
    <>
      <li>
        <NavLink to="/" className="hover:text-primary">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className="hover:text-primary">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="hover:text-primary">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="hover:text-primary">
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#0f172a] px-6 sticky top-0 left-0 right-0 z-50 shadow-md border-b">
      {/* Brand/Logo */}
      <div className="flex-1">
        <NavLink
          to="/"
          className="text-3xl md:text-4xl font-extrabold tracking-tight flex gap-0 bg-gradient-to-r from-[#055780] via-[#219EBC] to-[#8ECAE6] bg-clip-text text-transparent"
        >
          Mozah
          <motion.span
            className="text-[#FFB703] drop-shadow-sm"
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
          d
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal gap-4 text-base">{navItems}</ul>
      </div>

      {/* Mobile Dropdown */}
      <div className={`relative md:hidden`} ref={dropdownRef}>
        {/* Toggle */}
        <label
          tabIndex={0}
          className="btn btn-ghost p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="text-2xl" />
        </label>

        {/* Animated Dropdown Menu */}

        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="absolute right-0 mt-3 z-[50] menu menu-sm p-4 shadow-lg bg-[#0f172a] text-white rounded-box w-52 text-right origin-top-right"
          >
            {navItems}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
