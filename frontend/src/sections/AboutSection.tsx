import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const timeline = [
  { year: '2024', title: 'Started freelancing', desc: 'Began taking freelance projects on Freelancer.com', icon: '🚀' },
  { year: '2023', title: 'Full stack developer', desc: 'Mastered React, Python, Spring Boot and Node.js', icon: '💻' },
  { year: '2022', title: 'Data Science intern', desc: 'Machine learning and analytics at Zidio Development', icon: '📊' },
  { year: '2021', title: 'Started coding', desc: 'Learned HTML, CSS, JavaScript and Python basics', icon: '🌱' },
]

const stats = [
  { value: '10+', label: 'Projects Built' },
  { value: '350+', label: 'DSA Problems' },
  { value: '4+', label: 'Tech Stacks' },
  { value: '100%', label: 'Dedication' },
]

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen px-6 py-28">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-2">
            About <span className="text-red-400">Me</span>
          </h2>
          <p className="text-gray-500 mb-16">The developer behind the code</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Photo side */}
          <ScrollReveal delay={0.1}>
            <div className="relative flex justify-center">
              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute w-72 h-72 rounded-full border border-red-900/40"
                style={{ borderStyle: 'dashed' }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute w-64 h-64 rounded-full border border-red-800/30"
              />

              {/* Photo container */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-red-900"
                style={{ boxShadow: '0 0 40px rgba(185,28,28,0.5), 0 0 80px rgba(185,28,28,0.2)' }}
              >
                {/* Replace src with your actual photo path */}
                <img
                  src="/photo.jpg"
                  alt="Rahul Prakash"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    if (target.parentElement) {
                      target.parentElement.innerHTML = '<div style="width:100%;height:100%;background:#1a0000;display:flex;align-items:center;justify-content:center;font-size:72px;">👨‍💻</div>'
                    }
                  }}
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 right-4 bg-red-950 border border-red-800 rounded-full px-3 py-1 text-xs text-red-300"
              >
                Available for hire
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-4 left-4 bg-gray-950 border border-gray-700 rounded-full px-3 py-1 text-xs text-gray-300"
              >
                Full Stack Dev
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Rahul <span className="text-red-400">Prakash</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4 text-lg">
                A passionate full stack developer from <span className="text-red-400">Noida, India</span> with a deep love for building AI-powered web applications that make a real difference.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                I specialize in React, Python, Spring Boot and Node.js. Currently pursuing B.Tech in Computer Science at College of Engineering, Roorkee while actively taking on freelance projects worldwide.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ borderColor: '#991b1b', backgroundColor: '#1a0000' }}
                    className="border border-gray-800 rounded-xl p-4 text-center transition-all duration-300"
                  >
                    <p className="text-2xl font-bold text-red-400">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#contact"
                  onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="px-6 py-3 bg-red-900 border border-red-700 rounded-xl text-white font-medium hover:bg-red-800 transition"
                  style={{ boxShadow: '0 0 20px rgba(185,28,28,0.3)' }}
                >
                  Hire Me
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="/resume.pdf"
                  download
                  className="px-6 py-3 border border-gray-700 rounded-xl text-gray-300 hover:border-red-600 hover:text-red-400 transition"
                >
                  Download CV
                </motion.a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <ScrollReveal delay={0.3}>
          <h3 className="text-2xl font-bold mb-10 text-center">
            My <span className="text-red-400">Journey</span>
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-900 via-red-800 to-transparent hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ borderColor: '#991b1b', backgroundColor: '#0d0000' }}
                      className="inline-block border border-gray-800 rounded-2xl p-5 transition-all duration-300 cursor-default"
                    >
                      <span className="text-2xl mb-2 block">{item.icon}</span>
                      <span className="text-xs text-red-400 font-medium">{item.year}</span>
                      <h4 className="text-white font-semibold mt-1 text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                    </motion.div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-red-700 border-2 border-red-500 flex-shrink-0 hidden md:block"
                    style={{ boxShadow: '0 0 10px #dc2626' }} />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}