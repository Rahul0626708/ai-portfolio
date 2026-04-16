import { motion } from 'framer-motion'
import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const planets = [
  { name: 'React.js', color: '#60a5fa', ring: 1, speed: 4, size: 28, desc: 'Frontend UI' },
  { name: 'Python', color: '#f59e0b', ring: 1, speed: 6, size: 24, desc: 'Backend & AI' },
  { name: 'Node.js', color: '#22c55e', ring: 2, speed: 8, size: 26, desc: 'Server side' },
  { name: 'Spring Boot', color: '#f97316', ring: 2, speed: 11, size: 22, desc: 'Java API' },
  { name: 'FastAPI', color: '#10b981', ring: 3, speed: 14, size: 24, desc: 'Python API' },
  { name: 'PostgreSQL', color: '#38bdf8', ring: 3, speed: 17, size: 22, desc: 'Database' },
  { name: 'Docker', color: '#818cf8', ring: 4, speed: 20, size: 20, desc: 'DevOps' },
  { name: 'TypeScript', color: '#a78bfa', ring: 4, speed: 24, size: 20, desc: 'Typed JS' },
  { name: 'MongoDB', color: '#86efac', ring: 5, speed: 28, size: 18, desc: 'NoSQL DB' },
  { name: 'Scikit-learn', color: '#fca5a5', ring: 5, speed: 32, size: 18, desc: 'ML Library' },
  { name: 'Pandas', color: '#fdba74', ring: 6, speed: 36, size: 16, desc: 'Data Science' },
  { name: 'Ollama AI', color: '#ef4444', ring: 6, speed: 40, size: 20, desc: 'Local LLM' },
]

const ringRadii = [90, 140, 190, 240, 290, 340]

export default function SkillsSection() {
  const [active, setActive] = useState<string | null>(null)
  const activePlanet = planets.find(p => p.name === active)

  return (
    <section id="skills" className="min-h-screen px-6 py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-2 text-center">
            Tech <span className="text-red-400">Solar System</span>
          </h2>
          <p className="text-gray-500 mb-4 text-center">Click any planet to explore</p>
        </ScrollReveal>

        {/* Solar system canvas */}
        <div className="relative flex items-center justify-center" style={{ height: '720px' }}>

          {/* Orbit rings */}
          {ringRadii.map((r, i) => (
            <div key={i} className="absolute rounded-full border border-white/5"
              style={{ width: r * 2, height: r * 2 }} />
          ))}

          {/* Sun */}
          <motion.div
            animate={{ boxShadow: ['0 0 30px #dc2626, 0 0 80px #991b1b', '0 0 60px #ef4444, 0 0 120px #dc2626', '0 0 30px #dc2626, 0 0 80px #991b1b'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute w-20 h-20 rounded-full bg-red-900 border-2 border-red-600 flex flex-col items-center justify-center text-center z-20 cursor-pointer"
            onClick={() => setActive(null)}
          >
            <span className="text-xs font-bold text-red-200 leading-tight">RAHUL</span>
            <span className="text-xs font-bold text-red-200 leading-tight">PRAKASH</span>
          </motion.div>

          {/* Planets */}
          {planets.map((planet) => {
            const radius = ringRadii[planet.ring - 1]
            return (
              <motion.div
                key={planet.name}
                className="absolute"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                  top: '50%',
                  left: '50%',
                  marginTop: -radius,
                  marginLeft: -radius,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: planet.speed, repeat: Infinity, ease: 'linear' }}
              >
                <motion.div
                  className="absolute cursor-pointer flex items-center justify-center rounded-full border-2 z-10"
                  style={{
                    width: planet.size,
                    height: planet.size,
                    top: 0,
                    left: '50%',
                    marginLeft: -planet.size / 2,
                    marginTop: -planet.size / 2,
                    background: planet.color,
                    borderColor: active === planet.name ? '#dc2626' : planet.color,
                    boxShadow: active === planet.name ? `0 0 20px ${planet.color}` : `0 0 8px ${planet.color}60`,
                  }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: planet.speed, repeat: Infinity, ease: 'linear' }}
                  whileHover={{ scale: 1.8 }}
                  onClick={() => setActive(active === planet.name ? null : planet.name)}
                >
                  <span className="text-white font-bold" style={{ fontSize: Math.max(7, planet.size / 3.5) }}>
                    {planet.name.slice(0, 2)}
                  </span>
                </motion.div>
              </motion.div>
            )
          })}

          {/* Info tooltip */}
          {activePlanet && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gray-950 border border-red-800 rounded-2xl px-8 py-4 text-center z-30 min-w-48"
            >
              <div className="w-3 h-3 rounded-full mx-auto mb-2" style={{ background: activePlanet.color }} />
              <p className="text-white font-bold text-lg">{activePlanet.name}</p>
              <p className="text-gray-400 text-sm">{activePlanet.desc}</p>
            </motion.div>
          )}
        </div>

        {/* Tech grid below */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {planets.map((planet, i) => (
              <motion.div
                key={planet.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ borderColor: '#991b1b', backgroundColor: '#1a0000' }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-800 bg-black cursor-default transition-all duration-200 group"
                onClick={() => setActive(planet.name)}
              >
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: planet.color }} />
                <div>
                  <p className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">{planet.name}</p>
                  <p className="text-xs text-gray-600 group-hover:text-red-400 transition-colors">{planet.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}