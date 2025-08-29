import { useState, useEffect } from "react";
import ThemeToggle from "../xtra/ThemeToggle";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  // 🔥 Scroll Spy (tracks which section is visible)
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id); // set active section
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // 🔽 Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id); // keep underline
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50 backdrop-blur-md bg-opacity-80"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left side - Logo / Name */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Theenesh M.R
        </motion.h1>

        {/* Right side - Nav Links */}
        <ul className="flex space-x-6">
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="relative group"
            >
              {/* No href → prevents # in URL */}
              <button
                onClick={() => handleScroll(link.id)}
                className={`transition ${
                  active === link.id ? "text-blue-400" : "hover:text-blue-400"
                }`}
              > 
                {link.name}
              </button>

              {/* Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 
                  ${
                    active === link.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </motion.li>
          ))}

          <li><ThemeToggle /></li>

        </ul>
      </div>
    </motion.nav>
  );
}
