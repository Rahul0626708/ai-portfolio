import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const roles = ['Full Stack Developer', 'AI Enthusiast', 'Freelancer', 'Problem Solver']

export default function HeroSection() {
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

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="mx-auto mb-8 w-32 h-32 rounded-full bg-red-800 flex items-center justify-center text-5xl"
        style={{ boxShadow: '0 0 40px rgba(185,28,28,0.8)' }}
      >
        👨‍💻
      </motion.div>

      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }} className="text-5xl font-bold mb-4">
        Hi, I'm <span className="text-red-400">Rahul Prakash</span>
      </motion.h1>

      <div className="text-xl text-gray-400 mb-4 h-8">
        <span className="text-red-300">{displayed}</span>
        <span className="animate-pulse text-red-400">|</span>
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
        I build fast, scalable web apps using React, Python, Spring Boot and Node.js.
        Available for freelance work.
      </motion.p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        className="flex gap-4 justify-center flex-wrap">
        <button onClick={() => scrollTo('projects')}
          className="px-8 py-3 bg-red-800 rounded-lg text-white font-medium hover:bg-red-900 transition">
          View My Work
        </button>
        <button onClick={() => scrollTo('contact')}
          className="px-8 py-3 border border-gray-600 rounded-lg text-gray-300 hover:border-red-500 hover:text-white transition">
          Hire Me
        </button>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
        className="flex gap-3 justify-center flex-wrap mt-10">
        {['React', 'Python', 'Spring Boot', 'Node.js', 'Docker', 'PostgreSQL'].map((tech, i) => (
          <motion.span key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 + i * 0.1 }}
            className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-full text-gray-400 text-sm hover:border-red-500 hover:text-red-300 transition">
            {tech}
          </motion.span>
        ))}
      </motion.div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
        className="mt-16 text-gray-600 text-sm flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => scrollTo('about')}>
        <span>scroll down</span>
        <span className="text-xl">↓</span>
      </motion.div>
    </section>
  )
}
