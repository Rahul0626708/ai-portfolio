import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ParticleBackground from '../components/ParticleBackground'
import PageTransition from '../components/PageTransition'

const roles = ['Full Stack Developer', 'AI Enthusiast', 'Freelancer', 'Problem Solver']

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1500)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((roleIndex + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  return (
    <PageTransition>
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <ParticleBackground />

        <div className="relative z-10 max-w-3xl">

          {/* Glowing floating avatar */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-auto mb-8 w-32 h-32 rounded-full bg-red-800 flex items-center justify-center text-5xl"
            style={{ boxShadow: '0 0 40px rgba(185,28,28,0.6)' }}
          >
            👨‍💻
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            Hi, I'm <span className="text-red-400">Rahul Prakash</span>
          </motion.h1>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-400 mb-4 h-8"
          >
            <span className="text-red-300">{displayed}</span>
            <span className="animate-pulse text-red-400">|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-gray-500 text-lg max-w-xl mx-auto mb-10"
          >
            I build fast, scalable web apps using React, Python, Spring Boot and Node.js.
            Available for freelance work.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a href="/projects"
              className="px-8 py-3 bg-red-600 rounded-lg text-white font-medium hover:bg-red-700 transition">
              View My Work
            </a>
            <a href="/contact"
              className="px-8 py-3 border border-gray-600 rounded-lg text-gray-300 hover:border-red-500 hover:text-white transition">
              Hire Me
            </a>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex gap-3 justify-center flex-wrap mt-10"
          >
            {['React', 'Python', 'Spring Boot', 'Node.js', 'Docker', 'PostgreSQL'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-400 text-sm hover:border-red-500 hover:text-red-300 transition"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}