import { useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import devAnimation from "../animations/Developers.json"; 

export default function Home() {
  const lottieRef = useRef();
  return (
    <section
      id="home"
      className="flex items-center min-h-screen px-6 md:px-16 lg:px-24 text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="px-4 py-1 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-sm w-fit"
          >
            👨‍💻 Coding the Future
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Turning Ideas into <span className="text-purple-400">Code</span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gray-300 text-lg max-w-lg"
          >
            I enjoy transforming complex problems into simple, elegant solutions
            using modern technologies and frameworks.
          </motion.p>

        {/* Skills */}
       <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="mt-6 flex flex-wrap gap-3"
      >
        {["Python", "Django", "SQL", "React", "javascript"].map((skill, i) => (
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
          className="mt-8 flex gap-4"
        >
          <a
            href="#portfolio"
            className="px-6 py-3 rounded-xl border border-gray-500/40 
                      hover:border-purple-500 hover:text-purple-400 transition"
          >
            🚀 Tech stack
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

        {/* RIGHT SIDE - LOTTIE ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: 400 }}  //start
          animate={{ opacity: 1, x: 200 }}  //end
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <div className="flex justify-center items-center">
          <Lottie
            lottieRef={lottieRef}
            animationData={devAnimation}
            loop={true}
            style={{ width: "400px", height: "600px" }}  
          />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
