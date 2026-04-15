import ScrollReveal from '../components/ScrollReveal'

const timeline = [
  { year: '2024', title: 'Started freelancing', desc: 'Began taking freelance projects on Freelancer.com' },
  { year: '2023', title: 'Full stack developer', desc: 'Mastered React, Python, Spring Boot and Node.js' },
  { year: '2022', title: 'Backend development', desc: 'Deep dived into Java, Spring Boot and PostgreSQL' },
  { year: '2021', title: 'Started coding', desc: 'Learned HTML, CSS, JavaScript and Python basics' },
]

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen px-6 py-28">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-2">About <span className="text-red-400">Me</span></h2>
          <p className="text-gray-500 mb-12">Who I am and my journey</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
            <div className="w-40 h-40 rounded-full bg-red-800 flex items-center justify-center text-6xl flex-shrink-0"
              style={{ boxShadow: '0 0 30px rgba(185,28,28,0.6)' }}>
              👨‍💻
            </div>
            <div>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                I'm a full stack developer with experience building AI-powered web applications.
                I specialize in React, Python, Spring Boot and Node.js and love turning complex
                problems into clean, simple solutions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Currently available for freelance projects. I work with clients worldwide
                and deliver fast, scalable, production-ready applications.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <h3 className="text-2xl font-bold mb-8">My <span className="text-red-400">Journey</span></h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-red-900"></div>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="flex gap-6 pl-12 relative">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-red-800 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {item.year.slice(2)}
                  </div>
                  <div>
                    <span className="text-xs text-red-400 font-medium">{item.year}</span>
                    <h4 className="text-white font-semibold mt-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}