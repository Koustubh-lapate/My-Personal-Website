'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    name: "Cattle Monitoring System",
    year: "2024",
    description: [
      "Developed a Cattle Monitoring System using MERN stack to detect lumpy disease in cows.",
      "Integrated real-time data collection on cow activity (steps count, temperature, milk production) via an API to assess health.",
      "Built a machine learning model for image classification to analyze cow images and predict lumpy disease.",
      "Implemented a continuous monitoring system, allowing farmers to upload images for daily health analysis over a period of time.",
      "Designed backend API to process data, perform AI-driven predictions, and send health alerts to the frontend.",
    ],
    github: "https://github.com/Koustubh-lapate/Cattle-Monitoring-System",
    gradient: "from-emerald-500/60 to-blue-500/60"
  },
  {
    name: "Admin Side Course Selling Website",
    year: "2023",
    description: [
      "Led the development of an Admin Side for a Course Selling Website using HTML, CSS, and React.js for an intuitive and responsive user interface.",
      "Implemented server-side functionalities with Node.js, Express.js, and MongoDB, enabling seamless course data management and real-time updates.",
      "Designed and implemented MongoDB database schemas for efficient storage and retrieval of course-related data.",
    ],
    github: "https://github.com/Koustubh-lapate/Course-Selling-Website-Full-Stack",
    gradient: "from-purple-500/60 to-emerald-500/60"
  },
  {
    name: "Optimised Admin Side Course Selling Website",
    year: "2023",
    description: [
      "Optimised the problem of re-rendering of unnecessary components in the website using the state management library, Recoil.js.",
      "This increased the overall speed, efficiency, and performance of the website.",
    ],
    github: "https://github.com/Koustubh-lapate/Course-Selling-Admin-Side-Website-Recoil",
    gradient: "from-blue-500/60 to-purple-500/60"
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-24 relative text-white" id="projects">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`group relative overflow-hidden rounded-3xl shadow-lg border border-gray-800 bg-gray-900 hover:shadow-xl transition-shadow duration-300`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
              />
              <div className="relative p-6 lg:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">{project.name}</h3>
                  <span className="text-gray-400 font-mono">{project.year}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {project.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
