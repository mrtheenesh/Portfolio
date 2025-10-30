import { useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import devAnimation from "../animations/Developers.json";

export default function Home() {
  const lottieRef = useRef();

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 py-6 text-center md:text-left text-white"
    >
      {/* LEFT SIDE */}
      <div className="flex-1 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="px-4 py-1 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-sm w-fit mx-auto md:mx-0"
        >
          👨‍💻 Coding the Future
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
        >
          Turning Ideas into <span className="text-purple-400">Code</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-300 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0"
        >
          I enjoy transforming complex problems into simple, elegant solutions
          using modern technologies and frameworks.
        </motion.p>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-6 flex flex-wrap justify-center md:justify-start gap-3"
        >
          {["Python", "Django", "SQL", "React", "JavaScript"].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-1.5 text-sm rounded-lg bg-white/5 border border-gray-600/30 
                         hover:bg-purple-600/20 hover:border-purple-500 transition"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
        >
          <a
            href="#portfolio"
            className="px-6 py-3 rounded-xl border border-gray-500/40 
                      hover:border-purple-500 hover:text-purple-400 transition"
          >
            🚀 Tech Stack
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-gray-500/40 
                      hover:border-purple-500 hover:text-purple-400 transition"
          >
            ✉️ Contact Me
          </a>
        </motion.div>
      </div>

      {/* RIGHT SIDE - LOTTIE (Desktop Only) */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 mt-10 md:mt-0 flex justify-center"
      >
        <div className="hidden md:block">
          <Lottie
            lottieRef={lottieRef}
            animationData={devAnimation}
            loop={true}
            className="w-40 sm:w-56 md:w-72 lg:w-80 mx-auto md:mx-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
