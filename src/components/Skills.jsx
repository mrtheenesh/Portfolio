import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Database, Cloud } from "lucide-react";

const skills = [
  { name: "Django", icon: <Code />, level: 60 },
  { name: "Python", icon: <Code />, level: 65 },
  { name: "HTML & CSS", icon: <Code />, level: 70 },
  { name: "React & Tailwind", icon: <Code />, level: 50 },
  { name: "JavaScript", icon: <Code />, level: 50 },
  { name: "Git & Github", icon: <Code />, level: 40 },
  { name: "SQL & PostgreSQL", icon: <Database />, level: 55 },
  { name: "Vercel (Deployment)", icon: <Cloud />, level: 45 },
  { name: "Cloud (EC2, Google Cloud)", icon: <Cloud />, level: 30 },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 600, // animation speed
      once: false,   // replay when scrolling back
      easing: "ease-in-out",
    });
  }, []);

  // Optional: re-run AOS on tab switch (like your example)
  const handleTabChange = () => {
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 transition-colors"
    >
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-10"
      >
        Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">

        {skills.map((skill, index) => (
          <div
            key={skill.name}
            data-aos="fade-up"
            data-aos-delay={index * 100} // stagger animation
            className="relative group cursor-pointer"
          >
            {/* Neon Glow - only visible on hover */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400
                        opacity-0 group-hover:opacity-40 blur-xl transition duration-500"
            ></div>

            {/* Card Content */}
            <div className="relative p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md transition transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-800/50">
              <div className="flex items-center space-x-3 mb-4 text-blue-600 dark:text-blue-400">
                {skill.icon}
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>

              {/* Progress bar (static, no animation on refresh) */}
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-blue-600 dark:bg-blue-400 h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {skill.level}% proficiency
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
