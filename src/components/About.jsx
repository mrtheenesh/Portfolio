import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-16 via-gray-950 to-gray-900 text-white"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-4 text-center"
      >
        About Me
      </motion.h2>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-purple-300 mb-12 text-center"
      >
        ✨ Transforming ideas into digital experiences ✨
      </motion.p>

      {/* 2-column layout */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-4xl font-bold">
            Hello, I&apos;m{" "}
            <span className="text-purple-400">Theenesh M.R</span>
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I’m a passionate{" "}
            <span className="font-semibold text-blue-400">
              Full-Stack Developer
            </span>{" "}
            💻 with experience in{" "}
            <span className="italic">
              Python, Java, Web Technology, AI, IoT, Data Science
            </span>
            , and modern cloud solutions.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I love solving real-world problems and building scalable apps 🚀.
            My projects include an e-commerce platform, chatbots, automation
            tools, and cloud deployments.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition"
            >
              📄 Download CV
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-600/20 rounded-lg font-medium transition"
            >
              🔗 View Projects
            </a>
          </div>
        </motion.div>

        {/* Right profile image with glow */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-40"></div>
            <img
              src="/techstack/profile.jpg" // 🔹 replace with your image path
              alt=""
              className="relative w-64 h-64 object-cover border-4 border-gray-800 shadow-xl rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
