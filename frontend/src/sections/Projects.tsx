'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    name: "Project One",
    year: "2024",
    description: [
      "Implemented responsive design principles",
      "Built with Next.js and TailwindCSS",
      "Integrated with external APIs",
    ],
    github: "https://github.com/YourUsername/project-one",
    live: "https://project-one.com",
    gradient: "from-emerald-500/20 to-blue-500/20"
  },
  {
    name: "Project Two",
    year: "2023",
    description: [
      "Real-time data visualization",
      "Advanced state management with Redux",
      "Custom animation system",
    ],
    github: "https://github.com/YourUsername/project-two",
    live: "https://project-two.com",
    gradient: "from-purple-500/20 to-emerald-500/20"
  },
  {
    name: "Project Three",
    year: "2023",
    description: [
      "Authentication system",
      "Database integration",
      "Performance optimization",
    ],
    github: "https://github.com/YourUsername/project-three",
    live: "https://project-three.com",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-24 relative" id="projects">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`group relative rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
              
              <div className="relative p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <span className="text-white/60">{project.year}</span>
                </div>

                <ul className="space-y-2 mb-8">
                  {project.description.map((point, i) => (
                    <li key={i} className="text-white/80 text-sm flex items-center gap-2">
                      <span className="size-1.5 bg-emerald-400 rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-emerald-400 transition-colors"
                  >
                    <FaGithub className="size-4" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-emerald-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="size-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};