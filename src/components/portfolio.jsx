"use client";
import React, { useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import AOS from "aos";
import "aos/dist/aos.css";

// ================== Tech Stack Data ==================
const techStack = [
  { name: "HTML", img: "/techstack/html.svg" },
  { name: "CSS", img: "/techstack/css.svg" },
  { name: "JavaScript", img: "/techstack/javascript.svg" },
  { name: "Python", img: "/techstack/python.svg" },
  { name: "Django", img: "/techstack/django.svg" },
  { name: "ReactJS", img: "/techstack/reactjs.svg" },
  { name: "SQL", img: "/techstack/Sql.svg" },
  { name: "PostgreSQL", img: "/techstack/postgresql.svg" },
  { name: "Tailwind", img: "/techstack/tailwind.svg" },
  { name: "Git", img: "/techstack/Git_logo.svg" },
  { name: "Github", img: "/techstack/GitHub_logo.svg" },
  { name: "Vercel", img: "/techstack/vercel.svg" },
];

// ================== Projects Data ==================
const projects = [
  { title: "E-Commerce Website", desc: "Full-stack MVT project", img: "/techstack/django_logo.svg" },
  { title: "Portfolio Website", desc: "Personal React portfolio", img: "/techstack/portfolio.svg" },
  { title: "REST API + React", desc: "Basic full-stack integration", img: "/techstack/rest_api.svg" },
  { title: "Web Scraper", desc: "Scraping game data", img: "/techstack/selenium.svg" },
  { title: "Mail Server Setup", desc: "AWS EC2 & hMail configuration", img: "/techstack/awsec2_logo.svg" },
  { title: "AI Chatbot", desc: "Local RAG model using FAISS", img: "/techstack/AI_chatbot.svg" }
];
// ========================================================================

export default function Showcase() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: false, // replay animations
    });
  }, []);

  // Re-run AOS when tab switches
  const handleTabChange = () => {
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  };

  return (
    <section id="portfolio" className="text-white min-h-screen relative pt-20">
      <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        🚀 Portfolio Showcase
      </h2>

      <Tabs.Root
        defaultValue="tech"
        className="w-full max-w-[1000px] mx-auto relative z-10"
        onValueChange={handleTabChange}
      >
        {/* ====== Tabs Header ====== */}
        <Tabs.List className="grid grid-cols-2 bg-[#1a1a1a] rounded-md p-1 w-full mb-10">
          <Tabs.Trigger
            value="tech"
            className="rounded-md px-4 py-2 text-sm font-medium text-gray-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-sm focus:outline-none"
          >
            Tech Stack
          </Tabs.Trigger>
          <Tabs.Trigger
            value="projects"
            className="rounded-md px-4 py-2 text-sm font-medium text-gray-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-sm focus:outline-none"
          >
            Projects
          </Tabs.Trigger>
        </Tabs.List>

        {/* ====== Tech Stack Content ====== */}
        <Tabs.Content value="tech">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative group"
              >
                {/* Neon Glow - shows only on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-200 via-pink-300 to-blue-500 opacity-0 group-hover:opacity-30 blur-xl transition duration-500"></div>

                {/* Card */}
                <div className="relative p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 flex flex-col items-center justify-center gap-3 shadow-lg cursor-pointer transition-transform duration-300 ease-out hover:scale-110">
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="w-16 h-16 object-contain mb-3"
                  />
                  <p className="text-sm font-medium">{tech.name}</p>
                </div>
              </div>
            ))}
          </div>
        </Tabs.Content>

        {/* ====== Projects Content ====== */}
        <Tabs.Content value="projects">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
            {projects.map((project, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                className="relative group"
              >
                {/* Neon Glow Background */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-200 via-pink-300 to-blue-500 opacity-0 group-hover:opacity-30 blur-xl transition duration-500"></div>

                {/* Card */}
                <div className="relative p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-transform duration-300 ease-in-out flex flex-col items-center gap-2 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl h-full">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="rounded-lg mb-4 h-20 object-cover"
                  />
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-gray-300 text-sm text-center flex-grow">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
}
