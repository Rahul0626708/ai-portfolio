import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const categories = [
  {
    name: 'Frontend',
    techs: [
      { name: 'React.js', color: '#60a5fa' },
      { name: 'TypeScript', color: '#3b82f6' },
      { name: 'JavaScript', color: '#818cf8' },
      { name: 'Tailwind CSS', color: '#06b6d4' },
      { name: 'HTML5 / CSS3', color: '#f97316' },
      { name: 'Bootstrap', color: '#7c3aed' },
    ]
  },
  {
    name: 'Backend',
    techs: [
      { name: 'Node.js', color: '#22c55e' },
      { name: 'Python', color: '#3b82f6' },
      { name: 'FastAPI', color: '#10b981' },
      { name: 'Spring Boot', color: '#f59e0b' },
      { name: 'Express.js', color: '#6b7280' },
      { name: 'REST APIs', color: '#8b5cf6' },
    ]
  },
  {
    name: 'Database & DevOps',
    techs: [
      { name: 'PostgreSQL', color: '#60a5fa' },
      { name: 'MongoDB', color: '#22c55e' },
      { name: 'SQL', color: '#f59e0b' },
      { name: 'Docker', color: '#38bdf8' },
      { name: 'Git / GitHub', color: '#f97316' },
    ]
  },
  {
    name: 'Data Science & AI',
    techs: [
      { name: 'Pandas / NumPy', color: '#f59e0b' },
      { name: 'Scikit-learn', color: '#f97316' },
      { name: 'Matplotlib / Seaborn', color: '#a78bfa' },
      { name: 'Machine Learning', color: '#ec4899' },
      { name: 'Ollama / LLM', color: '#ef4444' },
    ]
  },
]

function TechBox({ name, color, index }: { name: string; color: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="group flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-800 bg-black cursor-default transition-colors duration-200 hover:bg-red-950 hover:border-red-800"
    >
      <div
        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
        style={{ background: color }}
      />
      <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen px-6 py-28">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-2">
            Tech <span className="text-red-400">Universe</span>
          </h2>
          <p className="text-gray-500 mb-16">My technical galaxy</p>
        </ScrollReveal>

        {/* Sun — center identity */}
        <ScrollReveal delay={0.1}>
          <div className="flex justify-center mb-16">
            <motion.div
              animate={{ boxShadow: ['0 0 20px #991b1b', '0 0 50px #dc2626', '0 0 20px #991b1b'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 rounded-full bg-red-900 border-2 border-red-700 flex flex-col items-center justify-center text-center"
            >
              <span className="text-sm font-bold text-red-200">Rahul</span>
              <span className="text-sm font-bold text-red-200">Prakash</span>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <ScrollReveal key={cat.name} delay={ci * 0.1}>
              <div>
                <p className="text-xs font-medium text-gray-600 uppercase tracking-widest mb-4">
                  {cat.name}
                </p>
                <div className="flex flex-wrap gap-3">
                  {cat.techs.map((tech, i) => (
                    <TechBox
                      key={tech.name}
                      name={tech.name}
                      color={tech.color}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}