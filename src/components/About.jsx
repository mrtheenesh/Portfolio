"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 600,  // speed of animation
      once: false,    // allow replay when scrolling down again
      mirror: false,  // 👈 important: no animation on scroll up
    });
  }, []);

  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center md:text-left text-white"
    >
      {/* Heading */}
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold mb-4 text-center"
      >
        About Me
      </h2>

      {/* Tagline */}
      <p
        data-aos="fade-up"
        data-aos-delay="150"
        className="text-lg text-purple-300 mb-12 text-center"
      >
        🚀 Crafting solutions through code, data, and innovation 🚀
      </p>

      {/* 2-column layout */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        {/* Left content */}
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="250">
          <h3 className="text-4xl font-bold">
            Hi, I&apos;m{" "}
            <span className="text-purple-400">Theenesh M.R</span>
          </h3>

          <p className="text-gray-300 leading-relaxed">
            I’m a{" "}
            <span className="font-semibold text-blue-400">
              B.Sc. Computer Science graduate (2022–2025)
            </span>{" "}
            seeking an entry-level role in IT as a Full Stack Developer. Skilled
            in{" "}
            <span className="italic">
              Python, Django, HTML, CSS, Sql, JavaScript, and React
            </span>
            , with hands-on experience through academic and self-learning
            projects.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Eager to grow in a professional environment and apply my problem
            solving and teamwork skills to support the team and deliver results.
          </p>
 
          {/* Buttons */}
          <div className="flex space-x-4 pt-4" data-aos="fade-up" data-aos-delay="350">
            <a
              href="/techstack/Theenesh_MR_Software_Developer_Resume.pdf"
              download="Theenesh_MR_Software_Developer_Resume.pdf"
              className="px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-600/20 rounded-lg font-medium transition"
            >
              📄 Download Resume
            </a>
            <a
              href="#skills"
              className="px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-600/20 rounded-lg font-medium transition"
            >
              🔗 View Skills
            </a>
          </div>
        </div>

        {/* Right profile image */}
        <div
          className="flex justify-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="relative transform -translate-y-4 translate-x-4 group">
            <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-20 group-hover:bg-white group-hover:opacity-20 transition duration-500 pointer-events-none"></div>

            <img
              src="/techstack/profile.jpg"
              alt="Profile Picture"
              className="relative w-64 h-64 object-cover border-3 border-gray-800 shadow-xl rounded-2xl group-hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] transition duration-500 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}