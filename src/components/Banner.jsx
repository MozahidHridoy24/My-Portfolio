import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import myImage from "../assets/mozahid.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FiDownload, FiPhoneCall } from "react-icons/fi";
import { motion } from "motion/react";
import resume from "../assets/Resume-of-Mozahidul-Islam.pdf";
import { Link } from "react-router";
import { SiLeetcode } from "react-icons/si";

const Banner = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-10">
      {/* Left content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-xl font-bold mb-4">
          Hi, I'm <br />
          <span className="text-[#219EBC] text-5xl">
            Mozahidul Islam Hridoy
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl text-amber-400 mb-6">
          <Typewriter
            words={["Full Stack Web Developer", "JavaScript Enthusiast"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="text-base md:text-lg mb-6 max-w-xl text-slate-300">
          Passionate about delivering clean, efficient, and impactful web
          applications using modern technologies like React, Node.js,
          Express.js, MongoDB and Tailwind CSS.
        </p>

        {/* Social Links */}
        <div className="flex gap-4 justify-center md:justify-start text-2xl mb-6">
          <a
            href="https://github.com/MozahidHridoy24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transform transition duration-300 hover:scale-125 hover:text-[#219EBC]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mozahidul-islam-hridoy/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transform transition duration-300 hover:scale-125 hover:text-[#219EBC]"
          >
            <FaLinkedin />
          </a>
          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/MozahidHridoy/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="transform transition duration-300 hover:scale-125 hover:text-[#FFA116]"
          >
            <SiLeetcode className="text-xl" />
          </a>
          <a
            href="https://www.facebook.com/mujahidulislam.hridoy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transform transition duration-300 hover:scale-125 hover:text-[#219EBC]"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Resume & Contact Button */}
        <div className="mb-6 flex gap-6 flex-wrap justify-center md:justify-start">
          {/* Resume Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href={resume}
              download
              className="flex items-center gap-2 px-5 py-2 rounded-md bg-[#219EBC] text-white font-semibold shadow-md hover:bg-[#1a8aa6] transition-colors duration-300 cursor-pointer"
            >
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <FiDownload className="text-lg" />
              </motion.span>
              Resume
            </a>
          </motion.div>

          {/* Contact Now Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="flex items-center gap-2 px-5 py-2 rounded-md bg-[#219EBC] text-white font-semibold shadow-md hover:bg-[#1a8aa6] transition-colors duration-300 cursor-pointer"
            >
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <FiPhoneCall className="text-xl" />
              </motion.span>
              Contact Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 mb-8 lg:mb-0 flex justify-center">
        {/* Bounce wrapper with delayed start */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -50, 0] }}
          transition={{
            delay: 1, // waits for fade-in to finish
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Fade-in image only, no easeOut */}
          <motion.img
            src={myImage}
            alt="Mozahid"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
            }}
            whileHover={{ scale: 1.05 }}
            className=" w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl border-4 border-[#219EBC] ring-2 ring-[#219EBC]/30 hover:ring-[#219EBC] transition duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
