import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-start text-left overflow-hidden text-white px-10 sm:px-16 lg:px-24"
    >

      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="px-4 py-1 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-sm mb-6 "
      >
        🚀 Ready to Innovate
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl"
      >
        A passionate{" "}
        <span className="text-purple-400 font-semibold">Full-Stack Developer</span>{" "}
        who loves building modern web apps, chatbots, and cloud-based solutions.
      </motion.p>

      {/* Skills Badges */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="mt-6 flex flex-wrap gap-3"
      >
        {["Python", "Django","Html & css", "React", "Vite" ].map((skill, i) => (

          <span
            key={i}
            className="px-4 py-1.5 text-sm rounded-lg bg-white/5 border border-gray-600/30 hover:bg-purple-600/20 hover:border-purple-500 transition"
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
          className="px-6 py-3 rounded-xl border border-gray-500/40 hover:border-purple-500 hover:text-purple-400 transition"
        >
          🚀 Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-gray-500/40 hover:border-purple-500 hover:text-purple-400 transition"
        >
          ✉️ Contact Me
        </a>
      </motion.div>

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="mt-10 flex gap-6"
      >
      </motion.div>
    </section>
  );
}
