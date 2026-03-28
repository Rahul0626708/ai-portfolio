import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">
          Your Name
        </Link>
        <div className="flex gap-6 text-sm text-gray-400">
          <Link to="/about" className="hover:text-white transition">About</Link>
          <Link to="/skills" className="hover:text-white transition">Skills</Link>
          <Link to="/projects" className="hover:text-white transition">Projects</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
        </div>
      </div>
    </nav>
  )
}