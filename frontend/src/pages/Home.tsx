import PageTransition from '../components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="max-w-3xl">
          <div className="w-28 h-28 rounded-full bg-purple-600 mx-auto mb-8 flex items-center justify-center text-4xl">
            👨‍💻
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-purple-400">Your Name</span>
          </h1>
          <p className="text-gray-400 text-xl mb-4">
            Full Stack Developer · AI Enthusiast
          </p>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
            I build fast, scalable web apps using React, Python, Spring Boot and Node.js.
            Available for freelance work.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/projects"
              className="px-8 py-3 bg-purple-600 rounded-lg text-white font-medium hover:bg-purple-700 transition">
              View My Work
            </a>
            <a href="/contact"
              className="px-8 py-3 border border-gray-600 rounded-lg text-gray-300 hover:border-purple-500 hover:text-white transition">
              Hire Me
            </a>
          </div>
          <div className="flex gap-6 justify-center mt-10 text-gray-500 text-sm">
            <span>React</span><span>·</span>
            <span>Python</span><span>·</span>
            <span>Spring Boot</span><span>·</span>
            <span>Node.js</span><span>·</span>
            <span>PostgreSQL</span>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}