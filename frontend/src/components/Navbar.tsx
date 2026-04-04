import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="text-xl font-bold text-white">
          Your<span className="text-purple-400">Name</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-sm">
          {links.map(link => (
            <Link key={link.to} to={link.to}
              className={`transition ${pathname === link.to ? 'text-purple-400 font-medium' : 'text-gray-400 hover:text-white'}`}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hire me button */}
        <Link to="/contact"
          className="hidden md:block px-4 py-2 bg-purple-600 rounded-lg text-white text-sm hover:bg-purple-700 transition">
          Hire Me
        </Link>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden text-gray-400 hover:text-white">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <Link key={link.to} to={link.to}
              onClick={() => setOpen(false)}
              className={`text-sm transition ${pathname === link.to ? 'text-purple-400 font-medium' : 'text-gray-400 hover:text-white'}`}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}
            className="px-4 py-2 bg-purple-600 rounded-lg text-white text-sm text-center hover:bg-purple-700 transition">
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  )
}