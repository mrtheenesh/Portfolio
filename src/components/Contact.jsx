import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
  <section
    id="contact"
    className="relative min-h-screen flex flex-col justify-center items-center px-6 py-16 transition-colors"
  >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-10"
      >
        Contact Me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            placeholder="Write your message..."
            rows="4"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <div className="flex gap-6 mt-8">
        <a
          href="mailto:mrtheenesh07@gmail.com"
          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          <Mail className="w-6 h-6 mr-2" /> Email
        </a>
        <a
          href="https://github.com/mrtheenesh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          <Github className="w-6 h-6 mr-2" /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          <Linkedin className="w-6 h-6 mr-2" /> LinkedIn
        </a>
      </div>
    </section>
  );
}
