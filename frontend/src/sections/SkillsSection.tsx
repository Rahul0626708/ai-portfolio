import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const skillCategories = [
  {
    name: 'Frontend',
    color: 'bg-blue-500',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'Bootstrap', level: 75 },
    ]
  },
  {
    name: 'Backend',
    color: 'bg-green-500',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 90 },
      { name: 'FastAPI', level: 80 },
      { name: 'Spring Boot', level: 75 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 90 },
    ]
  },
  {
    name: 'Database & DevOps',
    color: 'bg-red-500',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'SQL', level: 80 },
      { name: 'Docker', level: 70 },
      { name: 'Git / GitHub', level: 90 },
    ]
  },
  {
    name: 'Data Science & AI',
    color: 'bg-amber-500',
    skills: [
      { name: 'Pandas / NumPy', level: 85 },
      { name: 'Scikit-learn', level: 75 },
      { name: 'Matplotlib / Seaborn', level: 80 },
      { name: 'Machine Learning', level: 70 },
      { name: 'Ollama / LLM', level: 65 },
    ]
  },
]

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen px-6 py-28">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-2">My <span className="text-red-400">Skills</span></h2>
          <p className="text-gray-500 mb-12">My technical toolkit</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((cat) => (
            <ScrollReveal key={cat.name}>
              <div>
                <h3 className="text-lg font-semibold mb-5 text-gray-200">{cat.name}</h3>
                {cat.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    index={i}
                  />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}