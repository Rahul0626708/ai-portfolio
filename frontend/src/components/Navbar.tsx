import { useState } from 'react'

const links = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
]

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => scrollTo('home')} className="text-xl font-bold text-white">
          RAHUL<span className="text-red-500">PRAKASH</span>
        </button>

        <div className="hidden md:flex gap-6 text-sm">
          {links.map(link => (
            <button key={link.to}
              onClick={() => scrollTo(link.to)}
              className="text-gray-400 hover:text-red-400 transition">
              {link.label}
            </button>
          ))}
        </div>

        <button onClick={() => scrollTo('contact')}
          className="hidden md:block px-4 py-2 bg-red-800 rounded-lg text-white text-sm hover:bg-red-900 transition">
          Hire Me
        </button>

        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-400">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <button key={link.to}
              onClick={() => { scrollTo(link.to); setOpen(false) }}
              className="text-sm text-gray-400 hover:text-red-400 text-left transition">
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}