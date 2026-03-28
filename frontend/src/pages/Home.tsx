export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm <span className="text-purple-400">Your Name</span></h1>
      <p className="text-gray-400 text-lg max-w-xl">Full stack developer building AI-powered web apps.</p>
      <a href="/contact" className="mt-8 px-6 py-3 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition">
        Hire Me
      </a>
    </section>
  )
}