"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";

function useScrollDirection() {
  const [dir, setDir] = useState("down");
  const lastY = useRef(typeof window !== "undefined" ? window.scrollY : 0);

  useEffect(() => {
    lastY.current = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = y - lastY.current;
          if (delta > 6) setDir("down");
          else if (delta < -6) setDir("up");
          lastY.current = y;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return dir;
}

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i + 0.06,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function Contact() {
  const formRef = useRef();
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(sectionRef, { amount: 0.35 });
  const scrollDir = useScrollDirection();

  useEffect(() => {
    if (inView && scrollDir === "down") {
      controls.start("visible");
    } else if (!inView) {
      controls.start("hidden");
    }
  }, [inView, scrollDir, controls]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_y22suor",
        "template_2al08u5",
        formRef.current,
        "G_qfdI4PxvrJU_5L5"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-16 transition-colors"
    >
      {/* Title */}
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={slideUp}
        custom={0}
        className="text-3xl md:text-4xl font-bold text-white mb-10"
      >
        ✉️ Contact Me
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="w-full max-w-md bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg space-y-6"
      >
        <motion.div initial="hidden" animate={controls} variants={slideUp} custom={1}>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </motion.div>

        <motion.div initial="hidden" animate={controls} variants={slideUp} custom={2}>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </motion.div>

        <motion.div initial="hidden" animate={controls} variants={slideUp} custom={3}>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Write your message..."
            rows="4"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </motion.div>

        <motion.div initial="hidden" animate={controls} variants={slideUp} custom={4}>
          <button
            type="submit"
            className="w-full py-2 md:py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.div>
      </motion.form>

      {/* Social Links */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={slideUp}
        custom={5}
        className="flex flex-wrap justify-center gap-4 mt-8"
      >
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mrtheenesh07@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          <Mail className="w-6 h-6 mr-2" /> Email
        </a>

        <a
          href="https://github.com/mrtheenesh"
          target="_blank"
          rel="noreferrer"
          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          <Github className="w-6 h-6 mr-2" /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/theenesh-mr"
          target="_blank"
          rel="noreferrer"
          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          <Linkedin className="w-6 h-6 mr-2" /> LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
