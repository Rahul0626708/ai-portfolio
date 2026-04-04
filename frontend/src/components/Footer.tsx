export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <div className="text-xl font-bold text-white mb-1">
            Your<span className="text-purple-400">Name</span>
          </div>
          <p className="text-gray-500 text-sm">Full Stack Developer · Available for hire</p>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="https://github.com/yourusername" target="_blank"
            className="hover:text-white transition">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank"
            className="hover:text-white transition">LinkedIn</a>
          <a href="https://freelancer.com/u/yourusername" target="_blank"
            className="hover:text-purple-400 transition">Freelancer</a>
          <a href="mailto:you@email.com"
            className="hover:text-white transition">Email</a>
        </div>

        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Your Name. Built with React + AI.
        </p>
      </div>
    </footer>
  )
}