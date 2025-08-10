import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "motion/react";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    icon: <FaGithub />,
    url: "https://github.com/MozahidHridoy24",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/mozahidul-islam-hridoy/",
    label: "LinkedIn",
  },

  {
    icon: <FaFacebook />,
    url: "https://facebook.com/mujahidulislam.hridoy",
    label: "Facebook",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/mozahid_hridoy?igsh=MWNucW5pNXh6M2FoZA==",
    label: "Instagram",
  },
  {
    icon: <FaWhatsapp />,
    url: "https://wa.me/8801521217816",
    label: "WhatsApp",
  },
  {
    icon: <FaEnvelope />,
    url: "mailto:hridoy1407@gmail.com",
    label: "Gmail",
  },
  {
    icon: <SiLeetcode />,
    url: "https://leetcode.com/u/MozahidHridoy/",
    label: "LeetCode",
  },
];

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Format date and time nicely
  const formattedDate = dateTime.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = dateTime.toLocaleTimeString();

  return (
    <footer className="border-t border-white text-slate-300 py-8">
      <div className="w-full mx-auto px-6 flex flex-col items-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-4 md:gap-8 mb-4">
          {socialLinks.map(({ icon, url, label }, idx) => (
            <motion.a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.3, color: "#219EBC" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-3xl"
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* Date and Time */}
        <p className="text-sm font-medium tracking-wide">
          {formattedDate} — {formattedTime}
        </p>

        {/* Copyright */}
        <p className="text-xs text-center mt-2 select-none">
          &copy; {new Date().getFullYear()} All rights reserved by Mozahidul
          Islam Hridoy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
