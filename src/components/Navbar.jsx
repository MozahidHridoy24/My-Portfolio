import { NavLink } from "react-router";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="navbar bg-base-100 px-6 sticky top-0 left-0 right-0 z-50 shadow-md  border-b">
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
      <div className="md:hidden">
        <div className="dropdown dropdown-end">
          <button
            tabIndex={0}
            className="btn btn-ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiMenu className="text-2xl" />
          </button>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
