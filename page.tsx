'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Twitter, Menu, X, ChevronDown } from 'lucide-react'

const GlowingButton = ({ children, variant = "light", ...props }) => (
  <Button
    {...props}
    className={`relative overflow-hidden ${
      variant === "dark" 
        ? "bg-gray-800 text-white" 
        : "bg-transparent border-2 border-cyan-500 text-cyan-500"
    } px-6 py-3 rounded-full font-bold transition-all duration-300 hover:text-white group`}
  >
    <span className="relative z-10">{children}</span>
    <div className={`absolute inset-0 ${
      variant === "dark"
        ? "bg-gradient-to-r from-gray-700 to-gray-900"
        : "bg-gradient-to-r from-cyan-400 to-purple-500"
    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
  </Button>
)

const CoolCard = ({ children, ...props }) => (
  <Card
    {...props}
    className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-lg border-2 border-cyan-500/50 overflow-hidden group hover:border-cyan-400 transition-all duration-300"
  >
    {children}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </Card>
)

export default function UltraCoolPersonalWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 z-50 origin-left" style={{ scaleX }} />
      <header className="fixed top-0 left-0 right-0 z-40 bg-black bg-opacity-50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            JD
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className={`text-sm uppercase tracking-wider hover:text-cyan-400 transition-colors ${
                      activeSection === item.toLowerCase() ? 'text-cyan-400' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${item.toLowerCase()}`).scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-30 bg-black bg-opacity-90 md:hidden"
        >
          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="space-y-6 text-center">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-2xl font-bold hover:text-cyan-400 transition-colors"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-20"
          >
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">John Doe</h1>
            <p className="text-2xl mb-8 text-cyan-200">Freelance Web Developer & Designer</p>
            <GlowingButton asChild>
              <Link href="#contact">Get in Touch</Link>
            </GlowingButton>
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          >
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </motion.div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-lg opacity-75 animate-pulse" />
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="John Doe"
                  width={400}
                  height={400}
                  className="rounded-full border-4 border-cyan-500 shadow-lg relative z-10"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">About Me</h2>
                <p className="text-xl mb-6 text-cyan-100">
                  I'm a passionate web developer with 5 years of experience in creating beautiful, 
                  functional websites and applications. My expertise includes React, Node.js, and UI/UX design.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: (props) => (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    ), href: "https://github.com/johndoe", color: "text-white", bg: "bg-gray-800" },
                    { icon: (props) => (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ), href: "https://linkedin.com/in/johndoe", color: "text-white", bg: "bg-blue-600" },
                    { icon: (props) => (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
                        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
                      </svg>
                    ), href: "https://leetcode.com/johndoe", color: "text-white", bg: "bg-yellow-500" },
                    { icon: (props) => (
                      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    ), href: "https://twitter.com/johndoe", color: "text-white", bg: "bg-black" }
                  ].map((social, index) => (
                    <Button key={index} variant="outline" size="icon" asChild className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-[2px] hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-110">
                      <Link href={social.href} target="_blank" rel="noopener noreferrer">
                        <div className={`${social.bg} rounded-full p-2`}>
                          <social.icon className={`h-5 w-5 ${social.color}`} />
                        </div>
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Work Experience</h2>
            <div className="space-y-12">
              {[
                {
                  title: "Senior Web Developer",
                  company: "Freelance",
                  period: "2018 - Present",
                  description: [
                    "Developed and maintained over 30 websites for various clients",
                    "Specialized in React and Node.js based applications",
                    "Improved site performance by an average of 40% through optimization techniques"
                  ]
                },
                {
                  title: "UI/UX Designer",
                  company: "DesignCo",
                  period: "2016 - 2018",
                  description: [
                    "Created user-centered designs for web and mobile applications",
                    "Conducted user research and usability testing",
                    "Collaborated with development teams to ensure design implementation"
                  ]
                }
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <CoolCard>
                    <CardHeader>
                      <CardTitle className="text-2xl text-cyan-300">{job.title}</CardTitle>
                      <CardDescription className="text-purple-300">{job.company} | {job.period}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-cyan-100">
                        {job.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </CoolCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "E-commerce Platform",
                  description: "A full-stack e-commerce solution with real-time inventory management and payment integration.",
                  tech: "React, Node.js, MongoDB",
                  link: "https://github.com/johndoe/ecommerce-platform"
                },
                {
                  title: "Task Management App",
                  description: "A cross-platform mobile app for task management with real-time synchronization and push notifications.",
                  tech: "React Native, Firebase",
                  link: "https://github.com/johndoe/task-manager-app"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <CoolCard>
                    <CardHeader>
                      <CardTitle className="text-2xl text-cyan-300">{project.title}</CardTitle>
                      <CardDescription className="text-purple-300">{project.tech}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-cyan-100">{project.description}</p>
                      <GlowingButton asChild variant="dark">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                        </Link>
                      </GlowingButton>
                    </CardContent>
                  </CoolCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Skills & Expertise</h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {[
                "JavaScript", "React", "Node.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS",
                "MongoDB", "PostgreSQL", "Git", "UI/UX Design", "Figma", "Responsive Design",
                "RESTful APIs", "GraphQL"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Badge variant="secondary" className="text-lg py-2 px-4 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 hover:from-cyan-400/50 hover:to-purple-400/50 transition-all duration-300 transform hover:scale-105">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Get in Touch</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <CoolCard className="max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <p className="text-center mb-6 text-cyan-100">
                    I'm always open to new opportunities and collaborations. Feel free to reach out!
                  </p>
                  <div className="flex flex-col space-y-4 items-center">
                    <GlowingButton asChild className="w-full max-w-md" variant="dark">
                      <Link href="mailto:john@example.com">
                        <Mail className="mr-2 h-4 w-4" /> Email Me
                      </Link>
                    </GlowingButton>
                    <GlowingButton asChild className="w-full max-w-md" variant="dark">
                      <Link href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
                      </Link>
                    </GlowingButton>
                  </div>
                </CardContent>
              </CoolCard>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-black bg-opacity-50 py-8">
        <div className="container mx-auto px-4 text-center text-cyan-200">
          {/* Footer content removed */}
        </div>
      </footer>
    </div>
  )
}